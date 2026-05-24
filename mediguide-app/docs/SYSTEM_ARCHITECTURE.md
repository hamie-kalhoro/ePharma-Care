# MediGuide Pro E-Pharmacy Architecture

## Product Principle

MediGuide Pro separates patient self-service, licensed doctor decision-making, pharmacist validation, AI support, and admin governance. AI may summarize, educate, detect risk, and draft notes, but diagnosis, prescription approval, substitution approval, and dispensing remain human-controlled workflows.

## Core Workflow

```text
Patient upload
  -> AI extraction and safety triage
  -> Doctor review and prescription
  -> Pharmacist validation
  -> Counselling and delivery
  -> Follow-up and refill reminders
```

If no doctor is available:

```text
Patient asks AI
  -> AI provides education only
  -> AI detects emergency/severe symptoms
  -> Book doctor, urgent care, or emergency escalation
```

## Role Boundaries

| Role | Can Do | Cannot Do |
| --- | --- | --- |
| Patient | Upload reports, symptoms, history, prescriptions; book doctor; order verified medicines; ask AI for education | Self-prescribe controlled/restricted medication |
| Doctor | Review AI summaries, reports, symptoms, history; prescribe; counsel; schedule follow-up | Skip audit trail or pharmacy validation |
| Pharmacist | Verify prescription, validate inventory, dispense, counsel, manage substitutions with approval | Change therapy without approval |
| Patient AI | Explain medicines/reports, adherence guidance, side effects, emergency detection | Diagnose, prescribe, or override doctor/pharmacist |
| Doctor AI | Summaries, abnormal values, interaction checks, SOAP/counselling drafts | Final clinical decisions |
| Admin | Verify providers, monitor audits, AI logs, security, analytics | Access medical data without authorized purpose |

## Required Pages

- Landing/storefront: verified medicine discovery, prescription upload entry, pharmacy safety messaging.
- Patient dashboard: upload case files, consultation booking, AI education, prescription history, refill/follow-up reminders, emergency contact.
- Doctor dashboard: pending consultations, AI summary, uploaded reports, urgent cases, e-prescription builder.
- AI assistant: two modes: patient education and doctor productivity.
- Prescription viewer: QR verification, digital signature, dosage, warnings, counselling notes.
- Upload reports: prescription, labs, images, symptoms, medical history, current medicines, allergies.
- Consultation room: chat/video, notes, report viewer, doctor handoff.
- Medicine order: only verified prescription or OTC-safe items go to pharmacy.
- Counselling: pharmacist/doctor counselling notes, side effects, drug-food interactions.
- Admin analytics: provider verification, prescription audits, AI moderation, security monitoring.

## Database Model

Recommended PostgreSQL entities:

- `users`: id, role, name, email, phone, mfa_enabled, status, created_at.
- `patients`: user_id, dob, sex, emergency_contact, allergies, chronic_conditions.
- `doctors`: user_id, license_no, specialty, verification_status, availability_status.
- `pharmacists`: user_id, license_no, pharmacy_id, verification_status.
- `appointments`: patient_id, doctor_id, status, scheduled_at, urgency, reason.
- `medical_reports`: patient_id, uploaded_by, file_url, type, encrypted_metadata, ai_summary_id.
- `symptom_intakes`: patient_id, symptoms_json, severity, emergency_flags.
- `ai_summaries`: patient_id, report_id, mode, summary_json, safety_flags, created_at.
- `prescriptions`: patient_id, doctor_id, status, qr_code, digital_signature, signed_at.
- `prescription_items`: prescription_id, medicine_id, dosage, frequency, duration, precautions.
- `medicines`: name, generic_name, category, rx_required, inventory_status, warnings.
- `pharmacy_validations`: prescription_id, pharmacist_id, status, substitution_request, notes.
- `counselling_notes`: patient_id, prescription_id, author_id, notes, language, follow_up_at.
- `ai_conversations`: user_id, mode, messages_ref, red_flags, handoff_status.
- `orders`: patient_id, prescription_id, status, delivery_id, payment_id.
- `deliveries`: order_id, courier_status, address_ref, delivered_at.
- `notifications`: user_id, type, text, read_at.
- `audit_logs`: actor_id, action, entity_type, entity_id, reason, ip, created_at.

Medical files and chat transcripts should be encrypted at rest. Store large AI chat payloads in MongoDB or object storage with relational references in PostgreSQL.

## API Structure

```text
/api/auth/login
/api/auth/verify
/api/patients/:id/profile
/api/patients/:id/reports
/api/intake/symptoms
/api/appointments
/api/doctors/availability
/api/ai/patient-chat
/api/ai/doctor-assist
/api/prescriptions
/api/prescriptions/:id/sign
/api/prescriptions/:id/verify
/api/pharmacy/validation
/api/orders
/api/counselling-notes
/api/admin/audits
/api/admin/ai-moderation
```

Every protected endpoint should enforce JWT claims, role-based access, patient consent, and audit logging.

## AI Workflow Logic

Patient AI:

1. Classify message: education, dosage explanation, side effect, report explanation, emergency risk.
2. If severe symptom or unsafe request is detected, stop normal answer and escalate.
3. Provide simple educational guidance with disclaimer.
4. Offer doctor booking or emergency contact.
5. Log red flags and handoff status.

Doctor AI:

1. OCR/extract report and prescription files.
2. Normalize labs, medicines, allergies, history.
3. Generate structured summary and risk flags.
4. Check drug-drug, drug-food, duplicate therapy, allergy, renal/hepatic warnings.
5. Draft SOAP note and counselling text.
6. Require doctor approval before prescription output.

## Security Architecture

- JWT plus refresh/session management.
- MFA for doctors, pharmacists, and admins.
- Role-based access control and patient-scoped access.
- Encrypted uploads, signed URLs, file type validation, malware scanning.
- Audit logs for every medical record read/write/export.
- QR prescription verification with immutable prescription hash.
- Data minimization in AI prompts; avoid sending unnecessary identifiers.
- Emergency and AI unsafe-response logs reviewed by admins.

## UI System

Use a clean medical-grade interface:

- White surfaces, soft blue and emerald accents, rose/amber only for risk.
- Rounded cards with thin slate borders and restrained shadows.
- Large readable fonts, clear step labels, mobile-first grids.
- Separate dashboards per role.
- Persistent emergency button for patient surfaces.
- Dark mode via design tokens, not ad hoc colors.

Suggested palette:

- Primary: `#059669`
- Medical blue: `#0284c7`
- Surface: `#f8fafc`
- Text: `#0f172a`
- Warning: `#f59e0b`
- Critical: `#e11d48`

## Scalable Deployment

- Frontend: Next.js, React, Tailwind, ShadCN UI.
- Backend: NestJS or modular Express services.
- Database: PostgreSQL for transactional healthcare data.
- AI chat store: MongoDB or object storage references.
- Storage: S3-compatible private buckets with signed URLs.
- AI: OpenAI API with OCR pipeline and safety classifier.
- Deployment: Docker, CI/CD, managed PostgreSQL, secrets manager, observability.
- Later split services: auth, clinical records, prescriptions, pharmacy, AI, notifications.

## Implementation Priorities

1. Separate patient, doctor, pharmacist, and admin data models.
2. Replace automatic prescription-to-cart behavior with review queues.
3. Add doctor availability and AI fallback logic.
4. Add prescription verification QR and pharmacist validation.
5. Add upload/report intake flow with AI summaries and emergency detection.
6. Add audit logs and role-based access checks to all APIs.
