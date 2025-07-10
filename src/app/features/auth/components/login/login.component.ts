import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatInputModule }      from '@angular/material/input';
import { MatButtonModule }     from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  submit() {
    this.auth.login({ username: this.username, password: this.password })
      .subscribe({
        next: res => {
          // 1) Guarda el JWT en localStorage
          localStorage.setItem('jwt', res.token);
          // 2) Redirige al chat
          this.router.navigate(['/chat']);
        },
        error: err => {
          console.error('Login failed', err);
          // aquí podrías mostrar un mensaje de error al usuario
        }
      });
    this.router.navigate(['/consent']);
  }

}
