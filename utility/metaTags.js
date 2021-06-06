const base = [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { name: 'title', content: 'Fur~miliar' },
  {
    hid: 'description',
    name: 'description',
    content:
      'Fur~miliar allows you to search and learn more about various cat breeds!',
  },
]

const openGraph = [
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://furmiliar.amorpheuz.dev/' },
  { property: 'og:title', content: 'Fur~miliar' },
  {
    property: 'og:description',
    content:
      'Fur~miliar allows you to search and learn more about various cat breeds.',
  },
  {
    property: 'og:image',
    content: 'https://furmiliar.amorpheuz.dev/furmiliar-banner.png',
  },
]

const twitter = [
  { property: 'twitter:card', content: 'summary_large_image' },
  { property: 'twitter:url', content: 'https://furmiliar.amorpheuz.dev/' },
  { property: 'twitter:title', content: 'Fur~miliar' },
  {
    property: 'twitter:description',
    content:
      'Fur~miliar allows you to search and learn more about various cat breeds.',
  },
  {
    property: 'twitter:image',
    content: 'https://furmiliar.amorpheuz.dev/furmiliar-banner.png',
  },
]

const metaTags = [...base, ...openGraph, ...twitter]

export default metaTags
