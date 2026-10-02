"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { profile } from "@/content/profile";
import { LocalTime } from "@/components/layout/local-time";
import { Reveal } from "@/components/ui/reveal";
import { StatusDot } from "@/components/ui/status-dot";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard?.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const links = [
    { label: "GitHub", href: profile.socials.github, meta: `@${profile.handle}` },
    { label: "X / Twitter", href: profile.socials.x, meta: "@aziz_codes" },
    { label: "Email", href: `mailto:${profile.email}`, meta: profile.email },
    { label: "Resume", href: profile.resume, meta: "PDF · download" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-24 md:py-36">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_100%,black,transparent)]"
      />
      <div className="container-page relative">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-xs tracking-wider text-muted-foreground uppercase">
            <span className="text-signal">§06</span>
            <span className="h-px w-6 bg-border-strong" />
            <span>Contact</span>
          </div>
          <h2 className="mt-8 font-serif text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] tracking-[-0.02em]">
            Have something
            <br />
            <span className="text-muted-foreground italic">worth shipping?</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7" delay={0.1}>
            <button
              type="button"
              onClick={copy}
              className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-border-strong md:p-7"
            >
              <span className="min-w-0">
                <span className="block font-mono text-[11px] tracking-wider text-subtle-foreground uppercase">
                  {copied ? "Copied to clipboard" : "Click to copy"}
                </span>
                <span className="mt-2 block truncate text-xl font-medium tracking-tight md:text-3xl">{profile.email}</span>
              </span>
              <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? "check" : "copy"}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  </motion.span>
                </AnimatePresence>
              </span>
            </button>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <StatusDot /> Open to full-time & freelance
              </span>
              <span>
                {profile.location} · <LocalTime />
              </span>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.18}>
            <ul className="border-t border-border">
              {links.map((l) => (
                <li key={l.label} className="border-b border-border">
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") || l.href.endsWith(".pdf") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span className="text-lg">{l.label}</span>
                    <span className="flex min-w-0 items-center gap-3 font-mono text-xs text-muted-foreground">
                      <span className="truncate">{l.meta}</span>
                      <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
