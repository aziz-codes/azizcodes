import Image from "next/image";
import { ArrowUpRight, Terminal } from "lucide-react";
import { bench, labProducts } from "@/content/lab";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { StatusDot } from "@/components/ui/status-dot";
import type { LabProduct } from "@/types";

/** Developer tools built and shipped on the side: two featured products, then what's on the bench. */
export function Lab() {
  return (
    <Section
      id="lab"
      index="02"
      label="Lab"
      title={
        <>
          Tools for developers, <span className="text-muted-foreground italic">shipped on the side.</span>
        </>
      }
      description="Things I build for my own workflow and then put out for everyone, published to the VS Code Marketplace and npm, open source on GitHub."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {labProducts.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08} className="h-full">
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <div className="flex items-baseline justify-between">
          <h3 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">On the bench</h3>
          <span className="flex items-center gap-2 font-mono text-xs text-subtle-foreground">
            <StatusDot tone="signal" /> in progress
          </span>
        </div>
        <ul className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {bench.map((b) => (
            <li key={b.name} className="bg-background p-5">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-serif text-2xl tracking-tight">{b.name}</p>
                <span className="font-mono text-[11px] text-subtle-foreground uppercase">{b.kind}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.summary}</p>
              <p className="mt-4 font-mono text-[11px] text-subtle-foreground">{b.stack.join(" · ")}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

function ProductCard({ product: p }: { product: LabProduct }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-border-strong">
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {p.icon ? (
              <Image src={p.icon} alt="" width={40} height={40} className="size-10 rounded-[10px]" />
            ) : (
              <span className="flex size-10 items-center justify-center rounded-[10px] bg-foreground font-mono text-sm text-background">
                {p.name.slice(0, 2)}
              </span>
            )}
            <div>
              <h3 className="font-serif text-3xl leading-none tracking-tight">{p.name}</h3>
              <p className="mt-1.5 font-mono text-[11px] text-subtle-foreground uppercase">{p.kind}</p>
            </div>
          </div>
          <span className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground uppercase">
            <StatusDot tone={p.status === "live" ? "live" : "signal"} />
            {p.status === "live" ? "Live" : "Building"}
          </span>
        </div>

        <p className="mt-6 text-lg leading-snug text-balance">{p.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">{p.summary}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.highlights.map((h) => (
            <Badge key={h}>{h}</Badge>
          ))}
        </div>

        {p.install && (
          <div className="mt-6 flex items-center gap-2.5 rounded-lg border border-border bg-background px-3.5 py-2.5 font-mono text-xs">
            <Terminal className="size-3.5 shrink-0 text-signal" />
            <code className="min-w-0 [overflow-wrap:anywhere]">{p.install}</code>
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-signal"
            >
              {l.label} <ArrowUpRight className="size-3" />
            </a>
          ))}
          <span className="ml-auto hidden font-mono text-[11px] text-subtle-foreground sm:inline">
            {p.stack.join(" · ")}
          </span>
        </div>
      </div>

      {p.image && (
        <div className="relative h-56 overflow-hidden border-t border-border bg-muted md:h-64">
          <Image
            src={p.image.src}
            alt={p.image.alt}
            width={p.image.width}
            height={p.image.height}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            style={{ objectPosition: p.image.position ?? "center top" }}
          />
        </div>
      )}
    </article>
  );
}
