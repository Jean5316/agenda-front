import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './login.html',
})
export class Login {

  email = '';
  senha = '';

  private authService = inject(AuthService)
  private router = inject(Router)

  login() {
    this.authService.login(this.email, this.senha).subscribe(
      {
        next: (res) => {
          this.authService.saveToken(res.token);
          console.log('Login bem-sucedido!');
          this.router.navigate(['/contatos']);
        },
        error: () => {
          console.log('Login Invalido!');
        }
      }
        
    );

  }
}
