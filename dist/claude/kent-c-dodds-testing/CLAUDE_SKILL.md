Skill: Kent C. Dodds Testing Strategy
Description: Define and apply user-oriented testing strategy with principles from Kent C. Dodds and Testing Library, prioritizing real confidence of product, tests of integration, accessible selectors and mocks at the network border. Base operacional: # Playbook  ## Objective Maximize confidence of product with tests that validate real behavior and not implementation details.  ## Rules
Triggers: kent c dodds, testing trophy, testing library, react testing library, user centric tests, msw
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Map critical user flows and classify risk by functionality.
- 2. Define practical pyramid with Testing Trophy and focus on integration.
- 3. Write tests from a user perspective with accessible queries and user-events.
- 4. Replace fragile mocks with MSW and mock only external borders.
- 5. Audit suite stability, speed and false positive rate.
Output Contract:
- Matrix of critical scenarios and recommended level of testing.
- Guide of test patterns (Arrange/Act/Assert, queries and mocks).
- Plan of migration of fragile tests to tests of behavior.
- Checklist of suite quality and reliability.