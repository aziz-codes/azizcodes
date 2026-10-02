import { ArrowUpRight, Star } from "lucide-react";
import { profile } from "@/content/profile";
import { getGitHubSnapshot } from "@/lib/github";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { timeAgo } from "@/lib/utils";

const languageColor: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  CSS: "#663399",
  HTML: "#e34c26",
};

/** Latest public repositories, fetched from GitHub at build time and refreshed via ISR. */
export async function OpenSource() {
  const snapshot = await getGitHubSnapshot(6);
  if (!snapshot || snapshot.repos.length === 0) return null;

  return (
    <Section
      id="open-source"
      index="04"
      label="Open source"
      title={
        <>
          Building in <span className="text-muted-foreground italic">public.</span>
        </>
      }
      description={
        <>
          {snapshot.publicRepos} public repositories and counting — experiments, starters and full apps. Recently pushed:
        </>
      }
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {snapshot.repos.map((repo, i) => (
          <Reveal key={repo.name} delay={i * 0.05} className="bg-background">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col p-5 transition-colors hover:bg-card"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="truncate font-mono text-sm">
                  <span className="text-subtle-foreground">{profile.handle}/</span>
                  {repo.name}
                </p>
                <ArrowUpRight className="size-4 shrink-0 text-subtle-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
              </div>
              <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {repo.description}
              </p>
              <div className="mt-5 flex items-center gap-4 font-mono text-[11px] text-subtle-foreground">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span
                      className="size-2 rounded-full"
                      style={{ background: languageColor[repo.language] ?? "var(--muted-foreground)" }}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-1">
                    <Star className="size-3" /> {repo.stargazers_count}
                  </span>
                )}
                <span className="ml-auto">{timeAgo(repo.pushed_at)}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-6">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground"
        >
          github.com/{profile.handle} <ArrowUpRight className="size-3.5" />
        </a>
      </Reveal>
    </Section>
  );
}
