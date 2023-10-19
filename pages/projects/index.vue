<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useProjectsStories } from '~/composables/stories/projects.story'

useTransition()
useObserver('.section')

const { stories, story } = await useProjectsStories()

const activeFilter = ref(null)

const filteredStories = computed(() => {
  if (activeFilter.value === null) return stories.value

  return stories.value.filter(story => {
    return story.content.category === activeFilter.value
  })
})

const sortedStories = computed(() => {
  return [...filteredStories.value].sort((a, b) => {
    return +a.content.order - b.content.order
  })
})

const splitText = useSplitText()

const specs = computed(() => {
  return sortedStories.value.map(story => {
    return story.content?.Screen_4[0]?.object_specifications.slice(0, 3)
  })
})

const cats = computed(() => {
  return [
    ...new Set(
      sortedStories.value
        .map(story => {
          return story.content.category
        })
        .filter(item => item !== undefined)
    ),
  ]
})

const isUpdating = ref(false)

const onFilter = (cat: string) => {
  isUpdating.value = true

  setTimeout(() => {
    if (cat === 'All') {
      activeFilter.value = null
    } else {
      activeFilter.value = cat
    }
    setTimeout(() => {
      window?.parallax && window?.parallax?.update()
    }, 0)
    isUpdating.value = false
  }, 500)
}
</script>

<template>
  <main>
    <PageMeta v-if="story.content.meta.length" :meta="story.content.meta[0]" />
    <section class="section section--nm projects-1">
      <div class="container projects-1__wrapper">
        <h1 class="projects-1__title">
          <span data-a-h v-html="splitText('Key Project')" />
          <span
            data-a-h
            class="projects-1__span-title"
            v-html="splitText('Highlights')"
          />
        </h1>
      </div>
    </section>
    <section data-a-t class="section projects-2">
      <div class="container">
        <Filters :filters="cats" @filter="onFilter" />
        <ul class="image-list" :class="[isUpdating && 'image-list--updating']">
          <ProjectListItem
            v-for="(item, idx) in sortedStories"
            :key="item._uid"
            :image="item?.content?.Screen_1[0]?.main_image?.filename"
            :title="item.name"
            :params="specs[idx]"
            :number="idx + 1"
            :slug="`/projects/` + item.slug"
          />
        </ul>
      </div>
    </section>
  </main>
</template>
