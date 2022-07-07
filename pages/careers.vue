<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useCareersStory } from '~/composables/stories/careers.story'

useTransition()
useObserver('.section')

const { filters, onFilter, filteredVacancies } = useVacancies()
const { story } = await useCareersStory()

console.log(story)
</script>

<template>
  <main>
    <section class="section section--nm careers-1">
      <div class="container careers-1__wrapper">
        <div class="careers-1__text-block">
          <h1 class="careers-1__title">{{ story.Screen_1[0].title }}</h1>
        </div>
        <p class="careers-1__desc">
          {{ story.Screen_1[0].description }}
        </p>
      </div>
    </section>
    <section class="section careers-2">
      <div
        class="careers-2__bg"
        style="background-image: url('/images/careers/1.jpg')"
      ></div>
      <div class="container grid careers-2__wrapper">
        <h2 class="careers-2__title">
          {{ story.Screen_1[0].uppercase_description }}
        </h2>
      </div>
    </section>
    <section class="section careers-3">
      <div class="container grid careers-3__wrapper">
        <div class="careers-3__text-block">
          <h2 class="careers-3__big-text">{{ story.Screen_2[0].title }}</h2>
          <p class="careers-3__desc">
            {{ story.Screen_2[0].description }}
          </p>
          <p class="careers-3__small-text">
            {{ story.Screen_2[0].small_text }}
          </p>
        </div>
        <div class="careers-3__image-top">
          <img
            class="careers-3__img"
            src="/images/careers/2.jpg"
            alt="Building"
          />
        </div>
        <div class="careers-3__image-bottom">
          <img
            class="careers-3__img"
            src="/images/careers/3.jpg"
            alt="Building"
          />
        </div>
      </div>
    </section>
    <section class="section careers-4">
      <div class="container careers-4__wrapper">
        <div class="careers-4__line"></div>
        <div class="careers-4__text-wrapper">
          <h3 class="careers-4__title">{{ story.Screen_3[0].title }}</h3>
          <p class="careers-4__text">
            {{ story.Screen_3[0].main_text }}
            <!-- Dextall’s leaders hire other leaders and think “I must hire the
            candidate that will most likely outperform me”.
            <br />
            <br />
            Elevating our mission is the primary goal of each team member -->
          </p>
        </div>
        <div class="careers-4__line"></div>
      </div>
    </section>
    <section class="section careers-5">
      <div class="container careers-5__wrapper">
        <div class="careers-5__title-wrapper">
          <h2 class="careers-5__title">{{ story.Screen_4[0].title }}</h2>
          <p class="careers-5__desc">
            {{ story.Screen_4[0].description }}
          </p>
        </div>
        <ul class="careers-5__filter-list">
          <li
            v-for="item in filters"
            :key="item.type"
            class="careers-5__filter-li"
            :class="[item.isActive && 'careers-5__filter-li--active']"
            @click="onFilter(item.type)"
          >
            <button class="careers-5__filter-name">{{ item.type }}</button>
            <span class="careers-5__filter-numbers">({{ item.length }})</span>
          </li>
        </ul>
        <ul class="careers-5__content-list">
          <TransitionGroup name="fade" mode="out-in">
            <CareerItem
              v-for="(vacancy, idx) in filteredVacancies"
              :key="vacancy.title"
              :title="vacancy.title"
              :text="vacancy.text"
              :idx="idx"
              :is-last="idx === filteredVacancies.length - 1"
            />
          </TransitionGroup>
        </ul>
      </div>
    </section>
  </main>
</template>
