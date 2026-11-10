/**
 * Widow guard for static copy. Joins the last two words with a no-break space so a paragraph can
 * never end on a single orphaned word, in every browser (CSS `text-wrap: pretty` is not universal).
 *
 * Skipped when the pair would be too long to sit together on a narrow phone line, so it can never
 * cause overflow. Pure and deterministic, so it is safe in server components.
 */
const NBSP = " ";
const MAX_PAIR = 20; // characters; two short words only

export function nw(text: string): string {
  const t = text.trimEnd();
  const i = t.lastIndexOf(" ");
  if (i <= 0) return text;
  const j = t.lastIndexOf(" ", i - 1);
  const pair = t.slice(j + 1);
  if (j < 0 || pair.length > MAX_PAIR) return text;
  return t.slice(0, i) + NBSP + t.slice(i + 1);
}
