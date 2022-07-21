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
      v-if="story.content.meta.length"
      :meta="story.content.meta[0]"
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
        <ul class="features-items">
          <FeatureItem
            v-for="(item,idx) in stories"
            :key="item._uid"
            :idx="idx"
            :title="item.name"
            :link="'/features/' + item.slug + '/'"
            :text="item.content.description"
            :is-last="idx + 1 === stories.length"
          />
        </ul>
      </div>
    </section>
  </main>
</template>
