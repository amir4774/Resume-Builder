import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        snapshot: "url('/snapshot-bg.png')",
        snapshot_dark: "url('/snapshot-dark-bg.png')",
      },
      colors: {
        primary: "#FF5C00",
        dark_bg: "#1e293b",
      },
    },
  },
  plugins: [],
};
export default config;
