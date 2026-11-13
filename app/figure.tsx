"use client";

import { useState } from "react";
import { valAccuracy, weightNorm } from "./content";

const STEPS = 6000;
const POINT_COUNT = valAccuracy.withDecay.length;
const scale = "non-scaling-stroke" as const;

type View = {
  name: string;
  shortName: string;
  data: { withDecay: number[]; without: number[] };
  domain: [min: number, max: number];
  ticks: [value: number, label: string][];
  format: (v: number) => string;
  summary: string;
};

const views: Record<"accuracy" | "norm", View> = {
  accuracy: {
    name: "Validation accuracy",
    shortName: "Accuracy",
    data: valAccuracy,
    domain: [0, 1],
    ticks: [
      [1, "100%"],
      [0.5, "50%"],
      [0, "0%"],
    ],
    format: (v) => `${+(v * 100).toFixed(1)}%`,
    summary:
      "Codex line chart of validation accuracy over 6,000 training steps. With weight decay, accuracy climbs from 1% to 100% by about step 2,400. Without weight decay it stays at 1.7%.",
  },
  norm: {
    name: "Weight norm",
    shortName: "Weight norm",
    data: weightNorm,
    domain: [24, 100],
    ticks: [
      [100, "100"],
      [60, "60"],
      [25, "25"],
    ],
    format: (v) => v.toFixed(1),
    summary:
      "Codex line chart of total weight norm over 6,000 training steps. With weight decay, the norm falls from 87 to under 30 within the first 2,000 steps and ends at 26. Without weight decay it grows from 87 to 98.",
  },
};

