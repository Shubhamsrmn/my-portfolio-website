"use client";

import { useMemo, useRef, useState, type CSSProperties } from "react";
import { Label, SectionHead } from "@/components/Editorial";
import { Reveal } from "@/components/Reveal";
import { useStageProgress } from "@/components/useStageProgress";
import type { Job } from "@/lib/content";
import { nw } from "@/lib/typography";

/**
 * Career as a pinned, scroll-scrubbed story. One set of markup, two layouts (see globals.css):
 *  - large landscape screens: the section pins; a giant year ticks forward as you scroll, each
 *    achievement is "typeset" one beat at a time, and chapter 1 hands over to chapter 2.
 *    Scrolling up rewinds the story.
 *  - elsewhere: a plain, fully visible list of both jobs.
 */
export function CareerStory({ jobs }: { jobs: Job[] }) {
  const ref = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);
  useStageProgress(ref, setP);

  const { total, starts } = useMemo(() => {
    const starts: number[] = [];
    let total = 0;
    for (const j of jobs) {
      starts.push(total);
      total += j.points.length;
    }
    return { total, starts };
  }, [jobs]);

  const beat = Math.min(total - 1, Math.floor(p * total));
  let activeJob = jobs.length - 1;
  while (activeJob > 0 && beat < starts[activeJob]) activeJob--;
  const localBeat = beat - starts[activeJob];

  // year that matches the current position inside the active chapter
  const job = jobs[activeJob];
  const span = job.points.length / total;
  const local = Math.min(1, Math.max(0, (p - starts[activeJob] / total) / span));
  const year = Math.floor(job.startYear + local * (job.endYear - job.startYear));

  const stateOf = (i: number) => (i < activeJob ? "past" : i > activeJob ? "future" : "active");

  return (
    <section id="experience" ref={ref} aria-labelledby="experience-title" className="career-outer" style={{ "--beats": total } as CSSProperties}>
      <div className="stage-sticky">
        <div className="stage-wrap max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="stage-fallback-head">
            <SectionHead id="experience-title" kicker="Career" title="Work experience" aside="Two companies, one steady direction: more reach, more speed." />
          </div>

          <div className="career-stage">
            {/* Pinned-layout furniture (decorative, hidden in the stacked layout) */}
            <div className="career-hud" aria-hidden="true">
              <Label className="text-accent-terracotta">
                Career · Chapter {activeJob + 1} of {jobs.length}
              </Label>
              <Label className={`text-ink-muted transition-opacity duration-300 ${p > 0.98 ? "opacity-0" : "opacity-100"}`}>
                Scroll to turn the page ↓
              </Label>
            </div>

            <div className="career-year" aria-hidden="true">
              <p className="font-mono text-label uppercase tracking-[0.14em] text-ink-muted">The year is</p>
              <div key={year} className="year-flip font-headline leading-[0.82] text-ink-primary" style={{ fontSize: "clamp(7rem, 15vw, 14rem)" }}>
                {year}
              </div>
            </div>

            {/* The content itself: rendered once, in reading order */}
            <div className="career-jobs">
              {jobs.map((j, i) => (
                <article key={j.company} className="career-job">
                  <header className="career-head career-card" data-state={stateOf(i)}>
                    <Reveal variant="up">
                      <Label className="text-accent-terracotta">{j.dates}</Label>
                      <h3 className="font-masthead font-black text-name mt-1">{j.company}</h3>
                      <p className="font-editorial text-lede italic mt-2">{j.role}</p>
                      <p className="font-editorial text-body text-ink-secondary mt-3 max-w-md">{nw(j.note)}</p>
                      <ul className="flex flex-wrap gap-2 mt-4" aria-label={`${j.company} links`}>
                        {j.links.map((l) => (
                          <li key={l.label}>
                            <a
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={l.aria}
                              className="chip inline-flex items-center min-h-11 px-3 border-2 border-ink-border bg-paper-card font-mono text-meta font-bold"
                            >
                              {l.label} <span aria-hidden="true">&nbsp;↗</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  </header>
                  <ul className="career-points career-card border-t border-ink-border" data-state={stateOf(i)}>
                    {j.points.map(([title, text], k) => {
                      const on = i < activeJob || (i === activeJob && k <= localBeat);
                      return (
                        <li key={title} className="beat border-b border-ink-border/30" data-on={on}>
                          <Reveal variant="up" delay={Math.min(k, 3) * 60}>
                            <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-1 sm:gap-5 py-3 md:py-2.5">
                              <span className="font-mono text-meta font-bold uppercase tracking-wide text-accent-terracotta">{title}</span>
                              <span className="font-editorial text-body lg:text-small leading-snug text-ink-secondary">{nw(text)}</span>
                            </div>
                          </Reveal>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              ))}
            </div>

            <div className="career-timeline" aria-hidden="true">
              <div className="h-[3px] bg-ink-primary/15 relative">
                <div className="absolute inset-0 origin-left bg-accent-terracotta" style={{ transform: "scaleX(var(--p, 0))" }} />
              </div>
              {jobs.map((j, i) => (
                <span
                  key={j.company}
                  className={`absolute top-7 font-mono text-label uppercase tracking-wide whitespace-nowrap transition-colors ${i === activeJob ? "text-ink-primary font-bold" : "text-ink-muted"}`}
                  style={{ left: `${(starts[i] / total) * 100}%` }}
                >
                  <span className="block w-px h-3 bg-ink-primary mb-1" />
                  {j.dates.split(" – ")[0]} · {j.company}
                </span>
              ))}
              <span className="absolute right-0 top-7 font-mono text-label uppercase tracking-wide text-ink-muted">
                <span className="block w-px h-3 bg-ink-primary mb-1 ml-auto" />
                Today
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
