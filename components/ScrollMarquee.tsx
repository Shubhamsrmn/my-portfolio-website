"use client";

import { useRef } from "react";
import { useStageProgress } from "@/components/useStageProgress";

/** Two giant wood-type strips that slide in opposite directions as you scroll past, and back as you scroll up. */
export function ScrollMarquee({ top, bottom }: { top: string[]; bottom: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useStageProgress(ref, undefined, "pass");

  const row = (words: string[], dir: 1 | -1, outline: boolean) => (
    <div className="scrub-row flex w-max font-headline text-stat leading-[1.05]! tracking-wide whitespace-nowrap" data-dir={dir}>
      {Array.from({ length: 4 }).flatMap((_, rep) =>
        words.map((w) => (
          <span key={`${rep}-${w}`} className={`px-5 ${outline ? "text-outline" : ""}`}>
            {w} <span className="text-accent-terracotta">★</span>
          </span>
        )),
      )}
    </div>
  );

  return (
    <div ref={ref} className="border-y-2 border-ink-border bg-paper-muted overflow-hidden py-4 md:py-6" aria-hidden="true">
      {row(top, 1, false)}
      {row(bottom, -1, true)}
    </div>
  );
}
