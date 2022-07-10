export const useBimStory = async () => {
  const story = ref(null)
  const storyapi = useStoryblokApi()

  try {
    const { data } = await storyapi.get('cdn/stories/bim', {
      version: 'draft',
    })
    story.value = data.story.content
  } catch (e) {
    console.log(e.message)
  }

  return { story }
}
