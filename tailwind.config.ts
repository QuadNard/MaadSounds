import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        floaty:
          "0px 0px 2px 1px rgba(0, 0, 0, 0.04), 0 2px 8px -2px rgba(0, 0, 0, 0.04), 0 4px 18px -4px rgba(0, 0, 0, 0.06), 0 8px 42px -6px rgba(0, 0, 0, 0.12)",
        phone:
          "inset 1px 1px 8px rgba(255, 255, 255, 0.8), inset -1px -1px 8px rgba(0, 0, 0, 0.1)",
        "phone-invert":
          "inset 1px 1px 8px rgba(255, 255, 255, 0.2), inset -1px -1px 8px rgba(0, 0, 0, 0.8)",
      },
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        metal: {
          150: "#ececee",
          250: "#dcdce0",
          350: "#bbbbc1",
          450: "#898992",
          550: "#62626b",
          650: "#494951",
          750: "#333338",
          850: "#202023",
          950: "#121215",
        },
        blush: {
          400: "#b488fb",
          500: "#9a59f6",
        },
        flower: {
          400: "#f377a9",
          500: "#ea4c89",
        },
        sky: {
          400: "#53bcf9",
          500: "#1da1f2",
        },
        lavender: {
          400: "#7475ff",
          500: "#595aff",
        },
        flamingo: {
          400: "#f8719d",
          500: "#f1437b",
        },
        royal: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
      },
      dropShadow: {
        phone: "0 1px 4px rgba(0, 0, 0, 0.06)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 2s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
