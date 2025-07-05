import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from '././features/auth/components/login/login.component';
import { ChatWindowComponent } from './features/chat/components/chat-window/chat-window.component';
import { AnxietyDashboardComponent } from './features/anxiety-analysis/components/anxiety-dashboard/anxiety-dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: ChatWindowComponent, canActivate: [AuthGuard] },
  { path: 'analysis', component: AnxietyDashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
