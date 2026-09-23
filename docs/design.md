# Custospark — Corporate Design System v2.0

> **Status:** Guideline (approved before implementation)
> **Goal:** Replace the AI-gradient aesthetic with a restrained, boardroom-grade corporate language. Flat solids, high contrast, quiet confidence. No gradients — ever.
> **Principle:** *Trust is built in the details.* Every token must pass WCAG AA (4.5:1) and feel at home on a pitch deck, a contract, and a homepage.

---

## 1. Brand Principles (40 Years of Corporate UI, Distilled)

| Principle | What It Means For Us |
|---|---|
| **Restraint over decoration** | One primary, one ink, three neutrals, one functional accent. If it doesn't earn its place, it doesn't ship. |
| **Contrast is non-negotiable** | Text, icons and controls pass WCAG AA on every surface. No white-on-light-blue, no yellow-on-white. |
| **Flat beats glossy** | Solids, hairline borders, soft shadows. Gradients, glass-blur and neon glows are banned — they read as generative filler. |
| **Hierarchy through scale + weight, not color** | Size, weight and whitespace do the heavy lifting. Color is used sparingly to guide the eye. |
| **Air and alignment** | 8pt grid, generous whitespace, strict left-edge alignment. Corporate layouts breathe. |

**Anti-patterns we kill in v2:** `bg-gradient-to-br from-primary via-black`, `text-transparent bg-clip-text`, `backdrop-blur-md`, `bg-white/10`, `shadow-glow`, `orange-400`, `yellow-400/15`, oversized pill badges.

---

## 2. Colour System — Flat, Corporate, Accessible

### 2.1 Primary — Custospark Blue (Trust)

| Token | Hex | Use | Contrast on White | Contrast White-on-Color |
|---|---|---|---|---|
| `--color-primary` | `#1747A8` | Primary buttons, links, active states, header | 7.9:1 ✅ AAA | 7.9:1 ✅ AAA |
| `--color-primary-hover` | `#133A8A` | Hover / pressed | 9.4:1 ✅ AAA | — |
| `--color-primary-soft` | `#E8EEF9` | Soft backgrounds, icon wells, selected rows | — | — |
| `--color-primary-subtle` | `#F0F4FD` | Hover washes, table stripes | — | — |
| `--color-primary-border` | `#C2D2EF` | Focus rings, outlined buttons | — | — |

> Why `#1747A8` and not `#3B82F6`? The old `#3B82F6` on white is 3.5:1 — it **fails** AA for body text and forces white-on-blue hacks. `#1747A8` passes AAA both ways and reads as an enterprise blue (IBM / Stripe corporate family).

### 2.2 Ink — Corporate Navy (Authority)

| Token | Hex | Use |
|---|---|---|
| `--color-ink` | `#0F1B2E` | Headings, footer, hero on light, primary text on white |
| `--color-ink-light` | `#1E2E4A` | Secondary headings, card titles |
| `--color-ink-muted` | `#334155` | Slate-700 — secondary UI chrome |

`--color-ink` replaces `black` gradients. White text on `--color-ink` is 17.5:1. Navy feels premium, photographs well, and pairs perfectly with Custospark Blue without competing.

### 2.3 Neutrals — Cool Slate (The Workhorse)

| Token | Hex | Use | Notes |
|---|---|---|---|
| `--color-surface` | `#FFFFFF` | Page background | — |
| `--color-surface-muted` | `#F8FAFC` | Alternating sections, card canvas | Slate-50 |
| `--color-surface-alt` | `#F1F5F9` | Borders' sibling, table header | Slate-100 |
| `--color-border` | `#E2E8F0` | Hairline borders, dividers, card stroke | Slate-200 |
| `--color-border-strong` | `#CBD5E1` | Input borders, table grid | Slate-300 |
| `--color-text-primary` | `#0F172A` | Body copy on white | Slate-900 — 15.9:1 ✅ |
| `--color-text-secondary` | `#475569` | Descriptions, meta | Slate-600 — 7.1:1 ✅ |
| `--color-text-muted` | `#64748B` | Captions, placeholders | Slate-500 — 5.4:1 ✅ (14px+) |
| `--color-text-faint` | `#94A3B8` | Disabled, timestamps | Slate-400 — never for body |

