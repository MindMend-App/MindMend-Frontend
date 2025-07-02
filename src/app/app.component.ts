import { Component }                from '@angular/core';
import { RouterModule }             from '@angular/router';
import { MatToolbarModule }         from '@angular/material/toolbar';
import { MatButtonModule }          from '@angular/material/button';
import { CommonModule }             from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  template: `
    <mat-toolbar color="primary">
      <span>MindMend</span>
      <span class="spacer"></span>
      <button mat-button routerLink="/chat">Chat</button>
      <button mat-button routerLink="/analysis">Análisis</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .spacer { flex: 1 1 auto; }
  `]
})
export class AppComponent {}
