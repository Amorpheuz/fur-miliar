import metaTags from './utility/metaTags'

export default {
  ssr: true,
  target: 'server',
  head: {
    title: 'Fur~miliar',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [...metaTags],
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
  axios: {
    baseUrl: '/server-middleware',
  },
  build: {},
  serverMiddleware: [
    {
      path: '/server-middleware',
      handler: '~/server-middleware/fetch-cat-breed.js',
    },
  ],
}
