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
        saffron: "#FF7A00",
        gold: "#C89B3C",
        cream: "#FFF8EE",
        brown: "#2A1F14",
        "gold-light": "#F0D080",
        "saffron-dark": "#D96500",
        "cream-dark": "#F5E6CC",
      },
      fontFamily: {
        devanagari: ["Noto Sans Devanagari", "Mukta", "sans-serif"],
        mukta: ["Mukta", "sans-serif"],
      },
      backgroundImage: {
        "temple-pattern": "url('/pattern.svg')",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "float": "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(30px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        float: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
      },
    },
  },
  plugins: [],
};
export default config;
