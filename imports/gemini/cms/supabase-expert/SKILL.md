---
name: supabase-expert
description: Skill para operação do backend Supabase do projeto. Use para gerenciar tabelas people/credentials, RLS, migrações e o fluxo de dados via scripts Python.
---
# Supabase Expert (Clergy Domain)

## Fluxo de Importação
- **Script**: `prepare_supabase_import.py`.
- **Integridade**: CPFs ausentes DEVEM ser gerados via hash determinístico com prefixo `999`.
- **Relacionamentos**: Vincular `people` -> `churches` -> `addresses` garantindo UUIDs consistentes.

## Segurança e Performance
- **RLS**: Garantir que as políticas permitam visualização apenas para usuários autenticados da Região Sudeste.
- **Tipagem**: Usar `Tables<'people'>` e `Tables<'credentials'>` para garantir que campos como `numeroCredencial` nunca sejam nulos.
