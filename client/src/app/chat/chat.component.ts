import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { GeminiService } from '../gemini.service';
import { LineBreakPipe } from '../line-break.pipe';
import { finalize } from 'rxjs';
import { ClientChatContent } from '../client-chat-content';


@Component({
  selector: 'corp-chat',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    LineBreakPipe,
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  message = '';

  contents: ClientChatContent[] = [];

  constructor(private geminiService: GeminiService) {}

  sendMessage(message: string): void {
    const chatContent: ClientChatContent = {
      agent: 'user',
      message,
    };

    this.contents.push(chatContent);
    this.contents.push({
      agent: 'chatbot',
      message: '...',
      loading: true,
    });
    
    this.message = '';
    this.geminiService
      .chat(chatContent)
      .pipe(
        finalize(() => {
          const loadingMessageIndex = this.contents.findIndex(
            (content) => content.loading
          );
          if (loadingMessageIndex !== -1) {
            this.contents.splice(loadingMessageIndex, 1);
          }
        })
      )
      .subscribe((content) => {
        this.contents.push(content);
      });
  }

}
