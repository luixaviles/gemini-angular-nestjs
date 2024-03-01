import { Injectable } from '@nestjs/common';
import {
  ChatSession,
  GenerativeModel,
  GoogleGenerativeAI,
} from '@google/generative-ai';

import { ChatContent } from 'data-model';

@Injectable()
export class ChatService {
  model: GenerativeModel;
  chatSession: ChatSession;
  constructor() {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    this.model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    this.chatSession = this.model.startChat({
      history: [
        {
          role: 'user',
          parts: `You're a poet. Respond to all questions with a rhyming poem.
            What is the capital of California?
          `,
        },
        {
          role: 'model',
          parts:
            'If the capital of California is what you seek, Sacramento is where you ought to peek.',
        },
      ],
    });
  }

  async chat(chatContent: ChatContent): Promise<ChatContent> {
    const result = await this.chatSession.sendMessage(chatContent.message);
    const response = await result.response;
    const text = response.text();

    return {
      message: text,
      agent: 'chatbot',
    };
  }
}
