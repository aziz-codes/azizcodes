import {
  Files,
  Shapes,
  FolderOpenDot,
  SquareUser,
  CircleUserRound,
  Settings,
} from "lucide-react";
export const smSidebarLists = [
  {
    label: "about",
    icon: Files,
    isActive: true,
  },
  {
    label: "projects",
    icon: FolderOpenDot,
    isActive: false,
  },
  {
    label: "contact",
    icon: SquareUser,
    isActive: false,
  },
  {
    label: "blogs",
    icon: Shapes,
    isActive: false,
  },
  {
    label: "profile",
    icon: CircleUserRound,
    isActive: false,
  },
  {
    label: "settings",
    icon: Settings,
    isActive: false,
  },
];
