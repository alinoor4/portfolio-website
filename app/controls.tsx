"use client";

import { useEffect, useLayoutEffect, useState } from "react";

const press = "transition-transform duration-150 ease-out active:scale-[0.97]";

// The underline grows from the left, the direction everything on this page draws in
const navLink =
  "relative px-1.5 py-2.5 text-base after:absolute after:inset-x-1.5 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 aria-[current=location]:after:scale-x-100 sm:px-3 sm:text-lg sm:after:inset-x-3";

export function Nav() {
  const [active, setActive] = useState("");

  // The active section is the one crossing a thin band just below the middle of the viewport
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          setActive((current) => (isIntersecting ? target.id : current === target.id ? "" : current));
        }
      },
      { rootMargin: "-60% 0px -35% 0px" },
    );
    for (const id of ["work", "about", "contact"]) {
      const section = document.getElementById(id);
      if (section) io.observe(section);
    }
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 -mx-4 flex items-center justify-between bg-paper/85 px-4 py-2 backdrop-blur-md sm:-mx-8 sm:px-8">
      <a href="#top" className="py-2.5 font-semibold">
        Ali Noor
      </a>
      <div className="-mr-3 flex items-center">
        <nav aria-label="Sections" className="flex">
          {["Work", "About", "Contact"].map((name) => {
            const id = name.toLowerCase();
            return (
              <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} className={navLink}>
                {name}
              </a>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

// Plays the entrance of every [data-reveal] element the first time it scrolls into view (styles in globals.css).
// Only elements still below the fold are hidden, and only once this runs, so nothing is hidden without JavaScript.
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

function ThemeToggle() {
  // In development, React's Strict Mode remount strips the data-theme the inline script in layout.tsx set.
  // Putting it back before paint is the fix from the Next.js guide; in production this changes nothing.
  useLayoutEffect(() => {
    try {
      const theme = localStorage.getItem("theme");
      if (theme) document.documentElement.dataset.theme = theme;
    } catch {
      // Storage can be blocked; the system theme applies
    }
  }, []);

  return (
    <button
      type="button"
      aria-label="Switch between light and dark theme"
      className={`grid size-11 place-items-center rounded-md ${press}`}
      onClick={() => {
        const root = document.documentElement;
        const current = root.dataset.theme ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        const next = current === "dark" ? "light" : "dark";
        try {
          localStorage.setItem("theme", next);
        } catch {
          // Storage can be blocked; the switch still works for this visit
        }
        const apply = () => {
          root.dataset.theme = next;
        };
        // Crossfade where the browser supports it, so the change in brightness is not abrupt
        if (document.startViewTransition) document.startViewTransition(apply);
        else apply();
      }}
    >
      <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
        <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10 2a8 8 0 0 1 0 16z" fill="currentColor" />
      </svg>
    </button>
  );
}

export function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy address");
  return (
    <button
      type="button"
      className={`rounded-md border border-muted px-4 py-2.5 text-base font-medium ${press}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setLabel("Copied");
        } catch {
          setLabel("Couldn't copy. Select the address instead.");
        }
        setTimeout(() => setLabel("Copy address"), 2500);
      }}
    >
      <span aria-live="polite">{label}</span>
    </button>
  );
}
