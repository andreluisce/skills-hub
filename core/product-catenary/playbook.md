# Playbook

## Objective
Map delivery dependencies to find the critical path, eliminate hidden blockers, and sequence work for maximum parallelism.

## Rules of Dependency Mapping
- List every work item before mapping dependencies — don't map as you go.
- A dependency is concrete: "B cannot start until A is deployed", not "B is related to A".
- Distinguish hard dependencies (technical blocker) from soft dependencies (preferred order).

## Rules of Critical Path
- The critical path is the longest sequence of hard dependencies — it determines earliest completion.
- Any delay on a critical path item delays the entire delivery — treat these as highest priority.
- Items NOT on the critical path have float — they can be delayed without affecting delivery date.

## Rules of Parallel Workstreams
- Items with no shared dependencies can run in parallel — assign to different people/teams.
- Design tasks to minimize shared dependencies — feature flags and interface contracts enable parallelism.
- Surface shared infrastructure items early — they block multiple streams.

## Rules of Hidden Blockers
- Design dependencies (mocks, Figma) are often invisible — make them explicit.
- Third-party API access (credentials, sandboxes) is a common hidden blocker — resolve in sprint 0.
- Shared database schema changes block all features that depend on new columns — migrate first.

## Rules of Planning
- Re-run catenary analysis at the start of each planning cycle — dependencies change.
- When a critical path item is at risk, immediately identify acceleration options or scope cuts.
- Communicate the critical path to all stakeholders — blockers surface faster when everyone knows the path.
