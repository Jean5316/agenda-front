# 📌 Angular Agenda – Frontend

Frontend desenvolvido em **Angular 21** consumindo uma **API .NET com autenticação JWT**.  
O projeto implementa **login**, **proteção de rotas**, **interceptor HTTP** e está preparado para evolução do **CRUD**.

---

## 🚀 Tecnologias utilizadas

- Angular 21 (Standalone Components)
- TypeScript
- Angular Router
- HttpClient
- JWT (JSON Web Token)
- AuthGuard
- HTTP Interceptor
- Git & GitHub

---

## 🔐 Funcionalidades implementadas

- ✅ Login com autenticação JWT
- ✅ Armazenamento do token via Cookies
- ✅ Interceptor para envio automático do token
- ✅ Proteção de rotas com AuthGuard
- ✅ Integração com API .NET
- ⏳ CRUD (em desenvolvimento)

---

## 📂 Estrutura do projeto

```text
src/
 ├── app/
 │   ├── core/
 │   │   ├── guards/
 │   │   │   └── auth.guard.ts
 │   │   ├── interceptors/
 │   │   │   └── auth.interceptor.ts
 │   │   └── services/
 │   │       └── auth.service.ts
 │   ├── pages/
 │   │   └── login/
 │   ├── app.routes.ts
 │   └── app.component.ts
 ├── environments/
 └── main.ts


🔄 Fluxo de autenticação
Usuário informa email e senha

Frontend envia para a API /api/Auth/login

API retorna um JWT

Token é armazenado em cookies

Interceptor adiciona o token no header:

Authorization: Bearer TOKEN
AuthGuard valida acesso às rotas protegidas



🛡️ Rotas protegidas
Exemplo:

{
  path: 'contatos',
  canActivate: [AuthGuard],
  loadComponent: () =>
    import('./pages/contatos/contatos.component')
      .then(m => m.ContatosComponent)
}


⚙️ Configuração do ambiente
Arquivo environment.ts:

export const environment = {
  apiUrl: 'http://localhost:5189/api'
};


▶️ Como executar o projeto
1️⃣ Instalar dependências
npm install
2️⃣ Rodar o projeto
ng serve
Acesse:

http://localhost:4200


🔗 Backend
Este frontend consome uma API desenvolvida em ASP.NET Core, com:

JWT

Login

Autorização por token

➡️ Repositório da API: https://github.com/Jean5316/API_AGENDA

### Executar frontend + backend
```bash
npm run dev
```

📌 Próximos passos
 CRUD de contatos

 Logout

 Refresh Token

 Tratamento global de erros

 Layout responsivo

👤 Autor
Desenvolvido por Jean Carlo
📧 Email: jean@jean.com
💻 GitHub: https://github.com/Jean5316