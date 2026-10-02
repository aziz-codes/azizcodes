import { stack } from "@/content/experience";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

/** Skills rendered like `npm ls` — one dependency tree per layer. */
export function StackSection() {
  const total = stack.reduce((n, g) => n + g.items.length, 0);

  return (
    <Section
      id="stack"
      index="03"
      label="Stack"
      title={
        <>
          The toolbox, <span className="text-muted-foreground italic">resolved.</span>
        </>
      }
      description="TypeScript end to end. React and Next.js on the client, Node.js on the server, React Native on device — and enough Linux to put it all in production."
    >
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3 font-mono text-xs text-muted-foreground">
            <span className="flex gap-1.5" aria-hidden>
              <span className="size-2.5 rounded-full bg-border-strong" />
              <span className="size-2.5 rounded-full bg-border-strong" />
              <span className="size-2.5 rounded-full bg-border-strong" />
            </span>
            <span className="ml-2">
              <span className="text-signal">~</span> npm ls --depth=1
            </span>
          </div>

          <div className="p-5 font-mono text-[13px] md:p-7">
            <p>
              aziz@<span className="text-signal">4.0.0</span>{" "}
              <span className="text-subtle-foreground">/lahore/pk</span>
            </p>
            <div className="mt-4 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {stack.map((group, gi) => (
                <div key={group.name}>
                  <p className="text-foreground">
                    <span className="whitespace-pre text-subtle-foreground">{gi === stack.length - 1 ? "└─┬ " : "├─┬ "}</span>
                    {group.name}
                    <span className="text-subtle-foreground">@{group.items.length}</span>
                  </p>
                  <ul>
                    {group.items.map((item, i) => (
                      <li
                        key={item}
                        className="group flex cursor-default text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <span className="whitespace-pre text-subtle-foreground select-none">
                          {gi === stack.length - 1 ? "  " : "│ "}
                          {i === group.items.length - 1 ? "└── " : "├── "}
                        </span>
                        <span className="truncate">{item}</span>
                        <span className="ml-2 text-signal opacity-0 transition-opacity group-hover:opacity-100">
                          ✓
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-7 text-subtle-foreground">
              {total} packages · <span className="text-live">0 vulnerabilities</span> · always learning
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
