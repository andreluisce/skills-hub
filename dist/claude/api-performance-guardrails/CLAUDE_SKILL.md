Skill: API Performance Guardrails
Description: Define and review API contracts and performance policies, including HTTP semantics, caching, observability, fault tolerance, and backward compatibility across application and platform integrations. Base operacional: # Playbook  ## Objective Keep APIs predictable, fast, and observable for critical product flows.  ## Rules
Triggers: api guardrails, http contract, caching strategy, latency, reliability
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Specify request/response, errorr model, and authentication.
- 2. Validate HTTP semantics and version compatibility.
- 3. Define cache and invalidation policy by data domain.
- 4. Measure baseline latency and identify key bottlenecks.
- 5. Publish observability and risk-mitigation plan.
Output Contract:
- Endpoint or route technical contract.
- Cache and invalidation matrix.
- Performance and reliability risk list.
- Operational monitoring checklist.