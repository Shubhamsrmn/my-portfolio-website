"use client";

import { useEffect, useState } from "react";

/** Live clock showing the current time in Pune (IST). */
export function LiveChronometer() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    function update() {
      setTimeStr(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    }
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-bold tabular-nums" suppressHydrationWarning>
      {timeStr ? `${timeStr} IST` : "Pune"}
    </span>
  );
}
