/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'russo': ['"Russo One"', 'sans-serif'],
    },

    fontSize: {
      '1vw': '1vw',
      '15vw': '1.5vw',
      '2vw': '2vw',
      '3vw': '3vw',
      '4vw': '4vw',
      '5vw': '5vw',
      '6vw': '6vw',
      '7vw': '7vw',
      '8vw': '8vw',
      '9vw': '9vw',
      '10vw': '10vw'
    },

    extend: {
      colors: {
        'primary-top': '#1E1F22',
        'secondary-top': '#F55139',
        'tratiary-top': '#EBE7D9',
        'bg-1': '#075278',
      },

      spacing: {
        'r40': '40%',
        'r15': '15%',
        'r14': '14%',
        'r1': '1%',
        'r2': '2%',
        'r8': '8%',
      },

      scale: {
        '15': '1.05',
        '130': '1.3',
      },

      animation: {
        'arrows': 'arrows 1.2s alternate infinite',
        'arrows3': 'arrows 1.2s alternate 0.3s infinite',
        'arrows6': 'arrows 1.2s alternate 0.6s infinite',
        'arrows9': 'arrows 1.2s alternate 0.9s infinite',
      },

      keyframes: {
        arrows: {
          '0%': { opacity: '1' },
          '100%': { opacity: '.2', transform: 'translateY(10px)'},
        }
      }
    },
  },
  plugins: [],
}
