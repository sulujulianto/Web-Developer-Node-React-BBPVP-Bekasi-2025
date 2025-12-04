/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        display: ['"Archivo"', '"Work Sans"', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: '#133E87',
        accent: '#F2B705',
        sand: '#F6F4EB'
      }
    }
  },
  plugins: []
};
