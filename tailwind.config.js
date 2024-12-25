/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading1: ['PT Serif', 'serif'],
        heading2: ['Raleway', 'sans-serif'],
        description: ['Fjord One', 'serif'],
        nyTimes: ['UnifrakturCook', 'cursive'],
      },
    },
  },
  plugins: [],
};