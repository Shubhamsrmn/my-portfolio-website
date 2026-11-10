import { Reveal } from "@/components/Reveal";
import { nw } from "@/lib/typography";

export function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`font-mono text-label font-bold uppercase tracking-[0.1em] sm:tracking-[0.14em] ${className}`}>
      {children}
    </span>
  );
}

export function SectionHead({ kicker, title, aside, id }: { kicker: string; title: string; aside?: string; id?: string }) {
  return (
    <div className="mb-10">
      <Reveal variant="rule">
        <div className="border-t-[3px] border-double border-ink-border" />
      </Reveal>
      <div className="py-4 border-b border-ink-border flex flex-col md:flex-row md:items-end md:justify-between gap-2">
        <div className="min-w-0">
          <Reveal variant="up">
            <Label className="text-accent-terracotta">{kicker}</Label>
          </Reveal>
          <Reveal variant="ink" delay={80}>
            <h2 id={id} className="font-headline text-section tracking-wide uppercase mt-1">
              {title}
            </h2>
          </Reveal>
        </div>
        {aside && (
          <Reveal variant="up" delay={200}>
            <p className="font-editorial italic text-ink-muted text-body max-w-sm md:text-right">{nw(aside)}</p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
