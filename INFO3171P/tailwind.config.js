// tailwind.config.js
module.exports = {
  content: [
    '*.{html,js}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'custom-skyblue': '#87ceeb',
      }),
    },
  },
  plugins: [],
};
