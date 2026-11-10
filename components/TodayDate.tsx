"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};
const clientDate = () =>
  new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

/** Today's date, newspaper dateline style. Empty on the server so a static build is never stale. */
export function TodayDate() {
  const text = useSyncExternalStore(noopSubscribe, clientDate, () => "");
  return <span suppressHydrationWarning>{text || "Portfolio Edition"}</span>;
}
