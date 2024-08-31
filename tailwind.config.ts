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
        testimonials_bg_1: "url('/testimonials-bg-1.png')",
        testimonials_bg_2: "url('/testimonials-bg-2.png')",
        testimonials_bg_3: "url('/testimonials-bg-3.png')",
        testimonials_bg_dark_1: "url('/testimonials-bg-dark-1.png')",
        testimonials_bg_dark_2: "url('/testimonials-bg-dark-2.png')",
        testimonials_bg_dark_3: "url('/testimonials-bg-dark-3.png')",
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
