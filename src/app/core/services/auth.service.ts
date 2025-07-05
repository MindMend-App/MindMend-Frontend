// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface LoginReq  { username: string; password: string; }
interface LoginRes  { token: string; }
interface RegisterReq{ username: string; password: string; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = 'http://localhost:8080';


  constructor(private http: HttpClient) {}

  login(data: LoginReq): Observable<LoginRes> {
    return this.http.post<LoginRes>(`${this.base}/auth/login`, data)
      .pipe(tap(res => localStorage.setItem('jwt', res.token)));
  }

  register(data: RegisterReq): Observable<LoginRes> {
    return this.http.post<LoginRes>(`${this.base}/register`, data)
      .pipe(tap(res => localStorage.setItem('jwt', res.token)));
  }

  logout() {
    localStorage.removeItem('jwt');
  }

  get token() {
    return localStorage.getItem('jwt') || '';
  }

  get isLoggedIn() {
    return !!this.token;
  }
}
