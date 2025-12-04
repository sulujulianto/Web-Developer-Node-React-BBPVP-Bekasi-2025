/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#133E87',
        accent: '#F2B705',
        sand: '#F6F4EB'
      },
      fontFamily: {
        sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
        display: ['"Archivo"', '"Work Sans"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
