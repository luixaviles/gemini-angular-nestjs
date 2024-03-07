import { Injectable } from '@nestjs/common';
import {
    GenerativeModel,
    GoogleGenerativeAI,
    InlineDataPart,
  } from '@google/generative-ai';
import { ChatContent } from 'data-model';

@Injectable()
export class VisionService {
    model: GenerativeModel;

    constructor() {
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        this.model = genAI.getGenerativeModel({ model: "gemini-pro-vision"});
    }

    async vision(message: string, file: Express.Multer.File): Promise<ChatContent> {
        const imageDataPart: InlineDataPart = {
            inlineData: {
              data: file.buffer.toString('base64'),
              mimeType: file.mimetype,
            },
          };
        const result = await this.model.generateContent([message, imageDataPart]);
        const response = await result.response;
        const text = response.text();

        return {
          message: text,
          agent: 'chatbot',
        };
      }
}
