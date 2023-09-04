module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#312651",
      secondary: "#444262",
      tertiary: "#FF7754",

      gray: "#83829A",
      gray2: "#C1C0C8",

      white: "#F3F4F8",
      lightWhite: "#FAFAFC",
    },
    sizes: {
      xSmall: 10,
      small: 12,
      medium: 16,
      large: 20,
      xLarge: 24,
      xxLarge: 32,
    },
    font: {
      regular: "DMRegular",
      medium: "DMMedium",
      bold: "DMBold",
    },
    extend: {},
  },
  plugins: [],
};
