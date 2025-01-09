"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { usePathname } from "next/navigation";

interface ListContextType {
  activeComponent: string;
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a default value for the context
const defaultState: ListContextType = {
  activeComponent: "about",
  setActiveComponent: () => {},
  open: false,
  setOpen: () => {},
};

// Create the context
const AppContext = createContext<ListContextType | any>(defaultState);

// Create a provider component
export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeComponent, setActiveComponent] = useState<string>("about");
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const path = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleRouteChange = () => {
      if (width && width < 768) {
        setOpen(false);
      }
      if (width && width > 800) {
        setOpen(true);
      }
    };
    handleRouteChange();
  }, [width, path]);

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "b") {
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  useEffect(() => {}, [path]);

  return (
    <AppContext.Provider
      value={{
        activeComponent,
        setActiveComponent,
        open,
        width,
        setOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the ListContext
export const useStore = () => useContext(AppContext);
