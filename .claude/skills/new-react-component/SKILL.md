---
name: new-react-component
description: When the user asks to create a new React component in react-app/ (e.g. "создай компонент Card", "new react component Modal") — scaffold a prop-driven component that follows this repo's conventions, demo it, verify the build, and open a PR.
---

# Skill: New React Component

When the user asks to create/add a new React component for `react-app/`:

## Steps
1. Read `CLAUDE.md` to refresh project conventions before writing anything.
2. Open `react-app/src/components/Button.jsx` as the reference pattern
   (prop-driven, lookup-map variants, `...props` forwarding, Russian comments).
3. Create `react-app/src/components/<PascalCase>.jsx`:
   - one component per file, default export, `PascalCase` name;
   - props with sensible defaults (e.g. `variant = 'primary'`, `size = 'md'`);
   - forward unknown props to the root element via `...props`;
   - if it has visual variants/sizes, build the className from small lookup
     maps (like `Button.jsx`), not long ternaries;
   - style with Tailwind utility classes; comments in Russian.
4. Add a short demo of the component to `react-app/src/App.jsx`
   (show each variant/size) so it can be seen in the browser.
5. Run `npm run build` inside `react-app/` to confirm it compiles.
6. Follow the git workflow: create `feature/<name>` branch, commit
   (English message), push, open a PR. Squash-merge only after approval.

## Output format
- A short summary of the component and its props (variants/sizes table).
- The new component file diff + the `App.jsx` demo diff.
- The `npm run build` result (pass/fail).
- The PR URL at the end.

## Conventions to follow (from CLAUDE.md)
- One component per file, `PascalCase.jsx`, default export, prop-driven.
- Tailwind **via the Vite plugin** inside `react-app` (never the CDN script).
- Prefer Tailwind tokens; arbitrary values (`[#...]`) only to match a design.
- 2-space indentation; **code comments always in Russian**.
- Branch → PR → squash-merge; never push directly to `main`.

## Don't
- Don't add the CDN Tailwind `<script>` inside the React app.
- Don't introduce TypeScript unless the user explicitly asks (project is JS+JSX).
- Don't write long ternary chains for classes — use lookup maps.
- Don't commit `node_modules/` or `dist/`.
- Don't push straight to `main` or skip the PR.
