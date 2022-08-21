import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomException } from 'src/exceptions';
import { ErrorCode } from 'src/exceptions/enums';
import { User } from 'src/users/entities';
import { FindOptionsRelations, Repository } from 'typeorm';
import {
  CreateArticleDto,
  GetArticlesDto,
  UpdateArticleDto,
  UpdateArticleStatusDto,
} from '../dtos';
import { Article } from '../entities';
import { CategoryService } from './category.service';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly articlesRepository: Repository<Article>,
    private readonly categoryService: CategoryService
  ) {}

  async addViewCount(articleId: number, viewCount: number) {
    await this.articlesRepository.update(articleId, {
      viewCount: viewCount + 1,
    });
  }

  async findByIdOrFail(articleId: number, relations?: FindOptionsRelations<Article>) {
    const article = await this.articlesRepository.findOne({
      where: {
        id: articleId,
      },
      relations,
    });
    if (!article) {
      throw new CustomException(HttpStatus.NOT_FOUND, ErrorCode.AR001);
    }
    return article;
  }

  async getArticles({ page, per, category }: GetArticlesDto) {
    const [results, totalCount] = await this.articlesRepository.findAndCount({
      where: {
        category: {
          id: category,
        },
      },
      relations: {
        likeUsers: true,
      },
      skip: (page - 1) * per,
      take: per,
    });
    const articles = results.map(({ likeUsers, ...results }) => ({
      ...results,
      likeCount: likeUsers.length,
    }));
    return { articles, totalCount };
  }

  async getArticle(articleId: number) {
    const { likeUsers, ...article } = await this.findByIdOrFail(articleId, {
      likeUsers: true,
    });
    await this.addViewCount(articleId, article.viewCount);
    return {
      ...article,
      likeCount: likeUsers.length,
    };
  }

  async createArticle(sellerId: string, { categoryId, ...createArticleDto }: CreateArticleDto) {
    const category = await this.categoryService.findByIdOrFail(categoryId);
    const newArticle = await this.articlesRepository.save(
      this.articlesRepository.create({
        ...createArticleDto,
        category,
        seller: {
          id: sellerId,
        },
      })
    );
    return newArticle;
  }

  async updateArticleStatus(
    sellerId: string,
    articleId: number,
    { status }: UpdateArticleStatusDto
  ) {
    const article = await this.findByIdOrFail(articleId);
    if (article.seller.id !== sellerId) {
      throw new CustomException(HttpStatus.FORBIDDEN, ErrorCode.F001);
    }
    await this.articlesRepository.update(articleId, { status });
  }

  async updateArticle(
    sellerId: string,
    articleId: number,
    { categoryId, ...updateArticleDto }: UpdateArticleDto
  ) {
    const article = await this.findByIdOrFail(articleId);
    if (article.seller.id !== sellerId) {
      throw new CustomException(HttpStatus.FORBIDDEN, ErrorCode.F001);
    }
    let category;
    if (categoryId) {
      category = await this.categoryService.findByIdOrFail(categoryId);
    }
    await this.articlesRepository.update(articleId, { ...article, ...updateArticleDto, category });
  }

  async deleteArticle(sellerId: string, articleId: number) {
    const article = await this.findByIdOrFail(articleId);
    if (article.seller.id !== sellerId) {
      throw new CustomException(HttpStatus.FORBIDDEN, ErrorCode.F001);
    }
    await this.articlesRepository.softDelete({ id: articleId });
  }

  async likeArticle(user: User, articleId: number) {
    const article = await this.findByIdOrFail(articleId, {
      likeUsers: true,
    });
    article.likeUsers = [...article.likeUsers, user];
    await this.articlesRepository.save(article);
  }

  async dislikeArticle(user: User, articleId: number) {
    const article = await this.findByIdOrFail(articleId, {
      likeUsers: true,
    });
    article.likeUsers = article.likeUsers.filter((likeUser) => likeUser.id !== user.id);
    await this.articlesRepository.save(article);
  }
}
