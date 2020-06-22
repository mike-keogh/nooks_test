// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    screens: {
      xs: { max: "360px" },
      sml: { min: "361px", max: "768px" },
      md: { min: "769px", max: "1024px" },
      lrg: { min: "1025px", max: "1200px" },
      xlg: "1201px",
    },
    spacing: {
      xxs: "4px",
      xs: "8px",
      s: "16px",
      m: "24px",
      l: "32px",
      xl: "48px",
      xxl: "64px",
    },
    colors: {
      black: {
        lighter: "#E8E9EA",
        darker: "#16212e",
      },
      "sea-blue": {
        lighter: "#E6F8FF",
        darker: "#89C6DA",
      },
      "storm-blue": {
        lighter: "#C9D8E1",
        darker: "#497A99",
      },
      "grass-green": {
        lighter: "#F1F5DD",
        darker: "#BDCB7F",
      },
      "forest-green": {
        lighter: "#CED9C5",
        darker: "#5A803B",
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
