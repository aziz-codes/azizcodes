"use client";
import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  EnvelopeClosedIcon,
  GearIcon,
  PersonIcon,
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
import { links } from "@/constants/nav-links";
import { suggestions } from "@/constants/command-list";
import { LayoutPanelLeft, Search } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const pathName = usePathname();

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
  const handleItemClick = (path: string) => {
    router.push(path);
    setOpen(false);
  };
  return (
    <div className="h-7 shadow-md w-full bg-bgNavbar border-b sticky top-0 left-0 z-50 flex items-center justify-between px-3">
      <div className="flex space-x-1 items-center flex-1">
        {links.map((link) => (
          <Link
            href={`/${link}`}
            className={`text-[10px] xl:text-sm px-2 py-0.5 rounded-sm hover:bg-secondary ${
              pathName === `/${link}` && "text-sky-500"
            }`}
            key={link}
          >
            {link}
          </Link>
        ))}
      </div>

      <>
        <div
          className="flex items-center border px-2 py-[1px] space-x-2 rounded-sm bg-transparent flex-1  border-gray-500 justify-between cursor-pointer hover:bg-muted hover:border-slate-700"
          onClick={() => setOpen(true)}
        >
          <Search className="w-4 h-4 text-muted-foreground " />
          <p className="text-[10px] text-muted-foreground ">
            Press
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded   px-1.5  font-semobild text-[10px] font-medium text-muted-foreground opacity-100">
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
              {suggestions.map((suggestion, index) => {
                const Icon = suggestion.icon;
                return (
                  <CommandItem
                    className="!py-1 my-2  cursor-pointer"
                    key={index}
                  >
                    <div
                      className="flex items-center space-x-2"
                      onClick={() => handleItemClick(suggestion.path)}
                    >
                      <Icon className="!w-4 !h-4" strokeWidth={0.9} />
                      <span className="text-xs">{suggestion.label}</span>
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Pages">
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

      <div className="flex-1 justify-end flex items-center">
        <LayoutPanelLeft className="w-3 h-3" />
      </div>
    </div>
  );
};

export default Navbar;
