---
name: cms-dev-standards
description: Maintain technical project standards. Use to ensure dark theme, avoid hardcoded texts, manage Supabase types and operate monorepo with pnpm/turbo. Base operacional: # Playbook  ## Objective Ensure technical and architectural integrity of the project over time.  ## Mandatory Rules Use quando o pedido envolver: dev standards, dark theme, hardcoded text, supabase types, monorepo standards, code standards.
---

# CMS Development Standards

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Auditar components by uso of cores hardcoded e textos fixos.
2. Verificar que todos os tipos of entidade usam Tables<'...'> gerados.
3. Confirmar que logica of fetch reside in pacote api-client, not in apps.
4. Validar commits with standard semantic atomic.
5. Executar deploy via script padronizado e verificar health checks.

## Saída esperada
1. Relatorio of violactions of padroes by arquivo.
2. Lista of textos hardcoded for externalizar.
3. Mapa of tipos locais for migrar for gerados.
4. Checklist pre-deploy.
