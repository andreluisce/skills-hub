---
name: philosophy-software-design
description: Aplicar principios of design of software of John Ousterhout. Use for reduzir complexidade, criar modulos profundos, escrever codigo obvio e tomar decisoes of design defensaveis. Base operacional: # Playbook  ## Source A Philosophy of Software Design — John Ousterhout  ## Objective Use quando o pedido envolver: software design, complexity, deep modules, shallow modules, obvious code, tactical programming, strategic programming, ousterhout.
---

# A Philosophy of Software Design

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Identificar sintomas of complexidade (change amplification, cognitive load, unknown unknowns).
2. Classificar modulos como profundos ou rasos e eliminar pass-through desnecessario.
3. Verificar information hiding — o que e exposto not deveria ser?
4. Auditar consistency of convencoes in todo o codebase.
5. Refatorar for modulos mais profundos with interfaces mais simples.

## Saída esperada
1. Diagnostico of complexidade by modulo.
2. Lista of modulos rasos for aprofundar.
3. Plano of information hiding by servico.
4. Checklist of consistency of convencoes.
