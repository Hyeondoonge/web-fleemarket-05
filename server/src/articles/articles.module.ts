import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article, Category } from './entities';
import { ArticlesController, CategoryController } from './controllers';
import { ArticlesService, CategoryService } from './providers';
import { RegionsModule } from 'src/regions/regions.module';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Article]), RegionsModule],
  providers: [CategoryService, ArticlesService],
  controllers: [CategoryController, ArticlesController],
})
export class ArticlesModule {}
