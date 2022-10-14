import { Ref } from 'nuxt/dist/app/compat/capi'
import { iStory } from '~/types/story'

type tProjectStories = () => Promise<{
  stories: Ref<iStory[]>
  story: Ref<iStory>
  listenStory: (arg0: string | string[]) => void
}>

export const useProjectsStories: tProjectStories = async () => {
  const stories = useState<iStory[]>('projectsStory', null)
  const story = useState<iStory>('projectStory', null)
  const storyapi = useStoryblokApi()

  try {
    const { data } = await storyapi.get('cdn/stories/?by_slugs=projects/*', {
      version: 'draft',
    })
    stories.value = data.stories.filter(s => s.name !== 'Index')
    story.value = data.stories.find(s => s.name === 'Index')
  } catch (e) {
    console.log(e.message)
  }

  useCustomBridge(story.value.id, evStory => {
    story.value = evStory
  })

  const listenStory = (slug: string) => {
    const currentStory = stories.value.find(story => story.slug === slug)
    useCustomBridge(currentStory.id, evStory => {
      stories.value = stories.value.filter(story => story.slug !== slug)
      stories.value = [...stories.value, evStory]
    })
  }

  return { stories, story, listenStory }
}
