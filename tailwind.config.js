/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff0f3',
          100: '#ffe3e8',
          200: '#ffc9d2',
          300: '#ff9dad',
          400: '#ff647f',
          500: '#f72552', // Main Red
          600: '#e00a3d',
          700: '#bc042f', // Deep Red
          800: '#9b082b',
          900: '#830d2a',
          950: '#480211',
        },
        gold: {
          400: '#FFD700',
          500: '#D4AF37', // Metallic Gold
          600: '#AA8C2C',
        },
        dark: {
          900: '#0F0F0F',
          800: '#1A1A1A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
