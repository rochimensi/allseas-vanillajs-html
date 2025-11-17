/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.html",
    "./*.js"
  ],
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      colors: {
        primary: '#271F5B',
        surface: '#3B3566',
      },
      fontFamily: {
        'geometos': ['Geometos-Soft-Regular', 'Geometos-Soft-Extra-Light', 'sans-serif'],
        'outfit': ['Outfit-Extra-Light', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

