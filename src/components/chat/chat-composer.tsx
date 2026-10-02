"use client";

import { useState } from "react";
import { ArrowUp, Square } from "lucide-react";
import { cn } from "@/lib/utils";

type ChatComposerProps = {
  ref?: React.Ref<HTMLTextAreaElement>;
  onSubmit: (value: string) => void;
  onStop?: () => void;
  busy?: boolean;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
};

/** Auto-growing textarea with a round send/stop button. Enter sends, Shift+Enter adds a line. */
export function ChatComposer({
  ref,
  onSubmit,
  onStop,
  busy = false,
  placeholder = "Ask anything about Aziz…",
  className,
  autoFocus,
}: ChatComposerProps) {
  const [value, setValue] = useState("");

  const submit = () => {
    if (busy || !value.trim()) return;
    onSubmit(value);
    setValue("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className={cn(
        "group/composer relative flex items-end gap-2 rounded-2xl border border-border bg-card p-2 pl-4 shadow-soft transition-colors focus-within:border-border-strong",
        className,
      )}
    >
      <textarea
        ref={ref}
        rows={1}
        value={value}
        autoFocus={autoFocus}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
            e.preventDefault();
            submit();
          }
        }}
        placeholder={placeholder}
        aria-label="Message"
        className="field-sizing-content max-h-36 min-h-9 flex-1 resize-none bg-transparent py-2 text-[15px] leading-snug outline-none placeholder:text-subtle-foreground"
      />
      {busy ? (
        <button
          type="button"
          onClick={onStop}
          aria-label="Stop generating"
          className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-foreground text-background transition-transform active:scale-95"
        >
          <Square className="size-3 fill-current" />
        </button>
      ) : (
        <button
          type="submit"
          aria-label="Send message"
          disabled={!value.trim()}
          className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-signal text-signal-foreground transition-all active:scale-95 disabled:bg-muted disabled:text-subtle-foreground"
        >
          <ArrowUp className="size-4" strokeWidth={2.5} />
        </button>
      )}
    </form>
  );
}
