interface iLink {
  linktype: string
  url: string
  cached_url: string
}

export const useTransformLink = () => {
  return (link: iLink) => {
    const tag = link.linktype === 'url' ? 'a' : 'nuxt-link'

    const href =
      link.linktype === 'url'
        ? link.url
        : '/' + (link.cached_url + '/').replace('//', '/')
    return { tag, href }
  }
}
