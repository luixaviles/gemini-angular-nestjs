import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientChatContent } from './client-chat-content';


@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  constructor(private httpClient: HttpClient) { }

  chat(chatContent: ClientChatContent): Observable<ClientChatContent> {
    return this.httpClient.post<ClientChatContent>('http://localhost:3000/api/chat', chatContent);
  }

  generateText(message: string): Observable<ClientChatContent> {
    return this.httpClient.post<ClientChatContent>('http://localhost:3000/api/text', {message});
  }
}
