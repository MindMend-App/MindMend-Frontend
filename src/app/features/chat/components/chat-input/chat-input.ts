import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  text = '';
  @Output() send = new EventEmitter<string>();

  onSend() {
    if (!this.text.trim()) return;
    this.send.emit(this.text.trim());
    this.text = '';
  }
}
