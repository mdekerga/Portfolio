/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui:{
      themes:["coffee"],
    },


  theme: {
    colors:{
      'black' : "101116"
    }
  },

  plugins: [
    require('daisyui')
  ],
}

