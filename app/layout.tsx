import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Next } from "next/font/google";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible_Next({ variable: "--font-atkinson", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Noor, AI/ML engineer",
  description:
    "Machine learning research, LLM agents and LLM security projects by Ali Noor, a computer science undergraduate at COMSATS University Islamabad.",
};

// Runs before first paint so a saved theme choice never flashes the other theme
const restoreTheme = `try{const t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch{}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The script above sets data-theme before React hydrates, which React would otherwise report as a mismatch
    <html lang="en" className={atkinson.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: restoreTheme }} />
      </head>
      <body className="bg-paper font-sans text-lg/[1.55] text-ink antialiased">{children}</body>
    </html>
  );
}
