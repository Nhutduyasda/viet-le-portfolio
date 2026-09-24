# AGENTS.md — Operating Rules

You are building a real professional portfolio, not a design demo.

## Core rules
1. Work one phase at a time.
2. Do not invent professional facts, company names, dates, certifications, project metrics, or job titles.
3. If content is not verified, use clearly marked placeholders in the content data layer instead of fabricating details.
4. Keep the visual direction light, Scandinavian, calm, premium, and energy-focused.
5. Preserve accessibility, responsive behavior, and performance throughout.
6. Reuse components; avoid one-off styling unless justified.
7. Prefer content-driven components over hard-coded copy inside layout files.
8. Keep animation subtle and purposeful.
9. Do not add features outside the approved scope without explicit instruction.
10. Before finishing a phase, run lint, typecheck, and build if available.

## Visual constraints
- Main background: warm white / off-white.
- Primary text: dark neutral or deep green/navy.
- Accent: restrained botanical/energy green.
- Border radius: medium, not overly rounded.
- Shadows: soft and sparse.
- Sections must have generous whitespace.
- Images should feel editorial and architectural rather than stock-sales oriented.

## UX constraints
- Navigation should be simple and sticky only if it remains unobtrusive.
- Main CTA should be LinkedIn / contact.
- No contact form in v1 unless explicitly requested.
- No skill percentages.
- No fake testimonials.
- No fake client logos.
- No fake project screenshots.

## Code quality
- TypeScript strict mode where practical.
- Semantic HTML.
- Keyboard accessible interactions.
- Respect `prefers-reduced-motion`.
- Components should have clear names and responsibilities.
- Avoid unnecessary dependencies.

## Delivery behavior
At the end of each phase, report:
- files changed
- what was implemented
- visual/UX decisions made
- tests/checks run
- remaining known issues
- recommended next phase
