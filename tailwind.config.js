/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      // default color
      transparent: 'transparent',
      black: '#000000',
      slate: colors.slate,
      // colors for light theme
      blue: {
        50: '#E9F4FF',
        300: '#607FF2',
        400: '#61DAFB',
        500: '#4C51C6',
        600: '#1A1C414B',
        900: '#0E0F23',
      },
      orange: '#FD830D',
      gray: {
        500: '#ECEFF1',
        600: '#707070',
      },
    },
    extend: {},
    fontFamily: {
      heading: ['Nunito', 'sans-serif'],
      sans: ['Kulim Park', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('elegant', '.elegant &');
    }),
  ],
};
