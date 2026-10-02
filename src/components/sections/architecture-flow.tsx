"use client";

import { motion } from "motion/react";
import type { ArchitectureNode } from "@/types";
import { pad } from "@/lib/utils";

/** Vertical request-flow diagram for a case study, with a packet travelling down the pipe. */
export function ArchitectureFlow({ nodes }: { nodes: ArchitectureNode[] }) {
  return (
    <div className="relative">
      <div aria-hidden className="absolute top-6 bottom-6 left-[1.4rem] w-px bg-border-strong">
        <motion.span
          className="motion-packet absolute -left-[3px] size-[7px] rounded-full bg-signal shadow-[0_0_12px_var(--signal)]"
          animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.1, 0.9, 1] }}
        />
      </div>
      <ol className="space-y-3">
        {nodes.map((node, i) => (
          <motion.li
            key={node.label}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center gap-4"
          >
            <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background font-mono text-[11px] text-signal">
              {pad(i + 1)}
            </span>
            <div className="flex flex-1 items-baseline justify-between gap-4 rounded-xl border border-border bg-card px-4 py-3">
              <span className="font-medium">{node.label}</span>
              <span className="text-right font-mono text-xs text-muted-foreground">{node.detail}</span>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
