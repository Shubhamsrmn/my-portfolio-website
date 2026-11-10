"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Variant = "up" | "ink" | "stamp" | "rule" | "left";

/**
 * Scroll-triggered reveal in print-room style:
 *  up    – paper slides up into place
 *  ink   – headline wipes in like drying ink
 *  stamp – drops in oversized and thuds down
 *  rule  – a rule line draws itself across
 *  left  – slides in from the left
 * Content stays visible without JS (see <noscript> in layout) and with reduced motion (globals.css).
 */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  rotate,
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  /** final rotation for the "stamp" variant, in degrees */
  rotate?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = { "--d": `${delay}ms`, "--r": `${rotate ?? 0}deg` } as CSSProperties;

  return (
    <div ref={ref} data-in={seen} className={`reveal reveal-${variant} ${className}`} style={style}>
      {children}
    </div>
  );
}
