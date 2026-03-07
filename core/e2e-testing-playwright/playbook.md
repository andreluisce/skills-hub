# Playbook

## Objective
Build a reliable, maintainable E2E test suite with Playwright that catches real user-facing regressions.

## Rules of Selector Strategy
- Use data-testid attributes exclusively — never CSS classes, text content, or XPath.
- data-testid must be stable across refactors — semantic, not structural (e.g. `data-testid="submit-button"`).
- Never select by visual properties (color, position) — tests must be layout-independent.

## Rules of Test Design
- One user flow per test file — no mega tests that test multiple unrelated flows.
- Tests must be independent — no shared state between tests, no order dependency.
- Use `storageState` for auth — log in once per test worker, not per test.

## Rules of Reliability
- Use `page.getByTestId()` with `await expect().toBeVisible()` — never bare `.click()` without waiting.
- Never use fixed `page.waitForTimeout()` — wait for elements or network events instead.
- Set max retries to 2 in CI — flaky tests get investigated, not silently retried indefinitely.

## Rules of CI Integration
- Run E2E in CI on every PR targeting main — block merge on failure.
- Capture screenshots, videos, and traces on failure — attach to CI artifacts.
- Separate smoke suite (critical paths, fast) from full suite (all flows, slower).

## Rules of Maintenance
- Delete tests for removed features immediately — stale tests are worse than no tests.
- Review E2E suite time monthly — keep smoke suite under 5 minutes.
