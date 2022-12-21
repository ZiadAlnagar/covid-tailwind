module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        arial: ["Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        "2.5xl": "1.6875rem",
        ".5xl": "1.1875rem",
        "7.5xl": "5.25rem",
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      textColor: {
        custom: {
          600: "#50658E",
          700: "#3D4B69",
          800: "#50658E",
          900: "#3D4B69",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
