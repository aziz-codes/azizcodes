"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

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
const AppContext = createContext<ListContextType>(defaultState);

// Create a provider component
export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeComponent, setActiveComponent] = useState<string>("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "b") {
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <AppContext.Provider
      value={{
        activeComponent,
        setActiveComponent,
        open,
        setOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the ListContext
export const useStore = () => useContext(AppContext);
