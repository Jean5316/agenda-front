import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
HttpClient

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private http = inject(HttpClient)
  private readonly api = 'http://localhost:5189/api/Contatos'

  getContatos(){
    return this.http.get<any[]>(this.api)
  }

  criarContato(cliente: Cliente){
    return this.http.post<Cliente>(this.api, cliente)
  }

  editarContato(cliente: Cliente){
    return this.http.put<Cliente>(`${this.api}/AtualizarContato/${cliente.id}`, cliente)
  }

}
