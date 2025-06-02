/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Wix Madefor Display"', 'sans-serif'], // Füge Wix Madefor Display hinzu
      },
      // ... deine restlichen extend-Konfigurationen
    },
  },
  plugins: [],
}
