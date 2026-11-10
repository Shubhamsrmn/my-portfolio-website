import Image from "next/image";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { TodayDate } from "@/components/TodayDate";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { Label, SectionHead } from "@/components/Editorial";
import { HorizontalStories } from "@/components/HorizontalStories";
import { CareerStory } from "@/components/CareerStory";
import { ScrollMarquee } from "@/components/ScrollMarquee";
import { Parallax } from "@/components/Parallax";
import { MotionBanner, MotionToggle } from "@/components/MotionControl";
import { ArrowUpRight } from "@/components/Arrow";
import { buildJsonLd } from "@/lib/site";
import { nw } from "@/lib/typography";
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  RESUME,
  NAV,
  NUMBERS,
  WHAT_I_DO,
  STORIES,
  PROJECTS,
  JOBS,
  SKILLS,
  MARQUEE_TOP,
  MARQUEE_BOTTOM,
  LINKS,
} from "@/lib/content";

const INTRO =
  "Full-stack engineer with nearly four years of experience shipping websites and mobile apps with React, Next.js, React Native and Node.js on AWS. Right now I help power an app used by 100,000 real-estate agents around the world, and I use AI tools like Claude, Cursor and Codex every day to build faster.";

const CONTACT_COPY =
  "I\u2019m open to full-stack and mobile engineering roles. If you have a product that needs to be fast, reliable and used by many people, I\u2019d love to hear about it.";

