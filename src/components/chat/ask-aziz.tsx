"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { RotateCcw, X } from "lucide-react";
import { profile } from "@/content/profile";
import { suggestedPrompts } from "@/content/chat";
import { useChat } from "@/components/providers/chat-provider";
import { Kbd } from "@/components/ui/kbd";
import { Spark } from "@/components/ui/spark";
import { useHotkey } from "@/hooks/use-hotkey";
import { ChatComposer } from "./chat-composer";
import { ChatMessage } from "./chat-message";

/** Floating launcher + chat panel. Full-screen sheet on mobile, docked card on desktop. */
export function AskAziz() {
  const { isOpen, close, toggle, messages, isBusy, ask, stop, reset } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useHotkey("j", toggle);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKeyDown);
    const id = setTimeout(() => inputRef.current?.focus(), 250);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      clearTimeout(id);
    };
  }, [isOpen, close]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            type="button"
            onClick={toggle}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="group fixed right-4 bottom-4 z-40 flex h-12 items-center gap-2.5 rounded-full border border-border bg-card/90 pr-2.5 pl-3.5 shadow-soft backdrop-blur-xl transition-colors hover:border-border-strong sm:right-6 sm:bottom-6"
            aria-label="Open Ask Aziz chat"
          >
            <Spark className="size-5 transition-transform duration-700 group-hover:rotate-180" />
            <span className="text-sm font-medium">Ask Aziz</span>
            <Kbd className="hidden sm:inline-flex">⌘J</Kbd>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-label="Ask Aziz"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-background sm:inset-auto sm:right-6 sm:bottom-6 sm:h-[min(680px,calc(100dvh-3rem))] sm:w-[420px] sm:rounded-3xl sm:border sm:border-border sm:shadow-soft"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <div className="relative">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={36}
                  height={36}
                  className="size-9 rounded-full border border-border object-cover"
                />
                <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background bg-live" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Ask Aziz</p>
                <p className="truncate font-mono text-[11px] text-subtle-foreground">Answers from his profile · preview</p>
              </div>
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={reset}
                  aria-label="New chat"
                  className="flex size-8 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <RotateCcw className="size-4" />
                </button>
              )}
              <button
                type="button"
                onClick={close}
                aria-label="Close chat"
                className="flex size-8 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Thread */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain px-4 py-6">
              {messages.length === 0 ? (
                <EmptyState onPick={ask} />
              ) : (
                <div className="space-y-6">
                  {messages.map((m) => (
                    <ChatMessage key={m.id} message={m} />
                  ))}
                </div>
              )}
            </div>

            {/* Composer */}
            <div className="px-3 pb-3 sm:px-4 sm:pb-4">
              <ChatComposer ref={inputRef} onSubmit={ask} onStop={stop} busy={isBusy} />
              <p className="mt-2 text-center font-mono text-[10px] text-subtle-foreground">
                Pre-written answers for now — a live model is coming soon.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function EmptyState({ onPick }: { onPick: (q: string) => void }) {
  return (
    <div className="flex h-full flex-col justify-end">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <Spark className="size-8" />
        <h3 className="mt-5 font-serif text-[2rem] leading-tight">
          Hey there. <span className="text-muted-foreground italic">What would you like to know about Aziz?</span>
        </h3>
      </motion.div>
      <div className="mt-8 grid gap-2">
        {suggestedPrompts.map((q, i) => (
          <motion.button
            key={q}
            type="button"
            onClick={() => onPick(q)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 + i * 0.06, duration: 0.35 }}
            className="group flex items-center justify-between rounded-xl border border-border px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:border-border-strong hover:bg-muted hover:text-foreground"
          >
            {q}
            <span className="font-mono text-xs text-subtle-foreground transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
