/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'cl-Green': 'hsl(75, 94%, 57%)',
        'cl-White': 'hsl(0, 0%, 100%)',
        'cl-Grey': 'hsl(0, 0%, 20%)',
        'cl-DarkGrey': 'hsl(0, 0%, 12%)',
        'cl-OffBlack': 'hsl(0, 0%, 8%)'
      },
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        
      }
    },
  },
  plugins: [],
}