/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [require('@tailwindcss/typography')],
theme: {
  extend: {
    typography: {
      DEFAULT: {
        css: {
          h1: {
            fontFamily: 'Passion One, sans-serif',
            fontWeight: '900',
          },
          h2: {
            fontFamily: 'Passion One, sans-serif',
            fontWeight: '900',
          },
          p: {
            fontFamily: 'Noto Serif, serif',
            fontWeight: '400',
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
          },
        },
      },
    },
  },
}
  plugins: [],
};