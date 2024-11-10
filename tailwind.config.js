/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    colors: {
      cyan: {
        300: "#8FE3F9",
        600: "#4D96A9",
      },
      purple: {
        300: "#D9B8FF",
        600: "#855FB1",
      },
      slate: {
        300: "#D1D1DF",
        600: "#87879D",
        900: "#28283D",
      },
      white: "#FAFAFA",
    },
    extend: {
      fontFamily: {
        redhat: ["Red Hat Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
