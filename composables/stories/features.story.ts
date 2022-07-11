import { Ref } from 'nuxt/dist/app/compat/capi'
import { iStory } from '~/types/story'

type tFeaturesStories = () => Promise<{
  stories: Ref<iStory[]>
  story: Ref<iStory>
}>

export const useFeaturesStories: tFeaturesStories = async () => {
  const stories = useState<iStory[]>('featuresStory', null)
  const story = useState<iStory>('featuresPageStory', null)

  const storyapi = useStoryblokApi()

  try {
    const { data } = await storyapi.get('cdn/stories/?by_slugs=features/*', {
      version: 'draft',
    })
    stories.value = data.stories.filter(s => s.name !== 'Index')
    story.value = data.stories.find(s => s.name === 'Index')
  } catch (e) {
    console.log(e.message)
  }

  useStoryblokBridge(story.value.id, evStory => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    story.value = evStory as any
  })

  stories.value = stories.value.map(s => {
    useStoryblokBridge(s.id, evStory => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      s = evStory as any
    })
    return s
  })

  return { stories, story }
}
