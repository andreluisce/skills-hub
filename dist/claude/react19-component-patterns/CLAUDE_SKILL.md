Skill: React 19 Component Patterns
Description: Aplicar padrões avançados de componentes React 19+ para reduzir acoplamento, melhorar composição e eliminar anti-patterns em interfaces escaláveis com shadcn/ui e arquitetura orientada a domínio. Base operacional: # Playbook  ## Objetivo Padronizar componentes React 19 para previsibilidade de manutenção e evolução.  ## Regras
Triggers: react 19, component patterns, anti patterns, refactor components, composition
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Auditar componentes críticos e identificar anti-patterns recorrentes.
- 2. Separar apresentação, orquestração e regras de domínio.
- 3. Aplicar composição com contratos explícitos de props e estados.
- 4. Consolidar padrões de acessibilidade e feedback de interação.
- 5. Definir plano de refatoração incremental com critérios de aceite.
Output Contract:
- Diagnóstico de anti-patterns por componente.
- Padrão alvo de composição e contratos.
- Estratégia de refatoração por lotes.
- Critérios de acessibilidade e consistência.