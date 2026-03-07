---
name: cms-business-operations
description: Habilidade para gerir processos de negócio do CMS Ministerial. Use para processos de importação de dados, validação de CPFs (incluindo fictícios 999), enriquecimento de dados regionais (SP, MG, RJ, ES) e regras de impressão de credenciais.
---

# CMS Business Operations

Habilidade focada no domínio de negócio: gestão de ministros, igrejas e credenciais ministerial.

## Processos de Importação

### Fluxo de Dados
1. **Fontes**: Arquivos Excel/CSV em `data/csv_sources`.
2. **Normalização**: Processamento via `prepare_supabase_import.py` para gerar o JSON enriquecido.
3. **Destino**: Tabelas `people`, `addresses`, `churches` e `credentials` no Supabase.

### Regras de CPF
- **CPFs Reais**: Devem ser validados e limpos (apenas dígitos).
- **CPFs Fictícios**: Se um registro não possui CPF, o sistema gera um CPF determinístico com prefixo **`999`**. Isso garante que o registro não seja perdido e seja rastreável.

## Gestão Regional
A aplicação opera na Região Sudeste, com regras específicas por estado:
- **São Paulo (SP)**
- **Minas Gerais (MG)**
- **Rio de Janeiro (RJ)**
- **Espírito Santo (ES)**

Sempre verifique o campo `regionLabel` ao gerar credenciais.

## Emissão de Credenciais
- **Templates**: `oficial`, `aurora`, `royal`, `graphite`, `emerald`.
- **DPI**: Impressão otimizada para 300 DPI (padrão CR-80).
- **Verso**: Contém garantias constitucionais e informações do Supervisor Regional.

## Referências de Dados
- Scripts de Importação: `prepare_supabase_import.py`
- Fontes de Dados: `data/csv_sources`
- Resumo de Evangelistas: `apps/cms/relatorio_evangelistas.txt`
