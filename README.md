# Barathkumar V — Portfolio

React 19 + Vite + Tailwind CSS v4 + Motion, served by a small Express server (Vite middleware in development, `dist/` in production).

## Run locally

1. `npm install`
2. `npm run dev` → http://localhost:3000 (set `PORT` to use another port)

## Build & run in production

```
npm run lint    # TypeScript check
npm run build   # outputs dist/ (static site + dist/server.cjs)
npm start       # serves dist/ on port 3000
```

## Environment

`PORT` (optional, default `3000`) sets the server port. No API keys are needed.

## Structure

- `server.ts` — Express server: Vite middleware in dev, static `dist/` in production
- `src/App.tsx` — page composition and the project dialog state
- `src/sections/` — Nav, Hero, Story (scroll statement), Work, Experience, Skills, About, Contact, Footer
- `src/components/` — `ProjectModal`, `PipelineFigure` (the drawn project figures), `Intro`, `Reveal`
- `src/data.ts` — contact details, projects (with figures and links), experience, education, skills, certifications
- `src/index.css` — design tokens (paper, ink, highlighter), type steps, the highlighter and marquee styles
- `public/Barathkumar_resume.pdf` — résumé served at `/Barathkumar_resume.pdf`
- `PRODUCT.md`, `.impeccable/` — design context used by the Impeccable skill

## Updating content

- **Project links:** set `repoUrl` / `liveUrl` on a project in `src/data.ts`. An empty string shows an honest "not public yet" / "no live demo yet" state instead of a button. The Weather Dashboard currently has neither.
- **Project figures:** each project's `figure.steps` is its real pipeline; mark the core step with `model: true` to highlight it.
- **Contact form:** there is no form backend; submitting opens the visitor's email app with the message filled in.

The site is fully static after `npm run build`; `dist/` can also be deployed to any static host.
