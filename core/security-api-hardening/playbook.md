# Playbook

## Objective
Harden all API endpoints against abuse, unauthorized access, and data exposure.

## Rules of Authentication
- Every non-public endpoint must verify authentication before processing request.
- Use middleware for auth checks — never rely on individual route handlers to remember.
- Return 401 for unauthenticated and 403 for unauthorized — never 404 to hide existence.

## Rules of Rate Limiting
- Apply rate limiting per user + per endpoint — not just per IP.
- Use sliding window algorithm — not fixed window (prevents burst attacks at window boundary).
- Return 429 with Retry-After header — never silently drop requests.

## Rules of CORS
- Allowlist specific origins — never use `*` in production.
- Restrict methods to only those the endpoint supports.
- Preflight responses must not cache longer than 24 hours.

## Rules of Security Headers (Next.js)
- Configure in next.config.js headers() — apply globally, override per route.
- CSP: use nonces for inline scripts — never `unsafe-inline` in production.
- Enable HSTS with preload for all production domains.

## Rules of Response Safety
- Never expose stack traces, internal paths, or DB error messages in API responses.
- Use consistent error format with opaque error codes — details go to server logs only.
- Audit all response payloads — strip fields not explicitly required by the client contract.
