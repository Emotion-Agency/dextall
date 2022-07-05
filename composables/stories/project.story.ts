export const useProjectStory = async slug => {
  const story = ref(null)
  const storyapi = useStoryblokApi()

  try {
    const { data } = await storyapi.get('cdn/stories/?by_slugs=projects/*', {
      version: 'draft',
    })
    story.value = data.stories
  } catch (e) {
    console.log(e.message)
  }

  return { story }
}
