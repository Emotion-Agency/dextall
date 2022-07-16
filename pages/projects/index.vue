<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useProjectsStories } from '~/composables/stories/projects.story'

useTransition()
useObserver('.section')

const { stories,story } = await useProjectsStories()


const sortedStories = computed(() => {
  return [...stories.value].sort((a,b) => {
    return +a.content.order - b.content.order
  }
  )
})

const splitText = useSplitText()

</script>

<template>
  <main>
    <PageMeta
      :title="story.content.meta[0].title"
      :description="story.content.meta[0].description"
    />
    <section class="section section--nm projects-1">
      <div class="container projects-1__wrapper">
        <h1 class="projects-1__title">

          <span
            data-a-h
            v-html="splitText('Key Project')"
          />
          <span
            data-a-h
            class="projects-1__span-title"
            v-html="splitText('Highlights')"
          />
        </h1>
      </div>
    </section>
    <section
      data-a-t
      class="section projects-2"
    >
      <div class="container">
        <ul class="grid news-images projects-list">
          <NewsItem
            v-for="(item,idx) in sortedStories"
            :key="item._uid"
            :idx="idx"
            :date="item.first_published_at || item.created_at"
            :name="item.name"
            :link="'/projects/' + item.slug + '/'"
            :img="item.content.Screen_1[0].main_image.filename"
          />
        </ul>
      </div>
    </section>
  </main>
</template>
