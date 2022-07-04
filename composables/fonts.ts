const fontsMetaList = [
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
