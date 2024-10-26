/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { // This is the correct way to extend colors
        footerColor: '#EAE9EC',
      },
      fontFamily: {
        'iran-sans': ['"Iran Sans"', 'sans-serif'], // Make sure to have the correct format
      },
    },
  },
  plugins: [],
};
