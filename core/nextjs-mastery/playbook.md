# Playbook

## Objetivo
Projetar aplicações Next.js 15 com mínimo JS no cliente e máxima previsibilidade operacional.

## Regras
- Server Components por padrão. Client apenas com interatividade real.
- Cache e invalidação explícitos por tipo de dado — nunca implícito.
- Error/loading boundaries no nível correto de rota.
- Empurre o boundary 'use client' o mais fundo possível na árvore.
- Parallel data fetching com Promise.all em Server Components.
- React cache() para deduplicação de requests no mesmo render.
- Tag-based revalidation com revalidateTag() em Server Actions.
- dynamic imports para componentes pesados não críticos.
- next/image para todas as imagens — size, format, priority explícitos.
