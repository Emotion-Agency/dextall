<script setup lang="ts">
import gsap from 'gsap'
import { useTransition } from '~/composables/transition'
import { transformImage } from '~/scripts/utils/storyblokImage'
import { useHomeStory } from '~~/composables/stories/home.story';
import { keysGenerator } from '~~/scripts/utils/ea';
useTransition()
useObserver('.section')
const { getH6Title,getH9Title,story } = await useHomeStory()

const activeIdx = ref(0)
const isAnimating = ref(false)
const $slides1 = ref(null)
const $slides2 = ref(null)

const sliderImages = [
  {
    _uid: keysGenerator(8),
    img_1: '/images/home/1.jpg',
    img_2: '/images/home/2.jpg',
  },
  {
    _uid: keysGenerator(8),
    img_1: '/images/home/3.jpg',
    img_2: '/images/home/4.jpg',
  },
  {
    _uid: keysGenerator(8),
    img_1: '/images/home/5.jpg',
    img_2: '/images/home/6.jpg',
  },
  {
    _uid: keysGenerator(8),
    img_1: '/images/home/7.jpg',
    img_2: '/images/home/8.jpg',
  },
  {
    _uid: keysGenerator(8),
    img_1: '/images/home/9.jpg',
    img_2: '/images/home/10.jpg',
  }
]


const onSliderNavigationClick = (idx: number) => {
  if (isAnimating.value) {
    return
  }

  const dif = idx - activeIdx.value
  const isNext = idx > activeIdx.value ? 1 : -1

  const $curSlide1 = $slides1.value[idx]
  const $curSlideImg1 = $curSlide1.querySelector('.big-img')

  const $curSlide2 = $slides2.value[idx]
  const $curSlideImg2 = $curSlide2.querySelector('.big-img')

  const $prevSlide1 = $slides1.value[idx + -dif]
  const $prevSlideImg1 = $prevSlide1.querySelector('.big-img')

  const $prevSlide2 = $slides2.value[idx + -dif]
  const $prevSlideImg2 = $prevSlide2.querySelector('.big-img')




  isAnimating.value = true

  const tl = gsap.timeline({
    onComplete: () => {
      $prevSlide1.style.display = 'none'
      $prevSlide2.style.display = 'none'
      activeIdx.value = idx
      isAnimating.value = false
    }
  })
  const ease = 'power2.inOut'

  const x = 100 * isNext


  $curSlide1.style.display = 'block'

  tl.to($prevSlide1,{ duration: 2,x: -x + '%',ease },0)
  tl.to($prevSlideImg1,{ duration: 2,x: x + '%',scale: 1.2,ease },0)
  tl.fromTo($curSlide1,{ x: x + '%' },{ duration: 2,x: '0%',ease },0)
  tl.fromTo($curSlideImg1,{ x: -x + '%',scale: 1.2 },{ duration: 2,x: '0%',scale: 1,ease },0)


  $curSlide2.style.display = 'block'
  tl.to($prevSlide2,{ duration: 2,x: -x + '%',ease },0)
  tl.to($prevSlideImg2,{ duration: 2,x: x + '%',scale: 1.2,ease },0)
  tl.fromTo($curSlide2,{ x: x + '%' },{ duration: 2,x: '0%',ease },0)
  tl.fromTo($curSlideImg2,{ x: -x + '%',scale: 1.2 },{ duration: 2,x: '0%',scale: 1,ease },0)
}


</script>

