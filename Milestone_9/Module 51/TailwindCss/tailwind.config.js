module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': '#ff0000',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'dhon':'green'
    }, 
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
