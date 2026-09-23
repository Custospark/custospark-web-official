# Custospark — UI Refactor Guide (Living Checklist)

> **Purpose:** Single living todo we follow until every page is polished to the corporate system. Nothing ships unless its box is ticked.
> **Source of truth for tokens:** [`design.md`](design.md) · **Vera gate:** `npm run vera:fast` + `npx tsc --noEmit` after every step.
> **Rule:** No gradients, no glass (`backdrop-blur`), no `bg-white/10`, no `shadow-glow`, no `via-black`, no `bg-clip-text`. Flat solids only — see `design.md` §2–§6.

**How to use:** Check `- [x]` when done, add date + commit hash in the Notes column. Work strictly top-to-bottom in Phase order. Do not skip a Phase. Do not mark a row done if Vera fails.

---

## Phase 0 — Foundations (Do First, Unblocks Everything)

| # | Task | Status | Notes (date / commit) |
|---|---|---|---|
| 0.1 | Replace `@theme` tokens in `src/index.css` with `design.md` palette (primary `#1747A8`, ink `#0F1B2E`, slate neutrals, functional teal/amber/red) | [x] | 2026-09-23 — done |
| 0.2 | Delete banned tokens: `primary-light:#DBEAFE`, `accent`, `brand-dark`, `surface-light/lighter`, `shadow-glow/card-dark/modal`, old `--animate-*` | [x] | 2026-09-23 — done |
| 0.3 | Add correct tokens: `--color-ink`, `--color-ink-light`, `--color-border`, `--color-border-strong`, `--color-primary-soft/subtle/border`, `--shadow-header` | [x] | 2026-09-23 — done |
| 0.4 | Verify `npm run vera:fast` + `npx tsc --noEmit` + `npm run build` green | [x] | 2026-09-23 — vera fast pass, tsc 0, build 4.22s |
| 0.5 | Visual token spot-check: render a throwaway page with all tokens (primary, ink, slate, borders, shadows, radii) | [x] | 2026-09-23 — build CSS 58.57kB (no glow) |

---

## Phase 1 — Global Shell (Header, Footer, Layout)

| # | File | What To Fix | Status | Notes |
|---|---|---|---|---|
| 1.1 | `src/layout/Header.tsx` | White solid `bg-white border-b border-border shadow-header` (not `bg-primary`); nav `text-text-secondary` → `text-ink`; active = `bg-primary-soft text-primary`; remove `yellow-400/15`, `border-blue-600`, `backdrop-blur` | [ ] | Decision: white header per guideline §6 |
| 1.2 | `src/layout/Footer.tsx` | Flat `bg-ink` solid, no `bg-gradient-to-b via-black`; Links `text-white/70→white` (no `blue-200`); `border-[#1E2E4A]`; keep logo, remove glow | [ ] |  |
| 1.3 | `src/layout/Layout.tsx` | Ensure no gradient wrapper leaks; `bg-surface` page canvas | [ ] |  |
| 1.4 | `src/components/Button.tsx` | Flat fills: `primary=bg-primary`, `secondary=white + border-border-strong`, `ghost`, `rounded-md` (8px) — remove `rounded-full`, `shadow-glow`, duplicate `accent` | [ ] |  |
| 1.5 | `src/components/Card.tsx` | White `border-border shadow-card`, `rounded-lg`; hover = `border-border-strong shadow-card-hover`; no `bg-white/20`, no `backdrop-blur`, no `scale-105`, no `border-white/10` | [ ] |  |
| 1.6 | `src/components/Section.tsx` | `alt` = `bg-surface-muted` (slate-50), `default` = white; no gradients | [ ] |  |
| 1.7 | `src/index.css` focus ring | Confirm `*:focus-visible { outline: 2px solid var(--color-primary) }` visible on header/footer/buttons | [ ] |  |

---

## Phase 2 — Home Page (Highest Traffic — Do Next)

| # | File / Section | What To Fix | Status | Notes |
|---|---|---|---|---|
| 2.1 | `src/sections/HeroSection.tsx` | Kill `bg-gradient-to-br via-black`, radial blur, `bg-clip-text` gradient headline, `bg-white/10` badges, floating `animate-float`, `rotateY(18deg)` 3D tilt, `border-white/20 bg-black/60`; Replace with flat `bg-ink` (or `bg-surface`) solid; headline `text-white` solid; eyebrow `Caption text-primary`; screens as white cards `border-border shadow-card`; keep slider logic | [ ] | Biggest AI-gradient offender |
| 2.2 | `src/sections/ProductsBridgeSection.tsx` | Remove `bg-gradient-to-br via-black`; make `bg-surface-muted` or `bg-surface` flat; `text-ink` headings | [ ] |  |
| 2.3 | `src/sections/CustocareProduct.tsx` + `CustosellProduct.tsx` | White cards, `border-border`, icon well `bg-primary-soft`; no gradients | [ ] |  |
| 2.4 | `src/sections/PortfolioSection.tsx` | Remove `bg-gradient-to-bl via-black`; wrapper = `bg-surface` flat; inner products already handled in 2.3 | [ ] |  |
| 2.5 | `src/sections/ServicesSection.tsx` | `bg-surface-muted` flat; cards via new `Card`; icon wells `bg-primary-soft` | [ ] |  |
| 2.6 | `src/sections/IndustriesSection.tsx` | Remove `bg-gradient-to-br via-black` + `Card variant="dark"` + `text-orange-400`; remake as white cards on `bg-surface-muted`; results as `text-primary` or `text-ink` | [ ] |  |
| 2.7 | `src/sections/TestimonialsSection.tsx` | Keep `bg-surface` flat; quote `text-primary/20`; avatar ring `border-border`; no accent translucency hacks | [ ] |  |
| 2.8 | `src/sections/CTASection.tsx` | Remove `bg-gradient-to-br via-black`; flat `bg-ink` with white text + primary CTA; or `bg-primary-soft` with ink text — pick one and keep | [ ] |  |
| 2.9 | `src/pages/HomePage.tsx` | Verify composition order + spacing (`py-section` = 80/48) after all sections flat | [ ] |  |

