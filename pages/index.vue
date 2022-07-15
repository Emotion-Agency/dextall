<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useHomeStory } from '~/composables/stories/home.story'
import { useProjectsStories } from '~/composables/stories/projects.story'
import { useNewsStories } from '~/composables/stories/news.story'
import { useTransformLink } from '~~/composables/transformLink'

useTransition()
useObserver('.section')
const { getH6Title,getH9Title,story } = await useHomeStory()
const projects = ref(null)
const news = ref(null)

const projectsData = await useProjectsStories()
const newsData = await useNewsStories()



projects.value = projectsData.stories.value
  .filter(prj => prj.content.featured_on_home)
  .filter((_,idx) => idx <= 2)

news.value = newsData.stories.value.filter((_,idx) => idx <= 2)



let scrollSequence
const $sequenceContainer = ref(null)
onMounted(async () => {
  const initImages = story.value?.home_screen_2[0]?.frames
  const images = initImages?.sort((a,b) => a.filename.slice(-8).localeCompare(b.filename.slice(-8)))

  const { ScrollSequence } = await import('~/scripts/PlaySequence')
  scrollSequence = new ScrollSequence({
    container: $sequenceContainer.value,
    images,
    priorityFrames: [],
    cover: true,
  })
})

onBeforeUnmount(() => {
  scrollSequence && scrollSequence.destroy()
})

const getTransformedLink = useTransformLink()
const splitText = useSplitText()
</script>

