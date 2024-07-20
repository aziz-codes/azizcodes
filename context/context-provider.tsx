"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ListContextType {
  lists: any[];
  setLists: React.Dispatch<React.SetStateAction<any[]>>;
  activeComponent: string;
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a default value for the context
const defaultState: ListContextType = {
  lists: [{ component: "he", ready: true }],
  setLists: () => {},
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
  const [lists, setLists] = useState<any[]>([]);
  const [activeComponent, setActiveComponent] = useState<string>("about");
  const [open, setOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        lists,
        setLists,
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
