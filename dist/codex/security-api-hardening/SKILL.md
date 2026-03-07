---
name: security-api-hardening
description: Harden API endpoints against abuse, data exposure, and unauthorized access. Use to implement rate limiting, CORS policies, CSP headers, input validation, and API authentication patterns. Base operacional: # Playbook  ## Objective Harden all API endpoints against abuse, unauthorized access, and data exposure.  ## Rules of Authentication Use quando o pedido envolver: api security, rate limiting, cors, csp, api hardening, ddos protection, api authentication, input sanitization.
---

# API Security Hardening

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Audit every API route for authentication and authorization enforcement.
2. Implement rate limiting per endpoint and per user with appropriate thresholds.
3. Configure CORS — allowlist specific origins, restrict methods and headers.
4. Set security headers — CSP, HSTS, X-Content-Type-Options, Permissions-Policy.
5. Validate and sanitize all inputs at the API boundary — reject malformed requests early.
6. Audit response payloads — no sensitive fields leaked, consistent error format.

## Saída esperada
1. API security audit report per endpoint.
2. Rate limiting configuration with thresholds.
3. CORS policy definition per environment.
4. Security headers configuration for Next.js.
5. Input validation inventory per endpoint.
