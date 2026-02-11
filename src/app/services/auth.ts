import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
private apiUrl = 'http://localhost:5189/api/';

  constructor(private http: HttpClient) {}
  
  login(email: string, senha: string) {
    return this.http.post<any>(`${this.apiUrl}auth/login`, { email, senha });
  }

  contatos(){
    return this.http.get<any>(`${this.apiUrl}/contatos`);
  }
}
