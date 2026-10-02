"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { answerFor, tokenize } from "@/lib/chat-engine";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  status?: "thinking" | "streaming" | "done";
};

type ChatContextValue = {
  isOpen: boolean;
  messages: ChatMessage[];
  isBusy: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  ask: (question: string) => void;
  stop: () => void;
  reset: () => void;
};

const ChatContext = createContext<ChatContextValue | null>(null);

const uid = () => Math.random().toString(36).slice(2, 10);
const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isBusy, setIsBusy] = useState(false);
  const runId = useRef(0);

  const patch = useCallback((id: string, update: Partial<ChatMessage>) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, ...update } : m)));
  }, []);

  const stop = useCallback(() => {
    runId.current++;
    setIsBusy(false);
    setMessages((prev) => prev.map((m) => (m.status && m.status !== "done" ? { ...m, status: "done" } : m)));
  }, []);

  const ask = useCallback(
    async (question: string) => {
      const text = question.trim();
      if (!text) return;

      const run = ++runId.current;
      const assistantId = uid();
      setIsOpen(true);
      setIsBusy(true);
      setMessages((prev) => [
        ...prev.map((m) => (m.status && m.status !== "done" ? { ...m, status: "done" as const } : m)),
        { id: uid(), role: "user", content: text },
        { id: assistantId, role: "assistant", content: "", status: "thinking" },
      ]);

      // Simulated latency + token streaming, so it feels like the real thing.
      await wait(650 + Math.random() * 500);
      if (run !== runId.current) return;

      const tokens = tokenize(answerFor(text));
      let content = "";
      patch(assistantId, { status: "streaming" });

      for (let i = 0; i < tokens.length; i += 2) {
        if (run !== runId.current) return;
        content += tokens.slice(i, i + 2).join("");
        patch(assistantId, { content });
        await wait(16 + Math.random() * 28);
      }

      patch(assistantId, { status: "done" });
      setIsBusy(false);
    },
    [patch],
  );

  const reset = useCallback(() => {
    runId.current++;
    setIsBusy(false);
    setMessages([]);
  }, []);

  const value = useMemo<ChatContextValue>(
    () => ({
      isOpen,
      messages,
      isBusy,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((v) => !v),
      ask,
      stop,
      reset,
    }),
    [isOpen, messages, isBusy, ask, stop, reset],
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within <ChatProvider>");
  return ctx;
}
