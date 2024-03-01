import { Controller, Get, Post, Body } from '@nestjs/common';

import { ChatContent } from 'data-model';
import { ChatService } from './chat.service';
import { TextService } from './text.service';

@Controller()
export class AppController {
  
  constructor(private readonly chatService: ChatService, private readonly textService: TextService) {}

  @Post('chat')
  chat(@Body() chatContent: ChatContent) {
    return this.chatService.chat(chatContent);
  }
  
  @Post('text')
  text(@Body() chatContent: ChatContent) {
    return this.textService.generateText(chatContent.message);
  }
}
