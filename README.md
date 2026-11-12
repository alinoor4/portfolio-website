# Ali Noor's portfolio

Source for my portfolio site: machine learning research, LLM agents and LLM security projects.

The chart at the top of the page is real data. It plots validation accuracy and weight norm from my [grokking replication](https://github.com/alinoor4/grokking-repo), averaged over 3 seeds, and you can switch between the two.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Edit the content

All text, links and chart data live in `app/content.ts`. The page layout is `app/page.tsx`, the chart is `app/figure.tsx`, and the colors for both themes are in `app/globals.css`.

Built with Next.js and Tailwind CSS.
