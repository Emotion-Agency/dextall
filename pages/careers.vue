<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
useObserver('.section')

let accordeon

onMounted(async () => {

  const { AccordeonHandler } = await import('~/assets/scripts/AccordeonHandler')

  accordeon = new AccordeonHandler('.careers-5__content-li','.careers-5__text-block')
})

onBeforeUnmount(() => {
  accordeon && accordeon.destroy()
})


const { vacancies } = useVacancies()

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
          <li class="careers-5__filter-li">
            <button class="careers-5__filter-name">All departments</button>
            <div class="careers-5__filter-numbers">(3)</div>
          </li>
          <li
            v-for="(item) in vacancies"
            :key="item.title"
            class="careers-5__filter-li"
          >
            <button class="careers-5__filter-name">{{ item.department }}</button>
            <div class="careers-5__filter-numbers">(3)</div>
          </li>

        </ul>
        <ul class="careers-5__content-list">
          <li
            v-for="(vacancy,idx) in vacancies"
            :key="vacancy.title"
            class="careers-5__content-li"
          >
            <div class="careers-5__content-bg"></div>
            <div class="careers-5__btn">
              <div class="careers-5__line"></div>
              <div class="grid careers-5__content">
                <p class="careers-5__number">0{{ idx + 1 }}</p>
                <div class="careers-5__text-wrapper">
                  <h3 class="careers-5__content-title">{{ vacancy.title }}</h3>
                  <div class="careers-5__text-block">
                    <p
                      class="careers-5__text"
                      v-html="vacancy.text"
                    />
                  </div>
                </div>
                <IconsArrowUp class="careers-5__arrow" />
              </div>
              <div
                v-if="idx === vacancies.length - 1"
                class="careers-5__line"
              ></div>

            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>