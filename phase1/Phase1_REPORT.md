# Phase 1 — UX & Motion Design Brief (LawVriksh Dashboard)
_Date: 2025-08-22_

## 1) Problem & Users
**Problem statement (primary persona):** Early‑career lawyers using LawVriksh need a dashboard that immediately surfaces activity KPIs and actionable next steps (write, verify KYC, manage subscribers) with fast, accessible feedback so they can build credibility without hunting through UI.

**Top user goals (3):**
1. See at-a-glance KPIs (days active, posts, engagement) and trends.
2. Complete critical setup tasks (KYC/profile) and manage subscribers efficiently.
3. Start key actions with minimal friction (create post, view analytics, respond to subscribers).

**Top pain points (3):**
1. Weak visual hierarchy—large greeting card dominates but is not actionable; KPIs are discoverable only after scroll/scan.
2. Low interaction affordance—list rows and minor buttons lack clear hover/press/focus feedback; small hit areas.
3. Accessibility gaps—contrast on gradient text, thin chart line, uncertain keyboard focus order.

---

## 2) UX Laws & Concrete Changes
- **Hick’s Law:** Fewer primary choices reduce decision time. **Change:** Add one prominent primary CTA next to the greeting (e.g., “Write Post”); demote secondary links under an overflow/menu.
- **Fitts’s Law:** Larger/nearer targets are faster to acquire. **Change:** Make list rows fully clickable; set minimum 44×44 px targets; increase “See Details” touch area and place near content.
- **Miller’s Law / Chunking:** Limit working-memory load by grouping. **Change:** Consolidate KPIs into a 3‑card band above the chart (Days Active, Posts, Subscribers) with consistent layout.
- **Jakob’s Law:** Users prefer familiar patterns. **Change:** Conventional left nav with persistent active state; row hover highlighting; standard search with keyboard focus and results list.
- **Doherty Threshold (≤400 ms):** System should respond in under 400 ms to keep users in flow. **Change:** Immediate visual feedback (pressed states), skeleton loaders for chart/list; optimistic UI for quick actions.
- **Zeigarnik Effect:** Unfinished tasks remain salient. **Change:** Profile/KYC checklist with progress bar and explicit next step; keep visible until 100% complete.

---

## 3) Annotated Static Figma (or PDF)

See **annotated_screens.pdf** (this submission) for color‑coded overlays:
- Blue: Visual hierarchy improvements
- Green: Content grouping / chunking
- Orange: Interaction hotspots (click/hover/tap)
- Red: Accessibility concerns (contrast, target sizes, focus)

---

## 4) Motion Design Plan (micro‑interactions)
| ID | Micro‑interaction | Trigger | Duration | Easing | Purpose |
|---:|---|---|---|---|---|
| M1 | Greeting card fade+slide‑up; CTA appears after 80 ms | On first paint | 220–260 ms | ease‑out cubic (0.22,1,0.36,1) | Establish entry, guide to primary action |
| M2 | KPI cards count‑up + subtle scale from 0.98→1.0 | On data fetch resolve | 240–300 ms | ease‑out cubic | Progress feedback; perceived speed |
| M3 | Progress bar fill with shimmer | On profile/KYC status update | 300–600 ms (non‑blocking) | ease‑in‑out | Make completion salient |
| M4 | Subscribers list row hover (bg tint) + press ripple | Hover/PointerDown | 120–180 ms | ease‑out | Affordance & feedback |
| M5 | “See Details” / primary button press (elevation→0, then restore) | PointerDown/Up | 90–150 ms | linear → ease‑out | Tactile response |
| M6 | Chart tooltip fade‑in + line emphasis | Hover/Focus on data point | 100–160 ms | ease‑out | Precision feedback |
| M7 | Modal/Drawer open (opacity+scale 0.98→1) | Open details/settings | 180–240 ms | ease‑out | Continuity |
| M8 | Toast confirmations with auto‑dismiss | On save/success/error | 80 ms in; 200 ms out | ease‑out / ease‑in | Acknowledge outcome |

**Motion constraints:**
- Respect `prefers-reduced-motion: reduce` → disable nonessential transforms; keep instantaneous opacity changes.
- Stagger never exceeds 120 ms; total chain for any key action feedback ≤400 ms.

---

## 5) Interaction & State Specs
**Loading:** Skeletons for greeting, KPIs, chart, and list (200–400 ms minimum display to avoid flash). Spinners only for background jobs >1 s.  
**Empty states:** Chart → placeholder with “Not enough data (last 7 days)”; Subscribers → guidance + “Share profile” CTA; Blogs → “Create your first post”.  
**Error states:** Inline error banners near the affected component; retry action; toast summarizing error; preserve user input.  
**Success:** Non‑blocking toast + inline state update; close modals automatically.  
**Responsive:**  
- Desktop ≥1024px: 3‑column (nav / content / meta).  
- Tablet 768–1023px: 2‑column; subscribers collapsible.  
- Mobile ≤767px: single column; chart becomes simplified sparkline; KPI cards stack; interactions use 44×44 px targets; reduced motion.  
**Focus & keyboard:** Logical tab order; visible focus ring (2px) on all interactive elements; ESC closes modals; Arrow keys move chart focus.  
**Motion budget:** Essential—pressed/hover/focus feedback, skeletons, toasts, progress updates. Optional—hero entrance, count‑up numerals.  
**Performance:** First feedback ≤100 ms (pointer‑down), action completion UI ≤400 ms; animation frame budget ≤16 ms/frame; avoid layout thrash (use transform/opacity).

---

## 6) Deliverables
- **Phase1_REPORT.md** (this file).  
- **annotated_screens.pdf** with overlays + notes.

