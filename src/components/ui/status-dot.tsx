import { cn } from "@/lib/utils";

export function StatusDot({ className, tone = "live" }: { className?: string; tone?: "live" | "signal" | "muted" }) {
  const color = { live: "bg-live", signal: "bg-signal", muted: "bg-subtle-foreground" }[tone];
  return (
    <span className={cn("relative inline-flex size-2", className)} aria-hidden>
      {tone !== "muted" && <span className={cn("absolute inset-0 animate-pulse-ring rounded-full", color)} />}
      <span className={cn("relative inline-flex size-2 rounded-full", color)} />
    </span>
  );
}
