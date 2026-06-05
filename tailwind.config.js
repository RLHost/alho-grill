/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          red: '#D32F2F',
          cream: '#FDFBF7',
          dark: '#1A1A1A',
          accent: '#FFB300'
        }
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Impact', 'Arial Black', 'sans-serif'],
      },
      boxShadow: {
        'solid': '8px 8px 0px 0px rgba(26,26,26,1)',
        'solid-hover': '4px 4px 0px 0px rgba(26,26,26,1)',
      }
    },
  },
  plugins: [],
}