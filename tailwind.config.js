const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true
    },
    darkMode: 'class',
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
            },
            typography: {
                DEFAULT: {
                    css: {
                        a: {
                            color: '#fff',
                            '&:hover': {
                                color: '#fff',
                            },
                        },
                    },
                },
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ]
}
