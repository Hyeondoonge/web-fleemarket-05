import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from './entities';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Region]), UsersModule, AuthModule],
  exports: [TypeOrmModule],
  providers: [RegionsService],
  controllers: [RegionsController],
})
export class RegionsModule {}
