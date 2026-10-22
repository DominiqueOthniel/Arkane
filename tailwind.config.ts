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
        ink: "#000000",
        chrome: {
          50: "#f7f7f8",
          100: "#ececef",
          200: "#d4d4d8",
          300: "#b8b8c0",
          400: "#9898a4",
          500: "#7a7a88",
          600: "#5c5c6a",
          700: "#3e3e48",
          800: "#222228",
          900: "#121216",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "chrome-sheen":
          "linear-gradient(135deg, #1a1a1e 0%, #8a8a96 22%, #f2f2f5 45%, #6e6e78 62%, #c8c8d0 78%, #2a2a30 100%)",
        "chrome-soft":
          "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(180,180,190,0.08) 40%, rgba(0,0,0,0) 100%)",
        "void-radial":
          "radial-gradient(ellipse 80% 60% at 50% 35%, #1c1c22 0%, #050505 55%, #000000 100%)",
      },
      animation: {
        mercurial: "mercurial 8s ease-in-out infinite",
        bloom: "bloom 4.5s ease-in-out infinite",
      },
      keyframes: {
        mercurial: {
          "0%, 100%": { borderRadius: "42% 58% 58% 42% / 48% 42% 58% 52%" },
          "33%": { borderRadius: "58% 42% 42% 58% / 42% 58% 42% 58%" },
          "66%": { borderRadius: "48% 52% 62% 38% / 58% 38% 62% 42%" },
        },
        bloom: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.06)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
