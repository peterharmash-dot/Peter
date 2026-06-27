# Project: Peter

## Context
Personal repository and learning sandbox of Peter, a design engineer.
It currently holds a small personal page and static UI pages built while
learning HTML/CSS (including an "Earnings Pool" dashboard recreated from a
Figma design). It is a plain static site — no build tooling.

## Tech Stack
- **Markup:** HTML5 (semantic tags)
- **Styling:** TailwindCSS, loaded via CDN (`https://cdn.tailwindcss.com`) —
  there is no build step, no PostCSS, no `tailwind.config.js`
- **Scripting:** Vanilla JavaScript (small inline `<script>` blocks only)
- **Tooling:** Git + GitHub (gh CLI). No npm / Node / bundler.

## File Structure
```
.
├── index.html          # Simple profile card page (learning example)
├── earnings-pool.html  # Dashboard recreated from a Figma design
├── README.md           # Personal intro (English)
├── ABOUT.md            # Longer "about me" page (English)
└── .gitignore          # Ignores local reference assets (e.g. .figma_ref.png)
```

## Code Conventions
- **Indentation:** 2 spaces.
- **HTML:** semantic structure — `<header>`, `<main>`, `<section>`, `<nav>`;
  pages set `lang` and `<meta charset="UTF-8">` + viewport.
- **Styling:** Tailwind utility classes written inline in the markup.
  Arbitrary values are used only to match a design exactly, e.g. `bg-[#F8F8FB]`.
- **Responsiveness:** mobile-first; widen layouts with `md:` / `lg:` prefixes.
- **JavaScript:** minimal, plain functions in a single `<script>` at the end
  of `<body>`; DOM accessed via `getElementById`.
- **Comments:** explanatory comments describing *what a block/class does*.

## What to do
- Use semantic HTML5 elements and keep one clear page structure
  (header → main → sections).
- Style with Tailwind utility classes; prefer Tailwind tokens
  (`text-slate-500`, `rounded-2xl`) over arbitrary values.
- Make layouts responsive with `grid`/`flex` + `md:`/`lg:` breakpoints.
- Keep accessibility basics: `lang` attribute, `alt` on images, `<label>`
  for inputs, sufficient contrast.
- Keep pages self-contained and openable by double-click (no server needed).

## What NOT to do
- Don't add a separate `.css` file or `<style>` block when a Tailwind utility
  already does the job.
- Don't introduce a build step (npm / Vite / PostCSS) or a JS framework
  (React, Vue) unless we deliberately decide to migrate — Tailwind is via CDN
  on purpose.
- Don't hardcode random hex colors when a Tailwind color token fits; use
  arbitrary values (`[#...]`) only to match a specific design.
- Don't commit local reference/junk assets (screenshots, Figma exports) —
  keep them in `.gitignore`.
- Don't over-engineer simple pages with heavy JavaScript; vanilla JS is enough.

## House Rules
- **Комментарии в коде всегда писать на русском языке.** Это домашнее правило —
  весь репозиторий учебный, комментарии должны быть понятны на русском.
- **Рабочий процесс через ветку и Pull Request:** не пушить напрямую в `main`.
  Для каждой задачи создавать ветку `feature/...`, делать коммит, открывать PR,
  затем squash-merge в `main`.
- Сообщения коммитов и заголовки PR — на английском; описание PR можно на
  русском/украинском.
