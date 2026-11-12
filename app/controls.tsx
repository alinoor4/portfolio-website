"use client";

import { useLayoutEffect, useState } from "react";

const press = "transition-transform duration-150 ease-out active:scale-[0.97]";

export function ThemeToggle() {
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
