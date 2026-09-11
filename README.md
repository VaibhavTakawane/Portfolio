# Dev Portfolio (React + Vite)

A single-page, IDE-themed developer portfolio: file-explorer sidebar navigation,
a ⌘K / Ctrl+K command palette, light/dark theme toggle, and an optional
background-music toggle. No backend, no database — everything is static and
runs entirely in the browser.

## 1. Requirements

- Node.js 18 or newer (check with `node -v`)
- npm (comes with Node)

## 2. Install

Unzip the project, open a terminal in the folder, then run:

```bash
npm install
```

## 3. Run it locally

```bash
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`) in your browser.
The page hot-reloads as you edit files.

## 4. Make it yours

Almost everything you need to change lives in one file:

```
src/data/content.js
```

Edit your name, role, bio, skills, experience, projects, resume link, email,
and social links there. Nothing else needs to change for basic content edits.

Optional:
- Put a resume PDF at `public/resume.pdf` (matches the default `resumeUrl`).
- Put an mp3 at `public/music/theme.mp3` to enable the background-music toggle.

## 5. Build for production

```bash
npm run build
```

This creates a `dist/` folder with static HTML/CSS/JS. Preview it locally with:

```bash
npm run preview
```

## 6. Deploy

`dist/` is a plain static site, so it works on any static host:
- **Vercel / Netlify**: connect the repo, build command `npm run build`, output directory `dist`.
- **GitHub Pages**: push `dist/` to a `gh-pages` branch, or use a GitHub Action.
- Any other static host: upload the contents of `dist/` after building.

## Project structure

```
src/
  data/content.js     ← your personal info, projects, skills (edit this)
  context/             theme (light/dark) state, persisted to localStorage
  components/          Sidebar, TabBar, StatusBar, CommandPalette
  pages/                Home, About, Projects, Contact
```
