<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useNewsStories } from '~/composables/stories/news.story'
useTransition()
useObserver('.section')

const { stories } = await useNewsStories()


const slug = useRoute().params.id


const story = stories.value.find(story => story.slug === slug)


const filteredStories = computed(() => {
  return stories.value.filter(story => story.slug !== slug)
})


const date = story.first_published_at || story.created_at

const formattedDate = useFormattedDate(date)

console.log(story)

const getTransformedLink = useTransformLink()


</script>

<template>
  <main>
    <PageMeta
      v-if="story.content.meta.length"
      :title="story.content.meta[0].title"
      :description="story.content.meta[0].description"
    />
    <section class="section section--nm internal-news-1">
      <div class="container internal-news-1__wrapper">
        <h1 class="internal-news-1__title">
          {{ story.content.title }}
        </h1>
      </div>

      <ParallaxImg
        class="internal-news-1__bg"
        :with-border-radius="false"
        :src="story.content.big_image.filename"
        :width="1920"
        :height="1080"
      />
    </section>
    <section class="section internal-news-2">
      <div class="container internal-news-2__wrapper">
        <div class="internal-news-2__line"></div>
        <div class="grid internal-news-2__content-wrapper">
          <time class="internal-news-2__date">
            {{ formattedDate }}
          </time>
          <div class="internal-news-2__content">

            <div
              v-for="block in story.content.blog_section"
              :key="block._uid"
              class="internal-news-2__block"
            >
              <div class="internal-news-2__block-text">
                <RichText :text="block.text_formatting" />
              </div>
              <CircleButton
                v-if="block.button[0]"
                v-bind="getTransformedLink(block.button[0].link)"
                class="internal-news-2__btn"
              > {{ block.button[0].text_button }}
              </CircleButton>
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
