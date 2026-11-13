"use client";

import { type CSSProperties, useEffect, useState } from "react";
import { earlier, type Project } from "./content";

const press = "transition-transform duration-150 ease-out active:scale-[0.97]";

const navLink =
  "px-2 py-1.5 text-sm font-medium text-[#f4ead5]/80 transition-colors duration-150 ease-out hover:text-[#f4ead5] aria-[current=location]:text-[#e8c97a]";

export function splitTools(items: string): string[] {
  return items
    .split(/,\s+|\s+and\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function ArrowUpRight({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectCard({ project, accent = "gold" }: { project: Project; accent?: "lapis" | "sanguine" | "gold" }) {
  const badgeStyle =
    accent === "lapis"
      ? "border-[#5c92c8]/35 bg-[#5c92c8]/15 text-[#89b4e3]"
      : accent === "sanguine"
        ? "border-[#d96b43]/35 bg-[#d96b43]/15 text-[#e8a388]"
        : "border-[#d4af37]/35 bg-[#d4af37]/15 text-[#e8c97a]";

  const barFill = accent === "sanguine" ? "bg-[#d96b43]" : accent === "gold" ? "bg-[#d4af37]" : "bg-[#5c92c8]";

  return (
    <article className="panel-swap rounded-2xl border border-[#d4af37]/25 bg-[#1c130d]/92 p-5 text-[#f4ead5] shadow-2xl backdrop-blur-md sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          {project.context && (
            <span
              className={`mb-2 inline-block rounded-md border px-2.5 py-0.5 font-mono text-[0.6875rem] font-medium ${badgeStyle}`}
            >
              {project.context}
            </span>
          )}
          <h3 className="font-display text-2xl font-bold tracking-[-0.01em] text-[#f4ead5]">{project.name}</h3>
        </div>
      </div>

      <p className="mt-3 text-sm/[1.65] text-[#d9cbb3] sm:text-[0.9375rem]">{project.summary}</p>

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
                      className={`bar block h-full min-w-[4px] rounded-full ${highlight ? barFill : "bg-[#c8b89b]/45"}`}
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

      <ul aria-label="Technologies used" className="mt-4 flex flex-wrap gap-1.5">
        {splitTools(project.tools).map((tool) => (
          <li
            key={tool}
            className="rounded-md border border-[#d4af37]/20 bg-[#140e0a] px-2.5 py-1 font-mono text-[0.6875rem] text-[#d9cbb3]"
          >
            {tool}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {project.links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className={`group inline-flex items-center gap-1.5 rounded-lg border border-[#d4af37]/35 bg-[#d4af37]/10 px-3 py-1.5 text-xs font-medium text-[#f4ead5] transition-[border-color,background-color,transform] duration-150 ease-out hover:border-[#e8c97a] hover:bg-[#d4af37]/20 ${press}`}
          >
            <span>{label}</span>
            <ArrowUpRight className="size-3 text-[#e8c97a] transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ))}
      </div>
    </article>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          setActive((current) => (isIntersecting ? target.id : current === target.id ? "" : current));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    for (const id of ["research", "systems", "engineering", "stack", "about", "contact"]) {
      const section = document.getElementById(id);
      if (section) io.observe(section);
    }
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        scrolled ? "border-b border-[#d4af37]/20 bg-[#16100b]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid w-full max-w-[78rem] grid-cols-[1fr_auto_1fr] items-center px-4 py-3.5 sm:px-8">
        <nav aria-label="Primary sections" className="flex items-center gap-1.5 sm:gap-5">
          <a href="#research" aria-current={active === "research" ? "location" : undefined} className={navLink}>
            Research
          </a>
          <a href="#systems" aria-current={active === "systems" ? "location" : undefined} className={navLink}>
            Agents
          </a>
          <a
            href="#engineering"
            aria-current={active === "engineering" ? "location" : undefined}
            className={`hidden sm:inline-block ${navLink}`}
          >
            Backend
          </a>
        </nav>

        <a
          href="#top"
          aria-label="Ali Noor — Back to top"
          className={`grid size-9 place-items-center rounded-lg text-[#e8c97a] transition-opacity hover:opacity-85 ${press}`}
        >
          {/* Da Vinci Vitruvian-triangle & compass emblem */}
          <svg viewBox="0 0 32 32" className="size-6" aria-hidden="true">
            <circle cx="16" cy="16" r="13.5" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
            <rect x="6.5" y="6.5" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45" />
            <polygon points="16,5.5 26,24.5 6,24.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
            <circle cx="16" cy="17.5" r="2.2" fill="currentColor" />
          </svg>
        </a>

        <div className="flex items-center justify-end gap-1.5 sm:gap-5">
          <a
            href="#stack"
            aria-current={active === "stack" ? "location" : undefined}
            className={`hidden md:inline-block ${navLink}`}
          >
            Tech Stack
          </a>
          <a
            href="#about"
            aria-current={active === "about" ? "location" : undefined}
            className={`hidden sm:inline-block ${navLink}`}
          >
            About
          </a>
          <a
            href="#contact"
            className={`rounded-md border border-[#d4af37]/60 bg-[#16100b]/50 px-3.5 py-1.5 text-sm font-medium text-[#f4ead5] transition-[border-color,background-color,transform] duration-150 ease-out hover:border-[#e8c97a] hover:bg-[#d4af37]/15 ${press}`}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export function ResearchLabConsole({
  projects,
  children,
}: {
  projects: Project[];
  children: React.ReactNode;
}) {
  const [tab, setTab] = useState<string>("telemetry");
  const tabs = [
    { id: "telemetry", label: "Grokking Telemetry" },
    ...projects.map((p, idx) => ({
      id: p.name,
      label:
        idx === 0
          ? "FlyRank Search ML"
          : idx === 1
            ? "Weight Decay Study"
            : idx === 2
              ? "CV Lab Series"
              : "Linear Regression",
    })),
  ];

  const activeProject = projects.find((p) => p.name === tab);

  return (
    <div className="mt-8">
      <div role="tablist" aria-label="Codex Folio I Machine Learning studies" className="mb-3 flex flex-wrap gap-1.5">
        {tabs.map((item) => (
          <button
            key={item.id}
            role="tab"
            type="button"
            aria-selected={tab === item.id}
            onClick={() => setTab(item.id)}
            className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition-[border-color,background-color,color,transform] duration-150 ease-out ${press} ${
              tab === item.id
                ? "border-[#5c92c8]/70 bg-[#5c92c8]/20 text-[#f4ead5]"
                : "border-[#d4af37]/20 bg-[#1c130d]/85 text-[#c8b89b] hover:border-[#d4af37]/45 hover:text-[#f4ead5]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {tab === "telemetry" ? (
        children
      ) : activeProject ? (
        <ProjectCard key={activeProject.name} project={activeProject} accent="lapis" />
      ) : null}
    </div>
  );
}

export function SystemsConsole({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState(projects[0]?.name ?? "");
  const activeProject = projects.find((p) => p.name === selected) ?? projects[0];

  return (
    <div className="mt-7">
      <div role="tablist" aria-label="Codex Folio II Agents and Security systems" className="mb-3 flex flex-wrap gap-1.5">
        {projects.map((project) => (
          <button
            key={project.name}
            role="tab"
            type="button"
            aria-selected={selected === project.name}
            onClick={() => setSelected(project.name)}
            className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition-[border-color,background-color,color,transform] duration-150 ease-out ${press} ${
              selected === project.name
                ? "border-[#d96b43]/70 bg-[#d96b43]/20 text-[#f4ead5]"
                : "border-[#d4af37]/20 bg-[#1c130d]/85 text-[#c8b89b] hover:border-[#d4af37]/45 hover:text-[#f4ead5]"
            }`}
          >
            {project.name}
          </button>
        ))}
      </div>

      {activeProject && <ProjectCard key={activeProject.name} project={activeProject} accent="sanguine" />}
    </div>
  );
}

export function EngineeringConsole({ backendProjects }: { backendProjects: Project[] }) {
  const [tab, setTab] = useState<"backend" | "earlier">("backend");

  return (
    <div className="mt-7">
      <div role="tablist" aria-label="Codex Folio III Software engineering archive" className="mb-3 flex flex-wrap gap-1.5">
        {[
          { id: "backend" as const, label: `Backend Projects (${backendProjects.length})` },
          { id: "earlier" as const, label: `Earlier Work Archive (${earlier.length})` },
        ].map((item) => (
          <button
            key={item.id}
            role="tab"
            type="button"
            aria-selected={tab === item.id}
            onClick={() => setTab(item.id)}
            className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition-[border-color,background-color,color,transform] duration-150 ease-out ${press} ${
              tab === item.id
                ? "border-[#d4af37]/75 bg-[#d4af37]/20 text-[#f4ead5]"
                : "border-[#d4af37]/20 bg-[#1c130d]/85 text-[#c8b89b] hover:border-[#d4af37]/45 hover:text-[#f4ead5]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {tab === "backend" && (
        <div className="panel-swap grid gap-4">
          {backendProjects.map((project) => (
            <ProjectCard key={project.name} project={project} accent="gold" />
          ))}
        </div>
      )}

      {tab === "earlier" && (
        <ul className="panel-swap divide-y divide-[#d4af37]/15 overflow-hidden rounded-2xl border border-[#d4af37]/25 bg-[#1c130d]/92 backdrop-blur-md">
          {earlier.map(([name, detail, href], i) => (
            <li key={name}>
              <a
                href={href}
                className="group flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-3.5 transition-colors duration-150 ease-out hover:bg-[#d4af37]/10"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#d4af37] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-[#f4ead5] sm:text-base">{name}</span>
                </span>
                <span className="flex items-center gap-2.5">
                  <span className="rounded-md border border-[#d4af37]/20 bg-[#140e0a] px-2.5 py-0.5 font-mono text-[0.6875rem] text-[#c8b89b]">
                    {detail}
                  </span>
                  <ArrowUpRight className="size-3.5 text-[#c8b89b] transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#e8c97a]" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Plays the entrance of every [data-reveal] element the first time it scrolls into view (styles in globals.css).
export function Reveals() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting, boundingClientRect } of entries) {
          const el = target as HTMLElement;
          if (isIntersecting) {
            el.dataset.reveal = "";
            io.unobserve(el);
          } else if (boundingClientRect.top >= innerHeight) {
            el.dataset.reveal = "hidden";
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const label =
    status === "copied" ? "Copied" : status === "error" ? "Couldn't copy. Select the address instead." : "Copy address";

  return (
    <button
      type="button"
      className={`inline-flex items-center gap-2 rounded-lg border border-[#d4af37]/40 bg-[#1c130d]/85 px-4 py-2.5 text-sm font-medium text-[#f4ead5] backdrop-blur-sm transition-[border-color,background-color,transform] duration-150 ease-out hover:border-[#e8c97a] hover:bg-[#d4af37]/15 ${press}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setStatus("copied");
        } catch {
          setStatus("error");
        }
        setTimeout(() => setStatus("idle"), 2500);
      }}
    >
      {status === "copied" ? (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="size-4 text-[#89b4e3]" aria-hidden="true">
          <path d="M4.5 10.5 8 14l7.5-8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-4 text-[#e8c97a]" aria-hidden="true">
          <rect x="7" y="7" width="9" height="10" rx="1.75" />
          <path d="M5 13H4.5A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5V5" strokeLinecap="round" />
        </svg>
      )}
      <span aria-live="polite">{label}</span>
    </button>
  );
}
