# Playbook

## Objective
Enforce automated quality standards on every pull request through a reliable, fast CI pipeline.

## Rules of Gate Coverage
- Mandatory gates: lint, typecheck, unit tests, build success.
- Recommended gates: E2E smoke, bundle size delta, security audit.
- Every gate must have a clear pass/fail threshold — no ambiguous outcomes.

## Rules of Pipeline Design
- Run independent jobs in parallel — lint + typecheck + unit tests simultaneously.
- Fail fast on the cheapest checks first — don't run E2E if typecheck fails.
- Total CI time target: under 10 minutes for the full pipeline.

## Rules of Coverage
- Set minimum unit test coverage threshold per module — enforce with `--coverage --threshold`.
- Block merge if coverage drops below threshold — not just if tests fail.
- Report coverage delta in PR comment — surface regressions before merge.

## Rules of Bundle Size
- Track bundle size per build — alert on increases over 5% from baseline.
- Use `next/bundle-analyzer` to investigate regressions before merging.
- Document bundle budget per route in the project README.

## Rules of Branch Protection
- Require all mandatory gates to pass before merge — no bypasses except for repo admins.
- Require at least 1 approving review after CI passes.
- Delete head branches automatically after merge — keep branch list clean.
