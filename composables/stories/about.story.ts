export const useAboutStory = async () => {
  const initStory = ref(null)

  const storyapi = useStoryblokApi()

  try {
    const { data } = await storyapi.get('cdn/stories/about', {
      version: 'draft',
    })
    initStory.value = data.story
  } catch (e) {
    console.log(e.message)
  }

  useCustomBridge(initStory.value.id, evStory => {
    initStory.value = evStory
  })

  const story = computed(() => {
    return initStory.value?.content
  })

  return { story }
}
