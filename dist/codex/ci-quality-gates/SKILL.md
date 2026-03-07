---
name: ci-quality-gates
description: Define and enforce CI/CD quality gates that block merges on failing standards. Use to configure lint, type-check, test coverage, bundle size, and security scan gates in the pipeline. Base operacional: # Playbook  ## Objective Enforce automated quality standards on every pull request through a reliable, fast CI pipeline.  ## Rules of Gate Coverage Use quando o pedido envolver: ci, quality gates, pipeline, lint, type check, coverage threshold, bundle size, pr checks, github actions.
---

# CI Quality Gates

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Define gate categories — lint, typecheck, unit tests, E2E, bundle size, security scan.
2. Set thresholds — minimum coverage %, maximum bundle delta, zero type errors.
3. Configure pipeline jobs with fail-fast and parallel execution where possible.
4. Set branch protection rules — require all gates to pass before merge.
5. Add PR comment bots to surface coverage deltas and bundle size changes inline.
6. Review gate performance — keep total CI time under target threshold.

## Saída esperada
1. CI pipeline configuration (GitHub Actions or equivalent).
2. Gate thresholds documented per check type.
3. Branch protection rules specification.
4. PR feedback automation setup.
5. CI performance baseline and optimization plan.
