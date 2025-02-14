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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        bebas: ["var(--font-bebas-neue)", "sans-serif"],
        oswald: ["var(--font-oswald)", "sans-serif"],
        quicksand:["var(--font-quicksand)", "sans-serif"],
        atkinson:["var(--font-atkinson-hyperlegible)", "sans-serif" ],
      },
    },
  },
  plugins: [],
} satisfies Config;
