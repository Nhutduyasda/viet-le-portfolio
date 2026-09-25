# Design System — Clean Energy / Scandinavian

## Design Intent
Create a calm, premium interface inspired by Scandinavian editorial design and modern clean-energy brands. The overarching site foundation is light, airy, and warm, establishing credibility and clarity for senior renewable energy engineering and project development.

---

## Global Color Palette (Base Foundation)
The global tokens establish the warm Scandinavian off-white foundation used across the site body, content sections, cards, and typography. CSS variables must be used rather than ad-hoc inline hex colors.

- `--bg`: `#F7F8F3` (warm Scandinavian off-white canvas)
- `--surface`: `#FFFFFF` (clean card and surface background)
- `--text`: `#1D2A24` (deep forest neutral for primary typography, ensuring high contrast)
- `--muted`: `#67746D` (neutral green-gray for secondary metadata)
- `--primary`: `#173B2B` (deep botanical forest green)
- `--accent`: `#7FA66A` (refined energy green accent)
- `--accent-soft`: `#E8EFE3` (soft botanical tint for subtle badges or hover states)
- `--border`: `#DDE4DC` (subtle organic boundary line)

---

## Typography
Modern editorial pairing combining architectural clarity with human warmth:
- **Primary / Sans:** `Manrope` via `next/font/google` (`--font-sans`). Geometric, humanist, highly legible across data points, headlines, and interface controls.
- **Secondary / Serif:** `Newsreader` via `next/font/google` (`--font-serif`). Restrained editorial accent font for quotes or long-form thought leadership where appropriate.

Rules:
- Strict limit of 2 font families across the entire portfolio.
- No artificial letter-spacing expansion on lowercase body text.
- Hero headline uses tight architectural tracking (`-0.035em`) with balanced line wrapping.

---

## Scoped Visual Contract: Phase 1 Hero & SiteHeader (Solarify Reference)

> **Important Scoping Boundary:**
> In accordance with the owner's visual reference (`https://solarsolarify.framer.website/`), the Phase 1 Hero section and overlaid SiteHeader employ an **isolated dark, cinematic full-viewport canvas**.
> This dark theme is **strictly scoped** to the Hero and SiteHeader components (`[data-theme="hero-dark"]` / `.hero-dark-scope`). The global document body and all subsequent phases (About, Expertise, Experience, Projects, Footer) remain grounded in the warm Scandinavian light system (`--bg: #F7F8F3`, `--text: #1D2A24`).

### Scoped Hero Tokens
- `--hero-bg`: `#081813` (deep botanical obsidian dark)
- `--hero-text`: `#FBFCFD` (crisp near-white for high contrast on dark surfaces)
- `--hero-text-muted`: `#B5C2C5` (soft silver-sage for secondary labels)
- `--hero-muted`: `#788182` (quiet dark-mode metadata)
- `--hero-accent`: `#114A1A` (deep botanical accent)
- `--hero-border`: `rgba(255, 255, 255, 0.15)` (refined glass border)

### Hero Photography & Overlay
- Background: Full-viewport, edge-to-edge cinematic landscape photography (`/images/solar-hero.png`) featuring modern wind turbines across rolling green terrain.
- Overlay: Calibrated vertical linear gradient preserving the radiant warmth and detail of the landscape while meeting WCAG AAA legibility for overlaid white typography:
  ```css
  background: linear-gradient(
    to bottom,
    rgba(8, 24, 19, 0.30),
    rgba(8, 24, 19, 0.36) 52%,
    rgba(8, 24, 19, 0.52)
  );
  ```

### Hero Center Composition
Zero visual clutter. Strictly contains:
1. **Eyebrow Capsule:** Dark translucent pill (`h-[28px]`, `px-4`, `rounded-full`, `border border-white/20`, `bg-black/25`, text 12–13px `#FBFCFD`/90). Content: `Renewable Energy · Vietnam`.
2. **Main Headline:** Architectural sans (`Manrope`, weight 500, `clamp(2.25rem, 5vw, 3.75rem)`, `leading-[1.04]`, `tracking-[-0.035em]`, `#FBFCFD`), breaking naturally into two balanced lines on desktop.
3. **CTA Support Element:** Translucent dark pill button (`h-[48px]`, `rounded-full`, `border border-white/20`, `bg-black/30`) with an embedded circular near-white badge (`h-8 w-8 rounded-full bg-[#FBFCFD] text-[#081813]`) housing a diagonal arrow `↗`.

### Button Micro-Interactions
- **Hero CTA:** Coordinated surface brightening (`hover:bg-black/50 hover:border-white/40`), subtle diagonal translation of the embedded arrow (`group-hover:translate-x-0.5 group-hover:-translate-y-0.5`), tactile press feedback (`active:scale-[0.98]`), and high-visibility focus ring (`focus-visible:outline-2 focus-visible:outline-white`).
- **Header Desktop CTA:** Clean white pill button (`#FBFCFD` background, `#081813` text) with subtle hover opacity/lightness, tactile active press state (`active:scale-[0.98]`), and accessible focus ring.
- **Mobile Menu Trigger:** 40x40px circular white button (`bg-[#FBFCFD]`) with two dark horizontal bars that animate into an 'X' on toggle.

### Header Geometry & Behavior
- Positioned absolutely over the hero canvas (`top: 0; left: 0; right: 0; z-40; pt-6 sm:pt-7`).
- Transparent background without solid bars or distracting blur slabs.
- Internal max-width: ~1360px centered with responsive gutter padding.
- Wordmark: `Viet Le` in `Manrope` medium, `#FBFCFD`.
- Mobile Menu Lifecycle:
  - Accessible dialog semantics (`aria-expanded`, `aria-controls`, `aria-label`).
  - Animated backdrop and dropdown drawer enter/exit transitions.
  - Keyboard navigation: Closes on `Escape` key and returns focus to the menu toggle button.
  - Focus trap / boundary containment within the open mobile drawer.

---

## Motion & Accessibility Standards
- **Choreographed Hero Entrance:** Staggered sequence for eyebrow (0.5s ease-out, 0s delay), headline (0.6s ease-out, 0.12s delay), and CTA (0.6s ease-out, 0.24s delay).
- **Reduced Motion:** All transitions and keyframe animations must strictly respect `@media (prefers-reduced-motion: reduce)` by immediately displaying content without translation or delays.
- **Factual Integrity:** Hero image alt text strictly describes observable visual elements without unsubstantiated geographic or biographical assumptions.

---

## Global Layout Rules (Phase 2+ Continuity)
- Max content width: ~1200–1280px (`Container`).
- Body text measure: ~60–72ch for optimal readability.
- Generous whitespace between sections (py-16 to py-28).
- Minimum touch target: 44x44px.
