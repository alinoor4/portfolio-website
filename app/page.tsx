import type { CSSProperties, ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import armouredCar from "../public/art/armoured-car.jpg";
import flyingMachine from "../public/art/flying-machine.jpg";
import idealCity from "../public/art/ideal-city.jpg";
import rhombicuboctahedron from "../public/art/rhombicuboctahedron.jpg";
import schoolOfAthens from "../public/art/school-of-athens.jpg";
import jack from "../public/art/relics/jack.webp";
import lance from "../public/art/relics/lance.webp";
import polyhedron from "../public/art/relics/polyhedron.webp";
import rays from "../public/art/relics/rays.webp";
import vortex from "../public/art/relics/vortex.webp";
import wheel from "../public/art/relics/wheel.webp";
import wheelwork from "../public/art/relics/wheelwork.webp";
import vitruvianMan from "../public/art/vitruvian-man.jpg";
import { earlier, email, github, linkedin, type Project, sections, splitTools, tools } from "./content";
import { Candlelight, CopyEmail, Nav, Picker, Reveals } from "./controls";

const order = (i: number) => ({ "--i": i }) as CSSProperties;

const credentials = [
  { org: "COMSATS University Islamabad, Wah Campus", detail: "B.S. Computer Science" },
  { org: "DeepLearning.AI & Stanford Online", detail: "ML Specialization" },
  { org: "Meta", detail: "Back-End Developer" },
];

const romanNumerals = ["I", "II", "III", "IV", "V"] as const;

// One card and one grid for every section, so the folios and the stack read as the same system.
const tile =
  "tile relative rounded-2xl border border-[#d4af37]/25 bg-[#1c130d]/92 p-5 shadow-xl transition-colors duration-200 hover:border-[#d4af37]/50 sm:p-6";
const grid = "relative mx-auto grid max-w-[78rem] gap-4 px-4 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-6 lg:py-20";
const half = "lg:col-span-3";
const third = "lg:col-span-2";
const prose = "text-base/[1.65] text-[#d9cbb3]";
// Opening paragraph of a folio, across the full grid (relative, so it paints over the relics)
const lead = `${prose} relative max-w-3xl sm:text-lg md:col-span-2 lg:col-span-6`;
const numeral = "font-display text-5xl/[0.9] font-semibold";
const chip = "rounded-md border border-[#d4af37]/20 bg-[#140e0a] px-2.5 py-1 font-mono text-xs text-[#f4ead5]";
const badge = "rounded-md border border-[#d4af37]/20 bg-[#140e0a] px-2 py-0.5 font-mono text-[0.6875rem] text-[#c8b89b]";

const accents = {
  lapis: { text: "text-[#89b4e3]", badge: "border-[#5c92c8]/35 bg-[#5c92c8]/15 text-[#89b4e3]", bar: "bg-[#5c92c8]" },
  sanguine: { text: "text-[#e8a388]", badge: "border-[#d96b43]/35 bg-[#d96b43]/15 text-[#e8a388]", bar: "bg-[#d96b43]" },
  gold: { text: "text-[#e8c97a]", badge: "border-[#d4af37]/35 bg-[#d4af37]/15 text-[#e8c97a]", bar: "bg-[#d4af37]" },
} as const;

const stackMeta = [
  { span: half, accent: accents.gold.text, subtitle: "General-purpose, systems and scripting languages" },
  { span: half, accent: accents.lapis.text, subtitle: "Model training, computer vision and data analysis" },
  { span: third, accent: accents.sanguine.text, subtitle: "REST services, streaming interfaces and web apps" },
  { span: third, accent: accents.lapis.text, subtitle: "Relational and document databases" },
  { span: third, accent: accents.gold.text, subtitle: "Containers, version control and cloud deployment" },
] as const;

const pipelineStages = [
  { step: "01", title: "Data & Systems", detail: "Python, C/C++, SQL" },
  { step: "02", title: "Model Training", detail: "PyTorch, scikit-learn, OpenCV" },
  { step: "03", title: "Validation & Guardrails", detail: "FastAPI, Pydantic, Presidio" },
  { step: "04", title: "Web & API Delivery", detail: "Django, Next.js, TypeScript" },
  { step: "05", title: "Deployment", detail: "Docker, Linux, AWS, Vercel" },
] as const;

function ArrowUpRight({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// A small detail from one of Leonardo's sheets, adrift behind the content: gold cut-outs in public/art/relics.
// It bobs or turns on its own and slides with the pointer. Desktop only; there is no spare room on small screens.
function Relic({
  src,
  depth,
  seconds,
  turn = false,
  className,
}: {
  src: StaticImageData;
  depth: number; // pixels of pointer shift; negative moves against the pointer
  seconds: number; // one bob, or one full turn
  turn?: boolean;
  className: string; // position, width and opacity
}) {
  return (
    <div
      aria-hidden="true"
      data-reveal=""
      data-shift={depth}
      className={`pointer-events-none absolute hidden lg:block ${className}`}
    >
      <Image
        src={src}
        alt=""
        sizes="18rem"
        className={`w-full ${turn ? "relic-turn" : "relic-bob"}`}
        style={{ animationDuration: `${seconds}s` }}
      />
    </div>
  );
}

const tabsFor = (projects: Project[]) =>
  projects.map((project, i) => ({ numeral: romanNumerals[i], name: project.name, note: project.context }));

function ProjectCard({ project, index, accent }: { project: Project; index: number; accent: keyof typeof accents }) {
  const tone = accents[accent];

  return (
    <article data-reveal="" style={order(1)} className={`${tile} flex flex-col`}>
      <div className="flex items-start justify-between gap-4">
        <span aria-hidden="true" className={`${numeral} ${tone.text}`}>
          {romanNumerals[index]}
        </span>
        {project.context && (
          <span className={`rounded-md border px-2.5 py-0.5 text-right font-mono text-[0.6875rem] font-medium ${tone.badge}`}>
            {project.context}
          </span>
        )}
      </div>

      <h3 className="font-display mt-5 text-2xl font-bold tracking-[-0.01em] text-[#f4ead5]">{project.name}</h3>
      <p className="mt-2 text-sm/[1.65] text-[#d9cbb3]">{project.summary}</p>

      {project.results && (
        <dl className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {project.results.map(([value, label]) => (
            <div key={label} className="rounded-xl border border-[#d4af37]/20 bg-[#140e0a]/90 px-3 py-2.5">
              <dd className="font-mono text-xl font-semibold text-[#e8c97a] tabular-nums sm:text-2xl">{value}</dd>
              <dt className="mt-0.5 text-[0.6875rem]/[1.3] text-[#c8b89b]">{label}</dt>
            </div>
          ))}
        </dl>
      )}

      {project.bars && (
        <figure className="mt-4 rounded-xl border border-[#d4af37]/20 bg-[#120c08]/90 p-4">
          <figcaption className="font-mono text-[0.6875rem] tracking-wider text-[#c8b89b] uppercase">
            {project.bars.caption}
          </figcaption>
          <dl className="mt-3 grid gap-y-2.5 text-xs sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-x-3">
            {project.bars.rows.map(([label, value, display, highlight], i) => (
              <div key={label} className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 sm:contents">
                <dt className={highlight ? "font-semibold text-[#f4ead5]" : "text-[#c8b89b]"}>{label}</dt>
                <dd className="contents">
                  <span className="col-span-2 row-start-2 block h-2 w-full overflow-hidden rounded-full bg-[#f4ead5]/10 sm:col-span-1 sm:row-start-auto">
                    <span
                      aria-hidden="true"
                      className={`bar block h-full min-w-[4px] rounded-full ${highlight ? tone.bar : "bg-[#c8b89b]/45"}`}
                      style={{ width: `${value * 100}%`, "--i": i } as CSSProperties}
                    />
                  </span>
                  <span
                    className={`col-start-2 row-start-1 text-right font-mono tabular-nums sm:col-start-auto sm:row-start-auto ${
                      highlight ? "font-semibold text-[#e8c97a]" : "text-[#c8b89b]"
                    }`}
                  >
                    {display}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </figure>
      )}

      {/* mt-auto pins tools and links to the foot, so cards in a row line up */}
      <div className="mt-auto pt-5">
        <ul aria-label="Technologies used" className="flex flex-wrap gap-1.5">
          {splitTools(project.tools).map((tool) => (
            <li key={tool} className={chip}>
              {tool}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {project.links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="group inline-flex items-center gap-1.5 rounded-lg border border-[#d4af37]/35 bg-[#d4af37]/10 px-3 py-1.5 text-xs font-medium text-[#f4ead5] transition-[border-color,background-color,transform] duration-150 ease-out hover:border-[#e8c97a] hover:bg-[#d4af37]/20 active:scale-[0.97]"
            >
              <span>{label}</span>
              <ArrowUpRight className="size-3 text-[#e8c97a] transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

// Chapter opening for a folio: a dark lintel band with a giant numeral and the folio's drawing as gilded line-work.
function Gate({
  number,
  label,
  labelColor,
  title,
  art,
  artClass,
  flip = false,
  first = false,
  children,
}: {
  number: string;
  label: string;
  labelColor: string;
  title: string;
  art: StaticImageData;
  artClass: string; // object-fit and object-position for this drawing
  flip?: boolean; // drawing on the left, title on the right
  first?: boolean; // follows the hero: no top rule, so the fresco dissolves straight into the band
  children: ReactNode; // credit line for the drawing
}) {
  return (
    <header
      className={`relative isolate overflow-clip border-[#d4af37]/25 bg-[#0f0a07] ${first ? "border-b" : "border-y"}`}
    >
      <div
        aria-hidden="true"
        className={`etching absolute inset-y-0 w-full lg:w-[64%] ${flip ? "etching-flip left-0" : "right-0"}`}
      >
        <Image src={art} alt="" fill sizes="(min-width: 1024px) 64vw, 100vw" data-shift="-28" className={artClass} />
      </div>
      <div
        data-reveal=""
        className={`relative mx-auto flex min-h-[19rem] max-w-[78rem] flex-col justify-end px-4 pb-9 sm:px-8 lg:min-h-[25rem] lg:pb-12 ${
          first ? "pt-16 lg:pt-24" : "pt-8"
        } ${flip ? "lg:items-end lg:text-right" : ""}`}
      >
        <span aria-hidden="true" data-shift="16" className="numeral font-display">
          {number}
        </span>
        <p className={`relative font-mono text-xs tracking-[0.2em] uppercase ${labelColor}`}>
          Folio {number} · {label}
        </p>
        <h2 className="font-display relative mt-3 max-w-[42rem] text-4xl/[1.04] font-bold tracking-[-0.015em] text-[#f4ead5] sm:text-5xl/[1.02] lg:text-6xl/[1]">
          {title}
        </h2>
        <p className="relative mt-4 max-w-[30rem] text-xs/[1.55] text-[#c8b89b]">{children}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const [research, systems, backend] = sections;

  return (
    <div id="top" className="surface relative overflow-x-clip text-[#f4ead5]">
      <Nav />

      <main>
        {/* HERO — Raphael's School of Athens behind the name */}
        <section
          aria-labelledby="intro"
          className="relative isolate flex min-h-[38rem] flex-col items-center justify-start overflow-hidden pt-24 pb-32 sm:min-h-[44rem] sm:pt-28 lg:min-h-[50rem] lg:pt-32"
        >
          <Image
            src={schoolOfAthens}
            alt=""
            fill
            preload
            sizes="100vw"
            placeholder="blur"
            data-shift="-24"
            className="hero-art -z-20 object-cover object-[50%_30%]"
          />
          <div aria-hidden="true" className="hero-scrim absolute inset-0 -z-10" />

          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
            <p
              style={order(0)}
              className="hero-in font-mono text-xs tracking-[0.24em] text-[#f6d28b] uppercase drop-shadow-[0_1px_10px_rgba(22,16,11,0.8)]"
            >
              Change happens because we will it
            </p>
            <h1
              id="intro"
              style={order(1)}
              className="hero-in font-display mt-4 text-4xl font-bold tracking-[0.22em] text-[#fff8e8] uppercase drop-shadow-[0_2px_18px_rgba(22,16,11,0.75)] sm:text-6xl lg:text-7xl"
            >
              Ali Noor
            </h1>
            <p
              style={order(2)}
              className="hero-in mt-3 font-mono text-xs tracking-[0.24em] text-[#f6d28b] uppercase drop-shadow-[0_1px_10px_rgba(22,16,11,0.8)] sm:text-sm"
            >
              Machine Learning Undergraduate
            </p>
            <p
              style={order(3)}
              className="hero-in mx-auto mt-4 max-w-2xl text-base/[1.6] text-[#f4ead5]/95 drop-shadow-[0_1px_12px_rgba(22,16,11,0.85)] sm:text-lg"
            >
              I train models, then take them apart to find out why they work.
            </p>

            <div
              style={order(4)}
              className="hero-in mt-7 flex flex-wrap items-center justify-center gap-3 text-xs font-medium"
            >
              <a
                href="#research"
                className="rounded-md bg-[#f4ead5] px-4 py-2 text-[#16100b] shadow-md transition-transform duration-150 ease-out hover:bg-white active:scale-[0.97]"
              >
                View the Work
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

          <p
            style={order(5)}
            className="hero-in absolute right-4 bottom-24 left-4 z-10 text-center font-mono text-[0.6875rem] tracking-[0.16em] text-[#c8b89b] uppercase sm:right-8 sm:left-auto sm:text-right"
          >
            Raphael · The School of Athens · 1509&ndash;11<span className="hidden sm:inline"> · Vatican</span>
          </p>
        </section>

        {/* FOLIO I — machine learning and research */}
        <section id="research" className="relative scroll-mt-16">
          <Gate
            number="I"
            label="Machine Learning &amp; Research"
            labelColor="text-[#89b4e3]"
            title="Empirical Machine Learning"
            art={vitruvianMan}
            artClass="object-cover object-[50%_58%]"
            flip
            first
          >
            Leonardo da Vinci, <cite>Vitruvian Man</cite> (detail), c.&nbsp;1490. Gallerie dell&rsquo;Accademia, Venice.
          </Gate>
          <div className={grid}>
            <Relic src={rays} depth={-34} seconds={11} className="top-6 right-[2%] w-80 opacity-50" />
            <Relic src={vortex} depth={46} seconds={150} turn className="bottom-8 -left-32 w-52 opacity-35" />
            <p data-reveal="" className={lead}>
              {research.intro}
            </p>

            <Picker label="Machine learning and research projects" tone={accents.lapis.text} tabs={tabsFor(research.projects)}>
              {research.projects.map((project, i) => (
                <ProjectCard key={project.name} project={project} index={i} accent="lapis" />
              ))}
            </Picker>
          </div>
        </section>

        {/* FOLIO II — agents and LLM security */}
        <section id="systems" className="relative scroll-mt-16">
          <Gate
            number="II"
            label="Agents &amp; LLM Security"
            labelColor="text-[#e07a5f]"
            title="Deterministic Agent Systems"
            art={armouredCar}
            artClass="object-cover object-[50%_88%]"
          >
            Leonardo da Vinci, <cite>Scythed chariot and armoured car</cite>, c.&nbsp;1485. British Museum, London.
          </Gate>
          <div className={grid}>
            <Relic src={wheel} depth={-40} seconds={90} turn className="top-2 right-[5%] w-48 opacity-45" />
            <Relic src={jack} depth={50} seconds={13} className="-right-36 bottom-10 w-60 opacity-35" />
            <p data-reveal="" className={lead}>
              {systems.intro}
            </p>

            <Picker label="Agent and LLM security projects" tone={accents.sanguine.text} tabs={tabsFor(systems.projects)}>
              {systems.projects.map((project, i) => (
                <ProjectCard key={project.name} project={project} index={i} accent="sanguine" />
              ))}
            </Picker>
          </div>
        </section>

        {/* FOLIO III — software engineering */}
        <section id="engineering" className="relative scroll-mt-16">
          <Gate
            number="III"
            label="Software Engineering"
            labelColor="text-[#e8c97a]"
            title="Backend Engineering"
            art={flyingMachine}
            artClass="object-cover object-[50%_45%]"
            flip
          >
            Leonardo da Vinci, <cite>Design for a flying machine</cite>, c.&nbsp;1485.
          </Gate>
          <div className={grid}>
            <Relic src={wheelwork} depth={-36} seconds={12} className="top-8 right-[3%] w-72 opacity-45" />
            <Relic src={lance} depth={44} seconds={14} className="top-[46%] -left-20 w-14 opacity-45" />
            <p data-reveal="" className={lead}>
              {backend.intro} Earlier projects in Python, Java and T-SQL are listed with them.
            </p>

            <Picker
              label="Software engineering projects"
              tone={accents.gold.text}
              tabs={[
                ...tabsFor(backend.projects),
                { numeral: "III", name: "Earlier work", note: `${earlier.length} projects` },
              ]}
            >
              {backend.projects.map((project, i) => (
                <ProjectCard key={project.name} project={project} index={i} accent="gold" />
              ))}

              <article data-reveal="" style={order(1)} className={tile}>
                <div className="flex items-start justify-between gap-4">
                  <span aria-hidden="true" className={`${numeral} ${accents.gold.text}`}>
                    III
                  </span>
                  <span className={badge}>{earlier.length} projects</span>
                </div>
                <h3 className="font-display mt-5 text-2xl font-bold tracking-[-0.01em] text-[#f4ead5]">Earlier work</h3>
                <ul className="mt-3 divide-y divide-[#d4af37]/15">
                  {earlier.map(([name, detail, href]) => (
                    <li key={name}>
                      <a
                        href={href}
                        className="group flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 py-3 transition-colors duration-150 ease-out hover:text-[#e8c97a]"
                      >
                        <span className="text-sm font-medium sm:text-base">{name}</span>
                        <span className="flex items-center gap-2.5">
                          <span className={badge}>{detail}</span>
                          <ArrowUpRight className="size-3.5 text-[#c8b89b] transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#e8c97a]" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            </Picker>
          </div>
        </section>

        {/* FOLIO IV — tech stack and education */}
        <section id="stack" className="relative scroll-mt-16">
          <Gate
            number="IV"
            label="Technical Stack &amp; Education"
            labelColor="text-[#e8c97a]"
            title="Tools &amp; Training"
            art={rhombicuboctahedron}
            artClass="object-contain object-[50%_50%] p-8 [mask-image:radial-gradient(closest-side,#000_78%,transparent)] lg:object-[72%_50%]"
          >
            After Leonardo da Vinci, <cite>Rhombicuboctahedron</cite>, from Luca Pacioli&rsquo;s{" "}
            <cite>Divina proportione</cite>, Venice, 1509.
          </Gate>
          <div className={grid}>
            <Relic src={wheel} depth={38} seconds={110} turn className="-right-28 top-[38%] w-44 opacity-35" />
            <Relic src={polyhedron} depth={-46} seconds={14} className="bottom-6 -left-32 w-48 opacity-35" />
            <p data-reveal="" className={lead}>
              The languages, libraries, frameworks, databases and infrastructure I use across research notebooks,
              agent pipelines and production backends.
            </p>

            {tools.map(([group, items], idx) => {
              const parsedItems = splitTools(items);
              const meta = stackMeta[idx] ?? stackMeta[0];
              return (
                <article
                  key={group}
                  data-reveal=""
                  style={order(idx)}
                  className={`${tile} flex flex-col justify-between ${meta.span}`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <span aria-hidden="true" className={`${numeral} ${meta.accent}`}>
                        {romanNumerals[idx]}
                      </span>
                      <span className={`${badge} tabular-nums`}>{parsedItems.length} tools</span>
                    </div>

                    <h3 className="font-display mt-5 text-2xl font-bold text-[#f4ead5]">{group}</h3>
                    <p className="mt-1.5 text-sm text-[#c8b89b]">{meta.subtitle}</p>
                  </div>

                  <ul aria-label={`${group} technologies`} className="mt-5 flex flex-wrap gap-1.5">
                    {parsedItems.map((tool) => (
                      <li key={tool} className={chip}>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}

            {/* End-to-end engineering pipeline strip */}
            <div data-reveal="" className={`${tile} md:col-span-2 lg:col-span-6`}>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#d4af37]/15 pb-3.5">
                <span className="font-mono text-xs tracking-[0.16em] text-[#e8c97a] uppercase">
                  Engineering Pipeline
                </span>
                <span className="font-mono text-[0.6875rem] text-[#c8b89b]">
                  From raw data to a deployed service
                </span>
              </div>

              <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {pipelineStages.map((stage, idx) => (
                  <li key={stage.step} className="relative rounded-xl border border-[#d4af37]/20 bg-[#140e0a]/90 px-3.5 py-3">
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

            {/* Education strip, in the same form as the pipeline strip above it */}
            <div id="about" data-reveal="" className={`${tile} scroll-mt-24 md:col-span-2 lg:col-span-6`}>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#d4af37]/15 pb-3.5">
                <h3 className="font-mono text-xs tracking-[0.16em] text-[#e8c97a] uppercase">Education &amp; Training</h3>
                <span className="font-mono text-[0.6875rem] text-[#c8b89b]">
                  Formal training in machine learning and backend engineering
                </span>
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {credentials.map((item) => (
                  <li key={item.org} className="rounded-xl border border-[#d4af37]/20 bg-[#140e0a]/90 px-3.5 py-3">
                    <div className="text-sm font-semibold text-[#f4ead5]">{item.org}</div>
                    <div className="mt-0.5 font-mono text-[0.6875rem] text-[#c8b89b]">{item.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FINALE — the Ideal City panorama over the contact card */}
        <section id="contact" className="relative scroll-mt-16 pb-14 lg:pb-20">
          <Relic src={vortex} depth={-42} seconds={170} turn className="top-[31vw] left-[7%] w-52 opacity-35" />
          <Relic src={rays} depth={40} seconds={12} className="top-[33vw] right-[5%] w-72 opacity-45" />
          {/* overflow-clip, not hidden: hidden would make this box the scroll source for the view() timeline */}
          <div className="relative overflow-clip">
            <Image
              src={idealCity}
              alt="A wide, empty Renaissance piazza in one-point perspective: a round temple at the centre with its door ajar, flanked by palaces under a blue sky."
              sizes="100vw"
              placeholder="blur"
              className="panorama-art h-64 w-full object-cover sm:h-80 lg:h-auto"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_bottom,#16100b_0%,transparent_22%,transparent_64%,#16100b_100%)]"
            />
          </div>

          <div
            data-reveal=""
            className="relative z-10 mx-auto -mt-10 w-[calc(100%-2rem)] max-w-xl rounded-2xl border border-[#d4af37]/35 bg-[#16100b]/85 p-7 text-center text-[#f4ead5] shadow-2xl backdrop-blur-md sm:-mt-14 sm:p-10 lg:-mt-[5vw]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/35 bg-[#1c130d]/85 px-3.5 py-1 font-mono text-xs text-[#e8c97a]">
              <span className="size-2 rounded-full bg-[#e8c97a]" aria-hidden="true" />
              <span>
                Open to AI/ML <span className="hidden sm:inline">Engineering </span>&amp; Software Roles
              </span>
            </div>

            <h2 className="font-display mt-5 text-4xl/[1.1] font-bold tracking-[-0.015em] text-[#fff8e8] sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mt-3 text-base text-[#d9cbb3]">
              Email is the fastest way to reach me.
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

          <p className="mx-auto mt-6 max-w-xl px-4 text-center font-mono text-[0.6875rem] tracking-[0.16em] text-[#c8b89b] uppercase">
            The Ideal City · c.&nbsp;1480&ndash;90 · Urbino
          </p>
        </section>
      </main>

      <footer className="border-t border-[#d4af37]/20 bg-[#110c08] px-4 py-6 text-[#c8b89b] sm:px-8">
        <div className="mx-auto flex max-w-[78rem] flex-wrap items-center justify-between gap-4 text-xs">
          <p className="font-mono">Ali Noor · Machine Learning Undergraduate</p>
          <p>COMSATS University Islamabad, Wah Campus</p>
          <p className="w-full text-[#c8b89b]/80">
            Artworks by Raphael, Leonardo da Vinci and an unknown Central Italian painter: public-domain reproductions
            from Wikimedia Commons.
          </p>
        </div>
      </footer>

      <Reveals />
      <Candlelight />
    </div>
  );
}
