# Phase 2 Notes — Micro‑interaction Mapping

| ID | Component | Implemented As | Timing | Easing | Purpose |
|---:|---|---|---|---|---|
| M1 | Hero Banner | `animate-in fade-in-50 slide-in-from-bottom-2` on mount | 220–260ms | ease‑out cubic | Entry guidance toward greeting |
| M2 | KPI Count‑up | `useCountUp` hook for Days/Blogs | 240–300ms | ease‑out cubic | Progress feedback |
| M3 | Progress Bar | Width transition of bar from 0→70% | 300–600ms | ease‑in‑out | Salient completion |
| M4 | Subscribers Row | Hover tint + press states via Tailwind | 120–180ms | ease‑out | Affordance and feedback |
| M5 | Chart Tooltip | `ChartTooltip` with cursor + blurred content | 100–160ms | ease‑out | Precision feedback |
| M6 | Buttons | Ghost/primary buttons with press elevation changes | 90–150ms | linear → ease‑out | Tactile response |

Accessibility: focus rings on interactive elements; respects `prefers-reduced-motion`.

Reduced motion: hero entrance disabled; count‑up jumps to final; progress bar anim disabled.

