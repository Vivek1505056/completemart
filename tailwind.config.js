/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        maple: {
          50: '#fff2f1',
          100: '#ffe2df',
          200: '#ffc9c3',
          300: '#ffa499',
          400: '#ff7463',
          500: '#ff4f3a',
          600: '#e13924',
          700: '#bb2a1b',
          800: '#9b251a',
          900: '#80231a'
        },
        ink: '#1f2937'
      },
      boxShadow: {
        soft: '0 16px 34px -18px rgba(155, 37, 26, 0.35)'
      }
    }
  },
  plugins: []
};
