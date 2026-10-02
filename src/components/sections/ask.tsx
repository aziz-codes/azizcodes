"use client";

import { chatEntries } from "@/content/chat";
import { useChat } from "@/components/providers/chat-provider";
import { ChatComposer } from "@/components/chat/chat-composer";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Spark } from "@/components/ui/spark";

/** Inline entry point to the assistant — asking here opens the chat panel. */
export function AskSection() {
  const { ask, isBusy } = useChat();

  return (
    <Section
      id="ask"
      index="05"
      label="Ask"
      title={
        <>
          Skip the scrolling. <span className="text-muted-foreground italic">Just ask.</span>
        </>
      }
      description="A small assistant that knows my work, stack and availability. It answers from a fixed knowledge base for now — a live model is next."
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/40 p-5 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-signal/10 blur-3xl"
          />
          <div className="relative flex items-center gap-3">
            <Spark className="size-6" />
            <p className="font-serif text-2xl md:text-3xl">How can I help?</p>
          </div>

          <ChatComposer
            className="relative mt-6"
            onSubmit={ask}
            busy={isBusy}
            placeholder="e.g. What has Aziz built with WebSockets?"
          />

          <div className="relative mt-4 flex flex-wrap gap-2">
            {chatEntries.map((entry) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => ask(entry.prompt)}
                className="rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
              >
                {entry.prompt}
              </button>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
