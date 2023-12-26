/** @type {import('tailwindcss').Config} */
export default {
  darkmode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm': {'max': '388px'},
      'xlsm': {'max': '640px'}},
    
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui"),require('tailwind-scrollbar')({ nocompatible: true }),]
  
}