// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // loyihangizga moslab yo‘llarni sozlang
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#e9f9f5',
          100: '#c6ece2',
          200: '#9cd8cb',
          300: '#70c3b2',
          400: '#43ad99',
          500: '#268f80',
          600: '#1c7064',
          700: '#15564e',
          800: '#0e3e39',
          900: '#0E3633', // siz so‘ragan premium toq emerald
        },
      },
    },
  },
  plugins: [],
}
