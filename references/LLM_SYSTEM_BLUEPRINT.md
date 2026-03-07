# LLM System Blueprint

## Blocos
- Agents: responsabilidade única por papel.
- Skills: capacidades especializadas reutilizáveis.
- Tools: execução externa (MCP preferencial).
- Memory: sessão, RAG, perfil e log de decisões.
- Workflows: orquestração com handoffs explícitos.
- Evaluators: scoring e gates de qualidade.
- Policies: segurança, compliance e limites de autonomia.
- Observability: métricas, tracing, custo e incidentes.

## Onde entra MCP
MCP fica na camada de tools como padrão de integração.

### MCP responsibilities
- Uniformizar acesso a sistemas externos.
- Aplicar escopo e permissões por agente/skill.
- Permitir auditoria e telemetria por chamada.

### Regras práticas
1. Se existir MCP para um domínio, usar MCP antes de SDK direto.
2. Registrar cada servidor no `mcp/registry/mcp-registry.yaml`.
3. Ligar policies de aprovação humana para operações destrutivas.
4. Coletar métricas de latência, erro e custo por ferramenta.

## Checklist de produção
- Contratos de agent/skill/workflow definidos.
- Registry MCP com escopos mínimos.
- Policies de segurança ativas.
- Evaluators com threshold de aprovação.
- Telemetria e trilha de auditoria habilitadas.
