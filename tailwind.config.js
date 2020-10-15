const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: {
    enabled: true,
    content: [
      './*.html',
      './components/**/*.js',
      './pages/**/*.js',
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xss': '.65rem',
      },
      margin: {
        '9.5': '2.4rem',
      }
    },
  },
  variants: {},
  plugins: []
}
