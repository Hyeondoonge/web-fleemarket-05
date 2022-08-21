import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { IntIDEntity } from 'src/common/entities';

@Entity()
export class Region extends IntIDEntity {
  @ApiProperty({ description: '지역 이름' })
  @Column({ length: 256 })
  @IsString()
  name: string;
}
