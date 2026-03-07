---
name: product-catenary
description: Map and sequence product delivery using catenary (dependency chain) planning. Use to identify the critical path, unblock parallel workstreams, sequence features by dependency order, and surface hidden blockers before sprint planning. Base operacional: # Playbook  ## Objective Map delivery dependencies to find the critical path, eliminate hidden blockers, and sequence work for maximum parallelism.  ## Rules of Dependency Mapping Use quando o pedido envolver: catenary, critical path, dependency mapping, delivery sequencing, sprint planning, roadmap sequencing, blocker analysis, workstream planning.
---

# Product Catenary Planning

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. List all features and tasks in the delivery scope.
2. Map dependencies between items — what blocks what.
3. Identify the critical path — the longest chain that determines earliest completion.
4. Find parallelizable workstreams — items with no shared dependencies.
5. Surface hidden blockers — shared infrastructure, design dependencies, third-party APIs.
6. Output sequenced delivery plan with phases, owners, and explicit unblocking milestones.

## Saída esperada
1. Dependency graph of all delivery items.
2. Critical path with estimated impact of delay.
3. Parallel workstream map per team/person.
4. Hidden blocker inventory with resolution owners.
5. Sequenced delivery plan by phase.
