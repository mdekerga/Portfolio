/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {

  

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui:
  {
    themes: [
      {
        'luxury': {
           'primary' : '#ffffff',
           'primary-focus' : '#e6e6e6',
           'primary-content' : '#000000',

           'secondary' : '#152747',
           'secondary-focus' : '#091120',
           'secondary-content' : '#ffffff',

           'accent' : '#503447',
           'accent-focus' : '#32202c',
           'accent-content' : '#ffffff',

           'neutral' : '#171618',
           'neutral-focus' : '#2e2d2f',
           'neutral-content' : '#dc4c5a',

           'base-100' : '#181820',
           'base-200' : '#171618',
           'base-300' : '#0d0d0d',
           'base-content' : '#dc4c4c',

           'info' : '#66c7ff',
           'success' : '#87cf3a',
           'warning' : '#e1d460',
           'error' : '#ff6b6b',

          '--rounded-box': '1rem',          
          '--rounded-btn': '.5rem',        
          '--rounded-badge': '1.9rem',      

          '--animation-btn': '.25s',       
          '--animation-input': '.2s',       

          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '.5rem',      
          '--border-btn': '1px',            
        },
      },
    ],
  },
  
    plugins: [
      require('daisyui'),
      require("@tailwindcss/typography"), 
      animations

    ],
    corePlugins: {
      preflight: true
    }
}

