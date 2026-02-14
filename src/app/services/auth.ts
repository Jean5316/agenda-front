import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient)
  private router = inject(Router)
  
  private apiUrl = 'http://localhost:5189/api/';

  
  
  login(email: string, senha: string) {
    return this.http.post<any>(`${this.apiUrl}auth/login`, { email, senha });
  }

  saveToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLogged(){
    return !! this.getToken();
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }


  
}
