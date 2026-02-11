import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';
import { Contatos } from './components/contatos/contatos';

export const routes: Routes = [
  { path: 'login', component: Login },
  {path: 'contatos', component: Contatos, canActivate: [authGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];