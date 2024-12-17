    "use client";
   
   import React, { use, useContext } from 'react';
    import { ThemeContext } from '@/context/themeContext';
    
   interface ThemeProviderProps {
       children: React.ReactNode
   }
    const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({children}) => {
        const {theme} = useContext(ThemeContext)
      return (
        <div className={theme}>{children}</div>
      )
    };
    
    export default ThemeProvider;
    