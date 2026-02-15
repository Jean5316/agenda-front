import { Component, effect, inject, signal } from '@angular/core';
import { ClienteService } from '../../services/cliente-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-editar-contato',
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-contato.html',
  styleUrl: './editar-contato.css',
})
export class EditarContato {


  private clienteService = inject(ClienteService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)


  id = Number(this.route.snapshot.paramMap.get('id'));

  mensagem = signal(false);

  Cliente = this.id ? toSignal(this.clienteService.getContatosbyId(this.id).pipe(
    catchError(() => of(null))
  ),
  {
    initialValue: {
      id: 0,
      nome: '',
      telefone: '',
      email: '',
      categoria: '',
      favorito: false  
    } 
  }) : signal<Cliente | null>(null);

  constructor(){
    effect(() => {
      const c = this.Cliente();

      if(!this.id  || c === null){
        this.mensagem.set(true);

        setTimeout(() => {
          this.router.navigate(['/contatos']);
        }, 2000);
      }
    });
  }
    

  salvar(form: any){

    //verifica validade do formulario
    if(form.invalid) return

    //chama o service e cria o usuario
    this.clienteService.editarContato(this.Cliente()!).subscribe(() => {
      //retorna para lista de clientes
      this.router.navigate(['/contatos'])
      
      }
    ) 
  }

  voltar(){
    this.router.navigate(['/contatos'])
  }

}
