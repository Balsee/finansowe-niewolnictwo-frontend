const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brand: {
          red: '#fc1a1c',
          yellow: '#ebec17',
        },
      },
      fontFamily: {
        sora: ['Sora', ...defaultTheme.fontFamily.sans],
        publicSans: ['Public Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