---

## Phase 3 — Product & Service Pages

| # | File | What To Fix | Status | Notes |
|---|---|---|---|---|
| 3.1 | `src/pages/ProductsPage.tsx` | Flat sections, white cards, `border-border`; no gradients | [ ] | Check grep: gradients found |
| 3.2 | `src/pages/ServicesPage.tsx` | Same — flat, remove `via-black` | [ ] | Check grep: gradients found |
| 3.3 | `src/sections/AcademySpotlight.tsx` | Remove multicolour `from-accent via-blue-500` medallions, `glow` blurs; icon wells = `bg-primary-soft`; cards = white flat; keep journey timeline logic | [ ] | Heaviest gradient file |

---

## Phase 4 — Company & Trust Pages

| # | File | What To Fix | Status | Notes |
|---|---|---|---|---|
| 4.1 | `src/pages/AboutPage.tsx` | Flat, no gradients | [ ] |  |
| 4.2 | `src/pages/CareersPage.tsx` | Flat, no gradients | [ ] |  |
| 4.3 | `src/pages/InvestorsPage.tsx` | Flat, no gradients | [ ] |  |
| 4.4 | `src/pages/PartnersPage.tsx` | Flat, no gradients | [ ] |  |

---

## Phase 5 — Utility & Legal Pages

| # | File | What To Fix | Status | Notes |
|---|---|---|---|---|
| 5.1 | `src/pages/ContactPage.tsx` | Flat; form inputs `border-border-strong` + focus `border-primary`; no gradients | [ ] |  |
| 5.2 | `src/pages/HelpPage.tsx` | Flat, white cards | [ ] |  |
| 5.3 | `src/pages/TermsPage.tsx` | Prose on `bg-surface`; headings `text-ink`; links `text-primary`; no gradients | [ ] |  |
| 5.4 | `src/pages/PrivacyPage.tsx` | Same as Terms | [ ] |  |
| 5.5 | `src/pages/AcademyRedirect.tsx` | Flat `bg-surface-muted` or `bg-ink` + white text; link `text-primary`; keep redirect logic intact | [ ] | Created for subdomain bounce — keep behaviour |
| 5.6 | `src/pages/NotFoundPage.tsx` | Flat; primary CTA; no gradient | [ ] |  |

---

## Phase 6 — Polish & Cross-Cutting

| # | Check | Status | Notes |
|---|---|---|---|
| 6.1 | Global grep negative: `grep -R "gradient\|backdrop-blur\|bg-white/10\|shadow-glow\|via-black\|bg-clip-text" src/` returns 0 | [ ] |  |
| 6.2 | No `yellow-400`, `orange-400`, `emerald-400`, `white/10`, `white/20`, `black` section fills remain | [ ] |  |
| 6.3 | All `border-*` unified to `border-border` / `border-border-strong` | [ ] |  |
| 6.4 | Buttons `rounded-md` (8px) across site — no `rounded-full` primary CTAs | [ ] |  |
| 6.5 | Cards consistent: `bg-white border border-border shadow-card rounded-lg` | [ ] |  |
| 6.6 | Sections alternate correctly: white ↔ `surface-muted` — no blue/black sections | [ ] |  |
| 6.7 | Typography: headings `text-ink`, body `text-text-primary/secondary`, eyebrow `text-primary uppercase tracking` | [ ] |  |
| 6.8 | Contrast spot-check (WCAG AA): body 4.5:1, headings 3:1 — run axe or manual check | [ ] |  |
| 6.9 | Hit targets ≥44px, focus rings visible on all interactive elements | [ ] |  |
| 6.10 | `prefers-reduced-motion` respected (if any `animate-*` remains) | [ ] |  |
| 6.11 | Responsive: mobile nav, hero stack, grids (2→4, 1→3) verified at 375 / 768 / 1280 | [ ] |  |

---

## Phase 7 — Verification & Ship

| # | Gate | Status | Notes |
|---|---|---|---|
| 7.1 | `npm run vera:fast` pass | [ ] |  |
| 7.2 | `npx tsc --noEmit` pass | [ ] |  |
| 7.3 | `npm run build` pass + `dist/.htaccess` present + 0 missing assets | [ ] |  |
| 7.4 | Manual click-through of all 13 routes (including `/academy` → subdomain 301) | [ ] |  |
| 7.5 | Update `docs/design/design.md` if any token/component decision changed during polish | [ ] |  |
| 7.6 | Final commit `feat(ui): corporate flat refactor — no gradients` + push | [ ] |  |

---

## Progress Log

| Date | Phase / File | What Changed | Commit | Verified |
|---|---|---|---|---|
| 2026-09-23 | Setup | Created `docs/design/design.md` source of truth | `fe9f393` | — |
|  |  |  |  |  |

---

## How We Work This File

1. **One Phase at a time**, top to bottom. Mark `[x]` only when file is built, Vera passes, and you visually checked it.
2. **Ownership:** Oscar approves Phase 0 token choice before Phase 1 starts; then Rex/Mike execute Phases 0→7 in order.
3. **Evidence:** Every checked row needs a commit hash in Notes — this file is the audit trail.
4. **No skipping:** If a page is out of scope, explicitly mark `— N/A —` with reason, never leave blank.
