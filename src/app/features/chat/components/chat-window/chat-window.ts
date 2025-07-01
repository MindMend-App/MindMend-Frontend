import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  messages: { text: string; fromUser: boolean }[] = [];

  onUserMessage(text: string) {
    this.messages.push({ text, fromUser: true });
    // aquí llamarías a ChatService.sendMessage(...)
    setTimeout(() => {
      this.messages.push({ text: 'Respuesta de IA (mock)', fromUser: false });
    }, 500);
  }
}
