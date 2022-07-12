/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    
    extend: {
      colors : {
        'theme' : {
          "black": "#161616",
          "blue": {
            'light': "#0466C8",
            'medium': '#0353A4',
            'dark': '#023E7D'
          },
          "white" : "#FAFAFA",
          "grey" : {
            'light': '#DCDFE5',
            'medium': '#B0B5BF',
            'dark': '#788091'
          }
        }, 
      }
    },
  },
  plugins: [],
}
