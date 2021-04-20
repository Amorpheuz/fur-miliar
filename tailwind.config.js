module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Rubik',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      pink: {
        dark: '#ffc7d0',
        DEFAULT: '#fec7d7',
        light: '#b18b96',
      },
      white: {
        dark: '#F9F8FC',
        DEFAULT: '#fffffe',
      },
      lavender: {
        DEFAULT: '#A786DF',
        light: '#D9D4E7',
      },
      blue: {
        dark: '#0E172C',
        DEFAULT: '#3E65C4',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
