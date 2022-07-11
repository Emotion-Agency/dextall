<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useProjectsStories } from '~/composables/stories/projects.story'

useTransition()
useObserver('.section')

const { stories } = await useProjectsStories()

const slug = useRoute().params.id


const story = stories.value.find(story => story.slug === slug).content
const filteredStories = computed(() => {
  return stories.value.filter(story => story.slug !== slug)
})

const getTransformedImage = useTransformedImage()

onMounted(async () => {
  const { Carousel } = await import('~/scripts/Carousel')

  const carousel = new Carousel()
  carousel.init()
})

console.log(story)
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
        <CircleButton class="project-3__btn">Full screen mode</CircleButton>
      </div>
      <div data-slider>
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
          About the<br />
          building
        </h2>
        <div class="grid project-4__block-wrapper">
          <div class="project-4__left-block">
            <img
              class="project-4__img"
              src="/images/projects/project/6.jpg"
              alt="Building"
            />
            <p class="project-4__desc">
              Almost five decades later, the building is undergoing significant
              renovations which will increase comfort for the tenants, reduce
              the buildings energy consumption, and offer a transformative
              modern appearance
            </p>
          </div>
          <div class="project-4__right-block">
            <img
              class="project-4__img"
              src="/images/projects/project/7.jpg"
              alt="Building"
            />
            <p class="project-4__desc">
              Located on 1660 Madison Avenue, NY. Built in 1974 under the
              Mitchell-Lama program, this 11-story building provided affordable
              rental and cooperative housing to moderate-and-middle-income
              families
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section project-5">
      <div
        class="project-5__bg"
        style="background-image: url('/images/projects/project/8.jpg')"
      ></div>
      <div class="container grid project-5__wrapper">
        <h2 class="project-5__title">Dextall’s solution</h2>
        <p class="project-5__text">
          Exterior upgrades feature Dextall’s prefabricated wall systems with
          factory installed high-performance windows, and modern aluminum
          cladding. Considered a “hybrid” renovation, Dextall’s engineering team
          developed an innovative solution to integrate its prefabricated walls
          with areas of the façade that will feature EIFS cladding.
        </p>
        <p class="project-5__text">
          One of the primary challenges of the project is to minimize disruption
          to the tenants. Dextall’s prefab wall systems are installed from the
          exterior of the building and do not require scaffolding or staging.
          <br />
          <br />
          Once completed, 1660 Madison Avenue will feature the most innovative
          façade technology & materials effectively reducing energy consumption,
          increasing indoor comfort, and eliminating costly maintenance over the
          years.
        </p>
      </div>
    </section>
    <section class="section project-6">
      <TheTicker
        text="project 1"
        class="project-6__ticker"
      />
      <div class="container project-6__wrapper">
        <div class="grid project-6__content">
          <ul class="project-6__list">
            <li class="project-6__li">
              <div class="project-6__line"></div>
              <div class="project-6__text-wrapper">
                <p class="project-6__title">SIZE, SF:</p>
                <p class="project-6__text">282828</p>
              </div>
            </li>
            <li class="project-6__li">
              <div class="project-6__line"></div>
              <div class="project-6__text-wrapper">
                <p class="project-6__title">Product:</p>
                <p class="project-6__text">DWall 1500</p>
              </div>
            </li>
            <li class="project-6__li">
              <div class="project-6__line"></div>
              <div class="project-6__text-wrapper">
                <p class="project-6__title">Cladding:</p>
                <p class="project-6__text">Aluminium (exposed fastening)</p>
              </div>
            </li>
            <li class="project-6__li">
              <div class="project-6__line"></div>
              <div class="project-6__text-wrapper">
                <p class="project-6__title">Project type:</p>
                <p class="project-6__text">
                  Unique Renovation (old wall will be demolished and Dextall
                  Products installed
                </p>
              </div>
            </li>
            <li class="project-6__li">
              <div class="project-6__line"></div>
              <div class="project-6__text-wrapper">
                <p class="project-6__title">Project Address:</p>
                <p class="project-6__text">1660 Madison Ave, NY</p>
              </div>
            </li>
            <li class="project-6__li">
              <div class="project-6__line"></div>
              <div class="project-6__text-wrapper">
                <p class="project-6__title">Type of work:</p>
                <p class="project-6__text">Retrofit</p>
              </div>
              <div class="project-6__line"></div>
            </li>
          </ul>
          <div class="project-6__image-wrapper">
            <img
              class="project-6__img"
              src="/images/projects/project/9.jpg"
              alt="Building"
            />
          </div>
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
            This building is entered in The Empire Building Challenge
            competition
          </p>
        </div>
        <div class="project-7__image-top">
          <img
            class="project-7__img"
            src="/images/projects/project/10.jpg"
            alt="Building"
          />
        </div>
        <div class="project-7__image-bottom">
          <img
            class="project-7__img"
            src="/images/projects/project/11.jpg"
            alt="Building"
          />
        </div>
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
              :link="'/news/' + item.slug + '/'"
              :img="item?.content?.Screen_1[0].main_image.filename"
              description="test"
            />
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>
