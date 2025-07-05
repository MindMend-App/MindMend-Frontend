import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule }                      from '@angular/forms';
import { MatFormFieldModule }               from '@angular/material/form-field';
import { MatInputModule }                   from '@angular/material/input';
import { MatButtonModule }                  from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  @Output() send = new EventEmitter<string>();
  @Output() finish = new EventEmitter<void>();

  text = '';

  onSend() {
    const t = this.text.trim();
    if (!t) return;
    this.send.emit(t);
    this.text = '';
  }

  onFinish() {
    this.finish.emit();
  }
}
