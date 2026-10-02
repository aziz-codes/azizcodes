import { profile } from "@/content/profile";

export type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
};

export type GitHubSnapshot = {
  publicRepos: number;
  repos: Repo[];
};

const API = "https://api.github.com";
const REVALIDATE = 60 * 60 * 12;

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

/** Recent original repos, refreshed twice a day. Returns null if GitHub is unreachable. */
export async function getGitHubSnapshot(limit = 6): Promise<GitHubSnapshot | null> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`${API}/users/${profile.handle}`, { headers, next: { revalidate: REVALIDATE } }),
      fetch(`${API}/users/${profile.handle}/repos?per_page=100&sort=pushed`, {
        headers,
        next: { revalidate: REVALIDATE },
      }),
    ]);
    if (!userRes.ok || !reposRes.ok) return null;

    const user: { public_repos: number } = await userRes.json();
    const repos: Repo[] = await reposRes.json();

    return {
      publicRepos: user.public_repos,
      repos: repos
        .filter((r) => !r.fork && r.description && r.name !== profile.handle)
        .slice(0, limit),
    };
  } catch {
    return null;
  }
}
