import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article, Category } from './entities';
import { ArticlesController, CategoryController } from './controllers';
import { AuthModule } from 'src/auth/auth.module';
import { ArticlesService, CategoryService } from './providers';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Article]), AuthModule],
  providers: [CategoryService, ArticlesService],
  controllers: [CategoryController, ArticlesController],
})
export class ArticlesModule {}
