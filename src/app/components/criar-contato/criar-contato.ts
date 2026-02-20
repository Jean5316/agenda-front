import { Component, inject, signal, Signal, computed } from '@angular/core';
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

  //Iniciação da instancia da model com signal
  cliente = signal<Cliente>({
    id: 0,
    nome: '',
    telefone: '',
    email: '',
    categoria: '',
    favorito: false,
    
  })
  telefone = signal('');

  //Injeções de Dependencia
  private clienteService = inject(ClienteService)
  private router = inject(Router)

  telefoneValido = computed(() => {
    const numero = this.telefone().replace(/\D/g, '');
    return numero.length === 10 || numero.length === 11;
  });

  formatarTelefone(valor: string) {

    // 1️⃣ Remove tudo que não for número
    let numero = valor.replace(/\D/g, '');

    // 2️⃣ Limita em 11 dígitos (controle real)
    numero = numero.slice(0, 11);
    console.log(numero.length, numero);

    let formatado = '';

    // 3️⃣ Formatação celular (11 dígitos)
    if (numero.length === 11) {
      formatado =
        '(' + numero.slice(0, 2) + ')' +
        numero.slice(2, 7) + '-' +
        numero.slice(7, 11);
    }

    // 4️⃣ Formatação fixo (10 dígitos)
    else if (numero.length === 10) {
      formatado =
        '(' + numero.slice(0, 2) + ')' +
        numero.slice(2, 6) + '-' +
        numero.slice(6, 10);
    }

    // 5️⃣ Enquanto está digitando (menos que 10)
    else if (numero.length > 2) {
      formatado =
        '(' + numero.slice(0, 2) + ')' +
        numero.slice(2);
    }

    else if (numero.length > 0) {
      formatado = '(' + numero;
    }

    this.telefone.set(formatado);
  }


  salvar(form: any){
    //verifica validade do formulario
    if(form.invalid){
      return
    }
    this.cliente().telefone = this.telefone()
    //chama o service e cria o usuario
    this.clienteService.criarContato(this.cliente()).subscribe({
      next: (c) => {
        //retorna para lista de clientes
        this.router.navigate(['/contatos'])

      },
      error: (err) => {
        alert('Erro ao criar contato!');
        console.log(err)
      }
    }) 
    
  }

  voltar(){
    this.router.navigate(["/contatos"])
  }

}
