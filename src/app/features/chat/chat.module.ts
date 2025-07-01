import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatWindowComponent } from './components/chat-window/chat-window';
import { ChatInputComponent } from './components/chat-input/chat-input';
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [ChatWindowComponent, ChatInputComponent],
  imports: [SharedModule, ChatRoutingModule],
  providers: [ChatService]
})
export class ChatModule {}
