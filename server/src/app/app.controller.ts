import { Controller, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import Multer from 'multer';

import { ChatContent } from 'data-model';
import { ChatService } from './chat.service';
import { TextService } from './text.service';
import { VisionService } from './vision.service';

@Controller()
export class AppController {
  
  constructor(private readonly chatService: ChatService, 
              private readonly textService: TextService,
              private readonly visionService: VisionService) {}

  @Post('chat')
  chat(@Body() chatContent: ChatContent) {
    return this.chatService.chat(chatContent);
  }
  
  @Post('text')
  text(@Body() chatContent: ChatContent) {
    return this.textService.generateText(chatContent.message);
  }

  @Post('vision')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: {message: string}) {
    return this.visionService.vision(body.message, file);
  }
}
