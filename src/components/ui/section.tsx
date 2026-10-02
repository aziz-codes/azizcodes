import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  index: string;
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

/**
 * Spec-document section: a sticky "§ index / label" gutter on the left,
 * content on the right. Every top-level section uses this frame.
 */
export function Section({ id, index, label, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("relative border-t border-border py-20 md:py-28", className)}>
      <div className="container-page grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-3">
          <div className="flex items-center gap-3 font-mono text-xs tracking-wider text-muted-foreground uppercase md:sticky md:top-24">
            <span className="text-signal">§{index}</span>
            <span className="h-px w-6 bg-border-strong" />
            <span>{label}</span>
          </div>
        </div>

        <div className="md:col-span-9">
          <Reveal>
            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl">{title}</h2>
            {description && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
                {description}
              </p>
            )}
          </Reveal>
          <div className="mt-12 md:mt-16">{children}</div>
        </div>
      </div>
    </section>
  );
}
