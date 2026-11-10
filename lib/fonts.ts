import {
  Bodoni_Moda,
  Bebas_Neue,
  Newsreader,
  JetBrains_Mono,
} from "next/font/google";

/**
 * Broadsheet Typography Stack
 *
 * Variable names use the `--nf-*` prefix to decouple Next.js font loader injection
 * from Tailwind CSS theme tokens (`--font-*`), completely preventing circular variable resolution.
 *
 * 1. Masthead Serif: Bodoni Moda (variable 400-900, display/masthead, non-critical, preload: false)
 * 2. Headline Condensed: Bebas Neue (weight 400, impactful condensed titles, non-critical, preload: false)
 * 3. Narrative Editorial: Newsreader (normal & italic, primary longform copy, critical path, preload: true)
 * 4. Technical Monospace: JetBrains Mono (technical/data/code, non-critical, preload: false)
 *
 * All fonts configure `display: 'swap'` and `subsets: ['latin']` for zero CLS and no FOIT.
 */

export const fontMasthead = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-masthead",
  preload: false,
});

export const fontHeadline = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-headline",
  preload: false,
});

export const fontEditorial = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--nf-editorial",
  preload: true,
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-mono",
  preload: false,
});

// Also export alias by font name for ergonomics
export {
  fontMasthead as bodoniModa,
  fontHeadline as bebasNeue,
  fontEditorial as newsreader,
  fontMono as jetbrainsMono,
};

/**
 * Aggregated CSS variable class names to attach to the root <html> tag.
 * Guarantees universal CSS custom property inheritance across all DOM subtrees,
 * dialogs, and portals.
 */
export const fontVariables = [
  fontMasthead.variable,
  fontHeadline.variable,
  fontEditorial.variable,
  fontMono.variable,
].join(" ");
