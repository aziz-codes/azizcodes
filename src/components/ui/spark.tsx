import { cn } from "@/lib/utils";

/** The "Ask Aziz" mark — an eight-ray spark that spins while thinking. */
export function Spark({ className, spinning = false }: { className?: string; spinning?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn("size-5 text-signal", spinning && "animate-spin-slow", className)}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <rect
          key={i}
          x="11"
          y="1.5"
          width="2"
          height={i % 2 ? 7 : 9.5}
          rx="1"
          fill="currentColor"
          transform={`rotate(${i * 45} 12 12)`}
        />
      ))}
    </svg>
  );
}
