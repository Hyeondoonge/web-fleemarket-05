import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';
import { PagintaionDto } from 'src/common/dtos';

export class GetArticlesDto extends PagintaionDto {
  @ApiPropertyOptional({ description: '해당 카테고리' })
  @Type(() => Number)
  @IsPositive()
  @IsOptional()
  category?: number;
}
