import { IsUUID } from 'class-validator';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DateEntity } from './date.entity';

@Entity()
export class UUIDEntity extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;
}
