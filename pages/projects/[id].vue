<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useProjectsStories } from '~/composables/stories/projects.story'
import { keysGenerator } from '~~/scripts/utils/ea'

useTransition()
useObserver('.section')

const { stories } = await useProjectsStories()

const slug = useRoute().params.id



const story = computed(() => {
  return stories.value.find(story => story.slug === slug).content
})

const filteredStories = computed(() => {
  return stories.value.filter(story => story.slug !== slug)
})

const getTransformedImage = useTransformedImage()

onMounted(async () => {
  const { Carousel } = await import('~/scripts/Carousel')

  const carousel = new Carousel()
  carousel.init()
})



const isSliderOpen = ref(false)
const startFrom = ref(0)

const openSlider = (idx = 0) => {
  startFrom.value = idx
  isSliderOpen.value = true
  window.ss && (window.ss.isFixed = true)
}
const closeSlider = () => {
  startFrom.value = 0
  isSliderOpen.value = false
  window.ss && (window.ss.isFixed = false)
}

const imagesSlides = computed(() => {
  return story.value.Screen_2[0].gallery.map(img => ({
    _id: keysGenerator(8),
    img: getTransformedImage(
      img.image.filename,
      1920
    ),
  }))
})
</script>

<template>
  <main>
    <PageMeta
      v-if="story.meta.length"
      :title="story.meta[0].title"
      :description="story.meta[0].description"
    />
    <section class="section section--nm project-1">
      <ParallaxImg
        class="project-1__bg"
        :src="story.Screen_1[0].main_image.filename"
        :width="1920"
        :height="1080"
        :with-border-radius="false"
      />
      <div class="container project-1__wrapper">
        <div class="project-1__text-block">
          <p class="project-1__text">
            {{ story.Screen_1[0].small_text }}
          </p>
          <h1 class="project-1__title">
            {{ story.Screen_1[0].project_name }}
          </h1>
        </div>
        <p class="project-1__desc">
          {{ story.Screen_1[0].project_description }}
        </p>
      </div>
    </section>
    <section
      v-if="story.Screen_2[0].main_fact"
      class="section project-2"
    >
      <div class="container project-2__wrapper">
        <div class="project-2__line"></div>
        <p class="project-2__text">
          {{ story.Screen_2[0].main_fact }}
        </p>
        <div class="project-2__line"></div>
      </div>
    </section>
    <section
      v-if="story.Screen_2[0].gallery.length"
      class="section project-3"
    >
      <div class="container project-3__wrapper">
        <h2 class="project-3__title">Project Gallery</h2>
        <CircleButton
          class="project-3__btn"
          @click="openSlider(0)"
        >Full screen mode</CircleButton>
      </div>
      <div
        data-slider
        dragable="false"
      >
        <ul
          class="project-3__img-list"
          data-slider-inner
        >
          <li
            v-for="(img,idx) in story.Screen_2[0].gallery"
            :key="img._uid"
            class="project-3__li"
            data-slide
          >
            <div class="project-3__img-wrapper">
              <img
                class="project-3__img"
                :src="getTransformedImage(img.image.filename,800)"
                alt="Building"
              />
            </div>
            <p class="project-3__number">0{{ idx + 1 }}</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="section project-4">
      <div class="container project-4__wrapper">
        <h2 class="project-4__title">
          {{ story.Screen_3[0].title }}
        </h2>
        <div class="grid project-4__block-wrapper">
          <div class="project-4__left-block">
            <ParallaxImg
              class="project-4__img"
              :src="story.Screen_3[0].left_image.filename"
              :width="815"
              :height="780"
            />

            <p class="project-4__desc">
              {{ story.Screen_3[0].left_text }}
            </p>
          </div>
          <div class="project-4__right-block">
            <ParallaxImg
              class="project-4__img"
              :src="story.Screen_3[0].right_image.filename"
              :width="935"
              :height="390"
            />
            <p class="project-4__desc">
              {{ story.Screen_3[0].right_text }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section project-5">
      <ParallaxImg
        class="project-5__bg"
        :src="story.Screen_4[0].image.filename"
        :with-border-radius="false"
      />
      <div class="container grid project-5__wrapper">
        <h2 class="project-5__title">{{ story.Screen_4[0].title }}</h2>
        <p class="project-5__text">
          {{ story.Screen_4[0].left_text }}
        </p>
        <p class="project-5__text">
          {{ story.Screen_4[0].right_text }}
        </p>
      </div>
    </section>
    <section class="section project-6">
      <TheTicker
        :text="story.Screen_1[0].project_name"
        class="project-6__ticker"
      />
      <div class="container project-6__wrapper">
        <div class="grid project-6__content">
          <ul class="project-6__list">
            <li
              v-for="(item,idx) in story.Screen_4[0].object_specifications"
              :key="item._uid"
              class="project-6__li"
            >
              <div class="project-6__line"></div>
              <div class="project-6__text-wrapper">
                <p class="project-6__title">{{ item.specification_name }}</p>
                <p class="project-6__text">{{ item.specification }}</p>
              </div>
              <div
                v-if="idx === story.Screen_4[0].object_specifications.length - 1"
                class="project-6__line"
              ></div>

            </li>
          </ul>

          <ParallaxImg
            class="project-6__image-wrapper"
            :src="story.Screen_4[0].specification_image.filename"
            :width="816"
            :height="1000"
          />

        </div>
      </div>
    </section>
    <section class="section project-7">
      <div class="container grid project-7__wrapper">
        <div class="project-7__text-block">
          <h2 class="project-7__big-text">
            Interesting facts about the project
          </h2>
          <p class="project-7__desc">
            {{ story.Screen_5[0].main_text }}
          </p>
        </div>
        <ParallaxImg
          :src="story.Screen_5[0].upper_image.filename"
          :width="815"
          :height="899"
          img-class="project-7__img"
          class="project-7__image-top"
        />

        <ParallaxImg
          :src="story.Screen_5[0].lower_image.filename"
          :width="1173"
          :height="899"
          img-class="project-7__img"
          class="project-7__image-bottom"
          data-parallax="0.1"
          data-parallax-dir="-1"
        />
      </div>
    </section>
    <section class="section internal-news-3">
      <div class="container internal-news-3__wrapper">
        <h2 class="internal-news-3__title">Other projects</h2>
        <div class="internal-news-3__images">

          <ul class="grid news-images">
            <NewsItem
              v-for="item in filteredStories"
              :key="item._uid"
              :date="item.first_published_at || item.created_at"
              :name="item.name"
              :link="'/projects/' + item.slug + '/'"
              :img="item?.content?.Screen_1[0].main_image.filename"
            />
          </ul>
        </div>
      </div>
    </section>
    <SliderWindow
      :items="imagesSlides"
      :is-open="isSliderOpen"
      :start-from="startFrom"
      @close="closeSlider"
    />
  </main>
</template>
