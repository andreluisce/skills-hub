---
name: pdf-extraction-strategy
description: Design and implement strategies for extracting structured data from PDF documents. Use to select the right parsing approach (native text, OCR, LLM-assisted), handle tables, forms, and mixed content, and map extracted data to target schemas. Base operacional: # Playbook  ## Objective Extract structured, validated data from PDF documents reliably across document types and quality levels.  ## Rules of Classification Use quando o pedido envolver: pdf extraction, pdf parsing, ocr, document parsing, table extraction, form data extraction, unstructured data, document processing.
---

# PDF Data Extraction Strategy

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Classify PDF type — native text, scanned image, form, or mixed content.
2. Select extraction approach — native text (pdfjs), OCR (Tesseract/AWS Textract), or LLM-assisted.
3. Extract raw content and identify structural elements (tables, headers, fields).
4. Map extracted fields to target data schema with type coercion rules.
5. Validate extracted data against schema contracts — flag low-confidence extractions.
6. Handle edge cases — multi-page documents, rotated content, merged cells in tables.

## Saída esperada
1. PDF classification and extraction approach decision.
2. Extraction pipeline implementation with tool selection.
3. Field mapping from PDF to target schema.
4. Confidence scoring per extracted field.
5. Edge case handling inventory.
