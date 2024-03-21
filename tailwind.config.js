/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      "colors":{
        "dp": {
          100: "#A5DD9B",
          200: "#C5EBAA",
          300: "#F6F193",
          400: "#F2C18D" 
        }
      }
    },
  },
  plugins: [],
}

