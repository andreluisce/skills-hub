# Playbook

## Objective
Audit and remediate OWASP Top 10 vulnerabilities in web applications systematically.

## Rules of Input Validation
- Validate all user input at the API boundary — never trust client-side validation alone.
- Use parameterized queries always — never string concatenation in SQL.
- Sanitize HTML output to prevent XSS — use DOMPurify or framework escaping.

## Rules of Access Control
- Verify authorization on every protected route and API endpoint.
- Deny by default — explicit allowlist, not blocklist.
- Log all authorization failures for anomaly detection.

## Rules of Security Headers
- CSP: restrict script sources to self and explicitly allowlisted CDNs.
- HSTS: enable with min 1 year max-age and includeSubDomains.
- X-Frame-Options: DENY unless embedding is explicitly required.
- Referrer-Policy: strict-origin-when-cross-origin.

## Rules of Dependencies
- Run `pnpm audit` on every CI run — block merge on Critical/High CVEs.
- Pin dependency versions in package.json — no open ranges in production.
- Review and update dependencies monthly.

## Rules of Reporting
- Classify every finding: Critical / High / Medium / Low / Informational.
- Critical and High findings block deployment — must be fixed before release.
- Document all accepted risks with owner, rationale, and review date.
