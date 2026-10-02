"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

type Entry = { method: string; path: string; status: string; ms: string };

/** Flavour log lines drawn from real projects in the portfolio. */
const LINES: Entry[] = [
  { method: "GET", path: "/api/trips?from=LHE&to=ISB", status: "200", ms: "18ms" },
  { method: "WS", path: "detections ← plate LEA-4471", status: "evt", ms: "4ms" },
  { method: "POST", path: "/api/bookings", status: "201", ms: "41ms" },
  { method: "POST", path: "/api/analysis → stream", status: "200", ms: "1.2s" },
  { method: "WS", path: "orders/1042/chat ← message", status: "evt", ms: "6ms" },
  { method: "GET", path: "/api/snippets?lang=ts", status: "200", ms: "23ms" },
  { method: "POST", path: "/auth/refresh", status: "200", ms: "9ms" },
  { method: "GET", path: "/api/listings?type=swap", status: "200", ms: "31ms" },
];

const methodColor: Record<string, string> = {
  GET: "text-live",
  POST: "text-signal",
  WS: "text-foreground",
};

export function RequestLog({ className }: { className?: string }) {
  const [items, setItems] = useState<(Entry & { id: number; time: string })[]>([]);

  useEffect(() => {
    let i = 0;
    const push = () => {
      const time = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: profile.timezone,
      }).format(new Date());
      const entry = { ...LINES[i % LINES.length], id: i, time };
      i++;
      setItems((prev) => [...prev.slice(-3), entry]);
    };
    push();
    const id = setInterval(push, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      aria-hidden
      className={cn("overflow-hidden rounded-xl border border-border bg-card/70 font-mono text-[11px] backdrop-blur", className)}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-2 text-subtle-foreground">
        <span>~/aziz — requests</span>
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 animate-pulse rounded-full bg-live" /> live
        </span>
      </div>
      <div className="flex h-[112px] flex-col justify-end overflow-hidden px-4 py-2 leading-6">
          {items.map((l) => (
            <motion.div
              key={l.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex shrink-0 gap-3 whitespace-nowrap"
            >
              <span className="text-subtle-foreground">{l.time}</span>
              <span className={cn("w-9", methodColor[l.method])}>{l.method}</span>
              <span className="min-w-0 flex-1 truncate text-muted-foreground">{l.path}</span>
              <span className="hidden text-subtle-foreground sm:inline">{l.status}</span>
              <span className="w-10 text-right text-subtle-foreground">{l.ms}</span>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
