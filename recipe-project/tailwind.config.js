/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Lora', 'serif'],
        'body': ['Poppins', 'san-serif']
      },
      colors: {
        lightGreen: '#2E8B57',
        lightOrange: '#FF7F50',
        neonGreen: '#98FF98'
      }
    },
  },
  plugins: [],
};
