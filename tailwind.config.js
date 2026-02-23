/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
      },
      colors: {
        pixel: {
          dark: "#1a1a2e",
          mid: "#16213e",
          accent: "#e94560",
          gold: "#f5c542",
          green: "#4ecca3",
          sky: "#5b86e5",
          ground: "#6b8e23",
          stone: "#808080",
          water: "#4a90d9",
        },
      },
      boxShadow: {
        pixel: "4px 4px 0px rgba(0,0,0,0.5)",
        "pixel-lg": "6px 6px 0px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
