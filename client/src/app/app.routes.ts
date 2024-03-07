import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'chat',
  },
  {
    path: 'chat',
    loadComponent: () =>
      import('./chat/chat.component').then((mod) => mod.ChatComponent),
    providers: [],
  },
  {
    path: 'text',
    loadComponent: () =>
      import('./text/text.component').then((mod) => mod.TextComponent),
  },
  {
    path: 'vision',
    loadComponent: () =>
      import('./vision/vision.component').then((mod) => mod.VisionComponent),
  },
];
