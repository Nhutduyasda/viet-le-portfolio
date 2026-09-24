# Design System — Clean Energy / Scandinavian

## Design intent
Create a calm, premium interface inspired by Scandinavian editorial design and modern clean-energy brands.

## Color direction
Use CSS variables/tokens, not random colors inside components.

Suggested starting palette:
- `--bg`: #F7F8F3
- `--surface`: #FFFFFF
- `--text`: #1D2A24
- `--muted`: #67746D
- `--primary`: #173B2B
- `--accent`: #7FA66A
- `--accent-soft`: #E8EFE3
- `--border`: #DDE4DC

These values are starting points. Adjust slightly if contrast or image harmony requires it.

## Typography
Aim for a modern editorial feel.

Preferred hierarchy:
- Display: strong sans or restrained serif/sans pairing
- Body: highly readable sans

Examples if available via Google Fonts / next/font:
- Manrope + Instrument Serif
- Inter + Newsreader
- Geist + Libre Baskerville

Do not use more than 2 font families.

## Layout
- Max content width: ~1200–1280px
- Body text measure: ~60–72ch
- Large section spacing
- Grid-based layout
- Asymmetry is allowed when balanced
- Cards should not dominate every section

## Hero
Preferred structure:
- left: identity, role, concise statement, CTA
- right: portrait or renewable-energy image
- minimal stats or expertise labels below

## Components
Recommended:
- `SiteHeader`
- `SectionHeading`
- `Hero`
- `ExpertiseCard`
- `ExperienceTimeline`
- `ProjectFeature`
- `Metric`
- `ActivityCard`
- `ContactCTA`
- `SiteFooter`

## Motion
Use only for:
- fade/translate entrance
- image reveal
- number emphasis
- nav underline
- project hover

Avoid continuous movement.

## Images
Use real images supplied by the owner whenever possible.
If placeholders are needed, use neutral labeled blocks or royalty-safe temporary images, and mark them as placeholders.

## Responsive behavior
Mobile should not feel like a compressed desktop layout.
- Hero stacks vertically.
- Navigation collapses cleanly.
- Timeline becomes a simple vertical flow.
- Project metrics wrap naturally.
- Minimum tap target ~44px.
