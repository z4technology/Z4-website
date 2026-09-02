# Z4 Agency Website — Project Log

Agency website for Z4 Technology: home, AI agent product pages, contact, VSL.

**Repo:** z4technology/Z4-website · **Live:** z4-website.vercel.app (z4technology.com resolves & responds)
**Stack:** Vite/React (TanStack Router) + static HTML forms posting to Supabase REST.

## Status Snapshot (current)
- Contact & signup forms fixed and working (static HTML — plain inputs posting to Supabase REST; no React controlled-input crash).
- SMS opt-in checkbox on contact form for A2P compliance; all email addresses → support@z4technology.com.
- AI receptionist product page live at /ai-agent; signup → trial_signups (no credit card), pricing $297/mo, 7-day trial.
- VSL live at /vsl.html (ElevenLabs voiceover + animated scenes; calendar integrations incl. Google, Outlook, Square).
- Terms / Privacy Policy / Contact pages published with Supabase migration.
- **Known issue**: ops-portal PR-branch preview deploys error (separate project; production deploys fine).

## Revision History (newest first)
- 2026-08-2x — SMS opt-in checkbox added to contact form (A2P compliance). (de872e9)
- 2026-08-2x — All email addresses updated to support@z4technology.com. (6294849)
- 2026-08-2x — Terms, Privacy Policy, Contact pages added with Supabase migration. (3cbaf26)
- 2026-08-2x — Voiceover regenerated; calendar integrations broadened (Google, Outlook, Square & more). (23a7286, 4318764)
- 2026-08-2x — Real photos added to VSL scenes (technician + computer backgrounds). (61f16be)
- Earlier — Contact/signup "can't type in form" root-caused (React 19.2.8 focus-event loop) and fixed by rebuilding both as static HTML posting to Supabase. (cd9ede1)

## How to Update
Append a dated entry at the top of Revision History and refresh Status Snapshot after meaningful changes. Commit to main. Keep the business plan general — this log is where project specifics live.
