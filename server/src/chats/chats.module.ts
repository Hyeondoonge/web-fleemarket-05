import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';
import { Message } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Chat, Message])],
  providers: [ChatsService],
  controllers: [ChatsController],
})
export class ChatsModule {}
