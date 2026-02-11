import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
})
export class Login {

  email = '';
  senha = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.senha).subscribe(
      {
        next: (response) => {
          localStorage.setItem('token', response.token);
          alert('Login bem-sucedido!');
        },
        error: () => {
          alert('Login Invalido!');
        }
      }
        
    );

  }
}
