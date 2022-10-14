<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { usePrivacyStory } from '~/composables/stories/privacy.story'
useTransition()
useObserver('.section')


const { stories, listenStory } = await usePrivacyStory()


const slug = useRoute().params.id

listenStory(slug)



const story = stories.value.find(story => story.slug === slug)

const date = story.first_published_at || story.created_at

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
  </main>
</template>
