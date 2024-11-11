/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    colors: {
      cyan: {
        300: "#8FE3F9",
        600: "#4D96A9",
        hover: "#71C0D4",
      },
      purple: {
        300: "#D9B8FF",
        600: "#855FB1",
        hover: "#B18BDD",
      },
      slate: {
        300: "#D1D1DF",
        600: "#87879D",
        900: "#28283D",
      },
      white: "#FAFAFA",
    },
    extend: {
      backgroundImage: {
        "footer-mobile":
          "linear-gradient(to bottom, hsla(192,37%,48%,.90), hsla(192,37%,48%,.90)), url('./assets/mobile/image-footer.jpg')",
        "footer-tablet":
          "linear-gradient(to bottom, hsla(192,37%,48%,.90), hsla(192,37%,48%,.90)), url('./assets/tablet/image-footer.jpg')",
        "footer-desktop":
          "linear-gradient(to bottom, hsla(192,37%,48%,.90), hsla(192,37%,48%,.90)), url('./assets/desktop/image-footer.jpg')",
      },
      fontFamily: {
        redhat: ["Red Hat Display Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
