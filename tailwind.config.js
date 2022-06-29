/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-top': '#1E1F22',
        'secondary-top': '#F55139',
        'tratiary-top': '#EBE7D9',
      },

      spacing: {
        'r15': '15%',
      },

      scale: {
        '130': '1.3',
      }
    },
  },
  plugins: [],
}
