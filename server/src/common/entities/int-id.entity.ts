import { IsInt } from 'class-validator';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DateEntity } from './date.entity';

@Entity()
export class IntIDEntity extends DateEntity {
  @PrimaryGeneratedColumn()
  @IsInt()
  id: string;
}
