<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useLibraryStory } from '~/composables/stories/library.story'
useTransition()
useObserver('.section')


const { story } = await useLibraryStory()
const { open: openPopup } = useFormPopup()




const date = story.value.first_published_at || story.value.created_at

const onRegistration = (e: Event) => {
  const el = e.currentTarget as HTMLElement
  console.log(el.dataset)
  if (el.dataset.action === 'webinar_reg_form') {

    e.preventDefault()
    openPopup()
  }
}

onMounted(() => {
  const $content = document.querySelector('.internal-news-2__content')
  const $btns = $content.querySelectorAll('.circle-button')
  $btns.forEach(el => {
    el.addEventListener('click',onRegistration)
  })
})
onBeforeUnmount(() => {
  const $content = document.querySelector('.internal-news-2__content')
  const $btns = $content.querySelectorAll('.circle-button')
  $btns.forEach(el => {
    el.removeEventListener('click',onRegistration)
  })
})

</script>
  
  <template>
  <main>
    <PageMeta
      v-if="story.content.meta.length"
      :meta="story.content.meta[0]"
    />
    <PostItem
      :title="story.content.title"
      :date="date"
      :image="story.content.big_image.filename"
      :blocks="story.content.blog_section"
    />
    <teleport to='body'>
      <FormPopup
        title="Registration request"
        form-title="EDUCATION & TRAINING Registration"
      />
    </teleport>
  </main>
</template>
  