export function Figure() {
  const [metric, setMetric] = useState<keyof typeof views>("accuracy");
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  const view = views[metric];
  const [min, max] = view.domain;

  const y = (v: number) => ((max - v) / (max - min)) * 100;
  const xForIndex = (i: number) => Math.min(i * 100, 5999);
  const path = (values: number[]) =>
    values.map((v, i) => `${i ? "L" : "M"}${xForIndex(i)},${y(v).toFixed(1)}`).join("");
  const areaPath = (values: number[]) => `${path(values)}L5999,100L0,100Z`;

  const runs = [
    { name: "Without decay", values: view.data.without, stroke: "stroke-[#e07a5f]" },
    { name: "With decay", values: view.data.withDecay, stroke: "stroke-[#5c92c8]" },
  ];

  const activeIdx = hoverIdx ?? POINT_COUNT - 1;
  const activeStep = activeIdx * 100;
  const activeXPercent = (xForIndex(activeIdx) / STEPS) * 100;
  const phase = activeStep < 1000 ? "Memorizing" : activeStep < 2400 ? "Grokking" : "Generalized";

  const withDecayVal = view.data.withDecay[activeIdx];
  const withoutVal = view.data.without[activeIdx];

  const updateHoverFromPointer = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width <= 0) return;
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const idx = Math.round(ratio * (POINT_COUNT - 1));
    setHoverIdx(idx);
  };

  return (
    <div className="panel-swap rounded-2xl border border-[#d4af37]/30 bg-[#1c130d]/95 p-4 text-[#f4ead5] shadow-2xl backdrop-blur-md sm:p-5">
      {/* Top Codex header & metric toggle */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-[#d4af37] uppercase">
            CODEX ATLANTICUS · FOLIO I (DE GENERALIZATIONE)
          </p>
          <h3 className="font-display mt-0.5 text-xl font-bold tracking-[-0.01em] text-[#f4ead5] sm:text-2xl">
            Modular division (a / b mod 97)
          </h3>
        </div>

        <div
          role="group"
          aria-label="Chart metric"
          className="flex gap-1 rounded-xl border border-[#d4af37]/25 bg-[#130d09] p-1 text-xs font-medium"
        >
          {(Object.keys(views) as (keyof typeof views)[]).map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={metric === key}
              onClick={() => setMetric(key)}
              className={`rounded-lg px-3 py-1.5 transition-[background-color,color,transform] duration-150 ease-out active:scale-[0.97] ${
                metric === key
                  ? "bg-[#d4af37] font-semibold text-[#16100b] shadow-xs"
                  : "text-[#c8b89b] hover:text-[#f4ead5]"
              }`}
            >
              {views[key].shortName}
            </button>
          ))}
        </div>
      </div>

      {/* Live Codex telemetry readout strip */}
      <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-xs tabular-nums">
        <div className="rounded-xl border border-[#d4af37]/20 bg-[#140e0a]/90 px-3 py-2">
          <div className="flex items-center justify-between gap-1 text-[0.6875rem] text-[#c8b89b]">
            <span>Step</span>
            <span className="hidden text-[#e8c97a] sm:inline">{phase}</span>
          </div>
          <div className="mt-0.5 text-sm font-semibold text-[#f4ead5]">{activeStep.toLocaleString("en-US")}</div>
        </div>

        <div className="rounded-xl border border-[#5c92c8]/30 bg-[#140e0a]/90 px-3 py-2">
          <div className="flex items-center gap-1.5 text-[0.6875rem] text-[#c8b89b]">
            <span className="size-2 shrink-0 rounded-full bg-[#5c92c8]" aria-hidden="true" />
            <span className="truncate">With decay</span>
          </div>
          <div className="mt-0.5 text-sm font-semibold text-[#89b4e3]">{view.format(withDecayVal)}</div>
        </div>

        <div className="rounded-xl border border-[#e07a5f]/30 bg-[#140e0a]/90 px-3 py-2">
          <div className="flex items-center gap-1.5 text-[0.6875rem] text-[#c8b89b]">
            <span className="size-2 shrink-0 rounded-full bg-[#e07a5f]" aria-hidden="true" />
            <span className="truncate">Without decay</span>
          </div>
          <div className="mt-0.5 text-sm font-semibold text-[#e07a5f]">{view.format(withoutVal)}</div>
        </div>
      </div>

      {/* Interactive SVG Codex Plate */}
      <div className="relative mt-3 h-56 rounded-xl border border-[#d4af37]/20 bg-[#120c08]/95 px-12 pt-5 pb-8 select-none sm:h-64">
        <div
          role="img"
          aria-label={view.summary}
          onPointerMove={updateHoverFromPointer}
          onPointerDown={updateHoverFromPointer}
          onPointerLeave={() => setHoverIdx(null)}
          className="relative size-full cursor-crosshair touch-pan-y"
        >
          {/* Compass-style dashed horizontal & vertical gridlines */}
          <svg
            viewBox={`0 0 ${STEPS} 100`}
            preserveAspectRatio="none"
            className="absolute inset-0 size-full overflow-visible"
          >
            {[2000, 4000].map((s) => (
              <line
                key={s}
                x1={s}
                x2={s}
                y1={0}
                y2={100}
                stroke="rgba(212,175,55,0.14)"
                strokeWidth="1"
                strokeDasharray="3 5"
                vectorEffect={scale}
              />
            ))}
            {view.ticks.map(([value], i) => (
              <line
                key={i}
                x2={STEPS}
                y1={y(value)}
                y2={y(value)}
                stroke="rgba(212,175,55,0.22)"
                strokeWidth="1"
                strokeDasharray="5 5"
                vectorEffect={scale}
              />
            ))}
          </svg>

          {/* Lapis Lazuli & Venetian Sanguine curves */}
          <svg
            viewBox={`0 0 ${STEPS} 100`}
            preserveAspectRatio="none"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="plot-lines absolute inset-0 size-full overflow-visible"
          >
            <defs>
              <linearGradient id="codex-lapis-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5c92c8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#5c92c8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={areaPath(view.data.withDecay)}
              style={{ d: `path("${areaPath(view.data.withDecay)}")` } as React.CSSProperties}
              fill="url(#codex-lapis-fill)"
              stroke="none"
            />
            {runs.map((run) => {
              const d = path(run.values);
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

          {/* Pointer scrubber needle & ink points */}
          {hoverIdx !== null && (
            <>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 w-px bg-[#d4af37]/55"
                style={{ left: `${activeXPercent}%` }}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5c92c8] ring-2 ring-[#1c130d]"
                style={{ left: `${activeXPercent}%`, top: `${y(withDecayVal)}%` }}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e07a5f] ring-2 ring-[#1c130d]"
                style={{ left: `${activeXPercent}%`, top: `${y(withoutVal)}%` }}
              />
            </>
          )}

          {view.ticks.map(([value, label], i) => (
            <span
              key={metric + i}
              className="plot-swap pointer-events-none absolute -left-2.5 -translate-x-full -translate-y-1/2 font-mono text-[0.6875rem] text-[#c8b89b] tabular-nums"
              style={{ top: `${y(value)}%` }}
            >
              {label}
            </span>
          ))}

          <span className="pointer-events-none absolute top-full left-0 mt-2 font-mono text-[0.6875rem] text-[#c8b89b] tabular-nums">
            0
          </span>
          {[2000, 4000].map((s) => (
            <span
              key={s}
              className="pointer-events-none absolute top-full mt-2 hidden -translate-x-1/2 font-mono text-[0.6875rem] text-[#c8b89b] tabular-nums sm:block"
              style={{ left: `${(s / STEPS) * 100}%` }}
            >
              {s.toLocaleString("en-US")}
            </span>
          ))}
          <span className="pointer-events-none absolute top-full right-0 mt-2 font-mono text-[0.6875rem] text-[#c8b89b] tabular-nums">
            6,000 steps
          </span>
        </div>
      </div>

      <p className="mt-3 text-xs/[1.5] text-[#c8b89b]">
        Hover or drag across the plate to inspect training steps (mean of 3 seeds, Power et al. 2022 replication).{" "}
        <a
          href="https://github.com/alinoor4/grokking-repo"
          className="text-[#e8c97a] underline decoration-[#e8c97a]/40 underline-offset-4 hover:decoration-[#e8c97a]"
        >
          View replication repo
        </a>
        .
      </p>
    </div>
  );
}
