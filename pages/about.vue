<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useAboutStory } from '~/composables/stories/about.story'

useTransition()
useObserver('.section')

const { story } = await useAboutStory()

console.log(story)

const breakLine = useBreakLine()
</script>

<template>
  <main>
    <section class="section section--nm about-1">
      <div class="container about-1__wrapper">
        <!-- <img
          v-for="(_,idx) in 4"
          :key="idx"
          :data-parallax="(4 - idx) * 0.08"
          :data-parallax-dir="-1"
          class="about-1__img"
          :src="`/images/about/${idx + 1}.jpg`"
          alt="Building"
        /> -->
        <div class="about-1__text-block">
          <h1 class="about-1__title">
            <span class="about-1__span-title">Our</span>
            <span class="about-1__span-title"> mission</span>
          </h1>
        </div>
        <p class="about-1__desc">{{ story.Screen_1[0].description }}</p>
      </div>
    </section>
    <section class="section about-2">
      <div class="container about-2__wrapper">
        <div class="about-2__line"></div>
        <h3 class="about-2__title">
          {{ story.Screen_2[0].title }}
        </h3>
        <div class="about-2__line"></div>
      </div>
    </section>
    <section class="section about-3">
      <ParallaxImg
        class="about-3__bg"
        src="/images/about/5.jpg"
        :transform="false"
        :with-border-radius="false"
      />
      <div class="container about-3__wrapper">
        <div class="grid about-3__text">
          <h3 class="about-3__title">
            {{ story.Screen_2[0].title_1 }}
          </h3>
          <p class="about-3__desc">
            {{ story.Screen_2[0].left_text }}
          </p>
          <p class="about-3__desc">
            {{ story.Screen_2[0].right_text }}
          </p>
        </div>
      </div>
    </section>
    <section class="section about-4">
      <div class="container about-4__wrapper">
        <div class="about-4__line"></div>
        <h3 class="about-4__title">
          {{ story.Screen_2[0].quote }}
        </h3>
        <div class="about-4__line"></div>
      </div>
    </section>
    <section class="section about-5">
      <div class="container about-5__wrapper">
        <h2 class="about-5__title">
          When <span class="about-5__span-title">Decarbonizing</span> With
          Dextall
        </h2>
        <ul class="about-5__list">
          <li class="about-5__li">
            <div class="about-5__line"></div>
            <div class="grid about-5__text-wrapper">
              <h3 class="about-5__list-title">
                {{ story.Screen_3[0].marked_list[0].point_title }}
              </h3>
              <ul class="about-5__content-list">
                <li class="about-5__content-li">
                  <div class="about-7__mob-line"></div>
                  <p class="about-5__text">
                    {{ story.Screen_3[0].marked_list[0].text_point[0].text }}
                  </p>
                  <div class="about-5__line"></div>
                </li>
                <li class="about-5__content-li">
                  <p class="about-5__text">
                    {{ story.Screen_3[0].marked_list[0].text_point[1].text }}
                  </p>
                  <div class="about-5__line"></div>
                </li>
                <li class="about-5__content-li">
                  <p class="about-5__text">
                    {{ story.Screen_3[0].marked_list[0].text_point[2].text }}
                  </p>
                  <div class="about-5__line"></div>
                </li>
              </ul>
            </div>
          </li>
          <li class="about-5__li">
            <div class="about-5__line"></div>
            <div class="grid about-5__text-wrapper">
              <h3 class="about-5__list-title">
                {{ story.Screen_3[0].marked_list[1].point_title }}
              </h3>
              <ul class="about-5__content-list">
                <li class="about-5__content-li">
                  <div class="about-7__mob-line"></div>
                  <p class="about-5__text">
                    {{ story.Screen_3[0].marked_list[1].text_point[0].text }}
                  </p>
                  <div class="about-5__line"></div>
                </li>
                <li class="about-5__content-li">
                  <p class="about-5__text">
                    {{ story.Screen_3[0].marked_list[1].text_point[1].text }}
                  </p>
                  <div class="about-5__line"></div>
                </li>
                <li class="about-5__content-li">
                  <p class="about-5__text">
                    {{ story.Screen_3[0].marked_list[1].text_point[2].text }}
                  </p>
                  <div class="about-5__line"></div>
                </li>
              </ul>
            </div>
          </li>
          <li class="about-5__li">
            <div class="about-5__line"></div>
            <div class="grid about-5__text-wrapper">
              <h3 class="about-5__list-title">
                {{ story.Screen_3[0].marked_list[2].point_title }}
              </h3>
              <ul class="about-5__content-list">
                <li class="about-5__content-li">
                  <div class="about-7__mob-line"></div>
                  <p class="about-5__text">
                    {{ story.Screen_3[0].marked_list[2].text_point[0].text }}
                  </p>
                  <div class="about-5__line"></div>
                </li>
                <li class="about-5__content-li">
                  <p class="about-5__text">
                    {{ story.Screen_3[0].marked_list[2].text_point[1].text }}
                  </p>
                  <div class="about-5__line"></div>
                </li>
                <li class="about-5__content-li">
                  <p class="about-5__text">
                    {{ story.Screen_3[0].marked_list[2].text_point[2].text }}
                  </p>
                  <div class="about-5__line"></div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="section about-6">
      <div class="about-6__wrapper">
        <div class="container about-6__left-block">
          <h2 class="about-6__title">Few Facts</h2>
          <p class="about-6__desc">
            Buildings are 40% of the world's carbon emissions
          </p>
        </div>
        <div class="container about-6__right-block">
          <div class="about-6__ellipse"></div>
          <h2 class="about-6__number">
            40<span class="about-6__span-number">%</span>
          </h2>
          <p class="about-6__text">
            Buildings are 40% of the world's carbon emissions
          </p>
        </div>
      </div>
    </section>
    <section class="section about-7">
      <div class="container about-7__wrapper">
        <h2 class="about-7__title">
          {{ story.Screen_4[0].marked_list[0].H1_title }}
        </h2>
        <p class="about-7__desc">
          We bridge the gap between the design of prefabricated exteriors within
          the AEC industry and the final exterior wall execution at the job site
          through automation, cost optimization and transparent practices.
        </p>
        <ul class="about-7__list">
          <li class="about-7__li">
            <div class="about-7__line"></div>
            <div class="grid about-7__text-wrapper">
              <div class="about-7__list-text-wrapper">
                <h3 class="about-7__list-title about-7__list-title--mb">
                  {{ story.Screen_4[0].marked_list[0].point_title }}
                </h3>
                <p class="about-7__list-desc">
                  {{ story.Screen_4[0].marked_list[0].description_title }}
                </p>
              </div>
              <ul class="about-7__content-list">
                <li class="about-7__content-li">
                  <div class="about-7__mob-line"></div>
                  <p class="about-7__text">
                    {{ story.Screen_4[0].marked_list[0].text_point[0].text }}
                  </p>
                  <div class="about-7__line"></div>
                </li>
                <li class="about-7__content-li">
                  <p class="about-7__text">
                    {{ story.Screen_4[0].marked_list[0].text_point[1].text }}
                  </p>
                  <div class="about-7__line"></div>
                </li>
                <li class="about-7__content-li">
                  <p class="about-7__text">
                    {{ story.Screen_4[0].marked_list[0].text_point[2].text }}
                  </p>
                  <div class="about-7__line"></div>
                </li>
                <li class="about-7__content-li">
                  <p class="about-7__text">
                    {{ story.Screen_4[0].marked_list[0].text_point[3].text }}
                  </p>
                  <div class="about-7__line"></div>
                </li>
              </ul>
            </div>
          </li>
          <li class="about-7__li">
            <div class="about-7__line"></div>
            <div class="grid about-7__text-wrapper">
              <h3 class="about-7__list-title">
                {{ story.Screen_4[0].marked_list[1].point_title }}
              </h3>
              <ul class="about-7__content-list">
                <li class="about-7__content-li">
                  <div class="about-7__mob-line"></div>
                  <p class="about-7__text">
                    {{ story.Screen_4[0].marked_list[1].text_point[0].text }}
                  </p>
                  <div class="about-7__line"></div>
                </li>
                <li class="about-7__content-li">
                  <p class="about-7__text">
                    {{ story.Screen_4[0].marked_list[1].text_point[1].text }}
                  </p>
                  <div class="about-7__line"></div>
                </li>
              </ul>
            </div>
          </li>
          <li class="about-7__li">
            <div class="about-7__line"></div>
            <div class="grid about-7__text-wrapper">
              <h3 class="about-7__list-title">
                {{ story.Screen_4[0].marked_list[2].point_title }}
              </h3>
              <ul class="about-7__content-list">
                <li class="about-7__content-li">
                  <div class="about-7__mob-line"></div>
                  <p class="about-7__text">
                    {{ story.Screen_4[0].marked_list[2].text_point[0].text }}
                  </p>
                  <div class="about-7__line"></div>
                </li>
                <li class="about-7__content-li">
                  <p class="about-7__text">
                    {{ story.Screen_4[0].marked_list[2].text_point[1].text }}
                  </p>
                  <div class="about-7__line"></div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="section about-8">
      <div class="container about-8__wrapper">
        <div class="grid about-8__text-wrapper">
          <p class="about-8__text">{{ story.Screen_5[0].small_text }}</p>
          <h2 class="about-8__title">
            {{ story.Screen_5[0].big_title }}
          </h2>
        </div>
        <ul class="about-8__list">
          <li class="grid about-8__li">
            <div class="about-8__left-block">
              <ParallaxImg
                class="about-8__image"
                src="/images/about/6.jpg"
                :transform="false"
              />

            </div>
            <div class="about-8__right-block about-8__right-block--reverse">

              <ParallaxImg
                class="about-8__image about-8__image--half"
                src="/images/about/7.jpg"
                :transform="false"
              />
              <p class="about-8__desc">
                {{ story.Screen_5[0].main_text_1 }}
              </p>
            </div>
          </li>
          <li class="grid about-8__li">
            <div class="about-8__left-block">
              <h3 class="about-8__content-title">
                {{ story.Screen_5[0].small_title }}
              </h3>
              <p class="about-8__desc">
                {{ story.Screen_5[0].main_text }}
              </p>
            </div>
            <div class="about-8__right-block">
              <ParallaxImg
                class="block-img about-8__image"
                src="/images/about/8.jpg"
                :transform="false"
              />
            </div>
          </li>
          <li class="grid about-8__li">
            <div class="about-8__left-block">

              <ParallaxImg
                class="block-img about-8__image"
                src="/images/about/9.jpg"
                :transform="false"
              />
            </div>
            <div class="about-8__right-block">
              <h3 class="about-8__content-title">
                {{ story.Screen_5[0].small_title_1 }}
              </h3>
              <p
                class="about-8__desc about-8__desc--transform"
                v-html="breakLine(story.Screen_5[0].main_text_2)"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
