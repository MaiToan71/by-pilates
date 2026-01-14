/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#c4aa8e',
          dark: '#b39a7e',
          light: '#d4bfa3',
        },
        beige: {
          DEFAULT: '#F5F1E8',
          dark: '#E8E4DC',
        },
      },
    },
  },
  plugins: [],
}
