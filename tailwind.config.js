/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'shadows': 'Shadows Into Light'
      },
      color: {
        'gold-light' : "#F0E68C",
        'gold-dark' : '996515',
        red: {
          450: "#CC0000"
        }
      }
    },
  },
  plugins: [],
}