import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
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

}
