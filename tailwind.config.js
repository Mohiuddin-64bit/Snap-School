/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'dark-bg': "url('./src/assets/gradient/darkBg.jpg')",
        'white-bg': "url('./src/assets/gradient/whiteBg.jpg')",
        'background': "url('./src/assets/gradient/background.jpg')",
        
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,  
  },
};
