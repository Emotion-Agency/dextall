<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useProjectsStories } from '~/composables/stories/projects.story'

useTransition()
useObserver('.section')

const { stories,story } = await useProjectsStories()

console.log(stories.value)

console.log(story.value)
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
      <ul class="projects-list">
        <li
          v-for="project in stories"
          :key="project._uid"
          class="project-item"
        >
          <NuxtLink
            :to="'/projects/' + project.slug + '/'"
            class="project-link"
          >
            <ProjectsTicker
              class="projects-2__ticker"
              :text="project.name"
            />
            <div class="container projects-2__wrapper">
              <p class="projects-2__text">
                {{ project.content?.Screen_1 && project.content.Screen_1[0].description }}
              </p>
              <div class="grid projects-2__img-wrapper">
                <ParallaxImg
                  v-for="(item,idx) in project.content?.Screen_2[0].gallery"
                  :key="idx"
                  class="projects-2__img"
                  :src="item?.image?.filename"
                  :height="600"
                  :width="600"
                  :transform="false"
                  :scale="1.2"
                />
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </main>
</template>
