Skill: CMS Development Standards
Description: Maintain technical project standards. Use to ensure dark theme, avoid hardcoded texts, manage Supabase types and operate monorepo with pnpm/turbo. Base operacional: # Playbook  ## Objective Ensure technical and architectural integrity of the project over time.  ## Mandatory Rules
Triggers: dev standards, dark theme, hardcoded text, supabase types, monorepo standards, code standards
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Auditar components by uso of cores hardcoded e textos fixos.
- 2. Verificar que todos os tipos of entidade usam Tables<'...'> gerados.
- 3. Confirmar que logica of fetch reside in pacote api-client, not in apps.
- 4. Validar commits with standard semantic atomic.
- 5. Executar deploy via script padronizado e verificar health checks.
Output Contract:
- Relatorio of violactions of padroes by arquivo.
- Lista of textos hardcoded for externalizar.
- Mapa of tipos locais for migrar for gerados.
- Checklist pre-deploy.