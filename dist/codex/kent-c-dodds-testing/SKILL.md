---
name: kent-c-dodds-testing
description: Definir e aplicar estratégia de testes orientada ao usuário com princípios de Kent C. Dodds e Testing Library, priorizando confiança real de produto, testes de integração, seletores acessíveis e mocks na fronteira da rede. Base operacional: # Playbook  ## Objetivo Maximizar confiança de produto com testes que validam comportamento real e não detalhes de implementacao.  ## Regras Use quando o pedido envolver: kent c dodds, testing trophy, testing library, react testing library, user centric tests, msw.
---

# Kent C. Dodds Testing Strategy

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Mapear fluxos críticos de usuário e classificar risco por funcionalidade.
2. Definir pirâmide prática com Testing Trophy e foco em integração.
3. Escrever testes pela ótica do usuário com queries acessíveis e user-event.
4. Substituir mocks frágeis por MSW e mockar somente fronteiras externas.
5. Auditar estabilidade, velocidade e taxa de falso positivo da suíte.

## Saída esperada
1. Matriz de cenários críticos e nível de teste recomendado.
2. Guia de padrões de teste (Arrange/Act/Assert, queries e mocks).
3. Plano de migração de testes frágeis para testes de comportamento.
4. Checklist de qualidade e confiabilidade da suíte.
