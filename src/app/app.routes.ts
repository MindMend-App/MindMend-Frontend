import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from '././features/auth/components/login/login.component';
import { ChatWindowComponent } from './features/chat/components/chat-window/chat-window.component';
import { AnxietyDashboardComponent } from './features/anxiety-analysis/components/anxiety-dashboard/anxiety-dashboard.component';
import {ConsentFormComponent} from './features/consent-form.component/consent-form.component';
import {ConversationSummaryComponent} from './features/chat/components/features/chat/components/conversation-summary.component';

export const routes: Routes = [
  { path: 'login',   component: LoginComponent },
  { path: 'consent', component: ConsentFormComponent, canActivate: [AuthGuard] },
  { path: 'chat',    component: ChatWindowComponent,  canActivate: [AuthGuard] },
  { path: 'summary', component: ConversationSummaryComponent, canActivate: [AuthGuard] },
  { path: 'analysis',component: AnxietyDashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo:'login', pathMatch:'full' },
  { path: '**', redirectTo:'login' }
];
