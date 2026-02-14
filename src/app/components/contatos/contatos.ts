import { Component, inject } from '@angular/core';
import { ClienteService } from '../../services/cliente-service';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-contatos',
  imports: [],
  templateUrl: './contatos.html',
  styleUrl: './contatos.css',
})
export class Contatos {
  private clienteService = inject(ClienteService)

  contatos = toSignal(this.clienteService.getContatos())




}
