/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "281px",
      xsm: "511px",
      midmax: "900px",
      ...defaultTheme.screens,
      smax: "1440px",
    },
    extend: {
      colors: {
        button: "#A77E01",
        button_hover: "#674E01",
        card: "#FFFFFF",
        title: "#000000",
        descr: "#66666E",
        social: "#D9D9D9",
        social_text: "#66666E",
        gallery: "#E6E6E9",
      },
      backgroundImage: {
        poise:
          "url('https://i.ebayimg.com/images/g/QvQAAOSwvixgINGo/s-l1600.jpg')",
      },
    },
  },
  plugins: [],
};
