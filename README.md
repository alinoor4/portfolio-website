# Ali Noor — Portfolio

Personal portfolio showcasing my work in machine learning research, AI agents, LLM security, and backend engineering.

**Live site:** [alinoor-portfolio.vercel.app](https://alinoor-portfolio.vercel.app/)

## Overview

- **Interactive Hero Figure (`app/figure.tsx`):** Plots real training runs (validation accuracy and weight norm over 6,000 steps, averaged across 3 seeds) from my [replication of Power et al. (2022)](https://github.com/alinoor4/grokking-repo), morphing SVG paths smoothly when switching metrics.
- **Featured Research & Engineering Readouts (`app/page.tsx`):** Full-width panels with inline horizontal bar charts and key metrics for featured work (such as 100% Precision@50 on unseen domains at FlyRank and 970+ unit tests on Project Learner AI), paired with a responsive grid for additional projects.
- **Seaborn-Inspired Theme System (`app/globals.css`, `app/controls.tsx`):** Built on CSS `light-dark()` tokens inspired by `seaborn` (`darkgrid` panels, blue/orange series), with an inline pre-paint script in `app/layout.tsx` to prevent theme flash and View Transitions API crossfading.
- **Accessible Motion:** Left-to-right clip-path reveals and bar transitions that respect `prefers-reduced-motion`, degrade cleanly without JavaScript, and render fully in `@media print`.

## Project Structure

```text
app/
├── content.ts     # All portfolio copy, links, project metrics, and grokking chart data
├── controls.tsx   # Sticky nav (IntersectionObserver), theme toggle, scroll reveals, email copy
├── figure.tsx     # Interactive SVG hero chart (validation accuracy vs. weight norm)
├── globals.css    # Tailwind CSS v4 theme tokens, light-dark() palette, and keyframes
├── icon.svg       # Site favicon
├── layout.tsx     # Root layout, Atkinson Hyperlegible Next font, and pre-paint theme script
└── page.tsx       # Page sections (Work, Earlier work, About, Contact) and data visualizations
```

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack, `cacheComponents`, `partialPrefetching`)
- **UI:** [React 19](https://react.dev), [TypeScript 5](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/turbopack`)
- **Typography:** `Atkinson Hyperlegible Next` via `next/font/google`
- **Deployment:** [Vercel](https://alinoor-portfolio.vercel.app/)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Scripts

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Contact

- **Email:** [alinoor3865@gmail.com](mailto:alinoor3865@gmail.com)
- **GitHub:** [github.com/alinoor4](https://github.com/alinoor4)
- **LinkedIn:** [linkedin.com/in/ali-noor04](https://www.linkedin.com/in/ali-noor04/)
