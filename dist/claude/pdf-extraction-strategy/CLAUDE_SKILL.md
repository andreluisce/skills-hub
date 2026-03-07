Skill: PDF Data Extraction Strategy
Description: Design and implement strategies for extracting structured data from PDF documents. Use to select the right parsing approach (native text, OCR, LLM-assisted), handle tables, forms, and mixed content, and map extracted data to target schemas. Base operacional: # Playbook  ## Objective Extract structured, validated data from PDF documents reliably across document types and quality levels.  ## Rules of Classification
Triggers: pdf extraction, pdf parsing, ocr, document parsing, table extraction, form data extraction, unstructured data, document processing
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Classify PDF type — native text, scanned image, form, or mixed content.
- 2. Select extraction approach — native text (pdfjs), OCR (Tesseract/AWS Textract), or LLM-assisted.
- 3. Extract raw content and identify structural elements (tables, headers, fields).
- 4. Map extracted fields to target data schema with type coercion rules.
- 5. Validate extracted data against schema contracts — flag low-confidence extractions.
- 6. Handle edge cases — multi-page documents, rotated content, merged cells in tables.
Output Contract:
- PDF classification and extraction approach decision.
- Extraction pipeline implementation with tool selection.
- Field mapping from PDF to target schema.
- Confidence scoring per extracted field.
- Edge case handling inventory.