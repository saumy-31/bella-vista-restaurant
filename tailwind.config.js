/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        darker: '#050505',
        gold: '#D4AF37',
        'gold-light': '#F3E5AB',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}