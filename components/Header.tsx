"use client";

import { useEffect, useRef, useState } from "react";
import { LiveChronometer } from "@/components/LiveChronometer";

type NavItem = { label: string; href: string };

/** Fixed top bar with a scroll-progress ink rule and active-section highlighting. */
export function Header({ nav, resume }: { nav: NavItem[]; resume: string }) {
  const bar = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("");

  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        const p = max > 0 ? h.scrollTop / max : 0;
        if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const els = nav
      .map((n) => document.getElementById(n.href.slice(1)))
      .filter((e): e is HTMLElement => Boolean(e));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [nav]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-paper-canvas/95 backdrop-blur border-b border-ink-border">
      <div ref={bar} className="absolute left-0 top-0 h-[3px] w-full origin-left bg-accent-terracotta" style={{ transform: "scaleX(0)" }} />
      <div className="max-w-[1400px] mx-auto h-14 px-4 md:px-8 flex items-center justify-between gap-4">
        <a href="#top" className="font-masthead font-black text-lg tracking-tight whitespace-nowrap inline-flex items-center min-h-11">
          S. Nanaware
        </a>
        <nav className="hidden md:flex items-center gap-7 text-small font-editorial">
          {nav.map((n) => {
            const on = active === n.href.slice(1);
            return (
              <a
                key={n.href}
                href={n.href}
                aria-current={on ? "true" : undefined}
                className={`relative py-1 transition-colors hover:text-accent-terracotta after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:origin-left after:bg-accent-terracotta after:transition-transform after:duration-300 ${
                  on ? "text-accent-terracotta after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {n.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden lg:flex items-center gap-2 font-mono text-meta text-ink-muted">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            Pune · <LiveChronometer />
          </span>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center min-h-10 px-3.5 bg-ink-primary text-paper-canvas font-mono text-meta font-bold hover:bg-accent-terracotta transition-colors"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </header>
  );
}
