import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ChatResp    { reply: string; }
interface AnalyzeResp { label: string; score: number; }

@Injectable({ providedIn: 'root' })
export class ChatService {
  // Llamamos al backend Java, no al Python directo
  private base = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  chat(message: string): Observable<string> {
    return this.http
      .post<ChatResp>(`${this.base}/chat`, { message })
      .pipe(map(r => r.reply));
  }

  analyze(messages: string[]): Observable<AnalyzeResp> {
    return this.http
      .post<AnalyzeResp>(`${this.base}/analyze`, { messages });
  }
}
