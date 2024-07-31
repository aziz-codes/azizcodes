"use client";

import * as React from "react";
import {
  CalendarIcon,
  CodeIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import { Search } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  const links = ["about", "skills", "education", "projects", "blogs"];
  return (
    <div className="h-7 shadow-md w-full bg-bgNavbar border-b sticky top-0 left-0 z-50 flex items-center justify-between">
      <div className="flex space-x-1 items-center">
        {links.map((link) => (
          <Link
            href={`/${link}`}
            className="text-[10px] xl:text-sm px-2 py-0.5 rounded-sm hover:bg-secondary"
            key={link}
          >
            {link}
          </Link>
        ))}
      </div>

      <>
        <div
          className="flex items-center border px-2 py-[1px] space-x-2 rounded-sm bg-transparent w-[40%] border-gray-500 justify-between cursor-pointer hover:bg-muted hover:border-slate-700"
          onClick={() => setOpen(true)}
        >
          <Search className="w-4 h-4 text-muted-foreground " />
          <p className="text-[10px] text-muted-foreground ">
            Press
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded   px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>J
            </kbd>
          </p>
          <div></div>
        </div>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Search pages by name" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <Link href="/about">
                <CommandItem className="!py-1 my-2">
                  <PersonIcon className="mr-2 h-4 w-4" />
                  <span>About Me</span>
                </CommandItem>
              </Link>
              <CommandItem className="!py-1 my-2">
                <CodeIcon className="mr-2 h-4 w-4" />
                <span>Skills</span>
              </CommandItem>
              <CommandItem className="!py-1 my-2">
                <RocketIcon className="mr-2 h-4 w-4" />
                <span>Launch</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem className="!py-1 my-2">
                <PersonIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem className="!py-1 my-2">
                <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                <span>Mail</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem className="!py-1 my-2">
                <GearIcon className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>

      <div>right</div>
    </div>
  );
};

export default Navbar;
