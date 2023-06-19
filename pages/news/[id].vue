<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useNewsStories } from '~/composables/stories/news.story'
useTransition()
useObserver('.section')

const { stories, listenStory } = await useNewsStories()

const slug = useRoute().params.id

listenStory(slug)

const story = computed(() => {
  return stories.value.find(story => story.slug === slug)
})

const filteredStories = computed(() => {
  return stories.value.filter(story => story.slug !== slug)
})

const date = story.value?.first_published_at || story.value?.created_at
</script>

<template>
  <main v-if="story?.content">
    <PageMeta v-if="story.content.meta.length" :meta="story.content.meta[0]" />
    <PostItem
      :title="story.content.title"
      :date="date"
      :image="story.content.big_image.filename"
      :blocks="story.content.blog_section"
    />
    <section class="section internal-news-3">
      <div class="container internal-news-3__wrapper">
        <h2 class="internal-news-3__title">Other news</h2>
        <div class="internal-news-3__images">
          <ul class="image-list">
            <ProjectListItem
              v-for="(item, idx) in filteredStories"
              :key="item._uid"
              :image="item?.content?.big_image?.filename"
              :title="item.name"
              :number="idx + 1"
              :slug="`/news/` + item.slug"
              :date="item.first_published_at || item.created_at"
            />
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>
