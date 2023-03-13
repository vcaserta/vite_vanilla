const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Mukta"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      black: '#121721',
      blue: '#6D8FED',
      'slate-grey': '#84909D',
      'fog-grey': '#E9E9EA',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
  },
  plugins: [],
};
