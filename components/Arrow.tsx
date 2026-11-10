/**
 * Arrow icon as inline SVG. Text arrows (↗ ↓ →) are missing from the display fonts, so iOS falls back to
 * its colour emoji font and draws a blue emoji box. An SVG looks identical everywhere and inherits colour.
 */
export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="0.8em"
      height="0.8em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden="true"
      className={`inline-block ml-1 align-[-0.05em] ${className}`}
    >
      <path d="M3.5 12.5 12.5 3.5M5 3.5h7.5V11" />
    </svg>
  );
}
