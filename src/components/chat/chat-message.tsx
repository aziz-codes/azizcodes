"use client";

import { motion } from "motion/react";
import type { ChatMessage as Message } from "@/components/providers/chat-provider";
import { Spark } from "@/components/ui/spark";
import { Markdown } from "./markdown";

export function ChatMessage({ message }: { message: Message }) {
  if (message.role === "user") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="flex justify-end"
      >
        <div className="max-w-[85%] rounded-2xl rounded-br-md bg-muted px-4 py-2.5 text-[15px] leading-relaxed whitespace-pre-wrap">
          {message.content}
        </div>
      </motion.div>
    );
  }

  const thinking = message.status === "thinking";
  const streaming = message.status === "streaming";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="flex gap-3"
    >
      <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-card">
        <Spark className="size-4" spinning={thinking || streaming} />
      </div>
      <div className="min-w-0 flex-1 pt-0.5 text-[15px] leading-relaxed text-muted-foreground">
        {thinking ? (
          <span className="text-shimmer font-medium">Thinking…</span>
        ) : (
          <div aria-live="polite">
            <Markdown text={message.content} />
            {streaming && (
              <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-blink rounded-[1px] bg-signal" />
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
