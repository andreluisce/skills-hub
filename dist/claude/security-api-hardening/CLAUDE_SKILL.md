Skill: API Security Hardening
Description: Harden API endpoints against abuse, data exposure, and unauthorized access. Use to implement rate limiting, CORS policies, CSP headers, input validation, and API authentication patterns. Base operacional: # Playbook  ## Objective Harden all API endpoints against abuse, unauthorized access, and data exposure.  ## Rules of Authentication
Triggers: api security, rate limiting, cors, csp, api hardening, ddos protection, api authentication, input sanitization
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Audit every API route for authentication and authorization enforcement.
- 2. Implement rate limiting per endpoint and per user with appropriate thresholds.
- 3. Configure CORS — allowlist specific origins, restrict methods and headers.
- 4. Set security headers — CSP, HSTS, X-Content-Type-Options, Permissions-Policy.
- 5. Validate and sanitize all inputs at the API boundary — reject malformed requests early.
- 6. Audit response payloads — no sensitive fields leaked, consistent error format.
Output Contract:
- API security audit report per endpoint.
- Rate limiting configuration with thresholds.
- CORS policy definition per environment.
- Security headers configuration for Next.js.
- Input validation inventory per endpoint.