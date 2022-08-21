import * as bcrypt from 'bcryptjs';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';
import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { UUIDEntity } from 'src/common/entities';
import { Article } from 'src/articles/entities';
import { Region } from 'src/regions/entities';

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

  @Column({ select: false, nullable: true })
  password: string;

  @OneToMany(() => Article, (article) => article.seller)
  articles: Article[];

  @ManyToMany(() => Article, (article) => article.likeUsers)
  @JoinTable({
    name: 'user_like_article',
  })
  likeArticles: Article[];

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }

  async comparePassword(plainPassword: string) {
    return await bcrypt.compare(plainPassword, this.password);
  }

  @ManyToMany(() => Region)
  @JoinTable({
    name: 'user_has_region',
  })
  regions: Region[];
}
