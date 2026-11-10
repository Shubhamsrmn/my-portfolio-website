"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Scroll-scrubbing engine. Maps scroll position to a 0..1 value and writes it to the
 * element as the CSS variable `--p`, so animation is a pure function of scroll:
 * scrolling back up replays everything in reverse with no extra code.
 *
 *  "stage" – for a tall section holding a sticky scene: 0 when the section top reaches
 *            the viewport top, 1 when its bottom reaches the viewport bottom.
 *  "pass"  – for an element drifting through: 0 as it enters at the bottom, 1 as it leaves at the top.
 */
export function useStageProgress(
  ref: RefObject<HTMLElement | null>,
  onProgress?: (p: number) => void,
  mode: "stage" | "pass" = "stage",
) {
  const cb = useRef(onProgress);
  useEffect(() => {
    cb.current = onProgress;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    const compute = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      let p: number;
      if (mode === "stage") {
        const total = r.height - vh;
        p = total > 0 ? -r.top / total : 0;
      } else {
        p = (vh - r.top) / (vh + r.height);
      }
      p = Math.min(1, Math.max(0, p));
      el.style.setProperty("--p", p.toFixed(4));
      cb.current?.(p);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ref, mode]);
}
