import { ChatContent } from 'data-model';

export interface ClientChatContent extends ChatContent {
    loading?: boolean;
    imagePreview?: string;
}