<template>
  <main>
    <section class="section section--nm home-1">
      <div class="container home-1__wrapper">
        <div class="grid home-1__top-block">
          <div class="home-1__elements-left">
            <div
              v-for="(img,idx) in sliderImages"
              ref="$slides1"
              :key="img._uid"
              class=" home-1__img-wrapper"
              :class="activeIdx === idx && 'active'"
            >
              <div
                class="big-img"
                :style="`background-image: url('${img.img_1}')`"
              ></div>
            </div>
          </div>
          <div class="home-1__elements-right">
            <div class="home-1__right-image">
              <div
                v-for="(img,idx) in sliderImages"
                :key="img._uid"
                ref="$slides2"
                class=" home-1__img-wrapper"
                :class="activeIdx === idx && 'active'"
              >
                <div
                  class="big-img"
                  :style="`background-image: url('${img.img_2}')`"
                ></div>
              </div>
            </div>
            <ul class="grid home-1__small-buildings">
              <li
                v-for="(img,idx) in sliderImages"
                :key="img._uid"
                class="home-1__li"
                :class="idx === activeIdx && 'home-1__li--active'"
                @click="onSliderNavigationClick(idx)"
              >
                <p class="home-1__number">00{{ idx + 1 }}</p>
                <div
                  class="small-img home-1__small-img"
                  :style="`background-image: url('${img.img_1}')`"
                ></div>
              </li>
            </ul>
          </div>
        </div>
        <p class="home-1__desc">
          {{ story.home_screen_1[0].Description }}
        </p>
        <h1 class="grid home-1__bottom-block">
          <span class="home-1__title">Unitized</span>
          <span class="home-1__title"> prefabricated</span>
          <span class="home-1__title"> exterior</span>
          <span class="home-1__title"> wall</span>
          <span class="home-1__title"> system</span>
        </h1>
      </div>
    </section>
    <section class="section home-2">
      <div
        class="home-2__background"
        style="background-image: url('/images/home/8.jpg')"
      ></div>
      <div class="container">
        <div class="home-2__wrapper">
          <div class="home-2__block">
            <p class="home-2__text">
              {{ story.home_screen_2[0].main_text1 }}
            </p>
          </div>
          <div class="home-2__block">
            <h3 class="home-2__title-block">
              <span class="home-2__title">Breakthrough</span>
              <span class="home-2__title"> In BIM</span>
              <span class="home-2__title"> Technology</span>
            </h3>
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
        <div class="home-3__right-block">
          <img
            class="home-3__img"
            :src="transformImage(story.home_screen_3[0].image.filename)"
            alt="Building"
          />
        </div>
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
            :tag="story.home_screen_5[0].Featured_news[0].button[0].link.linktype === 'url' ? 'a' : 'nuxt-link'"
            :href="story.home_screen_5[0].Featured_news[0].button[0].link.url"
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
          <CircleButton class="home-6__btn"> View more </CircleButton>
        </div>
        <div class="home-6__image-top">
          <img
            class="home-6__img"
            :src="transformImage(story.home_screen_6[0].small_image.filename)"
            alt="Building"
          />
        </div>
        <div class="home-6__image-bottom">
          <img
            class="home-6__img"
            :src="transformImage(story.home_screen_6[0].big_image.filename)"
            alt="Building"
            data-parallax="0.1"
            data-parallax-dir="-1"
          />
        </div>
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
        <ImageList />
      </div>
    </section>
    <section class="section home-8">
      <div class="container home-8__wrapper">
        <div class="grid home-8__text-block">
          <h3 class="home-8__title">
            <span class="home-8__span-top">Latest</span>
            <span class="home-8__span-bottom"> News</span>
          </h3>
          <p class="home-8__desc">
            As an AIA/CES Registered Provider, Dextall offers various programs for
            Architects and Certified Installer Program (Dextall CIP) that focuses
            on training for unitized prefab panel installation
          </p>
        </div>
        <TheCards class="home-8__cards" />
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
          <CircleButton class="home-9__btn"> Read more </CircleButton>
        </div>
        <div class="home-9__image-top">
          <img
            class="home-9__img"
            :src="transformImage(story.home_screen_9[0].small_image.filename)"
            alt="Building"
          />
        </div>
        <div class="home-9__image-bottom">
          <img
            class="home-9__img"
            :src="transformImage(story.home_screen_9[0].big_image.filename)"
            alt="Building"
            data-parallax="0.1"
            data-parallax-dir="-1"
          />
        </div>
      </div>
    </section>
  </main>
</template>
