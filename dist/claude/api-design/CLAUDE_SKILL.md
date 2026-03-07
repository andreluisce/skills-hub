Skill: API Design
Description: Apply principles of design of APIs of Brenda Jin and Kirsten Hunter. Use to design clear, consistent, versioned, and secure RESTful APIs for frontend consumption and integration with external services. Base operacional: # Playbook  ## Sources - Designing Web APIs — Brenda Jin - Irresistible APIs — Kirsten Hunter
Triggers: api design, rest api, api versioning, api contract, endpoint design, http methods, api consistency, irresistible api
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Define resources, hierarchy of URLs and semantics of HTTP methods.
- 2. Padronizar contratos of request/response (sucesso, error, paginacao).
- 3. Implementar validation of input with Zod in todos os endpoints.
- 4. Adicionar autenticacao e autorizacao consistentes by route.
- 5. Define strategy of versioning and deprecation.
Output Contract:
- Mapa of endpoints with metodos e contratos.
- Schema of resposta padronizado (sucesso, error, paginacao).
- Checklist of seguranca by endpoint.
- Plano of versionamento e backward compatibility.