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
        card: "rgba(28,28,28)",
        cardHover: "rgba(36,36,36)",
        spotifyGreen: "#1ed760",
        "header-bg": "#111111",
        "search-bg": "#363636",
        "search-text": "#626b6b",
        "search-dashboard": "#181818",
        "search-card": "rgba(30,30,30)",
      },
      aspectRatio: {
        "6/9": "5 / 2",
      },
      animation: {
        "animate-playBtn": "translate-playBtn 0.3s ease",
      },
      keyframes: {
        "translate-playBtn": {
          "0%": { transform: "translateY(5px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
