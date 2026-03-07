Skill: Product Catenary Planning
Description: Map and sequence product delivery using catenary (dependency chain) planning. Use to identify the critical path, unblock parallel workstreams, sequence features by dependency order, and surface hidden blockers before sprint planning. Base operacional: # Playbook  ## Objective Map delivery dependencies to find the critical path, eliminate hidden blockers, and sequence work for maximum parallelism.  ## Rules of Dependency Mapping
Triggers: catenary, critical path, dependency mapping, delivery sequencing, sprint planning, roadmap sequencing, blocker analysis, workstream planning
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. List all features and tasks in the delivery scope.
- 2. Map dependencies between items — what blocks what.
- 3. Identify the critical path — the longest chain that determines earliest completion.
- 4. Find parallelizable workstreams — items with no shared dependencies.
- 5. Surface hidden blockers — shared infrastructure, design dependencies, third-party APIs.
- 6. Output sequenced delivery plan with phases, owners, and explicit unblocking milestones.
Output Contract:
- Dependency graph of all delivery items.
- Critical path with estimated impact of delay.
- Parallel workstream map per team/person.
- Hidden blocker inventory with resolution owners.
- Sequenced delivery plan by phase.