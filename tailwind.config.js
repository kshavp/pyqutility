/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        customRed: {
          light: '#F28B82',
          DEFAULT: '#E53935',
          dark: '#B71C1C',
        },
        customWhite: {
          DEFAULT: '#FFFFFF',
          offWhite: '#F5F5F5',
        },
      },
    },
  },
  plugins: [],
}

