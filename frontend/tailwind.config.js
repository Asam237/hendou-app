const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      // Override tailwind fontFamily
      sans: ["Jost", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0e3758",
        },
        secondary: {
          DEFAULT: "#1E75BA",
        },
        orange: {
          DEFAULT: "#faaf42",
        },
        primary50: {
          DEFAULT: "#f6fafe",
        },
      },
    },
  },
  plugins: [],
};
