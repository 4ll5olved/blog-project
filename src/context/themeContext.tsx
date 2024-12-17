"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

// Define the type structure properly
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void; // Correctly declare this function type
};

// Correctly initialize context with a default value
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// Get theme from LocalStorage safely
const getFromLocalStorage = (): string => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light";
};

interface ThemeContextProviderProps {
  children: ReactNode;
}

// Main context provider
export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(getFromLocalStorage());

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
