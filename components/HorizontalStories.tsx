"use client";

import { useRef, useState, type CSSProperties } from "react";
import { Label, SectionHead } from "@/components/Editorial";
import { Reveal } from "@/components/Reveal";
import { useStageProgress } from "@/components/useStageProgress";
import type { Story } from "@/lib/content";
import { nw } from "@/lib/typography";

/**
 * "Top stories" as a pinned broadsheet. One set of markup, two layouts (see globals.css):
 *  - large landscape screens: the section pins and vertical scroll slides pages 1 → 2 → 3 sideways;
 *    scrolling up slides them back.
 *  - phones, portrait, short windows, reduced motion: ordinary stacked cards.
 */
export function HorizontalStories({ stories }: { stories: Story[] }) {
  const ref = useRef<HTMLElement>(null);
  const [page, setPage] = useState(0);
  const n = stories.length;

  useStageProgress(ref, (p) => setPage(Math.round(p * (n - 1))));

  return (
    <section id="work" ref={ref} aria-labelledby="work-title" className="hs-outer" style={{ "--n": n } as CSSProperties}>
      <div className="stage-sticky">
        <div className="stage-wrap max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="stage-fallback-head">
            <SectionHead id="work-title" kicker="Top stories · Selected work" title="Featured projects" aside="Three projects, told simply: the problem, what I did, and what changed." />
          </div>

          {/* Pinned-layout progress bar (decorative) */}
          <div className="hs-hud" aria-hidden="true">
            <div className="max-w-[1300px] mx-auto px-10 flex items-center gap-6">
              <Label className="text-accent-terracotta whitespace-nowrap">Top stories</Label>
              <div className="flex-1 h-[3px] bg-ink-primary/15 relative">
                <div className="absolute inset-0 origin-left bg-accent-terracotta" style={{ transform: "scaleX(var(--p, 0))" }} />
              </div>
              <Label className="whitespace-nowrap tabular-nums">
                Page {page + 1} / {n}
              </Label>
              <Label className={`text-ink-muted whitespace-nowrap transition-opacity duration-300 ${page === n - 1 ? "opacity-0" : "opacity-100"}`}>
                Keep scrolling ↓
              </Label>
            </div>
          </div>

          <div className="hs-track">
            {stories.map((s, i) => (
              <Reveal key={s.headline} variant="up" delay={i * 140} className="hs-slot">
                <article className="hs-panel" data-active={page === i}>
                  <div className="hs-inner">
                    <span
                      aria-hidden="true"
                      className="hs-ghost pointer-events-none select-none absolute -left-6 top-1/2 font-headline leading-none text-ink-primary/[0.06]"
                      style={{ fontSize: "clamp(16rem, 34vw, 32rem)" }}
                    >
                      0{i + 1}
                    </span>

                    <div className="hs-head">
                      <Label className="text-accent-terracotta">
                        Page {i + 1} · {s.kicker}
                      </Label>
                      <h3 className="hs-title font-headline uppercase leading-[0.9] tracking-wide mt-2">{s.headline}</h3>
                      <p className="balance font-mono text-meta text-ink-muted mt-3 pt-3 border-t-2 border-ink-border">{s.sub}</p>
                    </div>

                    <div className="hs-card">
                      <div className="font-editorial text-body text-ink-secondary space-y-3 mt-4 hs-copy">
                        <p><b className="text-ink-primary">The problem. </b>{nw(s.problem)}</p>
                        <p><b className="text-ink-primary">What I did. </b>{nw(s.did)}</p>
                      </div>
                      <ul className="mt-auto pt-6 grid gap-2.5">
                        {s.result.map((r, k) => (
                          <li
                            key={r}
                            className="hs-stamp flex gap-2 border-2 border-dashed border-accent-terracotta text-accent-terracotta bg-paper-canvas px-3 py-2 font-mono text-meta font-bold"
                            style={{ "--d": `${450 + k * 180}ms`, "--r": `${k % 2 ? 1 : -1}deg` } as CSSProperties}
                          >
                            <span aria-hidden="true">✓</span>
                            <span className="balance">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
