Skill: Security Auth & Authorization Hardening
Description: Harden authentication and authorization systems against common attack vectors. Use to audit JWT configuration, OAuth flows, session management, token storage, privilege escalation risks, and RBAC correctness. Base operacional: # Playbook  ## Objective Harden authentication and authorization systems to prevent unauthorized access and privilege escalation.  ## Rules of JWT
Triggers: auth security, jwt security, oauth hardening, session security, privilege escalation, token storage, rbac audit, broken authentication
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Audit JWT — algorithm (RS256 preferred), expiry, refresh rotation, and claim validation.
- 2. Review token storage — no JWT in localStorage, use httpOnly cookies or server sessions.
- 3. Verify OAuth flows — state parameter, PKCE, redirect URI validation.
- 4. Audit RBAC — map every role to permissions, verify no privilege escalation paths.
- 5. Test authorization on every protected endpoint with each role and anonymous access.
- 6. Review account recovery flows — password reset, magic link expiry, rate limiting.
Output Contract:
- JWT configuration audit with recommendations.
- Token storage security assessment.
- RBAC matrix with permission coverage.
- OAuth flow security checklist.
- Authorization test plan per role.