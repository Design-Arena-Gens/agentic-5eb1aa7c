import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        night: {
          900: "#05060a",
          700: "#111827",
          500: "#1f2937"
        },
        accent: {
          500: "#7c3aed",
          400: "#a855f7",
          300: "#c084fc"
        }
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 10px 40px -15px rgba(124, 58, 237, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
