import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';
import { Contatos } from './components/contatos/contatos';
import { CriarContato } from './components/criar-contato/criar-contato';
import { EditarContato } from './components/editar-contato/editar-contato';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: Login },
  { path: 'contatos', component: Contatos, canActivate: [authGuard]},
  { path: 'contatos/criarContato', component: CriarContato, canActivate: [authGuard]},
  { path: 'contados/editarContato', component: EditarContato, canActivate: [authGuard] }
  
  
];