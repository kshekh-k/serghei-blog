/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Spectral'", ...defaultTheme.fontFamily.serif],
        playfair: ["'Playfair Display Variable'", ...defaultTheme.fontFamily.serif],
        inter: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      },
      colors:{
        primary:'#930000',
        linkedin:'#0A66C2',
      }
    },
  },
  plugins: [],
}

