import { Ref } from 'nuxt/dist/app/compat/capi'
import { iStory } from '~/types/story'

type tNewsStories = () => Promise<{
  stories: Ref<iStory[]>
  listenStory: (arg0: string | string[]) => void
}>

export const usePrivacyStory: tNewsStories = async () => {
  const stories = useState<iStory[]>('newsStory', null)

  const storyapi = useStoryblokApi()

  try {
    const { data } = await storyapi.get(
      'cdn/stories/?by_slugs=terms-privacy/*',
      {
        version: 'draft',
      }
    )
    stories.value = data.stories.filter(s => s.name !== 'Index')
  } catch (e) {
    console.log(e.message)
  }

  const listenStory = (slug: string) => {
    const currentStory = stories.value.find(story => story.slug === slug)
    useCustomBridge(currentStory.id, evStory => {
      stories.value = stories.value.filter(story => story.slug !== slug)
      stories.value = [...stories.value, evStory]
    })
  }

  return { stories, listenStory }
}
