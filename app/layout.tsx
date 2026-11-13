import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Next, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["600", "700"],
  variable: "--font-display",
  subsets: ["latin"],
});
const atkinson = Atkinson_Hyperlegible_Next({
  variable: "--font-atkinson",
  subsets: ["latin"],
});
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Noor — Codex · AI/ML & Software Engineering",
  description:
    "Machine learning research, deterministic AI agents, LLM security, and first-principles software engineering by Ali Noor, a computer science undergraduate at COMSATS University Islamabad.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${atkinson.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#16100b] font-sans text-lg/[1.55] text-[#f4ead5] antialiased selection:bg-[#d4af37]/25 selection:text-white">
        {children}
      </body>
    </html>
  );
}
