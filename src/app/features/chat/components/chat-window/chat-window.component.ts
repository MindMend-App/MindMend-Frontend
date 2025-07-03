import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ChatInputComponent } from '../chat-input/chat-input.component';
import { MatButtonModule } from '@angular/material/button';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [
    CommonModule,
    ChatInputComponent,
    MatButtonModule
  ],
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  public messages: { text: string; fromUser: boolean }[] = [];
  public history: string[] = [];

  constructor(
    private chatService: ChatService,
    private router: Router
  ) {}

  onUserMessage(text: string) {
    // Agrega mensaje de usuario
    this.messages.push({ text, fromUser: true });
    this.history.push(text);

    // Llama al backend para obtener respuesta
    this.chatService.chat(text).subscribe(reply => {
      this.messages.push({ text: reply, fromUser: false });
      this.history.push(reply);
    });
  }

  finishConversation() {
    // Envía todo el historial para análisis
    this.chatService.analyze(this.history).subscribe(res => {
      this.router.navigate(['/dashboard'], { state: { analysis: res } });
    });
  }
}
