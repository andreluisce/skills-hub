# Playbook

## Source
Sustainable Web Design — Tom Greenwood

## Objetivo
Produto mais leve = mais rápido, mais acessível em rede móvel, mais barato para operar.

## Regras
- Performance budget definido antes de implementar novos fluxos.
- Imagens: tamanho certo, formato moderno (WebP/AVIF), compressão consistente.
- Fontes: subset e fallback controlados.
- Evitar bibliotecas pesadas para ganhos marginais.
- Rendering strategy por necessidade real — não por padrão único.
- Progressive enhancement: fluxo principal funciona em condições adversas.
- Core Web Vitals monitorados em produção como KPI.

## Core Web Vitals Targets
- LCP < 2.5s
- INP < 100ms
- CLS < 0.1

## Checklist
1. O fluxo principal carrega rápido em 4G mediano?
2. Existe conteúdo bloqueante desnecessário no above-the-fold?
3. O componente pode ser simplificado sem perda de valor?
4. A página falha com graça em dispositivos mais fracos?
