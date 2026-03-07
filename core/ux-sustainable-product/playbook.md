# Playbook

## Source
Sustainable Web Design — Tom Greenwood

## Objective
Lighter product = faster, more accessible on the mobile network, cheaper to operate.

## Rules
- Performance budget definido antes of implementar novos flows.
- Images: right size, modern format (WebP/AVIF), consistent compression.
- Fontes: subset and fallback controlados.
- Evitar bibliotecas pesadas for ganhos marginais.
- Rendering strategy by real need — not by single standard.
- Progressive enhancement: main flow works in adverse conditions.
- Core Web Vitals monitored in production as KPI.

## Core Web Vitals Targets
- LCP < 2.5s
- INP < 100ms
- CLS < 0.1

## Checklist
1. Does the main stream load quickly on average 4G?
2. Is there unnecessary blocking content in above-the-fold?
3. O component pode ser simplificado without perda of valor?
4. Does the page crash gracefully on weaker devices?
