<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useFeaturesStories } from '~/composables/stories/features.story'
useTransition()
useObserver('.section')

const { stories } = await useFeaturesStories()


const slug = useRoute().params.id


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
    <section class="section internal-news-3">
      <div class="container internal-news-3__wrapper">
        <h2 class="internal-news-3__title">Other features</h2>
        <div class="internal-news-3__images">

          <ul class="features-items">
            <FeatureItem
              v-for="(item,idx) in filteredStories"
              :key="item._uid"
              :idx="idx"
              :title="item.name"
              :link="'/features/' + item.slug + '/'"
              :text="item.content.description"
              :is-last="idx + 1 === stories.length"
            />
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>
