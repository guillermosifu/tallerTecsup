/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {},
      gradientColors: {
        body_color: ["90deg", "hsl(23, 84%, 75%)", "hsl(9, 92%, 54%)"],
      },
      screens: {
        'small': '320px',
        'medium': '576px',
        'tablet': '767px',
        'large': '992px',
        'desktop': '1200px',
      },
    },
  },
  plugins: [],
};
