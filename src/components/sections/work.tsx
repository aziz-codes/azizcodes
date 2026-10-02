import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { archive, projects } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { StatusDot } from "@/components/ui/status-dot";
import { hostname, pad } from "@/lib/utils";
import type { ProjectStatus } from "@/types";

const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  "in-development": "Building",
  private: "Private",
};

export function Work() {
  return (
    <Section
      id="work"
      index="01"
      label="Selected work"
      title={
        <>
          Case files from <span className="text-muted-foreground italic">production.</span>
        </>
      }
      description="Products I've designed, built and shipped — surveillance dashboards, real-time ops tools, marketplaces and mobile apps. Each one opens into a short case study."
    >
      <ol className="border-t border-border">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <Reveal delay={i * 0.04}>
              <Link
                href={`/work/${p.slug}`}
                className="group relative grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 border-b border-border py-7 md:grid-cols-[3rem_1.1fr_1fr_auto] md:py-9"
              >
                {/* hover wash */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 -right-4 -left-4 origin-bottom scale-y-0 rounded-xl bg-muted transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 md:-right-6 md:-left-6"
                />
                <span className="relative font-mono text-xs text-subtle-foreground">{pad(i + 1)}</span>

                <div className="relative min-w-0">
                  <h3 className="font-serif text-3xl leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-1 md:text-[2.75rem]">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground md:hidden">{p.tagline}</p>
                </div>

                <div className="relative hidden min-w-0 md:block">
                  <p className="text-[15px] leading-snug text-muted-foreground">{p.tagline}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                </div>

                <div className="relative flex flex-col items-end gap-3 self-center">
                  <span className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground uppercase">
                    <StatusDot tone={p.status === "live" ? "live" : "signal"} />
                    {statusLabel[p.status]}
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ol>

      {/* Archive */}
      <Reveal className="mt-20">
        <div className="flex items-baseline justify-between">
          <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">Also built</h3>
          <span className="font-mono text-xs text-subtle-foreground">{archive.length} entries</span>
        </div>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/60 font-mono text-[11px] tracking-wider text-subtle-foreground uppercase">
              <tr>
                <th className="px-4 py-3 font-normal">Project</th>
                <th className="hidden px-4 py-3 font-normal sm:table-cell">Type</th>
                <th className="hidden px-4 py-3 font-normal md:table-cell">Built with</th>
                <th className="px-4 py-3 text-right font-normal">Link</th>
              </tr>
            </thead>
            <tbody>
              {archive.map((a) => (
                <tr key={a.name} className="border-t border-border transition-colors hover:bg-muted/40">
                  <td className="px-4 py-3.5 font-medium">{a.name}</td>
                  <td className="hidden px-4 py-3.5 text-muted-foreground sm:table-cell">{a.type}</td>
                  <td className="hidden px-4 py-3.5 font-mono text-xs text-muted-foreground md:table-cell">
                    {a.stack.join(" · ")}
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    {a.url ? (
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-signal"
                      >
                        {hostname(a.url).replace("github.com", "github")}
                        <ArrowUpRight className="size-3" />
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-subtle-foreground">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
