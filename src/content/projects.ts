import type { ArchiveProject, Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "secureye",
    name: "SecurEye",
    tagline: "AI-powered surveillance that sees more than security.",
    category: "AI · Surveillance",
    role: "Frontend Engineer",
    status: "live",
    url: "https://www.secureye.ai",
    summary:
      "Monitoring dashboards for an AI platform that turns existing cameras into a security system — live vehicle, person and face detection with instant alerts.",
    overview: [
      "SecurEye turns the cameras an organisation already owns into an AI security system: live detection of vehicles, people and faces, license-plate recognition, and instant alerts when something doesn't match.",
      "I own the frontend — the interfaces operators live in all day. That means dashboards that stay responsive while detection events stream in, and views designed to make large volumes of monitoring data scannable at a glance.",
    ],
    contributions: [
      "Built the surveillance & monitoring interfaces in React, from the dashboard shell to detection detail views.",
      "Designed UIs for vehicle, person and face-detection data that remain readable under heavy event volume.",
      "Wired real-time updates over WebSockets so detections and alerts appear the moment they happen.",
      "Split state cleanly: React Query for server state and caching, Zustand for client/UI state.",
      "Created a reusable component layer to keep a fast-moving product consistent.",
      "Handled time-zoned event timelines and filters with dayjs.",
    ],
    features: [
      "Live detection feed",
      "Plate recognition",
      "Face matching",
      "Instant alerts",
      "Event search",
      "Monitoring dashboards",
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "React Query", "Zustand", "WebSockets", "Vite", "dayjs"],
    architecture: [
      { label: "Cameras", detail: "Existing CCTV / IP feeds" },
      { label: "AI backend", detail: "Python · detection & recognition" },
      { label: "Event stream", detail: "WebSockets · live detections" },
      { label: "Dashboard", detail: "React · React Query · Zustand" },
    ],
  },
  {
    slug: "codebook",
    name: "CodeBook",
    tagline: "A social platform built exclusively for developers.",
    category: "Community · Full stack",
    role: "Full Stack Engineer",
    status: "live",
    url: "https://codebook-phi.vercel.app",
    repo: "https://github.com/aziz-codes/codebook",
    summary:
      "Posts, threaded discussions, code snippets with a Monaco editor, bounties and developer profiles — Next.js on top of an Express & MongoDB API.",
    overview: [
      "CodeBook is where developers share code, discuss problems and collaborate. Snippets are first-class content, edited in the same Monaco editor that powers VS Code.",
      "The frontend is a Next.js app with React Query and Zustand; the backend is an Express REST API over MongoDB, with GitHub OAuth for sign-in.",
    ],
    contributions: [
      "Designed and built both the Next.js client and the Node.js / Express API.",
      "Integrated the Monaco editor for writing and sharing syntax-highlighted snippets.",
      "Built posts, threaded comments, likes, bookmarks, follows and bounties.",
      "Implemented GitHub OAuth and developer profiles with verification badges.",
    ],
    features: ["Code snippets", "Monaco editor", "Discussions", "Bounties", "Follow system", "GitHub OAuth"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React Query", "Zustand", "Node.js", "Express", "MongoDB"],
    architecture: [
      { label: "Client", detail: "Next.js · React Query · Zustand" },
      { label: "Auth", detail: "GitHub OAuth" },
      { label: "API", detail: "Node.js · Express REST" },
      { label: "Database", detail: "MongoDB · Mongoose" },
    ],
  },
  {
    slug: "swapii",
    name: "Swapii",
    tagline: "Give away, exchange or sell — bartering for the web.",
    category: "Marketplace",
    role: "Full Stack Engineer",
    status: "live",
    url: "https://swapii.vercel.app",
    repo: "https://github.com/aziz-codes/swapii",
    summary:
      "A community marketplace for swapping, selling and giving away items, with profiles, reviews and ratings.",
    overview: [
      "Swapii brings bartering into the digital age. People list items they no longer need and choose how they move on: give them away, trade them, or sell them.",
      "Trust is the product, so profiles, reviews and ratings are built in from day one. Auth runs on Clerk and data lives in Supabase.",
    ],
    contributions: [
      "Built the product end to end with Next.js, TypeScript and shadcn/ui.",
      "Integrated Clerk authentication and Supabase for data.",
      "Designed listing flows for selling, exchanging and free giveaways.",
      "Implemented reviews, ratings and user profiles.",
    ],
    features: ["Listings", "Exchange", "Giveaways", "Selling", "Reviews & ratings", "Profiles"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "Clerk"],
    architecture: [
      { label: "App", detail: "Next.js · shadcn/ui" },
      { label: "Auth", detail: "Clerk" },
      { label: "Database", detail: "Supabase · Postgres" },
    ],
  },
  {
    slug: "bilal-travels",
    name: "Bilal Travels",
    tagline: "Bus ticketing, from route search to a booked seat.",
    category: "Mobile · Full stack",
    role: "Full Stack & Mobile Engineer",
    status: "in-development",
    repo: "https://github.com/aziz-codes/bilal-travels-booking",
    summary:
      "A cross-platform bus ticketing app — React Native client and a Node.js / MongoDB API with per-trip seat inventory.",
    overview: [
      "Bilal Travels is a full-stack mobile product for discovering routes, browsing schedules and booking seats on Executive, Business and Sleeper buses.",
      "The interesting problem is inventory. Every trip — a specific bus, on a specific route, on a specific date — owns its own seat map and booking state, so Lahore → Islamabad on Bus A on the 12th is entirely independent of Bus B on the 13th.",
    ],
    contributions: [
      "Built the mobile app with Expo, Expo Router, NativeWind and React Native Reusables in TypeScript.",
      "Designed the REST API in Node.js & Express with Mongoose schemas for routes, trips, seats and bookings.",
      "Modelled date- and route-scoped seat inventory so availability is tracked per trip.",
      "Implemented booking status, ticket management, validation and admin functionality.",
    ],
    features: [
      "Route search",
      "Origin / destination picker",
      "Schedules by date",
      "Bus class selection",
      "Live seat map",
      "Ticket booking",
    ],
    stack: ["React Native", "Expo", "Expo Router", "NativeWind", "TypeScript", "Node.js", "Express", "MongoDB", "Mongoose"],
    architecture: [
      { label: "Mobile app", detail: "React Native · Expo Router" },
      { label: "REST API", detail: "Node.js · Express · validation" },
      { label: "ODM", detail: "Mongoose schemas & models" },
      { label: "Database", detail: "MongoDB · per-trip inventory" },
    ],
  },
  {
    slug: "primerebar",
    name: "Prime Rebar USA",
    tagline: "Order management with built-in real-time team chat.",
    category: "Business · Real-time",
    role: "Frontend Engineer",
    status: "live",
    url: "https://primerebarusa.com",
    summary:
      "An operations app where every order spins up an automated group chat, keeping customers and the team in sync in real time.",
    overview: [
      "Prime Rebar USA needed one place to manage orders and the conversations around them. Each order automatically gets a group chat, so the context of a job never gets lost in email threads.",
      "I built the dashboards and the real-time layer: live order updates and messaging over WebSockets, on a React frontend that mixes shadcn/ui and Ant Design.",
    ],
    contributions: [
      "Built responsive order-management dashboards in React and Tailwind CSS.",
      "Implemented the automated per-order group chat over WebSockets.",
      "Integrated the REST API and live updates across the app.",
      "Handled scheduling, timestamps and time zones with dayjs.",
    ],
    features: ["Order management", "Auto group chat", "Live updates", "Dashboards", "API integration"],
    stack: ["React", "Tailwind CSS", "shadcn/ui", "Ant Design", "WebSockets", "dayjs"],
    architecture: [
      { label: "Dashboard", detail: "React · shadcn/ui · Ant Design" },
      { label: "Realtime", detail: "WebSockets · group chat" },
      { label: "REST API", detail: "Orders · users · messages" },
    ],
  },
];

