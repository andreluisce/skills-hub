Skill: Secrets Management
Description: Design and audit secrets management practices for applications. Use to ensure no hardcoded credentials, proper environment variable handling, secret rotation policies, and vault integration. Base operacional: # Playbook  ## Objective Ensure all credentials, API keys, and secrets are stored, rotated, and accessed securely.  ## Rules of Secret Storage
Triggers: secrets, environment variables, credentials, api keys, secret rotation, vault, hardcoded secrets, env files
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Scan codebase and git history for hardcoded credentials, API keys, and tokens.
- 2. Audit .env files — ensure .env.local is gitignored, .env.example is committed.
- 3. Classify secrets by sensitivity — public keys vs private keys vs service credentials.
- 4. Define rotation policy per secret type with owner and cadence.
- 5. Configure CI/CD secrets with least-privilege scopes per environment.
- 6. Document secret inventory with location, owner, rotation schedule, and access list.
Output Contract:
- Hardcoded secret scan report.
- Secret inventory with classification and rotation policy.
- CI/CD secrets configuration guide.
- .env.example template with all required keys documented.
- Remediation plan for exposed or weak secrets.