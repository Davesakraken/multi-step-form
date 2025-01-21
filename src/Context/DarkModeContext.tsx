"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
  useEffect,
} from "react";

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

// create context
const ThemeContext = createContext<ThemeContextType | null>(null);

// custom hook
const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used in the provider");
  }
  return context;
};

// provider
const ThemeContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContextProvider, useThemeContext };
