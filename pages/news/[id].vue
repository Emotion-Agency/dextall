<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useNewsStories } from '~/composables/stories/news.story'
useTransition()
useObserver('.section')

const { stories } = await useNewsStories()


const slug = useRoute().params.id


const story = stories.value.find(story => story.slug === slug).content


const filteredStories = computed(() => {
  return stories.value.filter(story => story.slug !== slug)
})

console.log(story)
</script>

<template>
  <main>
    <section class="section section--nm internal-news-1">
      <div class="container internal-news-1__wrapper">
        <h1 class="internal-news-1__title">
          {{ story.title }}
        </h1>
      </div>
      <div
        class="internal-news-1__bg"
        style="background-image: url('/images/news/internal-news/1.jpg')"
      ></div>
    </section>
    <section class="section internal-news-2">
      <div class="container internal-news-2__wrapper">
        <div class="internal-news-2__line"></div>
        <div class="grid internal-news-2__content-wrapper">
          <div class="internal-news-2__filter">
            <button class="internal-news-2__switch">Heading 1</button>
            <button class="internal-news-2__switch">Heading 2</button>
            <button class="internal-news-2__switch">Heading 3</button>
            <button class="internal-news-2__switch">Heading 4</button>
          </div>
          <div class="internal-news-2__content">

            <div
              v-for="block in story.blog_section"
              :key="block._uid"
              class="internal-news-2__block"
            >
              <RichText :text="block.text_formatting" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section internal-news-3">
      <div class="container internal-news-3__wrapper">
        <h2 class="internal-news-3__title">Other news</h2>
        <div class="internal-news-3__images">

          <ul class="grid news-images">
            <NewsItem
              v-for="item in filteredStories"
              :key="item._uid"
              :date="item.first_published_at || item.created_at"
              :name="item.name"
              :link="'/news/' + item.slug + '/'"
              :img="item?.content?.big_image?.filename"
              description="test"
            />
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>
