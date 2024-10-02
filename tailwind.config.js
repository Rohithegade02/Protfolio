/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: { poppins: ['Poppins', 'sans-serif'] },
      colors: {
        primary: {
          100: '#363637',
          200: '#EBF4FF',
          300: '#C3D9FF',
          400: '#9BBFFF',
          500: '#0286FF',
          600: '#6A85E6',
          700: '#475A99',
          800: '#364573',
          900: '#242B4D',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
