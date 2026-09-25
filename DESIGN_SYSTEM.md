# Design System — Clean Energy / Minimal Landscape (Solarify-Aligned)

## Visual Contract Override
The primary source of truth for Phase 1 visual implementation is the official **Solarify** desktop reference.

This layout is:
- **Full-viewport renewable-energy photography** (cinematic landscape of green mountain terrain and wind turbines)
- **Minimal transparent navigation** (header overlaid directly on hero image, low visual noise)
- **Centered modern sans typography** (Manrope, weight 400–500, architectural and restrained)
- **Very low UI density** (zero clutter, no frames, no glass cards, no status pings)

## Color Palette (Official Solarify System)
- `--color-text`: `#FBFCFD` (clean near-white for primary text and CTA pill)
- `--color-dark`: `#081813` (deep primary dark for page base, header CTA text, and overlay tone)
- `--color-neutral-dark`: `#373F40` (secondary dark)
- `--color-green`: `#114A1A` (renewable botanical energy green)
- `--color-border`: `#B5C2C5` (soft neutral border guidance)
- `--color-muted`: `#788182` (quiet metadata text)

## Image Overlay
The background landscape remains clearly visible and rich, not over-darkened:
```css
background: linear-gradient(
  to bottom,
  rgba(8, 24, 19, 0.34),
  rgba(8, 24, 19, 0.40) 55%,
  rgba(8, 24, 19, 0.56)
);
```

## Typography
- **Primary Font:** `Manrope` (modern geometric/humanist sans-serif).
- **Hero Headline:**
  - Font size: `clamp(2.625rem, 4.5vw, 5rem)` (~42px mobile, ~60-64px desktop).
  - Font weight: `400`–`500` (no 700/800 bold, no serif, no italic highlight, no colored words).
  - Line height: `1.02` (tight, architectural).
  - Letter spacing: `-0.035em`.
  - Alignment: Centered.
  - Color: `#FBFCFD`.
- **Navigation Text:**
  - Size: ~14–15px.
  - Weight: regular / medium (`font-medium`).
  - Color: `#FBFCFD` with subtle opacity on non-active links.

## Geometry & Header
- **Hero Canvas:**
  - `width: 100%`
  - `min-height: 100svh`
  - `position: relative`
  - `overflow: hidden`
  - Zero outer margin, zero container border-radius, no card frame.
- **Header:**
  - Sits over the hero image (`position: absolute; top: 0; left: 0; right: 0`).
  - Top spacing: ~24–30px.
  - Internal max-width: ~1100–1200px centered.
  - Transparent background, no solid bar, no bottom border, no large blur.
  - Left: Clean `Viet Le` wordmark in white sans.
  - Right: `Overview` navigation + white pill CTA (`#FBFCFD` background, `#081813` text, height ~42px, `rounded-full`, horizontal padding 24px).
  - Mobile Menu Trigger: Compact circular button (40x40px, `#FBFCFD` background) with two clean dark horizontal bars.

## Center Content Composition
Hero center contains only:
1. **Eyebrow:** Small dark translucent capsule (`h-[28px]`, `px-3.5`, `rounded-full`, border `rgba(255,255,255,0.20)`, bg `rgba(0,0,0,0.25)`), content: `Renewable Energy · Vietnam`.
2. **Headline:** Centered, architectural modern sans, content:
   `Developing practical energy solutions for a sustainable future`.
3. **Concise CTA Element:** Translucent dark pill button with embedded white circular arrow `↗` linking to LinkedIn.

## Removed Clutter
All rejected elements are permanently eliminated:
- No glass cards (Focus Domains, Based In, Art Direction)
- No 3-column metadata strips
- No dark sticky navbars
- No framed rounded hero container
- No animated ping / glowing status dots
- No serif hero emphasis
- No unverified biographical copy
