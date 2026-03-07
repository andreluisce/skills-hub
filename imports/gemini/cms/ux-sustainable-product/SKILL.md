---
name: ux-sustainable-product
description: Especialista em UX de alta performance e sustentabilidade digital. Use para reduzir peso, energia e friccao sem degradar experiencia.
---

# UX Sustainable Product

## Purpose
Esta skill conecta performance, experiencia e impacto ambiental. O principio central: cada byte transferido, script executado e renderizacao desnecessaria tem custo para usuario, infraestrutura e planeta.

## Product Thesis
Sustentabilidade digital nao e trilha paralela. E parte de UX de qualidade. Produto mais leve tende a ser:

1. mais rapido,
2. mais acessivel em rede movel,
3. mais barato para operar,
4. menos intensivo em energia.

## Operational Principles

### 1) Performance budget por jornada
Definir limites para peso de pagina, tempo de interatividade e requests criticos nos fluxos prioritarios.

### 2) Asset discipline

1. Imagens no tamanho certo, formato adequado, compressao consistente.
2. Fontes com subset e fallback controlados.
3. Evitar bibliotecas pesadas para ganhos marginais.

### 3) Rendering strategy
Escolher renderizacao (SSR/SSG/CSR) por necessidade real, nao por padrao unico. Reduzir trabalho no cliente quando nao agrega valor.

### 4) Progressive enhancement
Fluxos principais devem funcionar mesmo em condicoes adversas de rede/dispositivo.

### 5) Medicao continua
Performance e emissao estimada devem ser monitoradas como KPI de produto, nao apenas metrica tecnica ocasional.

## UX + Sustainability Checklist

1. O fluxo principal carrega rapido em 4G mediano?
2. Existe conteudo bloqueante desnecessario no above-the-fold?
3. O componente pode ser simplificado sem perda de valor?
4. A pagina falha com graca em dispositivos mais fracos?

## Deliverables

1. Diagnostico de custo por tela/rota.
2. Plano de reducao de peso e scripts.
3. Priorizacao por impacto em UX e carbono estimado.
4. Guardrails para PRs de frontend (asset, bundle, render).

## References

1. Tom Greenwood, *Sustainable Web Design*.
2. Jeff Gothelf, Josh Seiden, *Lean UX*.
3. Jon Yablonski, *Laws of UX*.
4. Steve Schoger, Adam Wathan, *Refactoring UI*.
