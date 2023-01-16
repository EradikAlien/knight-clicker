/** @type {import('tailwindcss').Config} */

module.exports = {
  
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],

  theme: {
    extend: {

      keyframes: {
      skull: {
        '0%' : { transform: 'translateY(500%)', opacity: '0%' },
        '50%': { opacity: '100%' },
        '100%': { transform: 'translateY(0%)', opacity : '0%'},

        },
      
        fade: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        slide: {
          '0%': { left:'0px'},
          '50%': {left:'100px'},
          '100%': {left:'0px'},
        }

      },

      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'fading': 'fade 4s forwards',
        'sliding': 'slide 4s linear infinite',
        'skull': 'skull 2s',
      },

    },
  },
  plugins: [],
}
