/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      raleway: ['Raleway', 'sans-serif']
    },
    colors: {
      black: '#1e1e1e',
      white: '#FFFBF9',
      orange: '#e4830e'
    }
  },
  plugins: []
}
