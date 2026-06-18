# Future Improvements

> Documented: June 2026

## Quick Fixes (Content Decisions)

| Item | Action | Owner |
|---|---|---|
| Social media links | Done — all URLs wired in footer and contact page | Oscar |
| Custosell screenshots | `expense_tracking.png` and `shift_managment.png` exist in assets but aren't used in the showcase | Optional |

---

## Feature Gaps

### 1. Case Studies / Client Logos

**Why:** Most company sites show who they've worked with. Builds instant trust and social proof.

**Possible approach:**
- Add a "Trusted By" section with client logos (could go after the Products section on the homepage)
- Add 1-2 case study pages under `/case-studies` with problem/solution/result format

### 2. Blog / Resources Section

**Why:** The old central hub had a "Latest Updates" page. A blog establishes thought leadership and helps with SEO.

**Possible approach:**
- Create a `/blog` route with a list of posts
- Each post at `/blog/:slug`
- Could start by republishing content from the central hub

### 3. Live Chat or Demo Booking

**Why:** The contact form is the only conversion point. Most SaaS sites offer a "Book a Demo" calendar link or live chat widget.

**Possible approach:**
- Add a Calendly or similar booking link for demos
- Or add a simple live chat widget (Tawk.to, Crisp, etc.)
- Place in the hero CTA and the contact page
