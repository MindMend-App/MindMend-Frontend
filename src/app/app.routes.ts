import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'chat',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    loadComponent: () =>
      import('./features/chat/components/chat-window/chat-window.component')
        .then(m => m.ChatWindowComponent)
  },
  {
    path: 'analysis',
    loadComponent: () =>
      import(
        './features/anxiety-analysis/components/anxiety-dashboard/anxiety-dashboard.component'
        ).then(m => m.AnxietyDashboardComponent)
  },
  {
    path: '**',
    redirectTo: 'chat'
  }
];
