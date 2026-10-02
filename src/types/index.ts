export type ProjectStatus = "live" | "in-development" | "private";

export type ArchitectureNode = {
  label: string;
  detail: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  role: string;
  status: ProjectStatus;
  url?: string;
  repo?: string;
  summary: string;
  overview: string[];
  contributions: string[];
  features: string[];
  stack: string[];
  architecture?: ArchitectureNode[];
};

export type ArchiveProject = {
  name: string;
  type: string;
  stack: string[];
  url?: string;
};

export type Experience = {
  hash: string;
  ref?: string;
  company: string;
  location: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type StackGroup = {
  name: string;
  items: string[];
};

export type ChatEntry = {
  id: string;
  prompt: string;
  keywords: string[];
  answer: string;
};
