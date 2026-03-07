# skills-hub

Projeto centralizador de skills e blueprint de sistema multi-agente para Codex, Claude e Gemini.

## Comandos

- `npm run validate`
- `npm run build`
- `npm run audit -- --project cog-ministry-docs --runner gemini`
- `npm run test`

### Audit (prompt orquestrador)

Gera um prompt master (`AUDIT_PROMPT.md`) e prompts por fase em:
`dist/audit/<project>/`.

Exemplos:

- `node cli/skills-hub.mjs audit --project cog-ministry-docs`
- `node cli/skills-hub.mjs audit --project ~/workspaces/personal/cog-ministry-docs --runner claude`
- `node cli/skills-hub.mjs audit --project cog-ministry-docs --out /tmp/audit-prompts`

## Estrutura

- `core/`: skills canônicas (`skill.yaml` + `playbook.md`)
- `adapters/`: transpilers por agente
- `dist/`: artefatos gerados por target
- `schemas/`: contratos versionados
- `cli/`: runtime local
- `agents/`: contratos de agentes
- `skills/`: contratos base de skills
- `tools/`: camada de integração (MCP preferencial)
- `mcp/`: registry e configuração de servidores MCP
- `memory/`: políticas e contratos de memória
- `workflows/`: contratos de orquestração
- `evaluators/`: critérios de scoring e gates
- `policies/`: regras de segurança/compliance
- `observability/`: telemetria e trilhas de execução

## MCP na arquitetura

MCP entra na camada `tools/` como barramento padrão para integrar sistemas externos com contratos, permissões e auditoria.
O registry fica em `mcp/registry/mcp-registry.yaml`.
