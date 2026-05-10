/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050608",
          900: "#090b10",
          800: "#10141c",
          700: "#171c25",
        },
        signal: {
          blue: "#6dc8ff",
          cyan: "#7df9ff",
          green: "#9bffdc",
          amber: "#ffd166",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 48px rgba(109, 200, 255, 0.16)",
        "hard-cyan": "8px 8px 0 rgba(125, 249, 255, 0.12)",
      },
      backgroundImage: {
        "fine-grid":
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
