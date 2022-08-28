import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { UUIDEntity } from 'src/common/entities';
import { User } from 'src/users/entities';
import { Article } from 'src/articles/entities';
import { Message } from './message.entity';

@Entity()
export class Chat extends UUIDEntity {
  @ManyToOne(() => User, (user) => user.chats)
  buyer: User;

  @ManyToOne(() => Article, (article) => article.chats)
  article: Article;

  @OneToMany(() => Message, (message) => message.chat)
  messages: Message;
}
