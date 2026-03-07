import {ChangeDetectorRef, Component, inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './login.html',
  //lembrar de passar o style quando usar o css do componente e nao o global no caso de classes
  styleUrls: ['./login.css']
})
export class Login {

  email = '';
  senha = '';
  //signal sempre lembrar que no html ele é chamado como função
  erroMessage = signal<string | null>(null);

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
        error: err => {
         console.log(err, "Erro no Servidor");
          if(err.status === 401 || err.status === 403)
          {
            this.erroMessage.set("Usuario ou senha Invalidos!")
          }else  if(err.status === 0 || err.status === 500 )
          {
            this.erroMessage.set("Erro no Servidor, tente novamente!");
          }else {
            this.erroMessage.set("Ocorreu um erro inesperado!");
          }


        }
      }

    );

  }

}
