import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DateEntity } from './date.entity';

@Entity()
export class IntIDEntity extends DateEntity {
  @ApiProperty({
    description: 'Primary Key',
  })
  @PrimaryGeneratedColumn()
  @IsInt()
  id: number;
}
