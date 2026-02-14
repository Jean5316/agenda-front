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

  
  //faz login
  login(email: string, senha: string) {
    return this.http.post<any>(`${this.apiUrl}auth/login`, { email, senha });
  }

  //salva token JWT
  saveToken(token: string){
    localStorage.setItem('token', token);
  }

  //verifica expiração de token
  isTokenExpired(token: string): boolean{
    try{
      const payload = JSON.parse(atob(token.split('.')[1]));
      const exp = payload.exp;
      
      if(!exp) return true;

      const currentTime = Math.floor(Date.now() / 1000);

      return currentTime > exp;
    } catch(error){
      return true;
    }
  }

  //pega token
  getToken(){
    return localStorage.getItem('token');
  }

  //verifica se esta logado
  isLogged(): boolean{
    const token = this.getToken();

    if(!token) return false;

    if(this.isTokenExpired(token)){
      this.logout();
      return false;
    }

    return true;
  }

  //faz logout
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }


  
}
