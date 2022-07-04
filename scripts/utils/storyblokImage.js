export const transformImage = (
  image,
  option = 'filters:quality(92):format(webp)'
) => {
  if (!image) return ''

  const imageService = 'https://a.storyblok.com'
  const path = image.replace(imageService, '')

  return imageService + path + '/m/' + option
}
