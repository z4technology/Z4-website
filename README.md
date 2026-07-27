# Z4 Technology Agency Site

Built with Vite + React + TypeScript + TanStack Router.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import into Vercel
3. Vercel auto-detects Vite — `vercel.json` provides explicit config:
   - Build: `vite build`
   - Output: `dist`

## Local Development

```bash
npm install
npm run dev      # starts on http://localhost:3000
npm run build    # production build to dist/
```

## Routes

- `/` — Agency homepage
- `/ai-agent` — AI Receptionist product landing page
- `/ai-agent/signup` — Trial signup form (writes to Supabase `trial_signups`)
- `/ai-agent/thank-you` — Post-signup confirmation

## Tech Stack

- React 19 + TypeScript
- TanStack Router (file-based)
- TailwindCSS 4
- Supabase (auth + database)
- Vite 7