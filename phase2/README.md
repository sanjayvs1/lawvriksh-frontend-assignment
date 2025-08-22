## Phase 2 — Implementation (LawVriksh Dashboard)

Tech: Next.js (App Router) + Tailwind + shadcn/ui. No server required; static data used.

### Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

### What’s implemented
- Responsive dashboard based on the reference: hero banner, KPIs + chart, profile completion, subscribers, profile.
- Micro‑interactions (timings from Phase 1):
  - Hero entrance: 220–260ms ease‑out cubic.
  - KPI count‑up: 240–300ms ease‑out cubic.
  - Progress bar fill: 300–600ms ease‑in‑out.
  - Subscribers row hover/press: 120–180ms ease‑out.
  - Tooltip/chart emphasis: 100–160ms ease‑out.
  - Button press elevation: 90–150ms.
- Accessibility: visible focus ring, high contrast, keyboard order, `prefers-reduced-motion` respected.

### UX laws applied (brief)
- Hick’s Law: reduced primary choices; prominent actions.
- Fitts’s Law: larger, closer targets; full‑row clicks.
- Miller’s Law: chunked KPIs and content groups.
- Jakob’s Law: familiar nav/search/table patterns.
- Zeigarnik Effect: persistent KYC progress with next step.

### Notes
- See `PHASE2_NOTES.md` for mapping micro‑interactions to the Phase 1 plan.
