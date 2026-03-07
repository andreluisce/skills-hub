# MCP Tool Layer

MCP (Model Context Protocol) entra na arquitetura como barramento padrão de ferramentas.

## Papel do MCP
- Expor ferramentas externas com contrato uniforme para os agentes.
- Isolar detalhes de autenticação, transporte e permissões.
- Permitir observabilidade e policy por chamada.

## Princípio
Agente e skill nunca falam direto com API externa quando existe servidor MCP para o domínio.

## Fluxo
Agent/Skill -> Tool Adapter -> MCP Client -> MCP Server -> External System
