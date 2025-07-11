module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#f4eae6",
        second: "#e5d6ca",
        test: "#e0d2c6",
        titleColor: "#8e6e55",
        'ipr-black': '#000000',
        'ipr-white': '#FFFFFF',
        'ipr-light-gray': '#D3D3D3', /* For the faint logo */
      },
      fontFamily: {
        quiche: ["quiche-sans", "sans-serif"],
        display: ["montserrat", "sans-serif"],
        authography: ["Autography", "sans-serif"],
        bilbo: ["Bilbo Swash Caps", "cursive"],
      },
    },
  },
  plugins: [],
};