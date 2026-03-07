---
name: cr80-print-pro
description: Skill de precisão para o sistema de impressão ministerial. Use para manter o padrão CR-80 (85.6x53.98mm) a 300 DPI, garantindo alinhamento de campos e renderização via Sharp.
---
# CR-80 Print Pro (Project Specific)

## Especificações Técnicas
- **Resolução**: 300 DPI (constante `MM = 300 / 25.4`).
- **Dimensões**: 1012px x 638px (W x H).
- **Templates Suportados**: `oficial`, `aurora`, `royal`, `graphite`, `emerald`.
- **Componentes**: 
  - `generateCardFront`: Layout com sidebar, bottom band e grid de campos.
  - `generateCardBack`: Garantias constitucionais e assinatura do supervisor.

## Regras de Layout
- **Alinhamento**: A foto deve alinhar o topo com o título "Identidade Ministerial".
- **Filtros**: Usar `preservAspectRatio="xMidYMin slice"` para fotos para evitar distorção.
- **Output**: Sempre retornar Buffer PNG com compressão nível 0 para manter nitidez.
