---
name: security-owasp
description: Apply OWASP Top 10 principles to audit and harden web applications. Use to identify and fix injection vulnerabilities, XSS, insecure deserialization, broken access control, and security misconfigurations. Base operacional: # Playbook  ## Objective Audit and remediate OWASP Top 10 vulnerabilities in web applications systematically.  ## Rules of Input Validation Use quando o pedido envolver: owasp, xss, sql injection, security audit, vulnerability, input validation, csrf, security misconfiguration, broken access control.
---

# OWASP Security Standards

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Run OWASP Top 10 checklist scan against application entry points.
2. Audit all user inputs for validation, sanitization, and parameterized queries.
3. Review access control — ensure authorization checks on every protected route/action.
4. Inspect HTTP headers — CSP, HSTS, X-Frame-Options, Referrer-Policy.
5. Review dependency tree for known CVEs using audit tools.
6. Document findings by severity (Critical/High/Medium/Low) with remediation steps.

## Saída esperada
1. OWASP Top 10 audit report with findings per category.
2. Input validation inventory per form/API endpoint.
3. HTTP security headers configuration.
4. Dependency CVE report with remediation priority.
5. Remediation plan ordered by severity.
