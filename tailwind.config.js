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
      typography: {
        DEFAULT: {
          css: {
            lineHeight: "1.5",
            backgroundColor: "transparent",
            a: {
              color: "#ee3554",
              "&:hover": {
                textDecoration: "underline",
              },
              code: { color: "#ee3554" },
            },
            blockquote: {
              borderLeftColor: "#a1a1aa",
              color: "#a1a1aa",
            },
            p: {
              color: "#18181b",
              marginTop: "0",
              marginBottom: "1rem",
            },
            h1: { color: "#18181b" },
            h2: { color: "#18181b" },
            h3: { color: "#18181b" },
            h4: { color: "#18181b" },
            h5: { color: "#18181b" },
            h6: { color: "#18181b" },
            hr: { borderColor: "#a1a1aa" },
            table: {
              marginTop: "0",
              marginBottom: "0",
            },
            thead: {
              th: {
                borderBottomColor: "#71717a",
                color: "#18181b",
                fontWeight: "800",
                borderBottomWidth: "1px",
              },
              tr: {
                borderBottomColor: "#71717a",
                color: "#18181b",
              },
            },
            tbody: {
              tr: {
                borderBottomColor: "#71717a",
                color: "#18181b",
              },
            },
            strong: {
              color: "#18181b",
              fontWeight: "700",
            },
            ol: {
              li: {
                "&:before": { color: "#18181b" },
                "::marker": { color: "#18181b" },
              },
            },
            ul: {
              li: {
                "&:before": { color: "#18181b" },
                "::marker": { color: "#18181b" },
              },
            },
            pre: {
              backgroundColor: "transparent",
              padding: "0",
              margin: "0",
            },
            code: {
              padding: "0",
              margin: "0",
            },
            figure: {
              figcaption: { color: "#a1a1aa" },
            },
            blockquote: {
              color: "#18181b",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
