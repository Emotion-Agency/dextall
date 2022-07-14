<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useFeaturesStories } from '~/composables/stories/features.story'

useTransition()
useObserver('.section')

const { stories,story } = await useFeaturesStories()
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
          v-html="splitText('Dextall Studio Growing Features list')"
        />
      </div>
    </section>
    <section
      data-a-o
      class="section news-2"
    >
      <div class="container news-2__wrapper">
        <ul class="grid news-images">
          <NewsItem
            v-for="item in stories"
            :key="item._uid"
            :date="item.first_published_at || item.created_at"
            :name="item.name"
            :link="'/features/' + item.slug + '/'"
            :img="item?.content?.big_image?.filename"
            :description="item.content.description"
          />
        </ul>
      </div>
    </section>
  </main>
</template>
