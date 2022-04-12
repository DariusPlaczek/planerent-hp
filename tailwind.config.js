module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './sections/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['sora'],
      serif: ['sora'],
      mono: ['inter'],
      display: ['sora'],
      body: ['sora']
    },
    extend: {
      screens: {
        '2k': {'min': '2560px' },
        '4k': {'min': '3840px'}

      },
      colors: {
        'pr-color': '#121B26',
        'pr-sidebar': '#151f2d',
        'pr-primary': '#868686',
        'pr-secondery': '#FF302C'
      },
      inset: {
        '-menu': '-0.4rem',
        '-menu-line': '-4rem'
      },
      width: {
        'mains': 'calc(100vw - 224px)',
        'main-screen': 'calc(100vw - 14rem)',
        '45': '45%',
        '26': '105px',
        '300': '300px',
        '500': '500px',
        '650': '650px',
        'mobil-logo-bg': '250px',
        'mobil-menu-bg': '60px'

      },
      height: {
        'height-mobil-nav': '74px',
        '300': '300px',
        '500': '500px',
        '650': '650px'
      },
      fontSize: {
        'xxs': '11px',
        'xxxs': '10px'
      },
      padding: {
        '3pz': '3%',
        '6pz': '6%',
        '9pz': '9%'
      },
      margin: {
        '112': '14rem'
      },
      zIndex: {
        '8500': 8500,
        '9000': 9000
      },
      listStyleType: {
        none: 'none',
        circle: 'circle',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
      backgroundImage: {
        'flightschool': "url('/images/planerent-flug-800x.webp')",
      }

    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
