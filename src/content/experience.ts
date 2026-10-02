import type { Experience, StackGroup } from "@/types";

export const experience: Experience[] = [
  {
    hash: "7c1e2a4",
    ref: "HEAD → main",
    company: "Swati Technologies",
    location: "Pakistan",
    role: "Full Stack Web Engineer",
    period: "Present",
    summary:
      "Started on frontend engineering and grew into full-stack ownership — real-time dashboards, APIs, auth and production deployments.",
    highlights: [
      "Build surveillance & monitoring interfaces with live WebSocket data.",
      "Develop Node.js / Express services backed by MongoDB & Mongoose.",
      "Implement JWT auth with access/refresh tokens and HTTP-only cookies.",
      "Manage server & client state with React Query and Zustand.",
      "Ship and maintain production deployments on Linux.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "WebSockets"],
  },
  {
    hash: "3b9f0d1",
    company: "Capilin Pvt Ltd",
    location: "Maldives · Remote",
    role: "React & WordPress Developer",
    period: "~1.5 years",
    summary:
      "Remote role building React applications alongside custom WordPress and WooCommerce sites.",
    highlights: [
      "Built React apps and reusable component libraries.",
      "Created custom WordPress themes and extended plugins.",
      "Developed and customised WooCommerce e-commerce sites.",
      "Integrated third-party APIs and services.",
    ],
    stack: ["React", "Tailwind CSS", "MUI", "WordPress", "WooCommerce", "PHP"],
  },
  {
    hash: "1a0c5e2",
    ref: "init",
    company: "FUUAST",
    location: "Islamabad, PK",
    role: "BSc Computer Science",
    period: "2017 — 2021",
    summary: "Foundations in algorithms, data structures, databases and software engineering.",
    highlights: [],
    stack: [],
  },
];

export const stack: StackGroup[] = [
  {
    name: "frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React Query", "Zustand", "MUI", "Ant Design", "Vite"],
  },
  {
    name: "backend",
    items: ["Node.js", "Express", "FastAPI", "PHP", "REST APIs", "JWT · refresh tokens", "HTTP-only cookies"],
  },
  {
    name: "mobile",
    items: ["React Native", "Expo", "Expo Router", "NativeWind", "RN Reusables", "Android"],
  },
  {
    name: "data",
    items: ["MongoDB", "Mongoose", "Supabase", "MySQL", "SQL"],
  },
  {
    name: "realtime",
    items: ["WebSockets", "Socket.IO", "WebRTC", "PeerJS", "Live dashboards"],
  },
  {
    name: "infra",
    items: ["Linux / Ubuntu", "Nginx", "Vercel", "Hetzner", "Cloudflare", "systemd", "Gunicorn", "Certbot · SSL"],
  },
];
