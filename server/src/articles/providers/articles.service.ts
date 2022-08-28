import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PagintaionDto } from 'src/common/dtos';
import { CustomException } from 'src/common/exceptions';
import { ErrorCode } from 'src/common/exceptions/enums';
import { RegionsService } from 'src/regions/regions.service';
import { User } from 'src/users/entities';
import { Article } from '../entities';
import { CategoryService } from './category.service';
import { FindOptionsRelations, FindOptionsWhere, Repository } from 'typeorm';
import {
  CreateArticleDto,
  GetArticlesDto,
  UpdateArticleDto,
  UpdateArticleStatusDto,
} from '../dtos';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly articlesRepository: Repository<Article>,
    private readonly categoryService: CategoryService,
    private readonly regionsService: RegionsService
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

  async getArticlesWithPagination(
    { page, per }: PagintaionDto,
    whereOptions: FindOptionsWhere<Article> | FindOptionsWhere<Article>[]
  ) {
    const [results, totalCount] = await this.articlesRepository.findAndCount({
      where: whereOptions,
      relations: {
        likeUsers: true,
        region: true,
      },
      skip: (page - 1) * per,
      take: per,
      order: {
        id: 'DESC',
      },
    });
    const articles = results.map(({ likeUsers, ...results }) => ({
      ...results,
      likeCount: likeUsers.length,
    }));
    return { articles, totalCount };
  }

  async getArticles({ page, per, categoryId, regionId }: GetArticlesDto) {
    const articles = await this.getArticlesWithPagination(
      { page, per },
      {
        category: {
          id: categoryId,
        },
        region: {
          id: regionId,
        },
      }
    );
    return articles;
  }

  async getArticle(userId: string, articleId: number) {
    const { likeUsers, ...article } = await this.findByIdOrFail(articleId, {
      likeUsers: true,
      region: true,
    });
    await this.addViewCount(articleId, article.viewCount);
    const isLike = likeUsers.some(({ id }) => id === userId);
    return {
      ...article,
      likeCount: likeUsers.length,
      isLike,
    };
  }

  async createArticle(
    seller: User,
    { categoryId, regionId, ...createArticleDto }: CreateArticleDto
  ) {
    const isSameRegion = seller.regions.find(({ id }) => id === regionId);
    if (!isSameRegion) {
      throw new CustomException(HttpStatus.BAD_REQUEST, ErrorCode.AR002);
    }
    const category = await this.categoryService.findByIdOrFail(categoryId);
    const region = await this.regionsService.findRegionByIdOrFail(regionId);
    const newArticle = await this.articlesRepository.save(
      this.articlesRepository.create({
        ...createArticleDto,
        category,
        region,
        seller: {
          id: seller.id,
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
