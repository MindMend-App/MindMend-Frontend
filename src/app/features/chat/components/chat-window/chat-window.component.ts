import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { ChatInputComponent } from '../chat-input/chat-input.component';
import { MatButtonModule } from '@angular/material/button';

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
export class ChatWindowComponent implements OnInit {
  public messages: { text: string; fromUser: boolean }[] = [];
  public history: string[] = [];

  constructor(
    private chatService: ChatService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Llamamos al endpoint con message vacío para obtener el primer prompt del bot
    this.chatService.chat('', []).subscribe(reply => {
      this.messages.push({ text: reply, fromUser: false });
      // no agregamos esto a history, o si quieres puedes guardarlo en history
    });
  }

  onUserMessage(text: string) {
    this.messages.push({ text, fromUser: true });
    this.history.push(text);

    this.chatService.chat(text, this.history).subscribe(reply => {
      this.messages.push({ text: reply, fromUser: false });
      this.history.push(reply);
    });
  }

  finishConversation() {
    this.chatService.analyze(this.history).subscribe(res => {
      this.router.navigate(['/summary']);
    });
  }
}
