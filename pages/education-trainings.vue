<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useLibraryStory } from '~/composables/stories/library.story'
useTransition()
useObserver('.section')


const { story } = await useLibraryStory()

const date = story.value.first_published_at || story.value.created_at

console.log(story)
</script>

<template>
  <main>
    <PageMeta
      :title="story.content.meta[0].title"
      :description="story.content.meta[0].description"
    />
    <PostItem
      :title="story.content.title"
      :date="date"
      :image="story.content.big_image.filename"
      :blocks="story.content.blog_section"
    />
  </main>
</template>
