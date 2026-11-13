import type { CSSProperties } from "react";
import { earlier, email, github, linkedin, type Project, sections, tools } from "./content";
import { CopyEmail, Nav, Reveals } from "./controls";
import { Figure } from "./figure";

const band = "py-14 lg:py-20";
const h2 = "text-3xl/[1.15] font-semibold tracking-[-0.02em] lg:text-4xl/[1.1]";
const lede = "mt-3 text-xl/[1.45] text-muted";

// Position in a group, read by the staggered transitions in globals.css
const order = (i: number) => ({ "--i": i }) as CSSProperties;

function Links({ links, className }: { links: Project["links"]; className: string }) {
  return (
    <p className={`flex flex-wrap gap-x-6 ${className}`}>
      {links.map(([label, href]) => (
        <a key={label} href={href} className="link py-1">
          {label}
        </a>
      ))}
    </p>
  );
}

function Bars({ caption, rows }: NonNullable<Project["bars"]>) {
  return (
    <figure>
      <figcaption className="text-[0.9375rem] text-muted">{caption}</figcaption>
      {/* One three-column grid from sm up. On a phone each row is its own grid, with the bar on a full line
          under its label and value, so long labels don't squeeze the bars. */}
      <dl className="mt-4 grid gap-y-2.5 text-[0.9375rem] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-x-3">
        {rows.map(([label, value, display, highlight], i) => (
          <div key={label} className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 sm:contents">
            <dt className={highlight ? "font-semibold" : "text-muted"}>{label}</dt>
            <dd className="contents">
              <span
                aria-hidden="true"
                className={`bar col-span-2 row-start-2 h-2.5 min-w-[3px] rounded-r-sm sm:col-span-1 sm:row-start-auto ${highlight ? "bg-learned" : "bg-muted opacity-45"}`}
                style={{ width: `${value * 100}%`, ...order(i) }}
              />
              <span
                className={`col-start-2 row-start-1 text-right tabular-nums sm:col-start-auto sm:row-start-auto ${highlight ? "font-semibold" : ""}`}
              >
                {display}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}

function Readouts({ results }: { results: NonNullable<Project["results"]> }) {
  return (
    <dl className="flex flex-wrap gap-x-10 gap-y-5">
      {results.map(([value, label]) => (
        // Reversed so the value reads first; justify-end keeps values level when one label wraps
        <div key={label} className="flex max-w-[9rem] flex-col-reverse justify-end">
          <dt className="text-[0.9375rem]/[1.35] text-muted">{label}</dt>
          <dd className="text-4xl font-semibold tracking-[-0.02em] tabular-nums">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[76rem] px-4 sm:px-8">
      <Nav />

      <main>
        <section aria-labelledby="intro" className="pt-4 pb-10 lg:pb-14">
          <Figure>
            <h1
              id="intro"
              style={order(0)}
              className="hero-in text-4xl/[1.1] font-semibold tracking-[-0.02em] text-balance lg:text-[clamp(2.75rem,4.3vw,3.75rem)]/[1.06]"
            >
              I train models, then take them apart to find out why they work.
            </h1>
            <p style={order(1)} className="hero-in mt-5 max-w-[34rem]">
              I&apos;m Ali Noor, an AI/ML engineer and computer science undergraduate at COMSATS University Islamabad. I
              work on machine learning, LLM agents and the security around them, and I&apos;m open to AI/ML engineering
              roles.
            </p>
            <p style={order(2)} className="hero-in mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href={`mailto:${email}`}
                className="rounded-md bg-ink px-5 py-3 font-medium text-paper transition-transform duration-150 ease-out active:scale-[0.97]"
              >
                Email me
              </a>
              <a href={github} className="link">
                GitHub
              </a>
              <a href={linkedin} className="link">
                LinkedIn
              </a>
            </p>
          </Figure>
        </section>

        <div id="work" className="scroll-mt-16">
          {sections.map(({ title, intro, projects }) => {
            const featured = projects.filter((p) => p.results || p.bars);
            const rest = projects.filter((p) => !p.results && !p.bars);
            return (
              <section key={title} className={band}>
                <header data-reveal="" className="max-w-[44rem]">
                  <h2 className={h2}>{title}</h2>
                  <p className={lede}>{intro}</p>
                </header>

                <div className="mt-10 grid gap-4">
                  {featured.map((p) => (
                    <article
                      key={p.name}
                      data-reveal=""
                      data-wipe=""
                      className="grid items-center gap-x-14 gap-y-8 bg-panel p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)]"
                    >
                      <div>
                        <h3 className="text-2xl/[1.25] font-semibold tracking-[-0.01em]">{p.name}</h3>
                        {p.context && <p className="text-muted">{p.context}</p>}
                        <p className="mt-4 max-w-[38rem]">{p.summary}</p>
                        <p className="mt-4 text-[0.9375rem] text-muted">Built with {p.tools}</p>
                        <Links links={p.links} className="mt-2" />
                      </div>
                      <div className="grid gap-8">
                        {p.bars && <Bars {...p.bars} />}
                        {p.results && <Readouts results={p.results} />}
                      </div>
                    </article>
                  ))}

                  <div className={`grid gap-4 md:grid-cols-2 ${rest.length === 3 ? "lg:grid-cols-3" : ""}`}>
                    {rest.map((p, i) => (
                      <article
                        key={p.name}
                        data-reveal=""
                        data-wipe=""
                        style={order(i)}
                        className="flex flex-col bg-panel p-6 sm:p-8"
                      >
                        <h3 className="text-[1.3125rem]/[1.3] font-semibold">{p.name}</h3>
                        {p.context && <p className="text-base text-muted">{p.context}</p>}
                        <p className="mt-3 text-[1.0625rem]/[1.55]">{p.summary}</p>
                        <p className="mt-4 text-[0.9375rem] text-muted">Built with {p.tools}</p>
                        <Links links={p.links} className="mt-auto pt-2" />
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}

          <section className={band}>
            <header data-reveal="" className="max-w-[44rem]">
              <h2 className={h2}>Earlier work</h2>
              <p className={lede}>Coursework and first projects.</p>
            </header>
            <ul data-reveal="" className="mt-8 grid gap-x-14 md:grid-cols-2">
              {earlier.map(([name, detail, href]) => (
                <li
                  key={name}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 border-b-2 border-panel py-3"
                >
                  <a href={href} className="link">
                    {name}
                  </a>
                  <span className="text-[0.9375rem] text-muted">{detail}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section id="about" className={`scroll-mt-16 ${band}`}>
          <h2 data-reveal="" className={h2}>
            About
          </h2>
          <div className="mt-8 grid gap-x-16 gap-y-10 lg:grid-cols-2">
            <div data-reveal="" className="max-w-[36rem]">
              <p>
                I&apos;m a computer science undergraduate at COMSATS University Islamabad, working on machine learning,
                AI agents and LLM security.
              </p>
              <p className="mt-4">
                Alongside the degree I completed the Machine Learning Specialization from DeepLearning.AI and Stanford
                Online, and Meta&apos;s Back-End Developer coursework.
              </p>
            </div>
            <dl data-reveal="" style={order(1)} className="grid content-start gap-x-8 gap-y-4 sm:grid-cols-[11rem_1fr]">
              {tools.map(([group, items]) => (
                <div key={group} className="contents">
                  <dt className="font-semibold">{group}</dt>
                  <dd className="-mt-3 sm:mt-0">{items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className={`scroll-mt-16 ${band}`}>
          <div data-reveal="" data-wipe="" className="bg-panel p-6 sm:p-12 lg:p-16">
            <h2 className={h2}>Contact</h2>
            <p className={lede}>Email is the fastest way to reach me.</p>
            <p className="mt-8">
              <a
                href={`mailto:${email}`}
                className="link text-2xl font-semibold tracking-[-0.01em] break-all sm:text-4xl"
              >
                {email}
              </a>
            </p>
            <p className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <CopyEmail email={email} />
              <a href={linkedin} className="link py-1">
                LinkedIn
              </a>
              <a href={github} className="link py-1">
                GitHub
              </a>
            </p>
          </div>
        </section>
      </main>

      <Reveals />
    </div>
  );
}
