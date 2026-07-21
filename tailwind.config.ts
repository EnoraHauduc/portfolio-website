import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f7f5f0",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;
