import { iLink } from '~/types/story'

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
