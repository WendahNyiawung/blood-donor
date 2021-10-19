// tailwind.config.js
module.exports = {
  purge: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: '38rem',
      },
        colors: {
          'teal':'#5DADAB',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}