"use client";

import { Children, type ReactNode, useEffect, useId, useRef, useState } from "react";

const press = "transition-transform duration-150 ease-out active:scale-[0.97]";

const navLink =
  "px-2 py-1.5 text-sm font-medium text-[#f4ead5]/80 transition-colors duration-150 ease-out hover:text-[#f4ead5] aria-[current=location]:text-[#e8c97a]";

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
      <span aria-hidden="true" className="progress" />
    </header>
  );
}

// A folio's project picker: names on the left, the chosen project's card on the right, the first one open.
// Every card stays in the HTML; the unchosen ones are only hidden.
export function Picker({
  label,
  tabs,
  tone,
  children,
}: {
  label: string;
  tabs: { numeral: string; name: string; note?: string }[];
  tone: string; // text colour class for the numerals
  children: ReactNode; // one card per tab, in the same order
}) {
  const [selected, setSelected] = useState(0);
  const id = useId();

  return (
    <div className="grid gap-4 md:col-span-2 lg:col-span-6 lg:grid-cols-6">
      <div
        role="tablist"
        aria-label={label}
        aria-orientation="vertical"
        data-reveal=""
        className="grid gap-2 sm:grid-cols-2 lg:col-span-2 lg:auto-rows-fr lg:grid-cols-1"
        onKeyDown={(e) => {
          const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
          if (!step) return;
          e.preventDefault();
          const next = (selected + step + tabs.length) % tabs.length;
          setSelected(next);
          (e.currentTarget.children[next] as HTMLElement).focus();
        }}
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.name}
            type="button"
            role="tab"
            id={`${id}tab${i}`}
            aria-selected={i === selected}
            aria-controls={`${id}panel${i}`}
            tabIndex={i === selected ? 0 : -1}
            onClick={() => setSelected(i)}
            className="tile group relative flex items-center gap-4 rounded-2xl border border-[#d4af37]/20 bg-[#1c130d]/75 px-5 py-3.5 text-left transition-[border-color,background-color,transform] duration-150 ease-out hover:border-[#d4af37]/45 active:scale-[0.98] aria-selected:border-[#e8c97a]/60 aria-selected:bg-[#2a1d12]"
          >
            <span
              aria-hidden="true"
              className={`font-display w-11 shrink-0 text-3xl/none font-semibold opacity-55 transition-opacity duration-150 group-aria-selected:opacity-100 ${tone}`}
            >
              {tab.numeral}
            </span>
            <span className="min-w-0">
              <span className="font-display block text-lg/[1.2] font-bold text-[#f4ead5]/75 transition-colors duration-150 group-aria-selected:text-[#f4ead5]">
                {tab.name}
              </span>
              {tab.note && <span className="mt-1 block font-mono text-[0.6875rem] text-[#c8b89b]">{tab.note}</span>}
            </span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              className="ml-auto size-4 shrink-0 text-[#e8c97a] opacity-0 transition-opacity duration-150 group-aria-selected:opacity-100"
              aria-hidden="true"
            >
              <path d="M6 3.5 10.5 8 6 12.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ))}
      </div>

      {Children.map(children, (card, i) => (
        <div
          role="tabpanel"
          id={`${id}panel${i}`}
          aria-labelledby={`${id}tab${i}`}
          hidden={i !== selected}
          className="panel-swap grid lg:col-span-4"
        >
          {card}
        </div>
      ))}
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

// Everything that answers the pointer (styles in globals.css): the candlelight follows it, each [data-shift="px"]
// layer slides up to that many pixels for depth, and the card under it learns where the light is.
export function Candlelight() {
  const light = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = light.current;
    // Mouse only, and not for people who asked for less motion
    const wanted = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
    if (!el || !matchMedia(wanted).matches) return;
    const layers = document.querySelectorAll<HTMLElement>("[data-shift]");
    let placed = false;

    const onMove = (e: PointerEvent) => {
      // First move places the light instantly; later moves ease after the pointer
      if (placed) el.dataset.on = "";
      placed = true;
      el.style.opacity = "1";
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      for (const layer of layers) {
        const px = Number(layer.dataset.shift);
        layer.style.transform = `translate3d(${x * px}px, ${y * px * 0.66}px, 0)`;
      }

      const card = e.target instanceof Element ? e.target.closest<HTMLElement>(".tile") : null;
      if (card) {
        const box = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - box.left}px`);
        card.style.setProperty("--my", `${e.clientY - box.top}px`);
      }
    };
    const onLeave = () => {
      placed = false;
      delete el.dataset.on;
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={light} aria-hidden="true" className="candlelight" />;
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
