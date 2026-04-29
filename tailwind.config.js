/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'colombia-yellow': '#FCD116',
        'colombia-blue': '#003893',
        'colombia-red': '#CE1126'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
