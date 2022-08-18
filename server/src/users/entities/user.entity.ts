import * as bcrypt from 'bcryptjs';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';
import { BeforeInsert, Column, Entity } from 'typeorm';
import { UUIDEntity } from 'src/common/entities';

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

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
