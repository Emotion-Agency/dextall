import { Ref } from 'nuxt/dist/app/compat/capi'
import { iStory } from '~/types/story'

type tNewsStories = () => Promise<{ stories: Ref<iStory[]> }>

export const useNewsStories: tNewsStories = async () => {
  const stories = useState<[]>('newsStory', null)
  const storyapi = useStoryblokApi()

  try {
    const { data } = await storyapi.get('cdn/stories/?by_slugs=news/*', {
      version: 'draft',
    })
    stories.value = data.stories.filter(s => s.name !== 'Index')
  } catch (e) {
    console.log(e.message)
  }

  return { stories }
}
