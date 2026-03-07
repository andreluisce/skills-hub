---
name: software-architecture-fundamentals
description: Apply principles of software architecture from Richards and Ford. Use to make architectural decisions, evaluate trade-offs, classify architectural styles, and define fitness functions for continuous quality. Base operacional: # Playbook  ## Source Fundamentals of Software Architecture — Mark Richards & Neal Ford  ## Objective Use quando o pedido envolver: software architecture, architecture decision, adr, trade-offs, fitness functions, modularity, coupling, cohesion, architecture styles.
---

# Fundamentals of Software Architecture

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Define 3-7 priority quality characteristics for the system.
2. Assess coupling and cohesion by module — identify unwanted connascence.
3. Documentar decisao architecturel with ADR (contexto, decisao, consequencias).
4. Define fitness functions to continuously check characteristics in the CI.
5. Escolher estilo architecturel adequado ao contexto e documentar trade-offs.

## Saída esperada
1. Lista of caracteristicas of qualidade priorizadas.
2. ADRs for decisoes relevantes.
3. Fitness functions implementadas no CI.
4. Mapa of acoplamento e coesao by modulo.
