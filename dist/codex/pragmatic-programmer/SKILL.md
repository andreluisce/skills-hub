---
name: pragmatic-programmer
description: Aplicar principios do Programador Pragmatico of Hunt e Thomas. Use for tomar decisoes tecnicas defensaveis, evitar duplicacao, automatizar rotinas e manter codigo adaptavel. Base operacional: # Playbook  ## Source Or Pragmatic Programmer — Andrew Hunt & David Thomas  ## Objective Use quando o pedido envolver: pragmatic programmer, dry, tracer bullets, orthogonality, technical debt, automation, good enough software.
---

# The Pragmatic Programmer

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Auditar violactions of DRY — conhecimento duplicado in codigo, docs e schema.
2. Verificar orthogonalidade — mudanca in um modulo afeta outros?
3. Identificar processos manuais repetitivos e criar scripts of automacao.
4. Revisar encapsulamento of dependencias externas in adapters.
5. Documentar divida tecnica intencional with plan of pagamento.

## Saída esperada
1. Lista of violactions DRY e plan of consolidacao.
2. Mapa of acoplamento entre modulos.
3. Scripts of automacao criados ou planejados.
4. Registro of divida tecnica with contexto.
