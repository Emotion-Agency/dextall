<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useNewsStories } from '~/composables/stories/news.story'

useTransition()
useObserver('.section')

const { stories,story } = await useNewsStories()

const splitText = useSplitText()
</script>

<template>
  <main>
    <PageMeta
      :title="story.content.meta[0].title"
      :description="story.content.meta[0].description"
    />
    <section class="section section--nm news-1">
      <div class="container news-1__wrapper">
        <h1
          class="news-1__title"
          data-a-h
          v-html="splitText('Latest news')"
        />
      </div>
    </section>
    <section
      data-a-t
      class="section news-2"
    >
      <div class="container news-2__wrapper">
        <ul class="grid news-images">
          <NewsItem
            v-for="(item,idx) in stories"
            :key="item._uid"
            :idx="idx"
            :date="item.first_published_at || item.created_at"
            :name="item.name"
            :link="'/news/' + item.slug + '/'"
            :img="item?.content?.big_image?.filename"
            :description="item.content.description"
          />
        </ul>
      </div>
    </section>
  </main>
</template>
