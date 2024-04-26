/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        black: "#070707",
        cream: "#FFECD1",
        red: "#AD343E",
        purple: "#8A2BE2"
      }
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
   
  ],
};
