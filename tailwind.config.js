/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-exo_2)', 'sans-serif'],
        bebas_neue: ['var(--font-bebas_neue)', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
