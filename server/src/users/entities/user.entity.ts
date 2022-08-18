import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsString, Length } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { UUIDEntity } from 'src/common/entities';
import { Provider } from '../enums';

@Entity()
export class User extends UUIDEntity {
  @ApiProperty({
    description: '사용자 닉네임',
  })
  @Column({
    length: 48,
  })
  @IsString()
  @Length(2, 48)
  username: string;

  @ApiProperty({
    description: '사용자 이메일',
  })
  @Column()
  @IsEmail()
  email: string;

  @Column({
    type: 'enum',
    enum: Provider,
    default: Provider.Email,
  })
  @IsEnum(Provider)
  provider: Provider;

  @Column({
    nullable: true,
  })
  providerId?: string;

  @Column({ select: false })
  password: string;
}
