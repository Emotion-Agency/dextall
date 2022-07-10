import { transformImage } from '~~/scripts/utils/storyblokImage'

export const useTransformedImage =
  () =>
  (src: string, width = 0, height = 0) => {
    return transformImage(src, { size: `${width}x${height}` })
  }
