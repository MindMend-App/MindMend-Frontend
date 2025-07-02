import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatService } from './services/chat.service';

@NgModule({
  imports: [SharedModule, ChatRoutingModule, ChatWindowComponent, ChatInputComponent],
  providers: [ChatService]
})
export class ChatModule {}
