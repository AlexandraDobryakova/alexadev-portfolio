# alexadev — Developer Portfolio

A bilingual (English/Russian) developer portfolio built with React, TypeScript, Vite and React Router.

## Tech stack

- React 19 + TypeScript
- Vite 7
- React Router
- Lucide React
- Custom responsive CSS

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

## Content guidelines

- Commercial experience is presented as C# / Unity development.
- The Unity Test Task links to its public GitHub repository.
- Swift apps and selected websites are labelled as Claude-assisted; the portfolio describes product direction, requirements, UX decisions, review and testing as the author's contribution.
- The ten Marlerino Group websites are grouped into one commercial case study.
- .NET is described as a learning direction, not as completed portfolio projects.
- Do not publish confidential client source code, credentials or private data.

## Deploy to Vercel

Import the repository into Vercel. The default settings are sufficient:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

`vercel.json` rewrites application routes to `index.html` so direct links to nested pages work after deployment.

## Runtime

The project targets Node.js 20.19+ (Node.js 22 is recommended; see `.nvmrc`).

## Portfolio content

- The Unity test assignment is a separate case study and links to the public repository.
- App artwork in `public/projects/` consists of the supplied project icons.
- The four Swift app pages and the Unity test-task page include supplied screenshots. Screenshots are presentation assets and do not imply an Xcode or Unity build was run.
- The social preview is generated locally as `public/og-image.png` (1200 × 630).
