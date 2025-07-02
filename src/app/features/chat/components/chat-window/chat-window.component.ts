import { Component }            from '@angular/core';
import { CommonModule }         from '@angular/common';
import { MatToolbarModule }     from '@angular/material/toolbar';
import { ChatInputComponent }   from '../chat-input/chat-input.component';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    ChatInputComponent
  ],
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  messages: { text: string; fromUser: boolean }[] = [];

  onUserMessage(text: string) {
    this.messages.push({ text, fromUser: true });
    setTimeout(() => {
      this.messages.push({ text: 'Respuesta de IA (mock)', fromUser: false });
    }, 500);
  }
}
