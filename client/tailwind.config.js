/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter, sans-serif"],
      },
      colors: {
        primary: colors.blue,
      },
    },
  },
  plugins: [],
};
