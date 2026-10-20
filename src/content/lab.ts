import type { BenchItem, LabProduct } from "@/types";

/** Developer tools I build and ship on my own: shown in the "Lab" section. */
export const labProducts: LabProduct[] = [
  {
    name: "Kenning",
    kind: "VS Code extension",
    status: "live",
    tagline: "Understand the code your AI writes, while it writes it.",
    summary:
      "While Claude Code, Codex or Cursor works, Kenning turns every change into a short review card: what changed in plain English, risky edits flagged, and a 15-second question to check you really get it. Flag something and the agent fixes it before it finishes.",
    highlights: ["Agent hooks", "Risk checks", "Understanding score", "Full review tab"],
    install: "code --install-extension azizcodes.kenning",
    stack: ["TypeScript", "VS Code API", "Claude", "esbuild"],
    links: [
      { label: "Marketplace", href: "https://marketplace.visualstudio.com/items?itemName=azizcodes.kenning" },
      { label: "Source", href: "https://github.com/aziz-codes/kenning" },
    ],
    icon: "/lab/kenning-icon.png",
    image: { src: "/lab/kenning.webp", alt: "A Kenning review card in the VS Code sidebar", width: 680, height: 860 },
  },
  {
    name: "wirescope",
    kind: "npm package",
    status: "live",
    tagline: "Network devtools that live inside your React app.",
    summary:
      "An in-app network inspector and API explorer, like React Query Devtools but for every request your app makes. Inspect, replay and copy requests as cURL without leaving the page. Rendered in a Shadow DOM, with zero runtime dependencies.",
    highlights: ["Network inspector", "API explorer", "Shadow DOM", "Zero config"],
    install: "npm i wirescope",
    stack: ["React", "TypeScript", "Tailwind CSS", "tsup"],
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/wirescope" },
      { label: "Live demo", href: "https://aziz-codes.github.io/wirescope/" },
      { label: "Source", href: "https://github.com/aziz-codes/wirescope" },
    ],
    image: {
      src: "/lab/wirescope.webp",
      alt: "The wirescope network panel docked under a React app",
      width: 1000,
      height: 501,
      position: "left top",
    },
  },
];

export const bench: BenchItem[] = [
  {
    name: "Tillora",
    kind: "Admin template",
    summary: "An AI-assisted POS & inventory dashboard: 33 pages, dark mode, RTL and print-ready invoices.",
    stack: ["Tailwind CSS", "Vite", "Chart.js"],
  },
  {
    name: "Nuskha",
    kind: "Web tools",
    summary: "Free Arabic PDF-to-text, OCR and text-fixing tools that run entirely in the browser.",
    stack: ["Next.js", "Tesseract.js", "PDF.js"],
  },
];