export const archive: ArchiveProject[] = [
  {
    name: "ScoutAI",
    type: "AI · World Cup 2026",
    stack: ["Next.js", "Claude API", "Supabase", "Resend"],
    url: "https://scout-ai-psi.vercel.app",
  },
  {
    name: "VS Code portfolio theme",
    type: "Theme · Frontend Crafts",
    stack: ["Next.js", "TypeScript", "shadcn/ui"],
    url: "https://aziz-dev.vercel.app",
  },
  {
    name: "WebRTC meeting app",
    type: "Real-time video",
    stack: ["React", "WebRTC", "PeerJS", "Socket.IO"],
    url: "https://github.com/aziz-codes/react-meeting-app",
  },
  {
    name: "icanread.mv",
    type: "E-commerce",
    stack: ["WordPress", "WooCommerce", "PHP"],
    url: "https://icanread.mv",
  },
  {
    name: "CurrentTick",
    type: "News platform",
    stack: ["PHP", "MySQL", "Tailwind CSS"],
    url: "https://currenttick.info",
  },
  {
    name: "Wiserbee",
    type: "E-learning",
    stack: ["React", "Responsive UI"],
  },
  {
    name: "Food delivery app",
    type: "Mobile",
    stack: ["React Native", "Expo"],
    url: "https://github.com/aziz-codes/food-delivery-app",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: projects[(index + 1) % projects.length],
  };
}