**Rule:** Borders are always `#E2E8F0` on white. No `border-white/10`, no `border-gray-200` mid-grays. One border token across the entire system.

### 2.4 Supporting — Functional Only (No Decorative Rainbow)

| Token | Hex | Use | Contrast |
|---|---|---|---|
| `--color-success` | `#0F766E` | Success states, verified badges | Deep teal — corporate, not neon |
| `--color-success-soft` | `#E6F2F0` | Success washes | — |
| `--color-warning` | `#A05A00` | Warning, due dates | Burnt amber — passes AA |
| `--color-error` | `#B91C1C` | Errors, destructive | Corporate red — passes AA |

> No `orange-400`, no `yellow-400`, no `emerald-400`. Functional colours are desaturated and dark enough to be read as text. They appear only in badges, alerts, and status dots — never as section backgrounds.

### 2.5 Colour Usage Rules

- **Sections:** Alternate **white → slate-50 → white**. Never blue, never black, never gradient. The brand is expressed in **header, footer, buttons and links** — not in painting sections blue.
- **Hero:** `bg-ink` (`#0F1B2E`) with **white** text. No gradient, no radial blur, no black. One solid corporate field. Optional thin top rule in `--color-primary` (1px).
- **Cards:** White, `border-border`, `shadow-card`. No glass, no `backdrop-blur`, no `border-white/20`, no hover scale. Hover = `border-border-strong` + `shadow-card-hover`.
- **CTAs:** Primary = `--color-primary` solid. Secondary = white with `border-border-strong` + `--color-primary` text. No `variant="white"` on dark, no `variant="accent"` duplicates.
- **Links:** `--color-primary` with underline on hover. No `text-blue-200`, no `hover:text-blue-200`.
- **Active nav:** `--color-primary-soft` background + `--color-primary` text + 2px bottom border. No `yellow-400/15`.

---

## 3. Typography — Quiet Authority

| Role | Font | Weight | Size | Line | Use |
|---|---|---|---|---|---|
| Display | Poppins | 700 | `clamp(36px, 5vw, 56px)` | 1.05 | Hero headline only (one per page) |
| H1 | Poppins | 700 | `clamp(30px, 4vw, 42px)` | 1.15 | Page titles |
| H2 | Poppins | 600 | `clamp(24px, 3vw, 32px)` | 1.2 | Section titles |
| H3 | Inter | 600 | `clamp(18px, 2vw, 22px)` | 1.35 | Card titles |
| Body LG | Inter | 400 | 18px | 1.65 | Lead / hero copy |
| Body | Inter | 400 | 16px | 1.65 | Default prose |
| Body SM | Inter | 500 | 14px | 1.5 | Labels, meta, nav |
| Caption | Inter | 500 | 12px | 1.4 | Eyebrows, overlines, timestamps — `letter-spacing: 0.08em`, `uppercase` |

- **Headings:** `--color-ink` on light, `white` on `--color-ink`. Never blue headings — blue is for interaction, not for shouting.
- **Measure:** Body columns max `65ch`. No full-width walls of text.
- **Eyebrow:** `Caption` in `--color-primary` — solid, no pill, no `bg-accent/20`.

---

## 4. Spacing & Layout — 8pt Grid

- **Base unit:** 8px. All spacing is `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80`.
- **Section padding:** `80px` desktop / `48px` mobile (`py-section`).
- **Container:** `max-w-7xl`, `px-4 md:px-8`. No edge-to-edge text walls.
- **Grid gaps:** Cards `24px`. Tight lists `16px`.
- **Vertical rhythm:** Heading → paragraph `12px`. Paragraph → CTA `32px`. Never stack headings without breathing room.

---

