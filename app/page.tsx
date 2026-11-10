export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      <header className="border-b-2 border-current pb-6 text-center space-y-4">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          The Broadsheet Edition &bull; Vol. I &bull; Est. 2026
        </p>
        <h1 className="font-masthead text-6xl md:text-8xl tracking-tight font-bold">
          The Chronicle
        </h1>
        <div className="flex justify-between items-center text-xs font-mono border-t border-b border-current py-1.5 uppercase">
          <span>Global Typography Dispatch</span>
          <span>Zero Layout Shift</span>
          <span>Next.js Enterprise Stack</span>
        </div>
      </header>

      <article className="space-y-6">
        <h2 className="font-headline text-5xl md:text-6xl tracking-wide uppercase">
          Enterprise Font Architecture Implemented Across All Subtrees
        </h2>

        <p className="font-editorial text-xl md:text-2xl leading-relaxed text-neutral-800 dark:text-neutral-200">
          Typography forms the backbone of digital publishing. Through isolated
          font definitions, universal CSS inheritance, and selective
          preloading, rendering performance achieves{" "}
          <em className="italic">absolute zero Cumulative Layout Shift</em>.
        </p>

        <p className="font-editorial text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          Newsreader serves as our critical editorial narrative font, preloaded
          to ensure instantaneous time-to-first-render. Secondary display fonts
          such as Bodoni Moda, Bebas Neue, and JetBrains Mono are loaded on
          demand with swap display policies, keeping the critical rendering path
          lean and unencumbered.
        </p>

        <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-4 rounded-md space-y-2">
          <p className="font-mono text-xs uppercase text-neutral-500">
            Technical Monospace Diagnostic Token:
          </p>
          <pre className="font-mono text-sm overflow-x-auto text-neutral-900 dark:text-neutral-100">
            <code>{`const broadsheet = {
  masthead: "Bodoni Moda (400-900, preload: false)",
  headline: "Bebas Neue (400, preload: false)",
  editorial: "Newsreader (normal & italic, preload: true)",
  mono: "JetBrains Mono (variable, preload: false)"
};`}</code>
          </pre>
        </div>
      </article>
    </main>
  );
}
