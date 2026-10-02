"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { profile } from "@/content/profile";
import { useChat } from "@/components/providers/chat-provider";
import { LocalTime } from "@/components/layout/local-time";
import { Button } from "@/components/ui/button";
import { Spark } from "@/components/ui/spark";
import { StatusDot } from "@/components/ui/status-dot";
import { RequestLog } from "./request-log";
import { SystemDiagram } from "./system-diagram";

const ease = [0.22, 1, 0.36, 1] as const;

const headline: { text: string; accent?: boolean }[] = [
  { text: "I engineer" },
  { text: "real‑time products," },
  { text: "from database", accent: true },
  { text: "to device.", accent: true },
];

export function Hero() {
  const { open } = useChat();

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Backdrop: engineering grid that fades out */}
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[880px] -translate-x-1/2 rounded-full bg-signal/[0.07] blur-3xl"
      />

      <div className="container-page relative">
        {/* Spec header row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-border pb-4 font-mono text-[11px] tracking-wider text-muted-foreground uppercase"
        >
          <span className="text-foreground">{profile.name}</span>
          <span>{profile.role}</span>
          <span className="hidden sm:inline">{profile.location}</span>
          <span className="hidden sm:inline">
            <LocalTime />
          </span>
          {profile.available && (
            <span className="ml-auto flex items-center gap-2 text-foreground">
              <StatusDot /> Open to work
            </span>
          )}
        </motion.div>

        <div className="mt-12 grid items-end gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-[clamp(2.9rem,7.6vw,6.4rem)] leading-[0.95] tracking-[-0.02em]">
              {headline.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    className={line.accent ? "block text-muted-foreground italic" : "block"}
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.15 + i * 0.09, ease }}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
              className="mt-8 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg"
            >
              {profile.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.72, ease }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg">
                <Link href="/#work">
                  See the work <ArrowDownRight />
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={open}>
                <Spark className="size-4" /> Ask about me
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className="lg:col-span-5"
          >
            <div className="mb-3 flex items-center justify-between font-mono text-[10px] tracking-widest text-subtle-foreground uppercase">
              <span>fig.01 — the stack I ship</span>
              <span className="hidden sm:inline">hover a node</span>
            </div>
            <SystemDiagram />
            <RequestLog className="mt-6" />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 border-t border-border md:grid-cols-4"
        >
          {profile.stats.map((s, i) => (
            <div
              key={s.label}
              className="border-b border-border py-6 pr-4 even:border-l even:pl-4 md:border-b-0 md:pl-6 md:first:pl-0 md:[&:not(:first-child)]:border-l"
            >
              <dt className="font-mono text-[11px] tracking-wider text-subtle-foreground uppercase">
                {String(i + 1).padStart(2, "0")} / {s.label}
              </dt>
              <dd className="mt-2 font-serif text-5xl tracking-tight">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