/** Circular rotating seal: the "stamp" that says what I'm after. */
function Seal() {
  const text = "OPEN TO WORK ★ FULL-STACK ★ MOBILE ★ ";
  return (
    <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-accent-terracotta text-paper-card shadow-[4px_4px_0px_#141210] border-2 border-ink-border">
      <svg viewBox="0 0 120 120" className="absolute inset-0 spin-slow" aria-hidden="true">
        <defs>
          <path id="seal-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text fill="currentColor" fontSize="9.5" fontWeight="700" fontFamily="var(--nf-mono), monospace">
          <textPath href="#seal-circle" textLength="270" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 grid place-items-center font-headline text-4xl md:text-5xl leading-none">
        <span>4</span>
      </div>
      <span className="sr-only">Open to full-stack and mobile roles. Nearly four years of experience.</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c") }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-ink-primary focus:text-paper-canvas focus:px-4 focus:py-2 focus:font-mono focus:text-sm"
      >
        Skip to content
      </a>
      <Header nav={NAV} resume={RESUME} />

      <main id="main" className="pt-14 pb-16 md:pb-0">
        <span id="top" className="block" />
        <MotionBanner />
        {/* ───────── Masthead ───────── */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 pt-6 paper-settle">
          <div className="flex items-center justify-between gap-4 font-mono text-label uppercase tracking-[0.1em] sm:tracking-widest text-ink-muted pb-2">
            <span>Pune, India</span>
            <span className="hidden sm:inline text-center">
              <TodayDate />
            </span>
            <span className="text-accent-terracotta font-bold">Open to work</span>
          </div>
          <h1
            className="ink-press font-masthead font-black uppercase text-center text-masthead tracking-tight border-y-[3px] border-double border-ink-border py-3 md:py-4"
          >
            Shubham Nanaware
            <span className="sr-only"> — Full-Stack Software Engineer in Pune, India</span>
          </h1>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 font-mono text-label uppercase tracking-[0.08em] sm:tracking-wider border-b border-ink-border">
            <span>Full-stack software engineer</span>
            <span className="hidden md:inline">React · Next.js · React Native · Node.js · AWS</span>
            <span>Nearly 4 years in production</span>
          </div>
        </section>

        {/* ───────── Front page ───────── */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0">
            <div className="lg:col-span-7 lg:pr-10 lg:border-r border-ink-border">
              {/* Above the fold: CSS-only entrance (hero-in/hero-ink) so it paints without waiting for JS hydration */}
              <div className="hero-in">
                <Label className="text-accent-terracotta">Front page</Label>
              </div>
              <div className="hero-ink" style={{ "--d": "80ms" } as React.CSSProperties}>
                <h2 className="font-headline uppercase text-hero tracking-wide mt-2">
                  I build apps that people use every day<span className="text-accent-terracotta">!</span>
                </h2>
              </div>
              <div className="hero-in" style={{ "--d": "200ms" } as React.CSSProperties}>
                <p className="font-editorial text-lede text-ink-secondary mt-6 max-w-2xl first-letter:float-left first-letter:font-masthead first-letter:font-black first-letter:text-[4.6rem] first-letter:leading-[0.8] first-letter:pr-3 first-letter:pt-1 first-letter:text-accent-terracotta">
                  {nw(INTRO)}
                </p>
              </div>
              <div className="hero-in" style={{ "--d": "320ms" } as React.CSSProperties}>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="#contact"
                    className="btn px-6 py-4 bg-ink-primary text-paper-canvas font-mono text-sm font-bold shadow-[4px_4px_0px_#B8321A] hover:bg-accent-terracotta hover:shadow-[4px_4px_0px_#141210] transition-all"
                  >
                    Get in touch <span className="arrow">→</span>
                  </a>
                  <a
                    href={RESUME}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn px-6 py-4 bg-paper-card border-2 border-ink-border font-mono text-sm font-bold shadow-[4px_4px_0px_#141210] hover:bg-paper-muted transition-colors"
                  >
                    Download resume <span className="arrow">↓</span>
                  </a>
                </div>
                <p className="mt-4 font-editorial text-body flex flex-wrap items-center gap-x-5 gap-y-0">
                  <span className="text-ink-muted italic">Find me on</span>
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="link-sweep inline-flex items-center min-h-11 px-1 font-bold">LinkedIn<ArrowUpRight /></a>
                  <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="link-sweep inline-flex items-center min-h-11 px-1 font-bold">GitHub<ArrowUpRight /></a>
                  <a href={`mailto:${EMAIL}`} className="link-sweep inline-flex items-center min-h-11 px-1 font-bold">Email<ArrowUpRight /></a>
                </p>
              </div>
            </div>

            <aside className="lg:col-span-5 lg:pl-10">
              <Parallax speed={0.07}>
                <div className="hero-in" style={{ "--d": "150ms" } as React.CSSProperties}>
                  <figure className="relative max-w-md mx-auto lg:max-w-none">
                    <div className="portrait lift border-2 border-ink-border bg-paper-card p-2">
                      <div className="relative aspect-[4/5] overflow-hidden bg-card-chocolate">
                        <Image
                          src="/avatar.webp"
                          alt="Illustrated portrait of Shubham Nanaware"
                          fill
                          priority
                          sizes="(min-width: 1024px) 40vw, 90vw"
                          className="object-cover object-top grayscale-[35%] sepia-[20%] contrast-110"
                        />
                      </div>
                      <figcaption className="font-editorial italic text-ink-muted text-small pt-2 px-1">
                        Shubham Nanaware, software engineer based in Pune, India.
                      </figcaption>
                    </div>
                    <div className="absolute -top-8 -right-1 md:-right-6 -rotate-6 pointer-events-none">
                      <div className="hero-stamp">
                        <Seal />
                      </div>
                    </div>
                  </figure>
                </div>
              </Parallax>
            </aside>
          </div>
        </section>

        {/* ───────── By the numbers ───────── */}
        <section className="bg-ink-primary text-paper-canvas">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-2 lg:grid-cols-4">
            {NUMBERS.map((n, i) => (
              <div
                key={n.label}
                className={`py-8 md:py-10 px-3 md:px-6 ${i % 2 === 1 ? "border-l" : ""} ${i > 0 ? "lg:border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} border-paper-canvas/25`}
              >
                <Reveal variant="up" delay={i * 120}>
                  <div className="font-headline text-stat">
                    <CountUp to={n.to} suffix={n.suffix} />
                    <span className="text-[0.5em] text-accent-ochre ml-1">{n.unit}</span>
                  </div>
                  <p className="font-editorial text-body text-paper-canvas/80 mt-2 leading-snug">{nw(n.label)}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </section>

        {/* ───────── What I do ───────── */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24" id="about">
          <SectionHead kicker="Services" title="What I do" aside="From the screen a user taps to the database behind it." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {WHAT_I_DO.map((w, i) => (
              <Reveal key={w.title} variant="up" delay={i * 130} className="h-full">
                <article
                  className={`group h-full py-6 md:py-2 md:px-8 border-ink-border ${i > 0 ? "border-t md:border-t-0 md:border-l" : "md:pl-0"} ${i === 0 ? "md:pr-8" : ""}`}
                >
                  <Label className="text-ink-muted">0{i + 1}</Label>
                  <h3 className="font-masthead font-black text-service mt-1 mb-3 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-accent-terracotta">
                    {w.title}
                  </h3>
                  <p className="font-editorial text-body text-ink-secondary">{nw(w.body)}</p>
                  <p className="balance font-mono text-meta text-accent-terracotta font-bold mt-4">{w.tags}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── Scroll-driven type strips ───────── */}
        <ScrollMarquee top={MARQUEE_TOP} bottom={MARQUEE_BOTTOM} />

        {/* ───────── Top stories: pinned horizontal broadsheet ───────── */}
        <HorizontalStories stories={STORIES} />

        {/* ───────── Projects index ───────── */}
        <section className="border-y border-ink-border bg-paper-card/60" id="projects">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24">
            <SectionHead kicker="The index" title="Projects I've shipped" aside="Six projects across web, mobile and backend, for two companies." />
            <div className="hidden lg:grid grid-cols-[56px_1.3fr_1fr_1.6fr_110px] gap-4 px-4 pb-2 font-mono text-label uppercase tracking-widest text-ink-muted border-b-2 border-ink-border">
              <span>No.</span>
              <span>Project</span>
              <span>Platform</span>
              <span>Built with</span>
              <span className="text-right">Year</span>
            </div>
            <ul>
              {PROJECTS.map((p, i) => (
                <li key={p.no} className="border-b border-ink-border/40">
                  <Reveal variant="left" delay={i * 70}>
                    <div className="row-hover grid grid-cols-1 lg:grid-cols-[56px_1.3fr_1fr_1.6fr_110px] gap-x-4 gap-y-1 -mx-4 px-4 md:-mx-8 md:px-8 lg:mx-0 lg:px-4 py-4 md:py-5 items-baseline cursor-default">
                      <span className="font-mono text-meta font-bold text-accent-terracotta">{p.no}</span>
                      <div>
                        <h3 className="font-masthead font-black text-title">{p.title}</h3>
                        <p className="font-mono text-meta text-ink-muted">{p.where}</p>
                      </div>
                      <p className="font-editorial text-small text-ink-secondary">{p.platform}</p>
                      <p className="balance font-editorial text-small text-ink-secondary">{p.stack}</p>
                      <span className="lg:text-right font-mono text-meta">{p.year}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────── Career: pinned scroll story, 2022 → today ───────── */}
        <CareerStory jobs={JOBS} />

        {/* ───────── Skills ───────── */}
        <section className="border-t border-ink-border bg-paper-card/60" id="skills">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24">
            <SectionHead kicker="Toolbox" title="Skills & tech stack" aside="Technologies I use in real projects, grouped by what they do." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SKILLS.map((g, i) => (
                <Reveal key={g.group} variant="up" delay={(i % 2) * 120} className="h-full">
                  <div className="lift h-full border-2 border-ink-border bg-paper-canvas p-5 md:p-6">
                    <h3 className="font-masthead font-black text-title mb-4">{g.group}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {g.items.map((it) => (
                        <li key={it} className="chip px-2.5 py-1 border border-ink-border bg-paper-card font-mono text-meta cursor-default">
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="up">
              <div className="mt-14 border-t-[3px] border-double border-ink-border pt-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                <h2 className="md:col-span-2 font-mono text-label font-bold uppercase tracking-[0.1em] sm:tracking-[0.14em] text-accent-terracotta">Education</h2>
                <div className="md:col-span-7">
                  <h3 className="font-masthead font-black text-title">Bachelor of Engineering, Electronics &amp; Telecommunication</h3>
                  <p className="font-editorial text-body text-ink-secondary mt-1">
                    Modern Education Society&rsquo;s Wadia College of Engineering, Pune University
                  </p>
                </div>
                <p className="md:col-span-3 md:text-right font-mono text-meta">
                  2018 – 2022
                  <br />
                  CGPA 7.93 · First Class with Distinction
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────── Contact ───────── */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24" id="contact">
          <div className="border-2 border-ink-border bg-paper-card p-5 sm:p-6 md:p-14 shadow-[5px_5px_0px_#141210] md:shadow-[8px_8px_0px_#141210]">
            <Reveal variant="up">
              <Label className="text-accent-terracotta">Contact · Classifieds · Hiring</Label>
            </Reveal>
            <Reveal variant="ink" delay={100}>
              <h2 className="font-headline uppercase text-display tracking-wide mt-2">
                Let&rsquo;s build something good<span className="text-accent-terracotta">.</span>
              </h2>
            </Reveal>
            <Reveal variant="up" delay={250}>
              <p className="font-editorial text-lede text-ink-secondary max-w-2xl mt-5">{nw(CONTACT_COPY)}</p>
            </Reveal>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {LINKS.map((l, i) => (
                <li key={l.label} className={l.handle.includes("@") ? "sm:col-span-2" : undefined}>
                  <Reveal variant="up" delay={i * 100}>
                    <a
                      href={l.href}
                      {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="row-hover btn flex items-center justify-between gap-3 border-2 border-ink-border bg-paper-canvas px-4 sm:px-5 py-5"
                    >
                      <span className="min-w-0">
                        <span className="block font-mono text-label font-bold uppercase tracking-[0.1em] text-accent-terracotta">{l.label}</span>
                        <span className="block font-masthead font-black text-[length:clamp(0.9375rem,0.85rem+0.6vw,1.375rem)] leading-tight [overflow-wrap:anywhere] mt-0.5">{l.handle.includes("@")
                            ? l.handle.split("@").flatMap((part, k) => (k === 0 ? [part] : [<wbr key={k} />, "@" + part]))
                            : l.handle}
                        </span>
                      </span>
                      <span className="shrink-0 max-[359px]:hidden" aria-hidden="true">
                        <span className="arrow text-3xl md:text-4xl"><ArrowUpRight className="ml-0 !w-[1em] !h-[1em]" /></span>
                      </span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal variant="up" delay={300}>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <CopyEmailButton email={EMAIL} />
                <span className="font-mono text-meta text-ink-muted">{EMAIL}</span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t-[3px] border-double border-ink-border mb-14 md:mb-0">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row justify-between gap-2 font-mono text-meta text-ink-muted">
          <span>
            © 2026 Shubham Nanaware<span className="whitespace-nowrap"> · Pune, India</span>
          </span>
          <MotionToggle />
          <span>Built with Next.js, Tailwind CSS &amp; a love for old newspapers.</span>
        </div>
      </footer>

      {/* Phone-only link dock so contact is always one tap away */}
      <nav
        aria-label="Quick links"
        className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-4 bg-ink-primary text-paper-canvas font-mono text-[12px] font-bold border-t border-ink-border"
      >
        {[
          ["Email", `mailto:${EMAIL}`],
          ["LinkedIn", LINKEDIN],
          ["GitHub", GITHUB],
          ["Resume", RESUME],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            {...(href.startsWith("mailto") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            className="py-3.5 text-center border-r last:border-r-0 border-paper-canvas/20 active:bg-accent-terracotta"
          >
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
