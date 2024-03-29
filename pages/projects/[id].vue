<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useProjectsStories } from '~/composables/stories/projects.story'
import { delayPromise, keysGenerator } from '~~/scripts/utils/ea'

useTransition()
useObserver('.section')

const { stories, listenStory } = await useProjectsStories()

const slug = useRoute().params.id

listenStory(slug)

const story = computed(() => {
  return stories.value.find(story => story.slug === slug).content
})

const filteredStories = computed(() => {
  return stories.value.filter(story => story.slug !== slug)
})

const getTransformedImage = useTransformedImage()

onMounted(async () => {
  const w = screen.width
  if (story.value?.Screen_2[0]?.gallery?.length < 5 && w > 1024) {
    return
  }
  await delayPromise(2000)
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
  return (
    story.value?.Screen_2[0]?.gallery?.map(img => ({
      _id: keysGenerator(8),
      img: getTransformedImage(img.image.filename, 1920),
    })) || []
  )
})

const splitText = useSplitText()

const darken = computed(() => {
  return story.value?.Screen_1[0]?.main_image_darken ?? 20
})

const specs = computed(() => {
  return filteredStories.value.map(story => {
    return story.content.Screen_4[0].object_specifications.slice(0, 3)
  })
})
</script>

<template>
  <main>
    <PageMeta v-if="story.meta.length" :meta="story.meta[0]" />
    <section
      v-if="story?.Screen_1.length"
      class="section section--nm project-1"
    >
      <ParallaxImg
        v-if="story.Screen_1[0].main_image"
        data-a-o
        class="project-1__bg"
        :src="story.Screen_1[0].main_image.filename"
        :width="1920"
        :height="1080"
        :with-border-radius="false"
        :style="`--darken: ${darken / 100}`"
      />
      <div class="container project-1__wrapper">
        <div class="project-1__text-block">
          <p data-a-t class="project-1__text">
            {{ story.Screen_1[0].small_text }}
          </p>
          <h1
            v-if="story.Screen_1[0].project_name"
            data-a-h
            class="project-1__title"
            v-html="splitText(story.Screen_1[0].project_name)"
          />
        </div>
        <p
          v-if="story.Screen_1[0].project_description"
          data-a-t
          class="project-1__desc"
        >
          {{ story.Screen_1[0].project_description }}
        </p>
      </div>
    </section>
    <section v-if="story.Screen_2[0]?.length" class="section project-2">
      <div class="container project-2__wrapper">
        <div class="project-2__line"></div>
        <p v-if="story.Screen_2[0].main_fact" class="project-2__text">
          {{ story.Screen_2[0]?.main_fact }}
        </p>
        <div class="project-2__line"></div>
      </div>
    </section>
    <section
      v-if="story.Screen_2.length && story.Screen_2[0]?.gallery.length"
      class="section project-3"
    >
      <div class="container project-3__wrapper">
        <h2 class="project-3__title">Project Gallery</h2>
        <CircleButton class="project-3__btn" @click="openSlider(0)"
          >Full screen mode</CircleButton
        >
      </div>
      <div
        v-if="story.Screen_2[0]?.gallery.length"
        data-slider
        dragable="false"
        :class="
          story.Screen_2[0]?.gallery.length < 5 && 'project-3__img-list-wrapper'
        "
      >
        <ul
          class="project-3__img-list"
          :class="
            story.Screen_2[0].gallery.length < 5 &&
            'project-3__img-list--center'
          "
          data-slider-inner
        >
          <li
            v-for="(img, idx) in story.Screen_2[0].gallery"
            :key="img._uid"
            class="project-3__li"
            data-slide
          >
            <div class="project-3__img-wrapper">
              <img
                class="project-3__img"
                :src="getTransformedImage(img.image.filename, 800)"
                alt="Building"
              />
            </div>
            <p class="project-3__number">0{{ idx + 1 }}</p>
          </li>
        </ul>
      </div>
    </section>
    <section v-if="story.Screen_3?.length" class="section project-4">
      <div class="container project-4__wrapper">
        <h2 v-if="story.Screen_3[0].title" class="project-4__title">
          {{ story.Screen_3[0].title }}
        </h2>
        <div class="grid project-4__block-wrapper">
          <div class="project-4__left-block">
            <ParallaxImg
              v-if="story.Screen_3[0]?.left_image"
              class="project-4__img"
              :src="story.Screen_3[0].left_image.filename"
              :width="815"
              :height="780"
            />

            <p v-if="story.Screen_3[0].left_text" class="project-4__desc">
              {{ story.Screen_3[0].left_text }}
            </p>
          </div>
          <div class="project-4__right-block">
            <ParallaxImg
              v-if="story.Screen_3[0]?.right_image"
              class="project-4__img"
              :src="story.Screen_3[0].right_image.filename"
              :width="935"
              :height="390"
            />
            <p v-if="story.Screen_3[0].right_text" class="project-4__desc">
              {{ story.Screen_3[0].right_text }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section v-if="story.Screen_4.length" class="section project-5">
      <ParallaxImg
        v-if="story.Screen_4[0]?.image"
        class="project-5__bg"
        :src="story.Screen_4[0].image.filename"
        :width="1920"
        :height="1080"
        :with-border-radius="false"
      />
      <div class="container grid project-5__wrapper">
        <h2 v-if="story.Screen_4[0].title" class="project-5__title">
          {{ story.Screen_4[0].title }}
        </h2>
        <p v-if="story.Screen_4[0].left_text" class="project-5__text">
          {{ story.Screen_4[0].left_text }}
        </p>
        <p v-if="story.Screen_4[0].right_text" class="project-5__text">
          {{ story.Screen_4[0].right_text }}
        </p>
      </div>
    </section>
    <section class="section project-6">
      <TheTicker
        v-if="story.Screen_1[0]?.project_name"
        :text="story.Screen_1[0].project_name"
        class="project-6__ticker"
      />
      <div class="container project-6__wrapper">
        <div class="grid project-6__content">
          <ul
            v-if="
              story.Screen_4.length && story.Screen_4[0]?.object_specifications
            "
            class="project-6__list"
          >
            <li
              v-for="(item, idx) in story.Screen_4[0].object_specifications"
              :key="item._uid"
              class="project-6__li"
            >
              <div class="project-6__line"></div>
              <div class="project-6__text-wrapper">
                <p class="project-6__title">{{ item?.specification_name }}</p>
                <p class="project-6__text">{{ item?.specification }}</p>
              </div>
              <div
                v-if="
                  idx === story.Screen_4[0]?.object_specifications?.length - 1
                "
                class="project-6__line"
              ></div>
            </li>
          </ul>

          <ParallaxImg
            v-if="story?.Screen_4[0]?.specification_image"
            class="project-6__image-wrapper"
            :src="story?.Screen_4[0]?.specification_image.filename"
            :width="816"
            :height="1000"
          />
        </div>
      </div>
    </section>
    <section v-if="story.Screen_5.length" class="section project-7">
      <div class="container grid project-7__wrapper">
        <div class="project-7__text-block">
          <h2 class="project-7__big-text">
            Interesting facts about the project
          </h2>
          <p v-if="story.Screen_5[0].main_text" class="project-7__desc">
            {{ story.Screen_5[0].main_text }}
          </p>
        </div>
        <ParallaxImg
          v-if="story.Screen_5[0]?.upper_image"
          :src="story.Screen_5[0].upper_image.filename"
          :width="815"
          :height="899"
          img-class="project-7__img"
          class="project-7__image-top"
        />

        <ParallaxImg
          v-if="story.Screen_5[0]?.lower_image"
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
          <ul class="image-list">
            <ProjectListItem
              v-for="(item, idx) in filteredStories"
              :key="item._uid"
              :image="item?.content?.Screen_1[0]?.main_image.filename"
              :title="item.name"
              :number="idx + 1"
              :slug="`/projects/` + item.slug"
              :params="specs[idx]"
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
