"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type NodeId = "web" | "mobile" | "edge" | "api" | "db" | "realtime";

const W = 150;
const H = 58;

const nodes: Record<NodeId, { x: number; y: number; kicker: string; label: string }> = {
  web: { x: 10, y: 20, kicker: "client", label: "Next.js · React" },
  mobile: { x: 10, y: 246, kicker: "mobile", label: "React Native" },
  edge: { x: 245, y: 133, kicker: "edge", label: "Nginx · Vercel" },
  api: { x: 480, y: 20, kicker: "api", label: "Node · Express" },
  db: { x: 480, y: 133, kicker: "data", label: "MongoDB" },
  realtime: { x: 480, y: 246, kicker: "realtime", label: "WebSockets" },
};

const edges: { from: NodeId; to: NodeId; d: string; dur: number; reverse?: boolean }[] = [
  { from: "web", to: "edge", d: "M160 49 C 205 49, 200 162, 245 162", dur: 2.4 },
  { from: "mobile", to: "edge", d: "M160 275 C 205 275, 200 162, 245 162", dur: 2.8 },
  { from: "edge", to: "api", d: "M395 162 C 440 162, 435 49, 480 49", dur: 2.2 },
  { from: "edge", to: "realtime", d: "M395 162 C 440 162, 435 275, 480 275", dur: 1.8, reverse: true },
  { from: "edge", to: "db", d: "M395 162 L 480 162", dur: 3.2 },
  { from: "api", to: "db", d: "M555 78 L 555 133", dur: 1.4 },
  { from: "realtime", to: "db", d: "M555 246 L 555 191", dur: 1.6, reverse: true },
];

/**
 * The stack Aziz works across, drawn as a live system:
 * packets flow between layers, hovering a node lights up its connections.
 */
export function SystemDiagram({ className }: { className?: string }) {
  const [active, setActive] = useState<NodeId | null>(null);
  const isLit = (e: (typeof edges)[number]) => !active || e.from === active || e.to === active;

  return (
    <motion.svg
      viewBox="0 0 640 324"
      className={cn("w-full overflow-visible", className)}
      role="img"
      aria-label="Diagram of the stack Aziz builds: web and mobile clients, edge, API, real-time layer and database"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } } }}
    >
      <defs>
        <radialGradient id="packet-glow">
          <stop offset="0%" stopColor="var(--signal)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--signal)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {edges.map((e, i) => (
        <g key={i} className="transition-opacity duration-300" style={{ opacity: isLit(e) ? 1 : 0.18 }}>
          <motion.path
            d={e.d}
            fill="none"
            className="stroke-border-strong"
            strokeWidth={1.25}
            strokeDasharray="3 4"
            variants={{ hidden: { pathLength: 0, opacity: 0 }, show: { pathLength: 1, opacity: 1 } }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />
          <g className="motion-packet">
            <circle r="9" fill="url(#packet-glow)">
              <Motion d={e.d} dur={e.dur} delay={i * 0.37} reverse={e.reverse} />
            </circle>
            <circle r="2.6" className="fill-signal">
              <Motion d={e.d} dur={e.dur} delay={i * 0.37} reverse={e.reverse} />
            </circle>
          </g>
        </g>
      ))}

      {(Object.keys(nodes) as NodeId[]).map((id) => {
        const n = nodes[id];
        const dim = active && active !== id && !edges.some((e) => (e.from === active && e.to === id) || (e.to === active && e.from === id));
        return (
          <motion.g
            key={id}
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setActive(id)}
            onMouseLeave={() => setActive(null)}
            className="cursor-default"
            style={{ opacity: dim ? 0.35 : 1, transition: "opacity 300ms" }}
          >
            <rect
              x={n.x}
              y={n.y}
              width={W}
              height={H}
              rx={12}
              className={cn(
                "fill-card stroke-border transition-colors duration-300",
                active === id && "stroke-signal",
              )}
              strokeWidth={1}
            />
            <circle cx={n.x + 16} cy={n.y + 18.5} r={3} className="fill-live" />
            <text
              x={n.x + 26}
              y={n.y + 22.5}
              className="fill-subtle-foreground font-mono text-[11px] tracking-[0.12em] uppercase"
            >
              {n.kicker}
            </text>
            <text x={n.x + 14} y={n.y + 43} className="fill-foreground text-[15px] font-medium">
              {n.label}
            </text>
          </motion.g>
        );
      })}
    </motion.svg>
  );
}

function Motion({ d, dur, delay, reverse }: { d: string; dur: number; delay: number; reverse?: boolean }) {
  return (
    <animateMotion
      dur={`${dur}s`}
      begin={`${delay}s`}
      repeatCount="indefinite"
      path={d}
      keyPoints={reverse ? "1;0" : "0;1"}
      keyTimes="0;1"
      calcMode="linear"
    />
  );
}
