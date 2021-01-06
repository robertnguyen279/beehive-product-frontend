import defaultTheme from 'tailwindcss/defaultTheme';

const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
  'Nunito Sans', // <-- Roboto is a default sans font now
  'system-ui',
  // <-- you may provide more font fallbacks here
];

fontFamily['title'] = ['Quicksand'];

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
