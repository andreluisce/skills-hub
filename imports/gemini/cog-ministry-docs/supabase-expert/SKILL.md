# Supabase Ministerial Expert

## Table Schema: `submissions`
| Column | Type | Description |
|---|---|---|
| id | uuid | Primary Key |
| applicant_id | uuid | FK to auth.users |
| form_data | jsonb | Full form content (Marriage/Divorce history) |
| signature_url | text | Path in Supabase Storage |
| status | text | pending, approved, rejected |
| locale | text | pt or en |

## RLS Policies
- **Applicants**: Can only insert their own submissions and read their own status.
- **Admins**: Full read access to all submissions; can update status.

## Storage
- `signatures/`: Private bucket for signature PNGs.
- `generated_pdfs/`: Secure storage for generated PDF documents.
