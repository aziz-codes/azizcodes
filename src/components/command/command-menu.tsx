"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, AtSign, Briefcase, Copy, FileText, FolderGit2, Home, Layers, Mail, SunMoon } from "lucide-react";
import { navItems, profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { useChat } from "@/components/providers/chat-provider";
import { useThemeSwitch } from "@/components/layout/theme-toggle";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Kbd } from "@/components/ui/kbd";
import { Spark } from "@/components/ui/spark";
import { useHotkey } from "@/hooks/use-hotkey";

const CommandMenuContext = createContext<{ open: boolean; setOpen: (open: boolean) => void } | null>(null);

export function CommandMenuProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  useHotkey("k", () => setOpen((v) => !v));

  return (
    <CommandMenuContext.Provider value={{ open, setOpen }}>
      {children}
      <CommandMenu open={open} setOpen={setOpen} />
    </CommandMenuContext.Provider>
  );
}

export function useCommandMenu() {
  const ctx = useContext(CommandMenuContext);
  if (!ctx) throw new Error("useCommandMenu must be used within <CommandMenuProvider>");
  return ctx;
}

const navIcons = [Briefcase, FolderGit2, Layers, Mail];

function CommandMenu({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const router = useRouter();
  const chat = useChat();
  const switchTheme = useThemeSwitch();

  const run = (fn: () => void) => () => {
    setOpen(false);
    fn();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle className="sr-only">Command menu</DialogTitle>
        <DialogDescription className="sr-only">Jump to a section, project or action.</DialogDescription>
        <Command loop>
          <CommandInput placeholder="Type a command or search…" />
          <CommandList>
            <CommandEmpty>Nothing found. Try “work” or “theme”.</CommandEmpty>

            <CommandGroup heading="Navigate">
              <CommandItem onSelect={run(() => router.push("/"))}>
                <Home /> Home
              </CommandItem>
              {navItems.map((item, i) => {
                const Icon = navIcons[i];
                return (
                  <CommandItem key={item.href} onSelect={run(() => router.push(item.href))}>
                    <Icon /> {item.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>

            <CommandGroup heading="Case studies">
              {projects.map((p) => (
                <CommandItem
                  key={p.slug}
                  value={`${p.name} ${p.category}`}
                  onSelect={run(() => router.push(`/work/${p.slug}`))}
                >
                  <span className="flex size-4 items-center justify-center font-mono text-[10px] text-signal">◆</span>
                  <span className="flex-1">{p.name}</span>
                  <span className="font-mono text-[11px] text-subtle-foreground">{p.category}</span>
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandGroup heading="Actions">
              <CommandItem onSelect={run(chat.open)}>
                <Spark className="size-4" /> <span className="flex-1">Ask Aziz’s assistant</span>
                <Kbd>⌘J</Kbd>
              </CommandItem>
              <CommandItem onSelect={run(() => switchTheme())}>
                <SunMoon /> Toggle theme
              </CommandItem>
              <CommandItem onSelect={run(() => window.open(profile.resume, "_blank"))}>
                <FileText /> Open resume (PDF)
              </CommandItem>
              <CommandItem onSelect={run(() => navigator.clipboard?.writeText(profile.email))}>
                <Copy /> Copy email address
              </CommandItem>
            </CommandGroup>

            <CommandGroup heading="Elsewhere">
              <CommandItem onSelect={run(() => window.open(profile.socials.github, "_blank"))}>
                <ArrowUpRight /> GitHub
              </CommandItem>
              <CommandItem onSelect={run(() => window.open(profile.socials.x, "_blank"))}>
                <AtSign /> X / Twitter
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
