/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      geyText: '#707070',
      primary: '#4C51C6',
      secondary: '#FD830D',
      highlight: '#607FF2',
      opacityBg: '#E9F4FF',
    },
    extend: {},
    fontFamily: {
      heading: ['Nunito', 'sans-serif'],
      sans: ['Kulim Park', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
};
