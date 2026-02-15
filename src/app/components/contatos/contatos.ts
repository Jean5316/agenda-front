import { Component, inject } from '@angular/core';
import { ClienteService } from '../../services/cliente-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../services/auth';


@Component({
  selector: 'app-contatos',
  imports: [RouterLink],
  templateUrl: './contatos.html',
  styleUrl: './contatos.css',
})
export class Contatos {
  private clienteService = inject(ClienteService)
  private authService = inject(AuthService)
  

  Clientes = toSignal(this.clienteService.getContatos())

  logout(){
    this.authService.logout();
  }

  excluir(){
    
  }






}
