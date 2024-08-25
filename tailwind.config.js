/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EFE3B8",
        secondary: "#A6603A",
        button: "#744A34",
        textprimary: "#000000",
        textsecondary: "#FFFFFF"
      },
      fontSize: {
        "heading-1": "3rem",
        "heading-2": "2.25rem",
        "heading-3": "1.875rem",
        "body-text": "1rem",
        "button-text": "1rem",
      },
      fontWeight: {
        "heading-1": "700",
        "heading-2": "600",
        "heading-3": "500",
        "body-text": "400",
        "button-text": "600",
      },
      lineHeight: {
        "heading-1": "1.25",
        "heading-2": "1.375",
        "heading-3": "1.375",
        "body-text": "1.625",
        "button-text": "1.25",
      },
    },
  },
  plugins: [],
};

