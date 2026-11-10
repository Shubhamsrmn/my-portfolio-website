"use client";

import { useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // clipboard unavailable; the mailto button is still there
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="px-6 py-4 bg-paper-card text-ink-primary font-mono text-sm font-bold border-2 border-ink-border hover:bg-paper-muted transition-colors shadow-[4px_4px_0px_#141210] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
    >
      {copied ? "Copied ✓" : "Copy email address"}
    </button>
  );
}
