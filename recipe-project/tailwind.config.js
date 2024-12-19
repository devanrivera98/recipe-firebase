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
        fadedGreen: '#F5F6EA',
        lightGreen: '#2E8B57',
        lightOrange: '#FF7F50',
        neonGreen: '#98FF98',
        charcoal: '#5D4F4A'
      }
    },
  },
  plugins: [],
};
