import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getAdjacentProjects, getProject, projects } from "@/content/projects";
import { ArchitectureFlow } from "@/components/sections/architecture-flow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { StatusDot } from "@/components/ui/status-dot";
import { hostname, pad } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Case study`,
    description: project.summary,
    openGraph: { title: `${project.name} — Case study`, description: project.summary },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const index = projects.indexOf(project) + 1;

  const meta = [
    { label: "Role", value: project.role },
    { label: "Category", value: project.category },
    {
      label: "Status",
      value: (
        <span className="flex items-center gap-2">
          <StatusDot tone={project.status === "live" ? "live" : "signal"} />
          {project.status === "live" ? "Live in production" : project.status === "in-development" ? "In development" : "Private"}
        </span>
      ),
    },
    {
      label: "Links",
      value: (
        <span className="flex flex-col gap-1">
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-signal">
              {hostname(project.url)} <ArrowUpRight className="size-3.5" />
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-signal">
              Source <ArrowUpRight className="size-3.5" />
            </a>
          )}
          {!project.url && !project.repo && <span className="text-subtle-foreground">Private</span>}
        </span>
      ),
    },
  ];

  return (
    <article className="pt-28 md:pt-36">
      <div className="container-page">
        <Reveal>
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            ~/work/<span className="text-foreground">{project.slug}</span>
          </Link>
        </Reveal>

        {/* Title block */}
        <header className="mt-10 grid gap-10 border-b border-border pb-14 md:grid-cols-12 md:pb-20">
          <Reveal className="md:col-span-8">
            <p className="font-mono text-xs tracking-wider text-signal uppercase">
              Case file {pad(index)} / {pad(projects.length)}
            </p>
            <h1 className="mt-4 font-serif text-[clamp(3rem,9vw,7.5rem)] leading-[0.92] tracking-[-0.02em]">
              {project.name}
            </h1>
            <p className="mt-6 max-w-2xl font-serif text-2xl leading-snug text-muted-foreground italic md:text-3xl">
              {project.tagline}
            </p>
            {project.url && (
              <Button asChild className="mt-8">
                <a href={project.url} target="_blank" rel="noreferrer">
                  Visit {hostname(project.url)} <ArrowUpRight />
                </a>
              </Button>
            )}
          </Reveal>

          <Reveal className="md:col-span-4" delay={0.1}>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-1">
              {meta.map((m) => (
                <div key={m.label} className="border-t border-border pt-3">
                  <dt className="font-mono text-[11px] tracking-wider text-subtle-foreground uppercase">{m.label}</dt>
                  <dd className="mt-1.5 text-sm">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </header>

        {/* Body */}
        <div className="grid gap-16 py-16 md:grid-cols-12 md:gap-8 md:py-24">
          <aside className="md:col-span-3">
            <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase md:sticky md:top-24">
              <span className="text-signal">§</span> Overview
            </p>
          </aside>
          <div className="space-y-20 md:col-span-9">
            <Reveal className="space-y-5 text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
              {project.overview.map((para, i) => (
                <p key={i} className={i === 0 ? "text-foreground" : undefined}>
                  {para}
                </p>
              ))}
            </Reveal>

            {project.architecture && (
              <Reveal>
                <Heading>Architecture</Heading>
                <ArchitectureFlow nodes={project.architecture} />
              </Reveal>
            )}

            <Reveal>
              <Heading>What I did</Heading>
              <ol className="divide-y divide-border border-y border-border">
                {project.contributions.map((c, i) => (
                  <li key={c} className="grid grid-cols-[2.5rem_1fr] gap-2 py-4">
                    <span className="font-mono text-xs leading-7 text-subtle-foreground">{pad(i + 1)}</span>
                    <span className="leading-7">{c}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal>
              <Heading>Key features</Heading>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
                {project.features.map((f) => (
                  <div key={f} className="bg-background px-5 py-6">
                    <span className="block font-mono text-[11px] text-signal">◆</span>
                    <span className="mt-3 block font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <Heading>Stack</Heading>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <Badge key={s} className="px-3 py-1 text-xs">
                    {s}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Pager */}
        <nav className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2" aria-label="More case studies">
          {prev ? (
            <PagerLink href={`/work/${prev.slug}`} label="Previous" name={prev.name} direction="prev" />
          ) : (
            <PagerLink href="/#work" label="Back to" name="All work" direction="prev" />
          )}
          <PagerLink href={`/work/${next.slug}`} label="Next case" name={next.name} direction="next" />
        </nav>
        <div className="h-24" />
      </div>
    </article>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-6 font-mono text-xs tracking-wider text-muted-foreground uppercase">{children}</h2>;
}

function PagerLink({ href, label, name, direction }: { href: string; label: string; name: string; direction: "prev" | "next" }) {
  const next = direction === "next";
  return (
    <Link
      href={href}
      className={`group flex flex-col gap-2 bg-background p-6 transition-colors hover:bg-card md:p-8 ${next ? "items-end text-right" : ""}`}
    >
      <span className="flex items-center gap-2 font-mono text-[11px] tracking-wider text-subtle-foreground uppercase">
        {!next && <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />}
        {label}
        {next && <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />}
      </span>
      <span className="font-serif text-3xl md:text-4xl">{name}</span>
    </Link>
  );
}
