import { Component,  inject, ChangeDetectorRef, signal, computed } from '@angular/core';
import { ClienteService } from '../../services/cliente-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-editar-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-contato.html',
  styleUrl: './editar-contato.css',
})
export class EditarContato {


  private clienteService = inject(ClienteService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private cd = inject(ChangeDetectorRef)
  


  

  Cliente = signal<Cliente>({
    id: 0,
    nome: '',
    telefone: '',
    email: '',
    categoria: '',
    favorito: false
  });

  telefone = signal('');

  ngOnInit() {
    
    this.clienteService.getContatosbyId(Number(this.route.snapshot.paramMap.get('id'))).subscribe({
      next: (c) => {
        //this.cd.markForCheck();
        this.Cliente.set(c)
        this.telefone.set(c.telefone);

      },
      error: (err) => {
        alert('Erro ao carregar contato: ')
        this.router.navigate(['/contatos'])
      }
    })
  }

  

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

  salvar(form: any) {

    if (form.invalid) return;

    this.Cliente().telefone = this.telefone();
    this.clienteService.editarContato(this.Cliente()).subscribe({
      next: () => {
        this.router.navigate(['/contatos']);
      },
      error: (err) => {
        alert('Erro ao atualizar contato.');
        
      }
    });
  }

  voltar(){
    this.router.navigate(['/contatos'])
  }






}
