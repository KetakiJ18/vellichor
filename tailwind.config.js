/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,tsx,ts}"],
  theme: {
    extend: {
      animation: {
        flicker: 'flicker 1.5s infinite',
        fadeIn: "fadeIn 0.3s ease-out",
      },
      keyframes:{
        flicker:{
          '0%, 100%':{opacity:1},
          '50%':{opacity: 0.6}
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      }
    },
  },
  plugins: [],
}

