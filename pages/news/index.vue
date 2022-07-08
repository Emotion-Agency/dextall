<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useNewsStories } from '~/composables/stories/news.story'

useTransition()
useObserver('.section')

const { stories } = await useNewsStories()

console.log(stories)
</script>

<template>
  <main>
    <section class="section section--nm news-1">
      <div class="container news-1__wrapper">
        <h1 class="news-1__title">Latest news</h1>
      </div>
    </section>
    <section class="section news-2">
      <div class="container news-2__wrapper">
        <ul class="grid news-images">
          <NewsItem
            v-for="item in stories"
            :key="item._uid"
            :date="item.first_published_at || item.created_at"
            :name="item.name"
            :link="'/news/' + item.slug + '/'"
            :img="item?.content?.big_image?.filename"
            description="test"
          />
        </ul>
      </div>
    </section>
  </main>
</template>
