"use client";

import { useState } from "react";
import { valAccuracy, weightNorm } from "./content";

const STEPS = 6000;
const scale = "non-scaling-stroke" as const;

type View = {
  name: string;
  data: { withDecay: number[]; without: number[] };
  domain: [min: number, max: number];
  ticks: [value: number, label: string][];
  format: (v: number) => string;
  summary: string;
};

const views: Record<"accuracy" | "norm", View> = {
  accuracy: {
    name: "Validation accuracy",
    data: valAccuracy,
    domain: [0, 1],
    ticks: [
      [1, "100%"],
      [0, "0%"],
    ],
    format: (v) => `${+(v * 100).toFixed(1)}%`,
    summary:
      "Line chart of validation accuracy over 6,000 training steps. With weight decay, accuracy climbs from 1% to 100% by about step 2,400. Without weight decay it stays at 1.7%.",
  },
  norm: {
    name: "Weight norm",
    data: weightNorm,
    // The axis starts at 24, not 0, as matplotlib autoscales it in the repo's own plot; the 25 tick makes that visible
    domain: [24, 100],
    ticks: [
      [100, "100"],
      [25, "25"],
    ],
    format: (v) => v.toFixed(1),
    summary:
      "Line chart of total weight norm over 6,000 training steps. With weight decay, the norm falls from 87 to under 30 within the first 2,000 steps and ends at 26. Without weight decay it grows from 87 to 98.",
  },
};

export function Figure({ children }: { children: React.ReactNode }) {
  const [metric, setMetric] = useState<keyof typeof views>("accuracy");
  const view = views[metric];
  const [min, max] = view.domain;

  // Percent from the top of the plot, which is also the y coordinate in the 0 to 100 viewBox
  const y = (v: number) => ((max - v) / (max - min)) * 100;
  const path = (values: number[]) =>
    values.map((v, i) => `${i ? "L" : "M"}${Math.min(i * 100, 5999)},${y(v).toFixed(1)}`).join("");

  const runs = [
    { name: "Without weight decay", values: view.data.without, stroke: "stroke-memorized", swatch: "bg-memorized" },
    { name: "With weight decay", values: view.data.withDecay, stroke: "stroke-learned", swatch: "bg-learned" },
  ];
  // The run that ends higher gets the top label, so the labels follow the lines when the metric changes
  const labels = [...runs].sort((a, b) => b.values.at(-1)! - a.values.at(-1)!);

  return (
    <>
      <div className="relative">
        {/* On wide screens the intro sits in the gap between the two curves */}
        <div className="pb-10 lg:absolute lg:top-[4.5rem] lg:right-10 lg:bottom-10 lg:left-[36%] lg:z-10 lg:flex lg:flex-col lg:justify-center lg:pb-0">
          {children}
        </div>
        <div className="relative h-80 bg-panel sm:h-96 lg:h-[36rem]">
          <div role="group" aria-label="Chart metric" className="absolute top-2 left-2 z-20 flex gap-1 text-sm">
            {(Object.keys(views) as (keyof typeof views)[]).map((key) => (
              <button
                key={key}
                type="button"
                aria-pressed={metric === key}
                onClick={() => setMetric(key)}
                className={`rounded-md px-3 py-3 leading-5 transition-transform duration-150 ease-out active:scale-[0.97] ${
                  metric === key ? "bg-paper text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {views[key].name}
              </button>
            ))}
          </div>

          <div
            role="img"
            aria-label={view.summary}
            className="absolute top-[5.5rem] right-4 bottom-10 left-14 lg:top-[4.5rem] lg:right-10"
          >
            <svg viewBox={`0 0 ${STEPS} 100`} preserveAspectRatio="none" className="absolute inset-0 size-full overflow-visible">
              {view.ticks.map(([value], i) => (
                <line key={i} x2={STEPS} y1={y(value)} y2={y(value)} className="stroke-paper" strokeWidth="1.5" vectorEffect={scale} />
              ))}
            </svg>
            <svg
              viewBox={`0 0 ${STEPS} 100`}
              preserveAspectRatio="none"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="plot-lines absolute inset-0 size-full overflow-visible"
            >
              {runs.map((run) => {
                const d = path(run.values);
                // The CSS d property is what lets the line morph between metrics; the attribute is the fallback
                return (
                  <path
                    key={run.name}
                    d={d}
                    style={{ d: `path("${d}")` } as React.CSSProperties}
                    className={run.stroke}
                    vectorEffect={scale}
                  />
                );
              })}
            </svg>

            {/* Text that changes with the metric is keyed by it, so it fades back in as the lines finish morphing */}
            {view.ticks.map(([value, label], i) => (
              <span
                key={metric + i}
                className="plot-swap absolute -left-2 -translate-x-full -translate-y-1/2 text-sm text-muted tabular-nums"
                style={{ top: `${y(value)}%` }}
              >
                {label}
              </span>
            ))}
            <span className="absolute top-full left-0 mt-2 text-sm text-muted tabular-nums">0</span>
            {[2000, 4000].map((s) => (
              <span
                key={s}
                className="absolute top-full mt-2 hidden -translate-x-1/2 text-sm text-muted tabular-nums sm:block"
                style={{ left: `${(s / STEPS) * 100}%` }}
              >
                {s.toLocaleString("en-US")}
              </span>
            ))}
            <span className="absolute top-full right-0 mt-2 text-sm text-muted tabular-nums">6,000 steps</span>

            {/* Each label sits above its line so dips in the curve never run through it. Keyed by slot, not run:
                moving the node would replay its entrance animation. */}
            {labels.map((run, i) => (
              <p key={i} className={`plot-end absolute right-0 text-sm ${i ? "bottom-5" : "bottom-full mb-1.5"}`}>
                <span key={metric} className="plot-swap flex items-center gap-2">
                  <span className={`h-[2.5px] w-4 rounded-full ${run.swatch}`} />
                  {run.name} <b className="font-semibold tabular-nums">{view.format(run.values.at(-1)!)}</b>
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-3 max-w-[40rem] text-[0.9375rem]/[1.5] text-muted">
        The same 2-layer transformer learning a / b mod 97, trained with and without weight decay. Both runs fit the
        training set, but only one learns the rule, and its weight norm collapses at the same steps. Mean of 3 seeds,
        from{" "}
        <a href="https://github.com/alinoor4/grokking-repo" className="link">
          my replication of Power et al. (2022)
        </a>
        .
      </p>
    </>
  );
}
