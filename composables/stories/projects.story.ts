import { Ref } from 'nuxt/dist/app/compat/capi'
import { iStory } from '~~/types/story'

type tProjectStories = () => Promise<{ stories: Ref<iStory[]> }>

export const useProjectsStories: tProjectStories = async () => {
  const stories = useState<[]>('projectsStory', null)
  const storyapi = useStoryblokApi()

  try {
    const { data } = await storyapi.get('cdn/stories/?by_slugs=projects/*', {
      version: 'draft',
    })
    stories.value = data.stories.filter(s => s.name !== 'Index')
  } catch (e) {
    console.log(e.message)
  }

  return { stories }
}
