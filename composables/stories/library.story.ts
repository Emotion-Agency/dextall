export const useLibraryStory = async () => {
  const story = ref(null)
  const storyapi = useStoryblokApi()

  try {
    const { data } = await storyapi.get('cdn/stories/education-trainings', {
      version: 'draft',
    })
    story.value = data.story
  } catch (e) {
    console.log(e.message)
  }

  return { story }
}
