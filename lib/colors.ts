/**
 * Color tokens mirroring the CSS custom properties in globals.css.
 */

export const colors = {
  paper: {
    canvas: "#E9E2D0",
    card: "#F1EBDB",
    muted: "#DDD5C0",
  },
  ink: {
    primary: "#141210",
    secondary: "#3A352D",
    muted: "#675F52",
    border: "#141210",
  },
  accent: {
    terracotta: "#B8321A",
    ochre: "#C49438",
    green: "#2E7D32",
  },
  card: {
    chocolate: "#3C332D",
  },
} as const;

export type Colors = typeof colors;
