---
name: clean-code-architecture
description: Aplicar principios of codigo limpo e architecture limpa of Robert C. Martin. Use for revisar, refatorar e structure codigo with responsabilidade unica, dependencias corretas e limites architectureis claros. Base operacional: # Playbook  ## Sources - Codigo Limpo (Clean Code) — Robert C. Martin - Clean Architecture — Robert C. Martin - Desenvolvimento Agil Limpo — Robert C. Martin Use quando o pedido envolver: clean code, clean architecture, solid, uncle bob, refactor, code smell, dependency rule, use case, entity.
---

# Clean Code & Clean Architecture

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Auditar naming, tamanho of functions e separacao of responsabilidades.
2. Mapear dependencias e verificar conformidade with Dependency Rule.
3. Isolar logica of negocio of frameworks e banco of data.
4. Aplicar SOLID by modulo — identificar violactions e refatorar.
5. Validate testability — business logic must be testable without framework.

## Saída esperada
1. Diagnostico of violactions by camada.
2. Mapa of dependencias corrigido.
3. Plano of refatoracao by modulo.
4. Checklist SOLID by component/servico.
