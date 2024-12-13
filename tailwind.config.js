/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content:["./app/**/*.{html,js}", "./**/*.{html,js}", ],
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
      },
      letterSpacing: {
        '1': '0em',
        '2': '0.025em',
        '3': '0.05em',
        '4': '0.1em',
      }
    },
  },
  plugins: [],
}

