import type { ChatEntry } from "@/types";

/**
 * Static knowledge base for "Ask Aziz".
 * Each entry is matched by keyword overlap — swap `lib/chat-engine.ts`
 * for a real LLM call later and keep these as suggested prompts.
 */
export const chatEntries: ChatEntry[] = [
  {
    id: "who",
    prompt: "Who is Aziz?",
    keywords: ["who", "about", "yourself", "introduce", "aziz", "background", "summary", "tell me"],
    answer: `Aziz is a **full stack engineer** based in Lahore, Pakistan, with **4+ years** of experience building web and mobile products.

He works across the whole stack:

- **Frontend** — React, Next.js, TypeScript, Tailwind CSS, shadcn/ui
- **Backend** — Node.js, Express, MongoDB, plus FastAPI and PHP when needed
- **Mobile** — React Native with Expo and Expo Router
- **Real-time** — WebSockets, WebRTC and live dashboards

Right now he's building surveillance and real-time monitoring interfaces at **Swati Technologies**.`,
  },
  {
    id: "stack",
    prompt: "What's his tech stack?",
    keywords: ["stack", "tech", "technologies", "skills", "tools", "languages", "framework", "frameworks", "use", "know"],
    answer: `His daily driver is **TypeScript end to end**:

- **UI:** React, Next.js (App Router), Tailwind CSS, shadcn/ui, Motion
- **State:** React Query for server state, Zustand for client state
- **API:** Node.js + Express, REST, JWT with access/refresh tokens in HTTP-only cookies
- **Data:** MongoDB + Mongoose, Supabase, MySQL
- **Mobile:** React Native, Expo Router, NativeWind
- **Infra:** Linux, Nginx, Vercel, Hetzner, Cloudflare, systemd, Certbot

He also has deep WordPress & WooCommerce experience from earlier client work.`,
  },
  {
    id: "projects",
    prompt: "What has he built?",
    keywords: ["project", "projects", "built", "build", "work", "portfolio", "apps", "secureye", "scout", "swapii", "codebook", "mergetech", "shipped"],
    answer: `A few highlights:

- **SecurEye** — frontend for an AI surveillance platform: live vehicle, person & face detection streamed over WebSockets.
- **CodeBook** — a developer social platform with a Monaco code editor, discussions and GitHub OAuth.
- **Swapii** — a community marketplace to give away, exchange or sell items.
- **Bilal Travels** — a React Native bus-ticketing app with a Node/MongoDB API and per-trip seat inventory.
- **Prime Rebar USA** — order management where every order gets an automated real-time group chat.

Each one has a full case study in the [Work section](/#work), plus more in the "Also built" list, like **ScoutAI**, a World Cup 2026 predictions app with streamed AI match analysis.`,
  },
  {
    id: "mobile",
    prompt: "Does he build mobile apps?",
    keywords: ["mobile", "react native", "expo", "android", "ios", "app", "native", "bilal", "travels"],
    answer: `Yes. Aziz builds cross-platform apps with **React Native and Expo** — Expo Router for navigation, NativeWind for styling and React Native Reusables for UI primitives.

His current mobile project is **Bilal Travels**, a complete bus-ticketing product:

- Route search, schedules and Executive / Business / Sleeper bus classes
- A live seat map backed by a **Node.js + Express + MongoDB** API
- Seat inventory scoped per trip, route and date

So he can own a mobile feature from the screen all the way down to the database.`,
  },
  {
    id: "realtime",
    prompt: "How does he handle real-time features?",
    keywords: ["realtime", "real-time", "real time", "websocket", "websockets", "socket", "webrtc", "live", "chat", "peerjs"],
    answer: `Real-time is a recurring theme in his work:

- **SecurEye** — detection events streamed to monitoring dashboards over WebSockets
- **Prime Rebar USA** — automated per-order group chats with live updates
- **Meeting app** — peer-to-peer video calls with WebRTC, PeerJS and Socket.IO

On the client he pairs **WebSockets** for live events with **React Query** for server state and **Zustand** for UI state, keeping dashboards responsive even under heavy data volume.`,
  },
  {
    id: "hire",
    prompt: "Is he available for work?",
    keywords: ["hire", "available", "availability", "freelance", "contact", "email", "reach", "job", "open", "opportunity", "work together", "collaborate"],
    answer: `**Yes — Aziz is open to new opportunities**, both full-time roles and freelance projects in web or mobile.

The fastest ways to reach him:

- Use the [contact section](/#contact) on this page
- Find him on [GitHub](https://github.com/aziz-codes) or [X](https://x.com/aziz_codes)

He's based in Lahore (PKT, UTC+5) and comfortable working remotely with teams across time zones.`,
  },
];

export const suggestedPrompts = chatEntries.slice(0, 4).map((e) => e.prompt);

export const fallbackAnswer = `I'm a preview assistant with a fixed set of answers for now, so I couldn't match that one.

Try asking about:

- **Who Aziz is** and his background
- His **tech stack** and tools
- **Projects** he's built, or **mobile** work
- Whether he's **available for work**

Or reach out directly through the [contact section](/#contact).`;

export const greetingAnswer = `Hey! 👋 I'm Aziz's assistant. I can tell you about his experience, projects, tech stack, or how to work with him. What would you like to know?`;
