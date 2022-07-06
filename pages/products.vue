<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useProductsStory } from '~/composables/stories/products.story'

useTransition()
useObserver('.section')

const { story } = await useProductsStory()

console.log(story)
</script>

<template>
  <main>
    <section class="section section--nm products-1">
      <div class="container products-1__wrapper">
        <img
          v-for="(_, idx) in 4"
          :key="idx"
          :data-parallax="(4 - idx) * 0.08"
          :data-parallax-dir="-1"
          class="products-1__img"
          :src="`/images/products/${idx + 1}.jpg`"
          alt="Building"
        />
        <div class="products-1__text-block">
          <h1 class="products-1__title">
            <span class="products-1__span-title">D Wall</span>
            <span class="products-1__span-title"> non-load</span>
            <span class="products-1__span-title"> Bearing System</span>
          </h1>
          <p class="products-1__desc">
            {{ story.screen_1[0].description }}
          </p>
        </div>
        <CircleButton class="products-1__btn"> Show products </CircleButton>
      </div>
    </section>
    <section class="section products-2">
      <div class="container grid products-2__wrapper">
        <h2 class="grid products-2__title">
          <span class="products-2__big-text">TESTED</span>
          <span class="products-2__big-text"> &</span>
          <span class="products-2__big-text"> CERTIFIED</span>
        </h2>
        <p class="products-2__desc">
          {{ story.screen_2[0].description }}
        </p>
        <FloatingCard
          v-for="(_, idx) in 4"
          :key="idx"
          :parallax="4 - idx"
          class="home-4__floating-cards"
        >
          <div class="products-2__text-wrapper">
            <h3 class="products-2__title-cards">
              {{ story.screen_2[0].cards[0].H1 }}
            </h3>
            <p class="products-2__medium-text">
              {{ story.screen_2[0].cards[0].H2 }}
            </p>
            <p class="products-2__small-text">
              {{ story.screen_2[0].cards[0].H3 }}
            </p>
          </div>
        </FloatingCard>
      </div>
    </section>
    <section class="section products-3">
      <div class="container products-3__wrapper">
        <p class="products-3__commentary">{{ story.screen_3[0].small_text }}</p>
        <div class="products-3__line"></div>
      </div>
      <TheTicker
        :text="story.screen_3[0].moving_title"
        class="products-3__ticker"
      />
      <div class="container products-3__wrapper">
        <div class="grid products-3__content">
          <ul class="products-3__list">
            <li class="products-3__li">
              <div class="products-3__line"></div>
              <div class="products-3__text-wrapper">
                <p class="products-3__number">
                  {{ story.screen_3[0].panel_compound[0].number }}
                </p>
                <p class="products-3__text">
                  {{ story.screen_3[0].panel_compound[0].description }}
                </p>
              </div>
            </li>
            <li class="products-3__li">
              <div class="products-3__line"></div>
              <div class="products-3__text-wrapper">
                <p class="products-3__number">
                  {{ story.screen_3[0].panel_compound[1].number }}
                </p>
                <p class="products-3__text">
                  {{ story.screen_3[0].panel_compound[1].description }}
                </p>
              </div>
            </li>
            <li class="products-3__li">
              <div class="products-3__line"></div>
              <div class="products-3__text-wrapper">
                <p class="products-3__number">
                  {{ story.screen_3[0].panel_compound[2].number }}
                </p>
                <p class="products-3__text">
                  {{ story.screen_3[0].panel_compound[2].description }}
                </p>
              </div>
            </li>
            <li class="products-3__li">
              <div class="products-3__line"></div>
              <div class="products-3__text-wrapper">
                <p class="products-3__number">
                  {{ story.screen_3[0].panel_compound[3].number }}
                </p>
                <p class="products-3__text">
                  {{ story.screen_3[0].panel_compound[3].description }}
                </p>
              </div>
            </li>
            <li class="products-3__li">
              <div class="products-3__line"></div>
              <div class="products-3__text-wrapper">
                <p class="products-3__number">
                  {{ story.screen_3[0].panel_compound[4].number }}
                </p>
                <p class="products-3__text">
                  {{ story.screen_3[0].panel_compound[4].description }}
                </p>
              </div>
            </li>
            <li class="products-3__li">
              <div class="products-3__line"></div>
              <div class="products-3__text-wrapper">
                <p class="products-3__number">
                  {{ story.screen_3[0].panel_compound[5].number }}
                </p>
                <p class="products-3__text">
                  {{ story.screen_3[0].panel_compound[5].description }}
                </p>
              </div>
              <div class="products-3__line"></div>
            </li>
          </ul>
          <div class="products-3__image-wrapper">
            <img
              class="products-3__img"
              src="/images/products/5.jpg"
              alt="Building"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="section products-4">
      <div class="products-4__bg-wrapper">
        <div
          class="products-4__bg"
          style="background-image: url('/images/products/6.jpg')"
        >
          <h2 class="products-4__big-text">
            <span class="products-4__span-text">Our</span>
            <span class="products-4__span-text"> products</span>
          </h2>
        </div>
      </div>
      <div class="container products-4__wrapper">
        <ul class="products-4__list">
          <li class="products-4__li">
            <div class="products-4__line"></div>
            <div class="grid products-4__all-content">
              <p class="products-4__number">
                {{ story.screen_4[0].product_1[0].number }}
              </p>
              <h3 class="products-4__title">
                {{ story.screen_4[0].product_1[0].title }}
              </h3>
              <div class="products-4__content-list">
                <h4 class="products-4__content-title">
                  {{ story.screen_4[0].product_1[0].small_title }}
                </h4>
                <p class="products-4__content-desc">
                  {{ story.screen_4[0].product_1[0].main_text }}
                </p>
                <div class="products-4__line"></div>
                <div class="products-4__img-wrapper">
                  <img
                    class="products-4__img"
                    src="/images/products/7.jpg"
                    alt="Building"
                  />
                </div>
                <p class="products-4__img-text">
                  {{ story.screen_4[0].product_1[0].short_text }}
                </p>
                <div class="products-4__line"></div>
                <ul class="products-4__upper-text-list">
                  <li class="products-4__upper-text-li">
                    <h4 class="products-4__upper-title">
                      {{ story.screen_4[0].product_1[0].benefits_title }}
                    </h4>
                  </li>
                  <li class="products-4__upper-text-li">
                    <div class="products-4__line"></div>
                    <p class="products-4__upper-text">
                      {{ story.screen_4[0].product_1[0].benefits_1 }}
                    </p>
                  </li>
                  <li class="products-4__upper-text-li">
                    <div class="products-4__line"></div>
                    <p class="products-4__upper-text">
                      {{ story.screen_4[0].product_1[0].benefits_2 }}
                    </p>
                  </li>
                  <li class="products-4__upper-text-li">
                    <div class="products-4__line"></div>
                    <p class="products-4__upper-text">
                      {{ story.screen_4[0].product_1[0].benefits_3 }}
                    </p>
                  </li>
                  <li class="products-4__upper-text-li">
                    <div class="products-4__line"></div>
                    <p class="products-4__upper-text">
                      {{ story.screen_4[0].product_1[0].benefits_4 }}
                    </p>
                  </li>
                  <li class="products-4__upper-text-li">
                    <div class="products-4__line"></div>
                    <p class="products-4__upper-text">
                      {{ story.screen_4[0].product_1[0].benefits_5 }}
                    </p>
                  </li>
                  <li class="products-4__upper-text-li">
                    <div class="products-4__line"></div>
                    <p class="products-4__upper-text">
                      {{ story.screen_4[0].product_1[0].benefits_6 }}
                    </p>
                  </li>
                  <li class="products-4__upper-text-li">
                    <div class="products-4__line"></div>
                    <p class="products-4__upper-text">
                      {{ story.screen_4[0].product_1[0].benefits_7 }}
                    </p>
                    <div class="products-4__line"></div>
                  </li>
                </ul>
                <h4
                  class="products-4__content-title products-4__content-title--1"
                >
                  {{ story.screen_4[0].product_1[0].title_1 }}
                </h4>
                <p class="products-4__content-desc">
                  {{ story.screen_4[0].product_1[0].main_text1 }}
                </p>
                <div class="products-4__line"></div>
              </div>
            </div>
          </li>
          <li class="products-4__li">
            <div class="products-4__line"></div>
            <div class="grid products-4__all-content">
              <p class="products-4__number">
                {{ story.screen_4[0].product_2[0].number }}
              </p>
              <h3 class="products-4__title">
                {{ story.screen_4[0].product_2[0].title }}
              </h3>
              <div class="products-4__content-list">
                <h4 class="products-4__content-title">
                  {{ story.screen_4[0].product_2[0].small_title }}
                </h4>
                <p class="products-4__content-desc">
                  {{ story.screen_4[0].product_2[0].main_text }}
                </p>
                <div class="products-4__line"></div>
                <div class="products-4__img-wrapper">
                  <img
                    class="products-4__img"
                    src="/images/products/8.jpg"
                    alt="Building"
                  />
                </div>
                <div class="products-4__line"></div>
                <ul class="products-4__upper-text-list">
                  <li class="products-4__upper-text-li">
                    <h4 class="products-4__upper-title">
                      {{ story.screen_4[0].product_2[0].benefits_title }}
                    </h4>
                  </li>
                  <li class="products-4__upper-text-li">
                    <div class="products-4__line"></div>
                    <p class="products-4__upper-text">
                      {{ story.screen_4[0].product_2[0].benefits_1 }}
                    </p>
                  </li>
                  <li class="products-4__upper-text-li">
                    <div class="products-4__line"></div>
                    <p class="products-4__upper-text">
                      {{ story.screen_4[0].product_2[0].benefits_2 }}
                    </p>
                  </li>
                  <li class="products-4__upper-text-li">
                    <div class="products-4__line"></div>
                    <p class="products-4__upper-text">
                      {{ story.screen_4[0].product_2[0].benefits_3 }}
                    </p>
                  </li>
                  <li class="products-4__upper-text-li">
                    <div class="products-4__line"></div>
                    <p class="products-4__upper-text">
                      {{ story.screen_4[0].product_2[0].benefits_4 }}
                    </p>
                  </li>
                  <li class="products-4__upper-text-li">
                    <div class="products-4__line"></div>
                    <p class="products-4__upper-text">
                      {{ story.screen_4[0].product_2[0].benefits_5 }}
                    </p>
                  </li>
                  <li class="products-4__upper-text-li">
                    <div class="products-4__line"></div>
                    <p class="products-4__upper-text">
                      {{ story.screen_4[0].product_2[0].benefits_6 }}
                    </p>
                    <div class="products-4__line"></div>
                  </li>
                </ul>
                <p class="products-4__text">
                  {{ story.screen_4[0].product_2[0].main_text1 }}
                </p>
                <div class="products-4__line"></div>
                <CircleButton class="products-4__btn"
                  >Pilot mock up program</CircleButton
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="section products-5">
      <div class="products-5__bg-wrapper">
        <div
          class="products-5__bg"
          style="background-image: url('/images/products/9.jpg')"
        ></div>
      </div>
    </section>
    <section class="section products-6">
      <div class="container products-6__wrapper">
        <div class="products-6__line"></div>
        <div class="products-6__main-block">
          <h3 class="products-6__title">
            {{ story.screen_5[0].news_section[0].title }}
          </h3>
          <p class="products-6__desc">
            {{ story.screen_5[0].news_section[0].main_text }}
          </p>
          <!-- <p class="products-6__desc">
            *Overall building energy spending IS LOWER with Dextall's products.
          </p>
          <p class="products-6__desc">
            *More durable exteriors means passing envelope inspections without
            the need to spend on ongoing maintenance work.
          </p> -->
          <CircleButton class="products-6__btn">
            {{ story.screen_5[0].news_section[0].button[0].text_button }}
          </CircleButton>
        </div>
        <div class="products-6__line"></div>
      </div>
    </section>
  </main>
</template>
