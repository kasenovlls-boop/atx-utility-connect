import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C5F8D', // Deep sky blue
          dark: '#1E4A6F',
          light: '#3A7DB8',
        },
        accent: {
          DEFAULT: '#E67E3C', // Sunset orange
          light: '#F19A5E',
          dark: '#D66B28',
        },
        warm: {
          peach: '#F4A261',
          coral: '#E76F51',
          sky: '#8ECAE6',
        },
      },
    },
  },
  plugins: [],
};
export default config;
