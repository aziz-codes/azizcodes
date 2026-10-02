"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

const format = (date: Date, seconds: boolean) =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    ...(seconds ? { second: "2-digit" } : {}),
    hour12: false,
    timeZone: profile.timezone,
  }).format(date);

/** Aziz's local time in Lahore, ticking live. Renders a placeholder until mounted. */
export function LocalTime({ seconds = false }: { seconds?: boolean }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <time suppressHydrationWarning className="tabular-nums">
      {now ? format(now, seconds) : seconds ? "--:--:--" : "--:--"} {profile.timezoneLabel}
    </time>
  );
}
