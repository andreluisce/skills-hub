# Playbook

## Objective
Extract structured, validated data from PDF documents reliably across document types and quality levels.

## Rules of Classification
- Always classify the PDF before choosing extraction approach.
- Native text PDF (has selectable text): use pdfjs or pdf-parse — fastest, most accurate.
- Scanned PDF (image only): require OCR — Tesseract for simple layouts, AWS Textract for complex tables.
- Mixed PDF: split pages by type and apply appropriate method per page.

## Rules of Extraction
- Never rely on fixed pixel coordinates or page positions — documents reformat across versions.
- Use structural anchors (headers, labels, form field names) to locate data — not position.
- Extract raw text first, then apply parsing — separation of concerns.

## Rules of Tables
- Detect table boundaries explicitly — do not assume tabular data is always rectangular.
- Handle merged cells, spanning headers, and multi-line cell content.
- Validate table completeness: expected row count, column count, and header presence.

## Rules of Validation
- Every extracted field must have a confidence score — low confidence triggers human review.
- Validate extracted data against target schema before writing to database.
- Log all extraction failures with document ID and page number for debugging.

## Rules of Edge Cases
- Rotated pages must be detected and corrected before extraction.
- Multi-document PDFs (multiple documents merged) need document boundary detection.
- Password-protected PDFs must fail gracefully with a clear error, not silently extract garbage.
