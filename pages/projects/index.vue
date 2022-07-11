<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useProjectsStories } from '~/composables/stories/projects.story'

useTransition()
useObserver('.section')

const { stories,story } = await useProjectsStories()
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
          Key Project
          <span class="projects-1__span-title">Highlights</span>
        </h1>
      </div>
    </section>
    <section class="section projects-2">
      <div class="container">
        <ul class="grid news-images projects-list">
          <NewsItem
            v-for="item in stories"
            :key="item._uid"
            :date="item.first_published_at || item.created_at"
            :name="item.name"
            :link="'/projects/' + item.slug + '/'"
            :img="item.content.Screen_1[0].main_image.filename"
            :description="item.content.description"
          />
        </ul>
      </div>
    </section>
  </main>
</template>
