Skill: E2E Testing with Playwright
Description: Design and implement end-to-end tests with Playwright. Use to test critical user flows, form submissions, auth scenarios, and multi-page interactions with reliable selectors and CI integration. Base operacional: # Playbook  ## Objective Build a reliable, maintainable E2E test suite with Playwright that catches real user-facing regressions.  ## Rules of Selector Strategy
Triggers: e2e, playwright, end to end testing, browser testing, user flow testing, integration test, smoke test
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Identify critical user flows — auth, core feature journeys, payment, onboarding.
- 2. Write page objects for reusable selectors and actions per page/component.
- 3. Implement tests using data-testid attributes — never couple to CSS classes or text.
- 4. Handle auth state with storageState — avoid logging in on every test.
- 5. Configure CI to run tests in headed/headless mode with retries and screenshots on failure.
- 6. Set coverage thresholds for critical paths and block merge if flows break.
Output Contract:
- E2E test suite for critical user flows.
- Page object library for tested pages.
- CI configuration with Playwright runner.
- Test coverage map per user journey.
- Failure artifact strategy (screenshots, traces, videos).