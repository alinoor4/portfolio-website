# Ali Noor — Portfolio

Personal portfolio for my work in machine learning research, AI agents, LLM security and backend engineering. The design is a restrained Renaissance theme: real public-domain artwork, gold line-work section headers and a walnut-and-vellum palette, with plain technical copy.

**Live site:** [alinoor-portfolio.vercel.app](https://alinoor-portfolio.vercel.app/)

## What's on the page

| Section | Content |
| --- | --- |
| Hero | Name, tagline, links, Raphael's *The School of Athens* as the backdrop |
| Folio I · Machine Learning & Research | FlyRank search ranking, grokking replication, computer vision lab series, linear regression from scratch |
| Folio II · Agents & LLM Security | Project Learner AI, SubKiller, Squeeze, secure LLM gateway |
| Folio III · Software Engineering | Little Lemon API, movie inventory app, earlier work |
| Folio IV · Technical Stack & Education | Tools by category, engineering pipeline, education and training |
| Contact | Email (with copy button), GitHub, LinkedIn |

Each project folio uses a picker: the project list sits beside the chosen project's card, the first project is open by default, and arrow keys move the selection.

## Motion and interaction

All motion is CSS or a few lines of client code, with no animation library.

- Pointer: the cursor is a swaying feather quill that becomes a tapping gauntlet over anything clickable; a candlelight glow follows it, header drawings and background objects shift at different depths, cards lean slightly toward it and their edges light up, and a gold ring opens on click.
- Scroll: the hero and section drawings drift, the panorama settles, a gold progress line under the nav fills, and cards and bars reveal as they enter the viewport.
- Background: 22 gold details cut from the drawings, from tiny to very large, bob or turn slowly behind the content (large screens only).
- Entrances: the name rises letter by letter, stats count up, and tool chips follow their card in.
- Reduced motion and touch: everything above is disabled under `prefers-reduced-motion: reduce` (the cursors stay, as static images), and pointer effects only run with a fine pointer that can hover. The page renders fully without JavaScript and in print.

## Artwork

Images in `public/art/` are public-domain reproductions from [Wikimedia Commons](https://commons.wikimedia.org) (the Ideal City photograph is CC0):

- Raphael, *The School of Athens*, 1509–11
- Leonardo da Vinci: *Vitruvian Man*, scythed chariot and armoured car, design for a flying machine, studies of water, shadows on spheres, a lifting machine, aerial screw and glider, giant crossbow, self-propelled cart, catapults, a map of rivers
- Albrecht Dürer, *Melencolia I*, 1514 (hourglass, bell and magic square details)
- *Rhombicuboctahedron*, after Leonardo, from Luca Pacioli's *Divina proportione*, 1509
- *The Ideal City*, Urbino, c. 1480–90

Files in `public/art/relics/` are details of those sheets turned into gold line-work on a transparent background.

## Project structure

```text
app/
├── content.ts     # Portfolio copy, links, project metrics and tool lists
├── controls.tsx   # Nav, project picker, scroll reveals, pointer effects, email copy (client code)
├── globals.css    # Tailwind v4 theme tokens, paper grain, gate etchings and all motion
├── icon.svg       # Favicon
├── layout.tsx     # Root layout, fonts and metadata
└── page.tsx       # Page sections and layout (server component)
public/art/        # Artwork scans and relic cut-outs
```

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, `cacheComponents`, `partialPrefetching`)
- [React 19](https://react.dev) and [TypeScript 5](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- Fonts via `next/font/google`: Cormorant Garamond (headings), Atkinson Hyperlegible Next (text), JetBrains Mono (labels)
- Deployed on [Vercel](https://alinoor-portfolio.vercel.app/)

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # ESLint
```

## Contact

- Email: [alinoor3865@gmail.com](mailto:alinoor3865@gmail.com)
- GitHub: [github.com/alinoor4](https://github.com/alinoor4)
- LinkedIn: [linkedin.com/in/ali-noor04](https://www.linkedin.com/in/ali-noor04/)
