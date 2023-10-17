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
      },
      aspectRatio: {
        "6/9": "5 / 2",
      },
    },
  },
  plugins: [],
};
export default config;
