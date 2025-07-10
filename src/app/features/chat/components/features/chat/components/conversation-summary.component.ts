import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-conversation-summary.component',
  imports:  [CommonModule, RouterModule],
  templateUrl: './conversation-summary.component.html',
  styleUrl: './conversation-summary.component.css'
})
export class ConversationSummaryComponent {

  get isPsychologist(): boolean {
    return localStorage.getItem('role') === 'psychologist';
  }
}
