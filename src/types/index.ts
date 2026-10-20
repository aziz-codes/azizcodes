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

export type LabProduct = {
  name: string;
  kind: string;
  status: Extract<ProjectStatus, "live" | "in-development">;
  tagline: string;
  summary: string;
  highlights: string[];
  install?: string;
  stack: string[];
  links: { label: string; href: string }[];
  icon?: string;
  image?: { src: string; alt: string; width: number; height: number; position?: string };
};

export type BenchItem = {
  name: string;
  kind: string;
  summary: string;
  stack: string[];
};
