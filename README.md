 # 📅 Agenda Front – Angular

 Frontend em `Angular` (Standalone Components) para gerenciar contatos e autenticação via JWT.

 Status atual: desenvolvimento ativo. O backend (API) em ASP.NET Core é consumido pelo frontend.

 ---

 ## 🚀 Tecnologias

 - Angular
 - TypeScript
 - Angular Router
 - HttpClient
 - JWT
 - Signals (parcial / em progresso)

 ---

 ## Estrutura (resumo)

 ```
 /src
 ├─ app/
 │  ├─ core/ (guards, interceptors, services)
 │  ├─ pages/ (login, contatos, ...)
 │  └─ app.component.ts
 ├─ environments/
 └─ main.ts
 ```

 ---

 ## Funcionalidades implementadas

 - ✅ Login com JWT
 - ✅ Armazenamento do token
 - ✅ Interceptor para adicionar `Authorization: Bearer <token>`
 - ✅ Logout (limpa token e redireciona)
 - ✅ CRUD básico de contatos (listar, criar, editar, excluir)
 - ✅ Atualização da lista de contatos via Signals (sem reload)
 - ✅ Validação de formulários com `ngModel` (required, email, minlength)

 Funcionalidades em andamento / pendentes:
 - ⚠️ Refresh token automático no interceptor
 - ⚠️ `LoadingService` global com `signal<boolean>` e spinner global
 - ⚠️ Sistema de Toast/Alertas
 - ⚠️ Paginação (client-side)
 - ⚠️ Melhorias no AuthGuard (validar expiração do token)

 ---

 ## Como rodar

 1. Clonar
 ```bash
 git clone https://github.com/Jean5316/agenda-front.git
 ```
 2. Instalar dependências
 ```bash
 npm install
 ```
 3. Executar
 ```bash
 ng serve
 ```
 Acesse `http://localhost:4200`.

 ---

 ## Configurar URL da API

 Edite `src/environments/environment.ts` para apontar para sua API:

 ```ts
 export const environment = {
   apiUrl: 'https://localhost:5189'
 };
 ```

 ---

 ## Roadmap (prioridades)

 Prioridade alta:
 - Implementar refresh token automático
 - Criar `LoadingService` global usando `signal<boolean>` e spinner HTTP

 Prioridade média:
 - Toasts / alertas
 - Busca dinâmica (computed)
 - Paginação

 Prioridade avançada:
 - Dark mode (signals)
 - Tela de perfil e alteração de senha
 - Deploy em produção

 ---

 ## Contribuição

 Pull requests são bem-vindos. Abra issues para discutir grandes mudanças.

 ---

 ## Autor

 Jean Carlo — https://github.com/Jean5316

 ---

 ## Licença

 Projeto em desenvolvimento (uso educativo).

