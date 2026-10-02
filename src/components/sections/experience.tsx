import { experience } from "@/content/experience";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

/** Career history rendered as a `git log --graph`. */
export function ExperienceSection() {
  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      title={
        <>
          <span className="font-mono text-[0.55em] tracking-normal text-muted-foreground">$ git log</span>{" "}
          <span className="italic">--career</span>
        </>
      }
      description="Frontend roots, full-stack ownership. Most recent commit first."
    >
      <ol className="relative">
        {experience.map((job, i) => {
          const isHead = i === 0;
          const isLast = i === experience.length - 1;
          return (
            <li key={job.hash} className="relative grid grid-cols-[1.5rem_1fr] gap-x-5 md:gap-x-8">
              {/* graph rail */}
              <div className="relative flex justify-center">
                {!isLast && <span className="absolute top-3 bottom-0 w-px bg-border-strong" />}
                <span
                  className={
                    isHead
                      ? "relative mt-1.5 size-3.5 rounded-full border-2 border-signal bg-background ring-4 ring-signal-soft"
                      : "relative mt-1.5 size-3.5 rounded-full border-2 border-border-strong bg-background"
                  }
                />
              </div>

              <Reveal delay={i * 0.06} className={isLast ? "pb-0" : "pb-14"}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
                  <span className="text-signal">{job.hash}</span>
                  {job.ref && (
                    <span className="rounded border border-border px-1.5 py-px text-muted-foreground">
                      {job.ref}
                    </span>
                  )}
                  <span className="text-subtle-foreground">{job.period}</span>
                </div>

                <h3 className="mt-3 text-xl font-medium tracking-tight md:text-2xl">
                  {job.role} <span className="text-muted-foreground">@ {job.company}</span>
                </h3>
                <p className="mt-1 font-mono text-xs text-subtle-foreground">{job.location}</p>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{job.summary}</p>

                {job.highlights.length > 0 && (
                  <ul className="mt-5 grid max-w-3xl gap-2 font-mono text-[13px] text-muted-foreground">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="text-live select-none">+</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {job.stack.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {job.stack.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                )}
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
