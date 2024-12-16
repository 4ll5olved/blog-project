"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

type ThemeContextType = {
    theme: string;
    setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => {}
});

const getFromLocalStorage = ():string => {
    if(typeof window !== undefined){ 
    const value = localStorage.getItem('theme')
    return value || "light";
    }
    return "light";
}

interface themeContextProviderProps{
    children: ReactNode;
}

export const ThemeContextProvider : React.FC<themeContextProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<string>(getFromLocalStorage());

    useEffect(() => {
        if(typeof window !== "undefined"){
            localStorage.setItem("theme", theme);
        }
    }, [theme]);
    
    return (
    <ThemeContext.Provider value ={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
    );
}