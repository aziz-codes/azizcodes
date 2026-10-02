# aziz.dev

Personal portfolio of Aziz, Full Stack Engineer. It's styled like an engineering spec: numbered sections, a live system diagram, case studies, a `git log` career timeline, an `npm ls` skills tree, a ⌘K command palette and a Claude-style **Ask Aziz** assistant.

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn-style primitives (Radix + cmdk), Motion, next-themes.

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build && pnpm start
```

Optional: set `GITHUB_TOKEN` to raise the GitHub API rate limit for the Open Source section (it's refreshed every 12h via ISR).

## Structure

```
src/
├── app/                      # Routes, metadata, OG image, sitemap, robots, icon
│   └── work/[slug]/          # Statically generated case studies
├── components/
│   ├── chat/                 # Ask Aziz: panel, composer, messages, mini markdown
│   ├── command/              # ⌘K command palette
│   ├── layout/               # Header, footer, theme toggle, local time
│   ├── providers/            # Theme + chat state
│   ├── sections/             # Hero, work, experience, stack, open source, ask, contact
│   └── ui/                   # Button, badge, dialog, command, section frame, reveal…
├── content/                  # ← All copy lives here (profile, projects, experience, chat)
├── hooks/                    # useHotkey, useMounted
├── lib/                      # utils, GitHub fetcher, chat engine
└── types/
```

## Editing content

Everything you'd want to change is in `src/content/`:

- `profile.ts`: name, intro, email, socials, stats, availability
- `projects.ts`: case studies (adding an entry generates a new `/work/<slug>` page) and the "Also built" table
- `experience.ts`: career timeline and stack tree
- `chat.ts`: the assistant's questions, keywords and answers

## Making the assistant live

`lib/chat-engine.ts` is the only thing that produces answers. Replace `answerFor()` with a call to a route handler that streams from an LLM, and `ChatProvider` already renders streamed tokens.

## Shortcuts

| Keys | Action |
| ---- | ------ |
| ⌘/Ctrl + K | Command palette |
| ⌘/Ctrl + J | Open / close Ask Aziz |
| Esc | Close panels |
