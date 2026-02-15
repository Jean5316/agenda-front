import { Component, inject, signal } from '@angular/core';
import { ClienteService } from '../../services/cliente-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../services/auth';
import { Cliente } from '../../model/cliente';


@Component({
  selector: 'app-contatos',
  imports: [RouterLink],
  templateUrl: './contatos.html',
  styleUrl: './contatos.css',
})
export class Contatos {
  private clienteService = inject(ClienteService)
  private authService = inject(AuthService)

  Clientes = signal<Cliente[]>([])
  carregando = signal(true);
  erro = signal<string | null>(null)

  ngOnInit(){
    this.carregarClientes();
  }

  carregarClientes(){
    this.carregando.set(true)
    this.erro.set(null)

    this.clienteService.getContatos().subscribe({
      next: (res) => {
        this.Clientes.set(res)
        this.carregando.set(false)
      },
      error: () => {
        this.erro.set("Erro ao carregar Clientes");
        this.carregando.set(false)
      }
    })
  }

  buscarFavoritos(){
    
  }

  logout(){
    this.authService.logout();
  }

  excluir(id: number){
    if(!confirm("Tem Certeza que deseja excluir este cliente:")) return
    this.clienteService.excluirContato(id).subscribe({
      next: () => {
        this.Clientes.update(lista => lista.filter(c => c.id !== id))
        console.log("Cliente Excluido com sucesso")
      },
      error: () => {
        console.log("Erro ao Excluir Cliente")
      }
    }
    
  )
    
  }






}
