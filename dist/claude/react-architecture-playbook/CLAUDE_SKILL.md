Skill: React Architecture Playbook
Description: Structure and refactor React/Next.js architecture with explicit boundaries, component contracts, anti-pattern removal, and incremental evolution focused on maintainability and performance. Base operacional: # Playbook  ## Objective Make frontend architecture predictable, modular, and easy to evolve.  ## Rules
Triggers: react architecture, component architecture, anti patterns react, frontend refactor, domain boundaries
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Identify domain boundaries and undesired coupling.
- 2. Separate orchestration, presentation, and external integrations.
- 3. Define explicit contracts for props, state, and events.
- 4. Standardize async state handling and failure behavior.
- 5. Deliver refactoring in small batches with behavior-focused tests.
Output Contract:
- Component and boundary map.
- Anti-pattern list with proposed fixes.
- Incremental refactoring plan.
- Test and regression criteria.