export const profile = {
  name: "Aziz",
  handle: "aziz-codes",
  role: "Full Stack Engineer",
  headline: "Web & mobile engineer building real-time products.",
  location: "Lahore, Pakistan",
  timezone: "Asia/Karachi",
  timezoneLabel: "PKT",
  available: true,
  // TODO: swap for a dedicated work address if you prefer.
  email: "azizcodes42@gmail.com",
  resume: "/Aziz.pdf",
  avatar: "https://avatars.githubusercontent.com/u/75851308?v=4",
  siteUrl: "https://aziz-dev.vercel.app",
  intro:
    "I'm Aziz — a full stack engineer with 4+ years of shipping web and mobile products. I work across the stack: polished React & Next.js interfaces, Node.js services, MongoDB data models, and the real-time plumbing that connects them.",
  now: "Building surveillance & real-time monitoring interfaces at Swati Technologies, and a bus-ticketing app in React Native on the side.",
  socials: {
    github: "https://github.com/aziz-codes",
    x: "https://x.com/aziz_codes",
  },
  stats: [
    { value: "4+", label: "Years shipping" },
    { value: "10+", label: "Products built" },
    { value: "140+", label: "Public repos" },
    { value: "2", label: "Platforms · web & mobile" },
  ],
  education: {
    degree: "BSc Computer Science",
    school: "Federal Urdu University of Arts, Science & Technology",
    period: "2017 — 2021",
    location: "Islamabad, PK",
  },
} as const;

export const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Stack", href: "/#stack" },
  { label: "Contact", href: "/#contact" },
] as const;
