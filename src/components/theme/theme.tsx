"use client";

import { useContext } from "react";
import styles from "./theme.module.css";
import { ThemeContext } from "@/context/themeContext";

export default function Theme() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button
      className={styles.container}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <i className="bx bxs-moon text-2xl text-gray-700 hover:text-gray-900"></i>
      ) : (
        <i className="bx bxs-sun text-2xl text-yellow-400 hover:text-yellow-600"></i>
      )}
    </button>
  );
}
