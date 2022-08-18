import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DateEntity } from './date.entity';

@Entity()
export class UUIDEntity extends DateEntity {
  @ApiProperty({
    description: 'Primary Key',
  })
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;
}
