# 📅 Agenda Front – Angular

Frontend desenvolvido em **Angular (Standalone Components)** para consumir uma API ASP.NET Core com autenticação JWT.

O sistema permite autenticação de usuários e gerenciamento de contatos protegidos por token.

---

## 🚀 Tecnologias Utilizadas

- Angular
- TypeScript
- Angular Router
- HttpClient
- JWT (JSON Web Token)
- AuthGuard
- HTTP Interceptor
- Standalone Components

---

## 📂 Estrutura do Projeto

```
/
├── .vscode/
├── public/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   │   └── auth.guard.ts
│   │   │   ├── interceptors/
│   │   │   │   └── auth.interceptor.ts
│   │   │   └── services/
│   │   │       └── auth.service.ts
│   │   ├── pages/
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   └── contatos/
│   │   │       ├── contatos.component.ts
│   │   │       ├── contatos.component.html
│   │   ├── app.routes.ts
│   │   └── app.component.ts
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── main.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔐 Funcionalidades

- ✔ Login com autenticação JWT
- ✔ Armazenamento do token
- ✔ Interceptor para envio automático do token no Header
- ✔ Proteção de rotas com AuthGuard
- ✔ Página de contatos protegida
- ⏳ CRUD completo em evolução

---

## 🔄 Fluxo de Autenticação

1. Usuário envia email e senha
2. Frontend faz requisição para API (`/api/Auth/login`)
3. API retorna um JWT
4. Token é armazenado no navegador
5. Interceptor adiciona automaticamente no header:

```
Authorization: Bearer <TOKEN>
```

6. AuthGuard impede acesso a rotas sem autenticação

---

## 🛠 Como Rodar o Projeto

### 1️⃣ Clonar o repositório

```
git clone https://github.com/Jean5316/agenda-front.git
```

### 2️⃣ Instalar dependências

```
npm install
```

### 3️⃣ Executar o projeto

```
ng serve
```

Acesse:

```
http://localhost:4200
```

---

## ⚙ Configuração da API

Verifique o arquivo:

```
src/environments/environment.ts
```

Certifique-se que a URL da API está correta:

```ts
export const environment = {
  apiUrl: 'https://localhost:5001'
};
```

---

## 🧱 Backend Relacionado

API desenvolvida em ASP.NET Core com JWT.

[text](https://github.com/Jean5316/API_AGENDA)

---

## 📌 Próximas Melhorias

- [ ] CRUD completo de contatos
- [ ] Refresh Token
- [ ] Tratamento global de erros
- [ ] Deploy em produção

---

## 👨‍💻 Autor

Jean Carlo  
GitHub: https://github.com/Jean5316

---

## 📄 Licença

Este projeto está em desenvolvimento para fins de estudo.
