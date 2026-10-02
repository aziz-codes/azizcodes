import { profile } from "@/content/profile";
import { LocalTime } from "./local-time";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-6 py-10 font-mono text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span>
            © {year} {profile.name}
          </span>
          <span className="hidden md:inline">·</span>
          <span>
            {profile.location} — <LocalTime />
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span>Next.js 16 · Tailwind v4 · Motion</span>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub ↗
          </a>
          <a href={profile.socials.x} target="_blank" rel="noreferrer" className="hover:text-foreground">
            X ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
