import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiService} from '../../../core/services/api.service';

@Injectable()
export class ChatService {
  constructor(private api: ApiService) {}

  sendMessage(text: string): Observable<{ reply: string }> {
    return this.api.post('chat/send', { message: text });
  }
}
