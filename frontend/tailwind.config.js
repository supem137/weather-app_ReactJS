/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        'screen/2': '50vw',
      },
      colors: {
        'bg-gradient': 'rgb(236, 72, 153)',
      },
    },
  },
  plugins: [],
};
