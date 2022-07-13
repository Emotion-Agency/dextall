const fontsMetaList = [
  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/NeueHelvetica55Roman/font.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },
  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/NeueHelvetica56Italic/font.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },
]
export const useFonts = () => {
  useHead({
    link: [...fontsMetaList],
  })
}
