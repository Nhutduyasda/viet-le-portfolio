# Design System — Clean Energy / Scandinavian (Solarize-Inspired)

## Design intent
Create a calm, confident, and premium digital presence inspired by Scandinavian editorial design combined with the contemporary renewable-energy visual language of **Solarize (Framer)**.

The design avoids rigid, boxy wireframe layouts in favor of an image-led, layered visual composition with organic geometry, deep natural greens, and refined typography.

## Color direction
Tokens are defined in `globals.css` and mapped to Tailwind utilities:

- `--bg`: `#F7F8F3` (warm Scandinavian off-white base)
- `--surface`: `#FFFFFF` (crisp white content cards)
- `--text`: `#1D2A24` (deep charcoal-green for primary reading text)
- `--muted`: `#67746D` (neutral slate-green for secondary metadata)
- `--primary`: `#173B2B` (deep Scandinavian forest green)
- `--accent`: `#7FA66A` (refined botanical energy green)
- `--accent-soft`: `#E8EFE3` (soft tinted green for chips and hover surfaces)
- `--border`: `#DDE4DC` (restrained structural border tone)

### Hero & Layered Overlay Palette
- Glass Dark: `rgba(13, 40, 24, 0.55)` to `rgba(13, 40, 24, 0.85)` with `backdrop-blur-md`
- Glass Border: `rgba(255, 255, 255, 0.20)`
- Glass Highlight / Pill: `rgba(255, 255, 255, 0.12)` with `rgba(255, 255, 255, 0.90)` text

## Typography
Maximum two font families:
- **Display & Headings:** `Manrope` (sans-serif) — bold, modern, confident, engineered feel (`font-semibold` / `font-bold`, tracking `-0.03em` to `-0.05em`).
- **Editorial Emphasis:** `Newsreader` (serif, `italic`) — restrained, organic accent for key phrases (e.g. *sustainable future*), adding human warmth and international credibility.
- **Body & Captions:** `Manrope` — highly readable, clean, modern tech feel.

## Geometry & Radii
Softer, organic geometry inspired by renewable landscapes:
- Outer hero framed container: `rounded-[28px]` on mobile, `rounded-[36px]` on desktop.
- Interactive CTAs: `rounded-full` pills with embedded circular action badges (`rounded-full`).
- Content cards & floating chips: `rounded-2xl` to `rounded-3xl`.
- Mobile navigation button: `rounded-full` tactile circular trigger (44x44px minimum).

## CTA / Button Language
- **Primary CTA (LinkedIn):**
  A tactile, rounded-full pill button featuring a dark translucent glass container (`bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/25`), white typography, and an embedded circular white badge with arrow `↗`. On hover, the badge smoothly shifts and scales.
- **Secondary CTA (Overview Navigation):**
  Translucent glass pill (`bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md`) with directional arrow `↓`.
- All interactive targets maintain at least 44px minimum touch height/width.

## Image Treatment
- Image-led hero with real photographic presence.
- Renewable-energy infrastructure in natural landscape (utility-scale Solar PV integrated into green mountain terrain under soft morning light).
- Multi-stop gradient overlay ensures high-contrast readability across all viewports.
- Clearly labeled as illustrative visual in metadata and figcaption to preserve professional credibility.

## Motion & Interactions
- Pure CSS keyframe animations (`fadeIn`, `fadeSlideUp`, `scale-in`).
- Micro-interactions on buttons (subtle arrow movement, background transitions).
- Staggered entrance timing (0.08s–0.15s) for a polished, fluid load.
- Strictly respects `prefers-reduced-motion: reduce` by setting durations to 0.01ms.

## Responsive Behavior
- **Desktop (1440px):** Framed immersive hero canvas floating in warm off-white canvas with generous whitespace; floating metadata cards anchored at bottom.
- **Tablet (768px):** Proportional scaling of hero canvas; balanced central typography with fluid clamps.
- **Mobile (375px):** Full-bleed or softly rounded hero container; centered bold headline; tactile circular mobile nav button; seamless touch-friendly navigation drawer.
- Zero horizontal overflow (`scrollWidth === innerWidth`).
