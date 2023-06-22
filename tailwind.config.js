/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  daisyui: {
    themes: [
      {
        mytheme: {
          black: "#18181b",
          white: "#f4f4f5",
          primary: "#15294f",
          "primary-content": "#f4f4f5",
          secondary: "#39c7f4",
          "secondary-content": "#18181b",
          accent: "#ee3554",
          "accent-content": "#f4f4f5",
          neutral: "#0a1427",
          "neutral-content": "#f4f4f5",
          "base-100": "#e0f2fe",
          "base-200": "#bae6fd",
          "base-300": "#7dd3fc",
          "base-content": "#f4f4f5",
          info: "#6366f1",
          success: "#2DD4BF",
          warning: "#F4BF50",
          error: "#FB7085",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [require("daisyui")],
};
