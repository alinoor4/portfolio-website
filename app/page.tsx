import type { CSSProperties } from "react";
import { email, github, linkedin, sections, tools } from "./content";
import {
  CopyEmail,
  EngineeringConsole,
  Nav,
  ResearchLabConsole,
  Reveals,
  SystemsConsole,
} from "./controls";
import { Figure } from "./figure";
import {
  FoundryColumnsIllustration,
  GlassLabIllustration,
  HeroVistaIllustration,
  HorizonArchwayIllustration,
  TurbineEngineIllustration,
  WaterfallColumn,
} from "./illustrations";

function splitTools(items: string): string[] {
  return items
    .split(/,\s+|\s+and\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

const order = (i: number) => ({ "--i": i }) as CSSProperties;

const credentials = [
  { org: "COMSATS University Islamabad", detail: "B.S. Computer Science" },
  { org: "DeepLearning.AI & Stanford Online", detail: "ML Specialization" },
  { org: "Meta", detail: "Back-End Developer" },
];

const romanNumerals = ["I", "II", "III", "IV", "V"] as const;

const stackMeta = [
  {
    span: "lg:col-span-3",
    accent: "text-[#e8c97a] border-[#d4af37]/30 bg-[#d4af37]/10",
    subtitle: "Foundational syntax, systems memory & numerical scripts",
  },
  {
    span: "lg:col-span-3",
    accent: "text-[#89b4e3] border-[#5c92c8]/35 bg-[#5c92c8]/12",
    subtitle: "Training loops, vision pipelines & controlled ablations",
  },
  {
    span: "lg:col-span-2",
    accent: "text-[#e8a388] border-[#d96b43]/35 bg-[#d96b43]/12",
    subtitle: "REST services, streaming interfaces & interactive apps",
  },
  {
    span: "lg:col-span-2",
    accent: "text-[#89b4e3] border-[#5c92c8]/35 bg-[#5c92c8]/12",
    subtitle: "Relational schemas, event graphs & persistent stores",
  },
  {
    span: "lg:col-span-2",
    accent: "text-[#e8c97a] border-[#d4af37]/30 bg-[#d4af37]/10",
    subtitle: "Containers, Unix tooling & edge-to-cloud deployment",
  },
] as const;

const pipelineStages = [
  { step: "01", title: "Raw Sockets & Data", detail: "Python, C/C++, SQL" },
  { step: "02", title: "Empirical Models", detail: "PyTorch, scikit-learn, OpenCV" },
  { step: "03", title: "Deterministic Guardrails", detail: "FastAPI, Pydantic, Presidio" },
  { step: "04", title: "Web & API Delivery", detail: "Django, Next.js, TypeScript" },
  { step: "05", title: "Runtime & Cloud", detail: "Docker, Linux, AWS, Vercel" },
] as const;

function InstrumentIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      // Proportional dividers & Vitruvian square (Languages)
      return (
        <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-7" aria-hidden="true">
          <circle cx="18" cy="8" r="3" />
          <path d="M16.5 10.5 9 30M19.5 10.5 27 30" strokeLinecap="round" />
          <path d="M11.5 22a9.5 9.5 0 0 0 13 0" strokeDasharray="2.5 2.5" />
        </svg>
      );
    case 1:
      // Armillary sphere & neural polyhedron (Machine learning)
      return (
        <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-7" aria-hidden="true">
          <circle cx="18" cy="18" r="12" />
          <ellipse cx="18" cy="18" rx="12" ry="4.5" transform="rotate(-28 18 18)" />
          <ellipse cx="18" cy="18" rx="12" ry="4.5" transform="rotate(28 18 18)" />
          <circle cx="18" cy="18" r="2.5" fill="currentColor" />
        </svg>
      );
    case 2:
      // Renaissance Roman arch & keystone (Web and APIs)
      return (
        <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-7" aria-hidden="true">
          <path d="M7 30V18a11 11 0 0 1 22 0v12" strokeLinecap="round" />
          <path d="M12 30V18a6 6 0 0 1 12 0v12" opacity="0.6" />
          <path d="M4 30h28M18 4v3" strokeLinecap="round" />
        </svg>
      );
    case 3:
      // Equilibrium balance scale (Data)
      return (
        <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-7" aria-hidden="true">
          <path d="M18 6v24M12 30h12M7 12l22-2" strokeLinecap="round" />
          <path d="M7 12 4 21h6l-3-9ZM29 10l-3 9h6l-3-9Z" strokeLinejoin="round" />
        </svg>
      );
    default:
      // Escapement cogwheel (Infrastructure)
      return (
        <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-7" aria-hidden="true">
          <circle cx="18" cy="18" r="8.5" />
          <circle cx="18" cy="18" r="3" />
          <path d="M18 4v5.5M18 26.5V32M4 18h5.5M26.5 18H32M8.1 8.1l3.9 3.9M24 24l3.9 3.9M27.9 8.1 24 12M12 24l-3.9 3.9" strokeLinecap="round" />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <div id="top" className="relative overflow-x-clip bg-[#16100b] text-[#f4ead5]">
      <Nav />

      <main>
        {/* STAGE 1: HERO TUSCAN HORIZON & CODEX ARCADE */}
        <section
          aria-labelledby="intro"
          className="relative flex min-h-[38rem] flex-col items-center justify-start overflow-hidden pt-24 pb-32 sm:min-h-[44rem] sm:pt-28 lg:min-h-[50rem] lg:pt-32"
        >
          <HeroVistaIllustration />

          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
            <h1
              id="intro"
              style={order(0)}
              className="hero-in font-display text-4xl font-bold tracking-[0.22em] text-[#fff8e8] uppercase drop-shadow-[0_2px_18px_rgba(22,16,11,0.75)] sm:text-6xl lg:text-7xl"
            >
              Ali Noor
            </h1>
            <p
              style={order(1)}
              className="hero-in mt-3 font-mono text-xs tracking-[0.24em] text-[#f6d28b] uppercase drop-shadow-[0_1px_10px_rgba(22,16,11,0.8)] sm:text-sm"
            >
              Machine Learning Undergraduate
            </p>
            <p
              style={order(2)}
              className="hero-in mx-auto mt-4 max-w-2xl text-base/[1.6] text-[#f4ead5]/95 drop-shadow-[0_1px_12px_rgba(22,16,11,0.85)] sm:text-lg"
            >
              &ldquo;I train models, then take them apart to find out why they work.&rdquo;
            </p>

            <div
              style={order(3)}
              className="hero-in mt-7 flex flex-wrap items-center justify-center gap-3 text-xs font-medium"
            >
              <a
                href="#research"
                className="rounded-md bg-[#f4ead5] px-4 py-2 text-[#16100b] shadow-md transition-transform duration-150 ease-out hover:bg-white active:scale-[0.97]"
              >
                Explore the Codex
              </a>
              <a
                href={`mailto:${email}`}
                className="rounded-md border border-[#e8c97a]/55 bg-[#16100b]/55 px-4 py-2 text-[#f4ead5] backdrop-blur-sm transition-[border-color,background-color,transform] duration-150 ease-out hover:border-[#e8c97a] hover:bg-[#16100b]/80 active:scale-[0.97]"
              >
                Email Me
              </a>
              <a
                href={github}
                className="rounded-md border border-[#f4ead5]/40 bg-[#16100b]/45 px-4 py-2 text-[#f4ead5] backdrop-blur-sm transition-[border-color,background-color,transform] duration-150 ease-out hover:border-[#f4ead5] hover:bg-[#16100b]/75 active:scale-[0.97]"
              >
                GitHub
              </a>
              <a
                href={linkedin}
                className="rounded-md border border-[#f4ead5]/40 bg-[#16100b]/45 px-4 py-2 text-[#f4ead5] backdrop-blur-sm transition-[border-color,background-color,transform] duration-150 ease-out hover:border-[#f4ead5] hover:bg-[#16100b]/75 active:scale-[0.97]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* STAGE 2: FOLIO I — EMPIRICAL MACHINE LEARNING & OBSERVATORY */}
        <section
          id="research"
          className="codex-drafting-grid relative scroll-mt-16 overflow-hidden bg-gradient-to-b from-[#16100b] via-[#1f160f] to-[#17100b] py-16 lg:py-24"
        >
          {/* Central lapis-and-gold aqueduct column descending from the hero terrace */}
          <WaterfallColumn className="absolute inset-y-0 left-1/2 hidden w-40 -translate-x-1/2 opacity-80 lg:block" />

          <div className="relative z-10 mx-auto grid max-w-[78rem] items-center gap-12 px-4 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <div data-reveal="">
              <p className="font-mono text-xs tracking-[0.2em] text-[#89b4e3] uppercase">
                Folio I · Machine Learning &amp; Research
              </p>
              <h2 className="font-display mt-3 text-4xl/[1.06] font-bold tracking-[-0.015em] text-[#f4ead5] sm:text-5xl/[1.04]">
                Empirical Machine Learning
              </h2>
              <p className="mt-5 max-w-[36rem] text-base/[1.65] text-[#d9cbb3] sm:text-lg">
                Leonardo called observation <em>Saper Vedere</em>&mdash;knowing how to see. {sections[0].intro}
              </p>
              <p className="mt-4 max-w-[36rem] text-base/[1.65] text-[#d9cbb3] sm:text-lg">
                From inspecting neural representations across weight-decay grokking transitions to scoring over 10,000
                URLs across 30 client domains at FlyRank, every experiment is built to prove why a model generalizes.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="rounded-md bg-[#d4af37] px-5 py-2.5 text-sm font-semibold text-[#16100b] shadow-md transition-transform duration-150 ease-out hover:bg-[#e8c97a] active:scale-[0.97]"
                >
                  Commission a Conversation
                </a>
                <a
                  href={`mailto:${email}`}
                  className="rounded-md border border-[#d4af37]/35 bg-[#1c130d]/80 px-4 py-2.5 text-sm font-medium text-[#f4ead5] transition-[border-color,background-color,transform] duration-150 ease-out hover:border-[#e8c97a] hover:bg-[#d4af37]/15 active:scale-[0.97]"
                >
                  {email}
                </a>
              </div>

              <ResearchLabConsole projects={sections[0].projects}>
                <Figure />
              </ResearchLabConsole>
            </div>

            <div data-reveal="" className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
              <GlassLabIllustration />
            </div>
          </div>
        </section>

        {/* CODEX BRASS CONDUIT DIVIDER (Folio I -> Folio II) */}
        <div
          aria-hidden="true"
          className="relative h-10 border-y border-[#d4af37]/20 bg-[#110c08] shadow-[inset_0_0_24px_rgba(0,0,0,0.75)]"
        >
          <div className="mx-auto flex h-full max-w-[78rem] items-center px-4 sm:px-8">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#f4ead5]/5">
              <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#5c92c8]/80 via-[#d4af37]/70 to-transparent" />
            </div>
          </div>
        </div>

        {/* STAGE 3: FOLIO II — AGENTS, LLM SECURITY & CLOCKWORK MECHANISM */}
        <section
          id="systems"
          className="codex-drafting-grid relative scroll-mt-16 overflow-hidden bg-gradient-to-b from-[#17100b] via-[#211710] to-[#17100b] py-16 lg:py-24"
        >
          <div className="relative z-10 mx-auto grid max-w-[78rem] items-center gap-12 px-4 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
            <div data-reveal="" className="relative order-2 mx-auto w-full max-w-[38rem] lg:order-1 lg:max-w-none">
              <WaterfallColumn className="absolute -top-24 bottom-24 left-[18%] hidden w-24 opacity-80 sm:block" />
              <TurbineEngineIllustration />
            </div>

            <div data-reveal="" className="order-1 lg:order-2">
              <p className="font-mono text-xs tracking-[0.2em] text-[#e07a5f] uppercase">
                Folio II · Agents &amp; LLM Security
              </p>
              <h2 className="font-display mt-3 text-4xl/[1.06] font-bold tracking-[-0.015em] text-[#f4ead5] sm:text-5xl/[1.04]">
                Deterministic Clockwork &amp; Agents
              </h2>

              <div className="mt-6 space-y-5 text-base/[1.65] text-[#d9cbb3]">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#f4ead5]">Code Enforces the Escapement.</h3>
                  <p className="mt-1.5">
                    Like Leonardo&apos;s interlocking clockwork gears and escapement pawls, reliability comes from rigid
                    mechanical constraints. {sections[1].intro}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#f4ead5]">Defense in Depth.</h3>
                  <p className="mt-1.5">
                    Whether orchestrating four streaming teaching agents backed by 970+ unit tests and 14 invariants,
                    computing billing cadence hikes in pure Python, routing offline local models under RAM pressure, or
                    scoring prompt injections before inference, every boundary stays explicit and auditable.
                  </p>
                </div>
              </div>

              <SystemsConsole projects={sections[1].projects} />
            </div>
          </div>
        </section>

        {/* CODEX BRASS CONDUIT DIVIDER (Folio II -> Folio III) */}
        <div
          aria-hidden="true"
          className="relative h-10 border-y border-[#d4af37]/20 bg-[#110c08] shadow-[inset_0_0_24px_rgba(0,0,0,0.75)]"
        >
          <div className="mx-auto flex h-full max-w-[78rem] items-center px-4 sm:px-8">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#f4ead5]/5">
              <div className="ml-auto h-full w-1/2 rounded-full bg-gradient-to-l from-[#d96b43]/80 via-[#d4af37]/70 to-transparent" />
            </div>
          </div>
        </div>

        {/* STAGE 4: FOLIO III — SOFTWARE ENGINEERING, PROBLEM SOLVING & ATELIER */}
        <section
          id="engineering"
          className="codex-drafting-grid relative scroll-mt-16 overflow-hidden bg-gradient-to-b from-[#17100b] via-[#1f160f] to-[#16100b] py-16 lg:py-24"
        >
          <div className="relative z-10 mx-auto grid max-w-[78rem] items-center gap-12 px-4 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <div data-reveal="">
              <p className="font-mono text-xs tracking-[0.2em] text-[#e8c97a] uppercase">
                Folio III · Software Engineering &amp; Problem Solving
              </p>
              <h2 className="font-display mt-3 text-4xl/[1.06] font-bold tracking-[-0.015em] text-[#f4ead5] sm:text-5xl/[1.04]">
                First-Principles Craft
              </h2>

              <div className="mt-6 space-y-5 text-base/[1.65] text-[#d9cbb3]">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#f4ead5]">From Raw Sockets to Production APIs.</h3>
                  <p className="mt-1.5">
                    From Archimedes screws to mechanical printing presses, durable craft rests on mastering the
                    underlying mechanism. {sections[2].intro} Every layer&mdash;from a TLS client built on
                    standard-library raw sockets to token-gated Django REST APIs&mdash;is engineered for clarity.
                  </p>
                </div>

                <div id="about" className="scroll-mt-24">
                  <h3 className="font-display text-xl font-bold text-[#f4ead5]">Education &amp; Rigor.</h3>
                  <p className="mt-1.5">
                    Computer Science undergraduate at COMSATS University Islamabad, grounded in formal training across
                    machine learning and backend engineering.
                  </p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                    {credentials.map((item) => (
                      <li
                        key={item.org}
                        className="rounded-xl border border-[#d4af37]/25 bg-[#1c130d]/90 px-3.5 py-2.5 text-xs"
                      >
                        <div className="font-semibold text-[#f4ead5]">{item.org}</div>
                        <div className="mt-0.5 text-[#c8b89b]">{item.detail}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <EngineeringConsole backendProjects={sections[2].projects} />
            </div>

            <div data-reveal="" className="relative mx-auto w-full max-w-[36rem] lg:max-w-none">
              <FoundryColumnsIllustration />
            </div>
          </div>
        </section>

        {/* CODEX BRASS CONDUIT DIVIDER (Folio III -> Instrumenta Artis) */}
        <div
          aria-hidden="true"
          className="relative h-10 border-y border-[#d4af37]/20 bg-[#110c08] shadow-[inset_0_0_24px_rgba(0,0,0,0.75)]"
        >
          <div className="mx-auto flex h-full max-w-[78rem] items-center px-4 sm:px-8">
            <div className="mx-auto h-1.5 w-2/3 overflow-hidden rounded-full bg-[#f4ead5]/5">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-transparent via-[#d4af37]/75 to-transparent" />
            </div>
          </div>
        </div>

        {/* STAGE 5: DEDICATED FULL-WIDTH TECH STACK — INSTRUMENTA ARTIS */}
        <section
          id="stack"
          className="codex-drafting-grid relative scroll-mt-16 overflow-hidden bg-gradient-to-b from-[#16100b] via-[#1c140e] to-[#16100b] py-16 lg:py-24"
        >
          <div className="relative z-10 mx-auto max-w-[78rem] px-4 sm:px-8">
            <div data-reveal="" className="max-w-3xl">
              <p className="font-mono text-xs tracking-[0.2em] text-[#e8c97a] uppercase">
                04 · Instrumenta Artis — Technical Stack
              </p>
              <h2 className="font-display mt-3 text-4xl/[1.06] font-bold tracking-[-0.015em] text-[#f4ead5] sm:text-5xl/[1.04]">
                Instruments of the Workshop
              </h2>
              <p className="mt-4 text-base/[1.65] text-[#d9cbb3] sm:text-lg">
                Every language, numerical library, web framework, data engine, and runtime used across research
                notebooks, deterministic agent pipelines, and production backends.
              </p>
            </div>

            {/* 5-card visual Bento Grid */}
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
              {tools.map(([group, items], idx) => {
                const parsedItems = splitTools(items);
                const meta = stackMeta[idx] ?? stackMeta[0];
                return (
                  <article
                    key={group}
                    data-reveal=""
                    style={order(idx)}
                    className={`flex flex-col justify-between rounded-2xl border border-[#d4af37]/25 bg-[#1c130d]/92 p-5 shadow-xl backdrop-blur-md transition-colors duration-200 hover:border-[#d4af37]/50 sm:p-6 ${meta.span}`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div className={`grid size-12 place-items-center rounded-xl border ${meta.accent}`}>
                          <InstrumentIcon index={idx} />
                        </div>
                        <div className="text-right">
                          <span className="block font-mono text-[0.6875rem] tracking-[0.16em] text-[#d4af37] uppercase">
                            INSTRUMENT {romanNumerals[idx]}
                          </span>
                          <span className="mt-1 inline-block rounded-md border border-[#d4af37]/20 bg-[#140e0a] px-2 py-0.5 font-mono text-[0.6875rem] text-[#c8b89b] tabular-nums">
                            {parsedItems.length} tools
                          </span>
                        </div>
                      </div>

                      <h3 className="font-display mt-5 text-2xl font-bold text-[#f4ead5]">{group}</h3>
                      <p className="mt-1.5 text-sm text-[#c8b89b]">{meta.subtitle}</p>
                    </div>

                    <ul aria-label={`${group} technologies`} className="mt-5 flex flex-wrap gap-1.5">
                      {parsedItems.map((tool) => (
                        <li
                          key={tool}
                          className="rounded-md border border-[#d4af37]/20 bg-[#140e0a] px-2.5 py-1 font-mono text-xs text-[#f4ead5]"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            {/* End-to-end engineering pipeline strip */}
            <div
              data-reveal=""
              className="mt-6 rounded-2xl border border-[#d4af37]/25 bg-[#1a120c]/95 p-5 shadow-xl sm:p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#d4af37]/15 pb-3.5">
                <span className="font-mono text-xs tracking-[0.16em] text-[#e8c97a] uppercase">
                  End-to-End Engineering Pipeline
                </span>
                <span className="font-mono text-[0.6875rem] text-[#c8b89b]">
                  From raw bytes &amp; tensors to verified production endpoints
                </span>
              </div>

              <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {pipelineStages.map((stage, idx) => (
                  <li
                    key={stage.step}
                    className="relative rounded-xl border border-[#d4af37]/20 bg-[#140e0a]/90 px-3.5 py-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[0.6875rem] font-semibold text-[#d4af37]">{stage.step}</span>
                      {idx < pipelineStages.length - 1 && (
                        <span className="hidden font-mono text-xs text-[#d4af37]/60 lg:inline" aria-hidden="true">
                          &rarr;
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-[#f4ead5]">{stage.title}</div>
                    <div className="mt-0.5 font-mono text-[0.6875rem] text-[#c8b89b]">{stage.detail}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* STAGE 6: FINALE — COFFERED RENAISSANCE ARCHWAY & TUSCAN SUNRISE */}
        <section
          id="contact"
          className="relative flex min-h-[36rem] scroll-mt-16 items-center justify-center overflow-hidden bg-[#16100b] py-20 lg:min-h-[44rem]"
        >
          <HorizonArchwayIllustration />

          <div
            data-reveal=""
            className="relative z-10 mx-4 w-full max-w-xl rounded-2xl border border-[#d4af37]/35 bg-[#16100b]/82 p-7 text-center text-[#f4ead5] shadow-2xl backdrop-blur-md sm:p-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/35 bg-[#1c130d]/85 px-3.5 py-1 font-mono text-xs text-[#e8c97a]">
              <span className="size-2 rounded-full bg-[#e8c97a]" aria-hidden="true" />
              <span>Open to AI/ML Engineering &amp; Software Roles</span>
            </div>

            <h2 className="font-display mt-5 text-4xl/[1.1] font-bold tracking-[-0.015em] text-[#fff8e8] sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mt-3 text-base text-[#d9cbb3]">
              Let&apos;s build something measurable. Email is the fastest way to reach me.
            </p>

            <p className="mt-6">
              <a
                href={`mailto:${email}`}
                className="font-mono text-lg font-semibold break-all text-[#e8c97a] underline decoration-[#e8c97a]/45 underline-offset-4 transition-colors hover:text-white hover:decoration-white sm:text-2xl"
              >
                {email}
              </a>
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <CopyEmail email={email} />
              <a
                href={github}
                className="rounded-lg border border-[#d4af37]/40 bg-[#1c130d]/85 px-4 py-2.5 text-sm font-medium text-[#f4ead5] backdrop-blur-sm transition-[border-color,background-color,transform] duration-150 ease-out hover:border-[#e8c97a] hover:bg-[#d4af37]/15 active:scale-[0.97]"
              >
                GitHub
              </a>
              <a
                href={linkedin}
                className="rounded-lg border border-[#d4af37]/40 bg-[#1c130d]/85 px-4 py-2.5 text-sm font-medium text-[#f4ead5] backdrop-blur-sm transition-[border-color,background-color,transform] duration-150 ease-out hover:border-[#e8c97a] hover:bg-[#d4af37]/15 active:scale-[0.97]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d4af37]/20 bg-[#110c08] px-4 py-6 text-[#c8b89b] sm:px-8">
        <div className="mx-auto flex max-w-[78rem] flex-wrap items-center justify-between gap-4 text-xs">
          <p className="font-mono">Ali Noor · Machine Learning Undergraduate</p>
          <p>COMSATS University Islamabad · Machine Learning, AI &amp; Software Engineering</p>
        </div>
      </footer>

      <Reveals />
    </div>
  );
}
