const fontsMetaList = [
  {
    type: 'font/woff2',
    href: '/fonts/HelveticaNeue.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },
  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/HelveticaNeueItalic.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },
  {
    type: 'font/woff',
    href: '/fonts/HelveticaNeue.woff',
    crossorigin: 'anonymous',
    as: 'font',
  },
  {
    rel: 'preload',
    type: 'font/woff',
    href: '/fonts/HelveticaNeueItalic.woff',
    crossorigin: 'anonymous',
    as: 'font',
  },
]
export const useFonts = () => {
  useHead({
    link: [...fontsMetaList],
  })
}
