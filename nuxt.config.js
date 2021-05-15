export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'fetch-cat-breeds',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/furmiliar-favicon.svg' },
      {
        rel: 'alternate icon',
        type: 'image/x-icon',
        href: '/furmiliar-favicon.ico',
      },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600;700&display=swap',
      },
    ],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@nuxtjs/stylelint-module',
  ],
  modules: ['@nuxtjs/axios'],
  build: {},
  serverMiddleware: [
    {
      path: '/server-middleware',
      handler: '~/server-middleware/fetch-cat-breed.js',
    },
  ],
}
