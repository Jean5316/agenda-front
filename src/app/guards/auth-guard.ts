import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = () => {
  //injeção de dependencias
  const authService = inject(AuthService)
  const router = inject(Router)
  
  
  //verifica se esta valido
  if(!authService.isLogged()){
    router.navigate(['/login'])
    return false;
  }

  return true;
  
  

};
