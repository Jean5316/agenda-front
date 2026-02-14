import { Component, inject } from '@angular/core';
import { ClienteService } from '../../services/cliente-service';
import { Cliente } from '../../model/cliente';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-criar-contato',
  imports: [CommonModule, FormsModule],
  templateUrl: './criar-contato.html',
  styleUrl: './criar-contato.css',
})
export class CriarContato {

  //inicição da instancia da model
  cliente: Cliente = {
    nome: '',
    telefone: '',
    email: '',
    categoria: '',
    favorito: false,
    
  }

  //Injeções de Dependencia
  private clienteService = inject(ClienteService)
  private router = inject(Router)


  salvar(form: any){
    //verifica validade do formulario
    if(form.invalid){
      return
    }
    //chama o service e cria o usuario
    this.clienteService.criarContato(this.cliente).subscribe(() => {
      //retorna para lista de clientes
      this.router.navigate(['/contatos'])
      
      }
    ) 
    
  }

  voltar(){
    this.router.navigate(["/contatos"])
  }

}
