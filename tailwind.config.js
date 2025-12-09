/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-content-light": "#FF9E9E",
      },
      backgroundColor: {
        "section-light": "#F4F7F5",
        "section-dark": "#08090A",
      },
    },
  },

  daisyui: {
    themes: [
      {
        luxury: {
          primary: "#A7A2A9",
          "primary-focus": "#8B8691",
          "primary-content": "#000000",

          secondary: "#575A5E",
          "secondary-focus": "#3A3D40",
          "secondary-content": "#FFFFFF",

          accent: "#A7A2A9",
          "accent-focus": "#8B8691",
          "accent-content": "#000000",

          neutral: "#08090A",
          "neutral-focus": "#1A1C1D",
          "neutral-content": "#F4F7F5",

          "base-100": "#08090A",
          "base-200": "#1A1C1D",
          "base-300": "#2D3033",
          "base-content": "#F4F7F5",
          "base-content-light": "#D4D6D8",

          info: "#A7A2A9",
          success: "#8B8691",
          warning: "#C5C1C8",
          error: "#ff6b6b",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },

  plugins: [require("daisyui"), animations],
  corePlugins: {
    preflight: true,
  },
};
