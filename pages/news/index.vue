<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useNewsStories } from '~/composables/stories/news.story'

useTransition()
useObserver('.section')

const { stories, story } = await useNewsStories()

const splitText = useSplitText()
console.log(stories.value)
</script>

<template>
  <main>
    <PageMeta v-if="story.content.meta.length" :meta="story.content.meta[0]" />
    <section class="section section--nm news-1">
      <div class="container news-1__wrapper">
        <h1 class="news-1__title" data-a-h v-html="splitText('Latest news')" />
      </div>
    </section>
    <section data-a-t class="section news-2">
      <div class="container news-2__wrapper">
        <ul class="news-2__image-list image-list">
          <ProjectListItem
            v-for="(item, idx) in stories"
            :key="item._uid"
            :image="item?.content?.big_image?.filename"
            :title="item.name"
            :number="idx + 1"
            :slug="`/news/` + item.slug"
            :description="item.content.description"
          />
        </ul>
      </div>
    </section>
  </main>
</template>
