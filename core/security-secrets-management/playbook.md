# Playbook

## Objective
Ensure all credentials, API keys, and secrets are stored, rotated, and accessed securely.

## Rules of Secret Storage
- Never commit secrets to git — not even in deleted commits (use git history scan).
- All secrets in CI/CD go through the platform secret store (GitHub Secrets, Vault).
- .env.local is always in .gitignore — .env.example with placeholder values is committed.

## Rules of Classification
- Level 1 (Public): publishable keys, public OAuth client IDs — can be in code.
- Level 2 (Internal): API keys for non-sensitive services — environment variables.
- Level 3 (Critical): service_role keys, payment credentials, signing keys — Vault only.

## Rules of Rotation
- Rotate Level 3 secrets every 90 days minimum.
- Rotate immediately on suspected compromise — no exceptions.
- Support zero-downtime rotation: deploy new secret → verify → revoke old.

## Rules of Access
- Each service/environment gets its own secret set — no shared credentials.
- Service accounts have minimum required scopes — no admin keys for read-only services.
- Audit secret access logs monthly — alert on unexpected access patterns.

## Rules of Documentation
- Maintain a secret inventory: name, owner, environment, rotation date, and access list.
- Document how to rotate each secret — runbook must exist before secret is used in production.
