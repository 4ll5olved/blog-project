import defaultTheme from "tailwindcss/defaultTheme"; // Import defaultTheme
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",        // Match your CSS variable
        foreground: "var(--textColor)", // Match your CSS variable
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans], // Add Poppins font
      },
    },
  },
  plugins: [],
} satisfies Config;