<template>
  <main>

    <PageMeta
      :title="story.meta[0].title"
      :description="story.meta[0].description"
    />
    <section class="section section--nm home-1">
      <div class="container home-1__wrapper">
        <HomeSlider :slides="story.home_screen_1[0].Images[0].home_slider_image" />
        <p
          data-a-t
          class="home-1__desc"
        >
          {{ story.home_screen_1[0].Description }}
        </p>
        <h1 class="grid home-1__bottom-block">
          <span
            data-a-h
            class="home-1__title"
            v-html="splitText('Unitized ')"
          />
          <span
            data-a-h
            class="home-1__title"
            v-html="splitText('prefabricated ')"
          />
          <span
            data-a-h
            class="home-1__title"
            v-html="splitText('exterior ')"
          />
          <span
            data-a-h
            class="home-1__title"
            v-html="splitText('wall ')"
          />
          <span
            data-a-h
            class="home-1__title"
            v-html="splitText('system')"
          />

        </h1>
      </div>
    </section>

    <section class="section home-2 scroll-sequence__container">
      <div
        ref="$sequenceContainer"
        data-spli
        data-loaded="0"
        class="home-2__background scroll-sequence"
      ></div>
      <div class="container">
        <div class="home-2__wrapper">
          <div class="home-2__block">
            <p class="home-2__text">
              {{ story.home_screen_2[0].main_text1 }}
            </p>
          </div>
          <div class="home-2__block">
            <h2 class="home-2__title-block">
              <span class="home-2__title">Breakthrough</span>
              <span class="home-2__title"> In BIM</span>
              <span class="home-2__title"> Technology</span>
            </h2>
            <p class="home-2__desc">
              {{ story.home_screen_2[0].main_text_2 }}
            </p>
          </div>
          <div class="home-2__block">
            <p class="home-2__text">
              {{ story.home_screen_2[0].main_text_3 }}
            </p>
          </div>
          <div class="home-2__block">
            <p class="home-2__text">
              {{ story.home_screen_2[0].main_text_4 }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section home-3">
      <TheTicker :text="story.home_screen_3[0].title" />
      <div class="container grid home-3__wrapper">
        <div class="home-3__left-block">
          <p class="home-3__text">
            {{ story.home_screen_3[0].main_text }}
          </p>
          <ul class="home-3__list">
            <li
              v-for="(item,idx) in story.home_screen_3[0].benefits"
              :key="item._uid"
              class="home-3__li"
            >
              <div class="home-3__line"></div>
              <div class="grid home-3__content">
                <p class="home-3__medium-text">

                  {{ item.italics_text }}
                </p>
                <div class="home-3__group-text">
                  <p class="home-3__regular-text">
                    {{ item.bold_text }}
                  </p>
                  <p class="home-3__small-text">
                    {{ item.main_text }}
                  </p>
                </div>
              </div>
              <div
                v-if="idx + 1 === story.home_screen_3[0].benefits.length"
                class="home-3__line"
              ></div>
            </li>
          </ul>
        </div>
        <ParallaxImg
          :src="story.home_screen_3[0].image.filename"
          :width="816"
          :height="800"
          img-class="home-3__img"
          class="home-3__right-block"
        />
      </div>
    </section>
    <section class="section home-4">
      <div class="container home-4__wrapper">
        <h2 class="grid home-4__title">
          <span class="home-4__big-text">Test</span>
          <span class="home-4__big-text"> &</span>
          <span class="home-4__big-text"> Engineering</span>
          <span class="home-4__big-text"> Accreditations</span>
        </h2>
        <ul>
          <FloatingCard
            v-for="(item,idx) in story.home_screen_4[0].Logotype"
            :key="idx"
            :parallax="story.home_screen_4[0].Logotype.length - idx"
            class="home-4__floating-cards"
          >

            <img
              :src="item.image_1.filename"
              alt=""
            >
          </FloatingCard>
        </ul>
      </div>
    </section>
    <section class="section home-5">
      <div class="container home-5__wrapper">
        <div class="home-5__line"></div>
        <div class="home-5__main-block">
          <h3 class="home-5__title">
            {{ story.home_screen_5[0].Featured_news[0].title }}
          </h3>
          <p class="home-5__desc">
            {{ story.home_screen_5[0].Featured_news[0].main_text }}
          </p>
          <CircleButton
            v-bind="getTransformedLink(story.home_screen_5[0].Featured_news[0].button[0].link)"
            class="home-5__btn"
          > {{ story.home_screen_5[0].Featured_news[0].button[0].text_button }}
          </CircleButton>
        </div>
        <div class="home-5__line"></div>
      </div>
    </section>
    <section class="section home-6">
      <div class="container grid home-6__wrapper">
        <div class="home-6__text-block">
          <p class="home-6__small-text">{{ story.home_screen_6[0].small_text }}</p>
          <h2
            class="home-6__big-text"
            v-html="getH6Title(story.home_screen_6[0].title)"
          >

          </h2>
          <p class="home-6__desc">
            {{ story.home_screen_6[0].main_text }}
          </p>
          <CircleButton
            class="home-6__btn"
            v-bind="getTransformedLink(story.home_screen_6[0].button[0].link)"
          > {{ story.home_screen_6[0].button[0].text_button }} </CircleButton>
        </div>

        <ParallaxImg
          :src="story.home_screen_6[0].small_image.filename"
          :width="815"
          :height="899"
          img-class="home-6__img"
          class="home-6__image-top"
        />

        <ParallaxImg
          :src="story.home_screen_6[0].big_image.filename"
          :width="1173"
          :height="899"
          img-class="home-6__img"
          class="home-6__image-bottom"
          data-parallax="0.1"
          data-parallax-dir="-1"
        />

      </div>
    </section>
    <section class="section home-7">
      <div class="container home-7__wrapper">
        <div class="home-7__main-block">
          <h3 class="home-7__title">
            <span class="home-7__span-title">our</span>
            <span class="home-7__span-title"> Projects</span>
          </h3>
          <p class="home-7__desc">
            {{ story.home_screen_7[0].main_text }}
          </p>
          <CircleButton
            tag="nuxt-link"
            to="/projects/"
            class="home-7__btn"
          > View all </CircleButton>
        </div>
        <ul class="image-list">
          <ProjectListItem
            v-for="(project,idx) in projects"
            :key="project._uid"
            :images="project.content.Screen_2[0].gallery"
            :title="project.name"
            :description="project.content.Screen_1[0].project_description"
            :number="idx + 1"
            :slug="project.slug"
          />
        </ul>

      </div>
    </section>
    <section class="section home-8">
      <div class="container home-8__wrapper">
        <div class="grid home-8__text-block">
          <h3 class="home-8__title">
            <span class="home-8__span-top">Latest</span>
            <span class="home-8__span-bottom"> News</span>
          </h3>
          <TextButton
            tag="nuxt-link"
            href="/news/"
            class="home-8__btn"
          >
            Read More
          </TextButton>
        </div>
        <div class="cards-wrapper">
          <ul class="cards">
            <NewsCard
              v-for="(item) in news"
              :key="item._uid"
              :title="item.name"
              :slug="item.slug"
              :description="item.content.description"
              :date="item.first_published_at || item.created_at"
              :img="item.content.big_image"
              class="home-8__cards"
            />
          </ul>
        </div>
      </div>

    </section>
    <section class="section home-9">
      <div class="container grid home-9__wrapper">
        <div class="home-9__text-block">
          <h2
            class="home-9__big-text"
            v-html="getH9Title(story.home_screen_9[0].Title)"
          >
          </h2>
          <p class="home-9__desc">
            {{ story.home_screen_9[0].Description }}
          </p>
          <CircleButton
            class="home-9__btn"
            v-bind="getTransformedLink(story.home_screen_9[0].button[0].link)"
          > {{ story.home_screen_9[0].button[0].text_button }} </CircleButton>
        </div>
        <ParallaxImg
          :src="story.home_screen_9[0].small_image.filename"
          img-class="home-9__img"
          :width="815"
          :height="1021"
          class="home-9__image-top"
        />

        <ParallaxImg
          :src="story.home_screen_9[0].big_image.filename"
          :width="1172"
          :height="899"
          img-class="home-9__img"
          class="home-9__image-bottom"
          data-parallax="0.1"
          data-parallax-dir="-1"
        />
      </div>
    </section>
  </main>
</template>
