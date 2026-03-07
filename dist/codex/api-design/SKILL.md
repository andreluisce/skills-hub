---
name: api-design
description: Apply principles of design of APIs of Brenda Jin and Kirsten Hunter. Use to design clear, consistent, versioned, and secure RESTful APIs for frontend consumption and integration with external services. Base operacional: # Playbook  ## Sources - Designing Web APIs — Brenda Jin - Irresistible APIs — Kirsten Hunter Use quando o pedido envolver: api design, rest api, api versioning, api contract, endpoint design, http methods, api consistency, irresistible api.
---

# API Design

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Define resources, hierarchy of URLs and semantics of HTTP methods.
2. Padronizar contratos of request/response (sucesso, error, paginacao).
3. Implementar validation of input with Zod in todos os endpoints.
4. Adicionar autenticacao e autorizacao consistentes by route.
5. Define strategy of versioning and deprecation.

## Saída esperada
1. Mapa of endpoints with metodos e contratos.
2. Schema of resposta padronizado (sucesso, error, paginacao).
3. Checklist of seguranca by endpoint.
4. Plano of versionamento e backward compatibility.
