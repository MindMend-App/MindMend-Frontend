import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'chat',
    loadChildren: () =>
      import('./features/chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'analysis',
    loadChildren: () =>
      import('./features/anxiety-analysis/anxiety-analysis.module')
        .then(m => m.AnxietyAnalysisModule)
  },
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: '**', redirectTo: 'chat' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
