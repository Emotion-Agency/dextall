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

  return { stories, story }
}
