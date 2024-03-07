import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { ChatService } from './chat.service';
import { TextService } from './text.service';
import { VisionService } from './vision.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [ChatService, TextService, VisionService],
})
export class AppModule {}
