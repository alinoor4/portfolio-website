import { earlier, email, github, linkedin, sections, tools } from "./content";
import { CopyEmail, ThemeToggle } from "./controls";
import { Figure } from "./figure";

const section = "grid gap-x-12 gap-y-6 border-t-2 border-panel py-14 lg:grid-cols-[15rem_1fr] lg:py-20";
// On wide screens the heading stays in view while its section scrolls past
const h2 = "text-2xl/[1.25] font-semibold tracking-[-0.01em] lg:sticky lg:top-8 lg:self-start";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[76rem] px-4 sm:px-8">
      <header className="flex items-center justify-between py-4">
        <span className="font-semibold">Ali Noor</span>
        <div className="-mr-3 flex items-center">
          <nav aria-label="Sections" className="flex">
            {["Work", "About", "Contact"].map((name) => (
              <a
                key={name}
                href={`#${name.toLowerCase()}`}
                className="px-1.5 py-2.5 text-base hover:underline sm:px-3 sm:text-lg"
              >
                {name}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main>
        <section aria-labelledby="intro" className="pt-6 pb-16 lg:pt-2 lg:pb-20">
          <Figure>
            <h1
              id="intro"
              className="text-4xl/[1.1] font-semibold tracking-[-0.02em] text-balance lg:text-[clamp(2.75rem,4.3vw,3.75rem)]/[1.06]"
            >
              I train models, then take them apart to find out why they work.
            </h1>
            <p className="mt-5 max-w-[34rem]">
              I&apos;m Ali Noor, an AI/ML engineer and computer science undergraduate at COMSATS University Islamabad. I
              work on machine learning, LLM agents and the security around them, and I&apos;m open to AI/ML engineering
              roles.
            </p>
            <p className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
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

        <div id="work">
          {sections.map(({ title, projects }) => (
            <section key={title} className={section}>
              <h2 className={h2}>{title}</h2>
              <div className="space-y-14">
                {projects.map((p) => (
                  <article key={p.name} className="max-w-[40rem]">
                    <h3 className="text-[1.3125rem]/[1.3] font-semibold">{p.name}</h3>
                    {p.context && <p className="text-muted">{p.context}</p>}
                    <p className="mt-3">{p.summary}</p>
                    {p.results && (
                      <dl className="mt-5 flex flex-wrap gap-x-10 gap-y-4">
                        {p.results.map(([value, label]) => (
                          <div key={label} className="flex flex-col-reverse">
                            <dt className="text-[0.9375rem] text-muted">{label}</dt>
                            <dd className="text-2xl font-semibold tracking-[-0.01em] tabular-nums">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                    <p className="mt-4 text-[0.9375rem] text-muted">Built with {p.tools}</p>
                    <p className="mt-2 flex flex-wrap gap-x-6">
                      {p.links.map(([label, href]) => (
                        <a key={label} href={href} className="link py-1">
                          {label}
                        </a>
                      ))}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <section className={section}>
            <h2 className={h2}>Earlier work</h2>
            <ul className="max-w-[40rem]">
              {earlier.map(([name, detail, href]) => (
                <li key={name} className="flex flex-wrap items-baseline justify-between gap-x-6 py-1.5">
                  <a href={href} className="link">
                    {name}
                  </a>
                  <span className="text-[0.9375rem] text-muted">{detail}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section id="about" className={section}>
          <h2 className={h2}>About</h2>
          <div className="max-w-[40rem]">
            <p>
              I learn by building things from scratch and running controlled experiments, so I can say why a model
              behaves the way it does and not only that it does. When I build with LLMs, plain code keeps hold of the
              math, the budgets and the security boundaries, and the model does the reasoning.
            </p>
            <p className="mt-4">
              I&apos;m studying computer science at COMSATS University Islamabad. Alongside the degree I completed the
              Machine Learning Specialization from DeepLearning.AI and Stanford Online, and Meta&apos;s Back-End
              Developer coursework.
            </p>
            <dl className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-[11rem_1fr]">
              {tools.map(([group, items]) => (
                <div key={group} className="contents">
                  <dt className="font-semibold">{group}</dt>
                  <dd className="-mt-3 sm:mt-0">{items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className={section}>
          <h2 className={h2}>Contact</h2>
          <div className="max-w-[40rem]">
            <p>Email is the fastest way to reach me.</p>
            <p className="mt-3">
              <a href={`mailto:${email}`} className="link text-2xl font-semibold tracking-[-0.01em] break-all">
                {email}
              </a>
            </p>
            <p className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
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
    </div>
  );
}
