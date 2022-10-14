import { useCustomBridge } from '../customBridge'

export const useHomeStory = async () => {
  const initStory = ref(null)
  const storyapi = useStoryblokApi()

  try {
    const { data } = await storyapi.get('cdn/stories/home', {
      version: 'draft',
    })
    initStory.value = data.story
  } catch (e) {
    console.log(e.message)
  }

  const getH6Title = (string: string) => {
    const words = string.split(' ')

    words[0] = `<span class="home-6__b-text home-6__b-text--small">${words[0]}</span>`

    return words.join(' ')
  }

  const getH9Title = (string: string) => {
    let words = string.split(' ')

    words = words.map(word => {
      if (word === 'and') {
        return `<span class="home-9__b-text home-9__b-text--small">${word}</span>`
      }

      return word
    })

    return words.join(' ')
  }

  useCustomBridge(initStory.value.id, evStory => {
    initStory.value = evStory
  })

  const story = computed(() => {
    return initStory.value?.content
  })

  return { getH6Title, getH9Title, story }
}
