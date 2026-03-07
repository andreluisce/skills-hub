# Playbook

## Objective
Harden authentication and authorization systems to prevent unauthorized access and privilege escalation.

## Rules of JWT
- Use RS256 (asymmetric) — never HS256 with shared secret in distributed systems.
- Validate iss, aud, exp, and iat claims on every token verification.
- Set access token expiry to 1 hour — never issue non-expiring tokens.

## Rules of Token Storage
- Store tokens in httpOnly, Secure, SameSite=Strict cookies — never localStorage.
- Never log token values — redact in all log outputs.
- Implement token revocation list for immediate invalidation when needed.

## Rules of RBAC
- Map every role to a minimum permission set — principle of least privilege.
- No implicit role inheritance — all permissions must be explicit.
- Test every endpoint with every role — document the matrix.

## Rules of OAuth
- Always use PKCE — never implicit flow.
- Validate `state` parameter on every callback to prevent CSRF.
- Restrict authorized redirect URIs — no wildcard patterns.

## Rules of Account Security
- Rate limit login attempts — lock account after N failures with progressive delay.
- Password reset links expire in 15 minutes — single use only.
- Notify users via email on password change, new device login, and role change.
