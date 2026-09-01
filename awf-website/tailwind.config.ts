import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#2B2118",
          50: "#F5F2EE",
          100: "#E8E0D6",
          200: "#C7B8A6",
          300: "#A08A70",
          400: "#6E5A45",
          500: "#2B2118",
          600: "#241B14",
          700: "#1D1611",
          800: "#15110C",
          900: "#0E0B08",
        },
        gold: {
          DEFAULT: "#C89B3C",
          50: "#FBF6EB",
          100: "#F3E4C1",
          200: "#E6CC8E",
          300: "#D9B461",
          400: "#C89B3C",
          500: "#A87D2A",
          600: "#876320",
          700: "#664A18",
        },
        cream: "#F8F5EF",
        sand: "#EEEAE2",
        ink: "#1D1D1D",
        muted: "#666666",
        forest: "#3E4A3C",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        lg: "10px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(43, 33, 24, 0.06), 0 1px 1px rgba(43, 33, 24, 0.04)",
      },
      letterSpacing: {
        tightish: "-0.01em",
      },
    },
  },
  plugins: [],
};
export default config;
