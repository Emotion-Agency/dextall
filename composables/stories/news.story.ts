import { Ref } from 'nuxt/dist/app/compat/capi'
import { iStory } from '~/types/story'

type tNewsStories = () => Promise<{
  stories: Ref<iStory[]>
  story: Ref<iStory>
}>

export const useNewsStories: tNewsStories = async () => {
  const stories = useState<iStory[]>('newsStory', null)
  const story = useState<iStory>('newsPageStory', null)

  const storyapi = useStoryblokApi()

  try {
    const { data } = await storyapi.get('cdn/stories/?by_slugs=news/*', {
      version: 'draft',
    })
    stories.value = data.stories.filter(s => s.name !== 'Index')
    story.value = data.stories.find(s => s.name === 'Index')
  } catch (e) {
    console.log(e.message)
  }

  return { stories, story }
}
