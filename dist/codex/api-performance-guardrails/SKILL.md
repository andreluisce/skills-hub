---
name: api-performance-guardrails
description: Define and review API contracts and performance policies, including HTTP semantics, caching, observability, fault tolerance, and backward compatibility across application and platform integrations. Base operacional: # Playbook  ## Objective Keep APIs predictable, fast, and observable for critical product flows.  ## Rules Use quando o pedido envolver: api guardrails, http contract, caching strategy, latency, reliability.
---

# API Performance Guardrails

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Specify request/response, errorr model, and authentication.
2. Validate HTTP semantics and version compatibility.
3. Define cache and invalidation policy by data domain.
4. Measure baseline latency and identify key bottlenecks.
5. Publish observability and risk-mitigation plan.

## Saída esperada
1. Endpoint or route technical contract.
2. Cache and invalidation matrix.
3. Performance and reliability risk list.
4. Operational monitoring checklist.
