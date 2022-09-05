/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primaryDark: "#46A6A6",
      primaryMid: "#8FD9D9",
      primaryLight: "#CEEAE9",
      primaryExtraLight: "#F2F9F9",
      secondaryLight: "#F7AF7F",
      secondaryDark: "#F25D27",
      greyStandard: "#707070",
      greyDark: "#666666",
      black: "#000",
      white: "#fff",
      red: "#ED1C24",
      redLight: "#F9E4E5",
      redDark: "#7C4147",
      orange: "#FBB03B",
      orangeLight: "#F9EEE1",
      orangeDark: "#F7931E",
      green: "#1CA66C",
      greenLight: "#EDF2EF",
      greenDark: "#14734B",
      darkBlue: "#07005D",
    },
    extend: {
      fontFamily: {
        primary: ["new atten", ...fontFamily.sans],
        title: ["Merriweather", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
