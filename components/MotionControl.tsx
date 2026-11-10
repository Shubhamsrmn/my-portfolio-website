"use client";

import { useSyncExternalStore } from "react";

/**
 * Motion preference.
 *
 * <html data-motion="full|reduced"> is set before first paint by the inline script in layout.tsx:
 *   saved visitor choice  >  device "Reduce Motion" setting  >  full.
 * Reduced mode removes movement (slides, spin, parallax, pinned scenes) but keeps gentle fades.
 * Because iOS and Android both expose "Reduce Motion", many phones start in reduced mode without the
 * owner knowing, so we say so plainly and offer a one-tap switch instead of silently hiding the animations.
 */
const MQ = "(prefers-reduced-motion: reduce)";
const KEY = "motion";

function subscribe(cb: () => void) {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-motion"] });
  const mq = window.matchMedia(MQ);
  mq.addEventListener("change", cb);
  window.addEventListener("motionchange", cb);
  return () => {
    mo.disconnect();
    mq.removeEventListener("change", cb);
    window.removeEventListener("motionchange", cb);
  };
}

const getMode = () => (document.documentElement.dataset.motion === "reduced" ? "reduced" : "full");
const getDeviceReduces = () => window.matchMedia(MQ).matches;
const getChoice = () => {
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
};

function choose(mode: "full" | "reduced") {
  try {
    window.localStorage.setItem(KEY, mode);
  } catch {
    // storage unavailable (private mode): the choice still applies for this page view
  }
  document.documentElement.dataset.motion = mode;
  window.dispatchEvent(new Event("motionchange"));
}

function useMotion() {
  const mode = useSyncExternalStore(subscribe, getMode, () => "full" as const);
  const deviceReduces = useSyncExternalStore(subscribe, getDeviceReduces, () => false);
  const choice = useSyncExternalStore(subscribe, getChoice, () => null);
  return { mode, deviceReduces, choice };
}

/** Shown only when the device has Reduce Motion on and the visitor hasn't decided yet. */
export function MotionBanner() {
  const { mode, deviceReduces, choice } = useMotion();
  if (!(deviceReduces && mode === "reduced" && choice === null)) return null;
  return (
    <div role="status" className="border-b border-ink-border bg-paper-muted">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-1.5 flex flex-wrap items-center gap-x-4 gap-y-0 font-mono text-meta">
        <span className="py-1.5">Animations are reduced because Reduce Motion is on for your device.</span>
        <span className="flex gap-1">
          <button type="button" onClick={() => choose("full")} className="min-h-11 px-2 font-bold underline underline-offset-4 hover:text-accent-terracotta cursor-pointer">
            Turn animations on
          </button>
          <button type="button" onClick={() => choose("reduced")} className="min-h-11 px-2 text-ink-muted underline underline-offset-4 hover:text-ink-primary cursor-pointer">
            Keep reduced
          </button>
        </span>
      </div>
    </div>
  );
}

/** Always available (footer): flips between full and reduced motion and remembers the choice. */
export function MotionToggle() {
  const { mode } = useMotion();
  const on = mode === "full";
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={() => choose(on ? "reduced" : "full")}
      className="inline-flex items-center min-h-11 px-3 border border-ink-border font-mono text-meta font-bold hover:bg-ink-primary hover:text-paper-canvas transition-colors cursor-pointer"
    >
      Animations: {on ? "On" : "Off"}
    </button>
  );
}
