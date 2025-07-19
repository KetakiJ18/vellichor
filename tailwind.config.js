/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,tsx,ts}"],
  theme: {
    extend: {
      animation: {
        flicker: 'flicker 1.5s infinite',
      },
      keyframes:{
        flicker:{
          '0%, 100%':{opacity:1},
          '50%':{opacity: 0.6}
        }
      }
    },
  },
  plugins: [],
}

