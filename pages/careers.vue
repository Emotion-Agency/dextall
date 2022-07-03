<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
useObserver('.section')

const { filters,onFilter,filteredVacancies } = useVacancies()

</script>

<template>
  <main>
    <section class="section section--nm careers-1">
      <div class="container careers-1__wrapper">
        <div class="careers-1__text-block">
          <h1 class="careers-1__title">Careers</h1>
        </div>
        <p class="careers-1__desc">
          Be part of decarbonizing our world. Set The New Normal. Work in a cool
          team
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
          We are always on the lookout for talented people that use their skills
          for the greater good
        </h2>
      </div>
    </section>
    <section class="section careers-3">
      <div class="container grid careers-3__wrapper">
        <div class="careers-3__text-block">
          <h2 class="careers-3__big-text">Our mission is clear:</h2>
          <p class="careers-3__desc">
            “To accelerate decarbonization of the environment TODAY by bringing
            affordable and efficient solutions to build sustainably”
          </p>
          <p class="careers-3__small-text">
            To fight climate change, we must act urgently. To achieve that, we
            hire only the best!
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
          <h3 class="careers-4__title">We strive to always raise the bar</h3>
          <p class="careers-4__text">
            Dextall’s leaders hire other leaders and think “I must hire the
            candidate that will most likely outperform me”.
            <br />
            <br />
            Elevating our mission is the primary goal of each team member
          </p>
        </div>
        <div class="careers-4__line"></div>
      </div>
    </section>
    <section class="section careers-5">
      <div class="container careers-5__wrapper">
        <div class="careers-5__title-wrapper">
          <h2 class="careers-5__title">Are you ready to change the world?</h2>
          <p class="careers-5__desc">
            If you’re interested in working with us check out below our current
            openings. If you don’t see an exact fit but you feel inspired by our
            work drop us a note, portfolio link, or résumé
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
          <TransitionGroup
            name="fade"
            mode="out-in"
          >
            <CareerItem
              v-for="(vacancy,idx) in filteredVacancies"
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