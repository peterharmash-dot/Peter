# Project: Peter

## Context
Personal repository and learning sandbox of Peter, a design engineer.
It started as a set of static HTML/CSS pages and now also contains a small
React application (in `react-app/`) for learning component-based UI. Both parts
live side by side on purpose.

## Tech Stack
- **Static pages (repo root):** HTML5 + TailwindCSS via CDN
  (`https://cdn.tailwindcss.com`) + vanilla JavaScript. No build step.
- **React app (`react-app/`):**
  - **Framework:** React 19
  - **Build tool:** Vite
  - **Styling:** TailwindCSS v4 via the `@tailwindcss/vite` plugin
    (`@import "tailwindcss";` in `src/index.css`)
  - **Language:** modern JavaScript + JSX (no TypeScript yet)
- **Tooling:** Git + GitHub (gh CLI), npm.

## File Structure
```
.
├── index.html              # Static profile card page (learning example)
├── earnings-pool.html      # Static dashboard recreated from a Figma design
├── README.md / ABOUT.md    # Personal pages (English)
├── .gitignore
└── react-app/              # Vite + React application
    ├── index.html          # Vite HTML entry (mounts #root)
    ├── package.json
    ├── vite.config.js       # React + Tailwind plugins
    └── src/
        ├── main.jsx         # React entry point
        ├── App.jsx          # Demo page showcasing components
        ├── index.css        # Tailwind import
        └── components/
            └── Button.jsx    # Reusable Button component
```

## Code Conventions
- **Indentation:** 2 spaces.
- **Static pages:** semantic HTML5 (`header`/`main`/`section`/`nav`),
  Tailwind utility classes inline, minimal vanilla JS in a trailing `<script>`.
- **React components:**
  - One component per file, `PascalCase.jsx`, default export.
  - Configurable via `props` with sensible defaults (`variant = 'primary'`).
  - Forward extra props to the DOM element via `...props` (e.g. `onClick`).
  - Style with Tailwind utility classes; build the class string from
    small lookup maps (see `Button.jsx`) instead of long ternaries.
- **Styling tokens:** prefer Tailwind tokens (`text-slate-500`, `rounded-full`);
  use arbitrary values (`bg-[#F8F8FB]`) only to match a specific design.
- **Responsiveness:** mobile-first; widen with `md:` / `lg:` prefixes.

## What to do
- Keep React components small, reusable and prop-driven.
- Co-locate components under `react-app/src/components/`.
- Style with Tailwind utilities; reuse the lookup-map pattern for variants/sizes.
- Run `npm run build` inside `react-app/` to verify a change compiles.
- Keep accessibility basics: semantic elements, `lang`, labels, contrast.

## What NOT to do
- Don't mix the two worlds: the root static pages use Tailwind **via CDN**,
  the React app uses Tailwind **via the Vite plugin** — don't add the CDN
  `<script>` inside the React app.
- Don't add a separate `.css` file or `<style>` block when a Tailwind utility
  already does the job.
- Don't hardcode random hex colors when a Tailwind token fits.
- Don't commit `node_modules/` or `dist/` (already ignored).
- Don't over-engineer: vanilla JS is fine for the static pages; reach for React
  only inside `react-app/`.

## House Rules
- **Комментарии в коде всегда писать на русском языке.** Это домашнее правило —
  весь репозиторий учебный, комментарии должны быть понятны на русском.
- **Рабочий процесс через ветку и Pull Request:** не пушить напрямую в `main`.
  Для каждой задачи создавать ветку `feature/...`, делать коммит, открывать PR,
  затем squash-merge в `main`.
- Сообщения коммитов и заголовки PR — на английском; описание PR можно на
  русском/украинском.
