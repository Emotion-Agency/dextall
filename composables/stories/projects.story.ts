import { Ref } from 'nuxt/dist/app/compat/capi'
import { iStory } from '~/types/story'

type tProjectStories = () => Promise<{
  stories: Ref<iStory[]>
  story: Ref<iStory>
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

  stories.value = stories.value
    .map(s => {
      useStoryblokBridge(s.id, evStory => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        s = evStory as any
      })
      return s
    })
    .filter(s => s.name !== 'Index')

  return { stories, story }
}
