# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers screening entry-level software, ML/AI and frontend candidates. They arrive from a resume, LinkedIn or a job application, skim for under a minute, and decide whether to shortlist or download the resume.

Secondary: freelance clients and collaborators looking for someone to build a web app, an ML prototype or a small tool.

## Product Purpose

The personal portfolio of Barathkumar V, a B.Tech graduate in Artificial Intelligence and Data Science (PA College of Engineering and Technology, 2022–2026). It shows the projects, internships, education and skills behind the resume, and gets the visitor to download the resume or make contact. Success is a recruiter understanding within seconds who he is, what he builds across frontend, software and AI/ML, and how to reach him.

## Positioning

One person who works across the three layers most graduates pick only one of: machine learning models (NLP, regression, SVM, computer vision), the software around them (Flask, FastAPI, Express, Streamlit) and the interface people actually use (React, Tailwind).

## Operating Context

Visitors read on desktop between other applications, and on phones from LinkedIn. The resume PDF lives at `/Barathkumar_resume.pdf`. The Express server (`server.ts`) only serves the site; the built `dist/` also works on any static host.

## Capabilities and Constraints

- Stack is fixed: React 19, TypeScript, Vite, Tailwind CSS v4, Motion, Lucide React, Express. No new dependencies without a concrete reason.
- The contact form has no backend. It must not claim a message was sent; it hands off to the visitor's mail client.
- Five projects link to their public GitHub repositories. The Weather Dashboard has no public repository or demo yet, and no project has a live demo; the UI shows those as pending, never as finished links.

## Brand Commitments

- Name: Barathkumar V (Barath).
- The AI chat assistant (Barath-AI) was removed at the owner's request. Do not reintroduce an assistant or any AI API integration without asking.
- Site facts stay as currently written on the site (CGPA 7.75, LinkedIn `/in/barathkumar-ai-ds/`, CLOB Groups Dec 2024, Livestream Technologies June 2024, hobbies as listed) even where the resume PDF differs. Change only with the owner's approval.

## Evidence on Hand

- Studio portrait: `src/assets/barath.png` (grey seamless background, black suit).
- Resume: `public/Barathkumar_resume.pdf`.
- Six projects, three internships (JYESTA, CLOB Groups, Livestream Technologies), three education entries, five certifications, four achievements, all in `src/data.ts` and `src/App.tsx`.
- No screenshots of any project exist. Projects are shown as drawn figures of their real pipelines.
- No clients, testimonials, metrics, employers' logos or press. Do not invent any, nor proficiency ratings or years of experience.

## Product Principles

1. Recruiter clarity first: who, what, proof, contact, within one screen and one scroll.
2. Prove with the real work; never decorate around missing work or invent it.
3. Honest states: placeholder links and the form handoff say exactly what is true.

## Accessibility & Inclusion

Keyboard-reachable everything, visible focus, WCAG AA contrast, `prefers-reduced-motion` respected.
