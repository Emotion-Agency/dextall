export const useTransformLink = () => {
  return (link: { linktype: string; url: string }) => {
    const tag = link.linktype === 'url' ? 'a' : 'nuxt-link'
    const href = link.url
    return { tag, href }
  }
}
