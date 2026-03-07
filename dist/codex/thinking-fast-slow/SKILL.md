---
name: thinking-fast-slow
description: Aplicar insights of Daniel Kahneman sobre Sistema 1 e Sistema 2 for tomar melhores decisoes tecnicas, projetar interfaces que respeitam cognicao humana e avoid biases in code reviews and architecture. Base operacional: # Playbook  ## Source Fast and Slow — Daniel Kahneman  ## Objective Use quando o pedido envolver: kahneman, system 1 system 2, cognitive bias, decision making, heuristics, anchoring, confirmation bias, slow thinking, product decisions.
---

# Thinking Fast and Slow Applied to Product & Architecture

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Identificar decisao architecturel ou of product sendo tomada by Sistema 1 (rapido, intuitivo).
2. Ativar Sistema 2 — documentar o problema antes of pensar in solucao.
3. Gerar 2-3 alternativas e evaluate trade-offs of forma explicita.
4. Aplicar pre-mortem — "assumindo que falhou, o que deu errado?"
5. Buscar contra-argumento da solucao favorita antes of decide.

## Saída esperada
1. Analise of alternativas with trade-offs explicitos.
2. Pre-mortem with riscos identificados.
3. Decisao documentada with contexto e raciocinio.
4. Checklist anti-bias for code review.