## 5. Elevation & Borders — Flat Corporate

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 6px | Inputs, badges, tiny pills |
| `--radius-md` | 8px | Cards, dropdowns |
| `--radius-lg` | 12px | Modals, large cards |
| `--radius-full` | 9999px | Avatars only — not buttons |
| `--shadow-card` | `0 1px 3px rgba(15,27,46,0.08), 0 1px 2px rgba(15,27,46,0.06)` | Default card |
| `--shadow-card-hover` | `0 4px 12px rgba(15,27,46,0.10)` | Hover |
| `--shadow-header` | `0 1px 2px rgba(15,27,46,0.06)` | Sticky header |
| `--shadow-none` | `none` | Flat sections |

- **No glow**, no `shadow-glow`, no `0 0 30px rgba(6,182,212,0.3)`.
- Buttons have **no shadow** resting; only hairline border + fill. Pressed = inset subtle.

---

## 6. Components — Rules (No Gradients)

### Header
- Solid `bg-surface` (`white`) with `border-b border-border` and `shadow-header`. Not `bg-primary`.
- Logo left, nav `text-text-secondary` → `text-ink` on hover. Active = `text-primary` + `bg-primary-soft`.
- No `bg-primary` header — corporate sites let content breathe; the brand lives in the logo, active state and CTA, not in a coloured bar.

### Footer
- Solid `bg-ink` (`#0F1B2E`), white text, `border-t border-white/10` removed. Links `text-white/70` → `text-white` on hover, no `blue-200`.
- Thin top rule: `border-t border-white/10` → replace with `border-t border-[#1E2E4A]`. Logo circular treatment kept but on navy, not gradient.

### Buttons
- `primary`: `bg-primary text-white hover:bg-primary-hover`, `rounded-md` (8px), `h-44px` for lg.
- `secondary`: `bg-white text-primary border border-border-strong hover:bg-primary-subtle`.
- `ghost`: `text-text-secondary hover:bg-surface-muted`.
- No `rounded-full` for primary CTAs — corporate is `8px`.

### Cards
- `bg-white border border-border rounded-lg shadow-card p-6`. Title `text-ink`, description `text-text-secondary`, icon well `bg-primary-soft text-primary w-44 h-44 rounded-md`.
- Hover: `border-border-strong` + `shadow-card-hover`. No scale, no glass.

### Sections
- `py-section`. Variant `default` = white, `alt` = `bg-surface-muted`. No `bg-gradient-to-*`.

### Hero
- `bg-ink` or `bg-surface` (light hero allowed). Headline `text-white` or `text-ink`. Copy `text-white/70` or `text-text-secondary`. Eyebrow `text-primary`. Screens: white cards with `border-border` and `shadow-card-hover` — no `border-white/20`, no `bg-black/60`, no 3D `rotateY`.

---

## 7. Accessibility Checklist (Must Pass Before Ship)

- [ ] All body text ≥ 4.5:1, large headings ≥ 3:1.
- [ ] Focus ring: `2px solid var(--color-primary)` with `outline-offset: 2px` — visible on every interactive element.
- [ ] No information conveyed by colour alone — icons + labels accompany status.
- [ ] Hit targets ≥ 44×44px.
- [ ] Reduced motion: respect `prefers-reduced-motion`.

---

## 8. Migration Plan (Guideline → Implementation)

1. **Tokens** — replace `@theme` in `src/index.css` with the palette above, delete glow/gradient tokens.
2. **Header / Footer** — flat white / ink solids.
3. **Hero** — ink solid, remove gradients, blurs, floating badges, 3D tilt.
4. **Cards / Sections** — white cards, hairline borders, no glass/scale.
5. **CTA / Industries / Portfolio / Testimonials** — remap to white / slate-50 alternation.
6. **Buttons** — `rounded-md`, flat fills.
7. Run `npm run vera:fast` + `npx tsc --noEmit` (Vera is the gate).

---

## 9. Open Decision for Oscar

Before I code, confirm one choice:

- **Header:** I propose **white** (`bg-white`, corporate — like Stripe / Linear). Alternative is **ink-navy** (`bg-ink`). Both are corporate; white feels more open and modern for a company site. Which do you prefer — **white** or **navy** header?

> Reply: "White header — go" or "Navy header — go" (or any palette tweak). I will then implement the full system in one pass and ship a preview build.
