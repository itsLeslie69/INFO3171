/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.{html,js}',
    //'./pages/**/*. {html, js}',
    './pages/**/*.html', // ??? why does this work?
    './components/**/*. {html, js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}