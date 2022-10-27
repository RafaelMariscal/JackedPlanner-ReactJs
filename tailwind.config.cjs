/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
      '2xl': 32,
      '4xl': 44
    },
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      black: '#000',
      red: '#F04439',
      blue: '#3B5998',

      'white-opac-35': 'rgba(255,255,255,0.35)',
      'gray-opac-35': 'rgba(52, 60, 63,0.35)',

      gray: {
        100: '#EEF4F6',
        200: '#C4C4CC',
        400: '#7C7C8A',
        800: '#343C3F',
        900: '#121214',
        github: '#1C2227',
      },
      orange: {
        300: '#FFA33D',
        500: '#FE9016',
        700: '#E28926',
      },
      cyan: {
        500: '#72D6FD',
        700: '#61B8D9'
      },
    },
    extend: {
      animation: {
        strech: 'strech 200ms ease-in-out forwards',
        return: 'return 200ms ease-in-out forwards'
      },
      fontFamily: {
        sans: 'poppins, sans-serif',
      },
      backgroundImage: {
        'background-polygons': "url('/src/assets/PolygonsBackground.png')",
        'price-slash': "url('/src/assets/PriceSlash.png')",
      },
      keyframes: {
        strech: {
          '0%': { width: '4rem' },
          '100%': { width: '100%' }
        },
        return: {
          '0%': { width: '100%' },
          '100%': { width: '4rem' }
        }
      }
    },
  },
  plugins: [],
}
