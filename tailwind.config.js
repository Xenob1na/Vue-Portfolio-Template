/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nanum: ['Nanum Pen Script', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
        spacemono: ['Space Mono', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

