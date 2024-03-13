/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans'],
      handwriting: ['Caveat'],
      headline: ['Poppins'],
    },
    extend: {
      backgroundImage: {
        'levi-img': "url('/src/assets/levi.jpg')",
      }
    }
  },
  plugins: [],
};
