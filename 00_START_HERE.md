# Viet Le Portfolio — Agent Vibe-Coding Workflow

This package is designed for an AI coding agent (Codex, Claude Code, Gemini CLI, Cursor Agent, etc.) to build a polished one-page professional portfolio for Viet Le.

## Goal
Build a premium, light-theme personal portfolio for a renewable-energy professional working across Solar PV, BESS, project development, and the energy transition.

## Chosen visual direction
**Clean Energy / Scandinavian**

Keywords:
- light
- calm
- premium
- technical
- trustworthy
- sustainable
- spacious
- minimal
- modern corporate

Avoid:
- dark full-screen themes
- neon green
- crypto/startup aesthetics
- excessive 3D
- noisy gradients
- progress bars for skills
- generic "developer portfolio" layouts

## Recommended stack
- Next.js + TypeScript
- Tailwind CSS
- Motion / Framer Motion only for subtle transitions
- Lucide icons
- next/image for media
- Static content first; no CMS in v1

If a repository already exists, keep its current stable stack unless there is a strong reason to migrate.

## How to use this package
1. Give the agent `AGENTS.md` first.
2. Then give it `PROJECT_BRIEF.md`, `DESIGN_SYSTEM.md`, and `CONTENT_BLUEPRINT.md`.
3. Execute phase prompts in order from `prompts/`.
4. After each phase, run the matching checks in `checklists/QA_GATES.md`.
5. Do not jump ahead when the current phase has visible regressions.

## Definition of done
The final site should:
- feel like an international energy professional's personal brand
- be fast and responsive
- work well on mobile, tablet, and desktop
- make Viet's expertise and project experience easy to understand in under 30 seconds
- be suitable as both a real personal website and a freelance case study
