<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useBimStory } from '~/composables/stories/bim.story'

useTransition()
useObserver('.section')

const { story } = await useBimStory()

const getTransformedImage = useTransformedImage()
const getTransformedLink = useTransformLink()

onMounted(async () => {
  const { Carousel } = await import('~/scripts/Carousel')

  const carousel = new Carousel()
  carousel.init()
})

const { open: openPopup } = useFormPopup()


</script>

<template>
  <main>
    <PageMeta
      v-if="story.meta.length"
      :meta="story.meta[0]"
    />
    <section class="section section--nm bim-1">
      <div class="container bim-1__wrapper">
        <div class="bim-1__text-block">
          <p
            data-a-t
            class="bim-1__top-text"
          >{{ story.Screen_1[0].short_text }}</p>
          <TheTicker
            data-a-t
            :text="story.Screen_1[0].moving_title"
            class="bim-1__ticker"
          />
          <p
            data-a-t
            class="bim-1__bottom-text"
          >
            {{ story.Screen_1[0].description }}
          </p>
        </div>
        <CircleButton
          data-a-t
          class="bim-1__btn"
          @click="openPopup()"
        >
          {{ story.Screen_1[0].button[0].text_button }}
        </CircleButton>
      </div>
    </section>
    <section class="section bim-2">
      <div class="container bim-2__wrapper">
        <h2 class="bim-2__title">
          <span class="bim-2__span-title">
            {{ story.Screen_2[0].title.replace(story.Screen_2[0].highlighted_title,'') }}
          </span>
          {{ story.Screen_2[0].highlighted_title }}
        </h2>
        <div class="grid bim-2__content">
          <p class="bim-2__text">
            {{ story.Screen_2[0].left_text }}
          </p>
          <p class="bim-2__text">
            {{ story.Screen_2[0].right_text }}
          </p>
          <TextButton
            class="bim-2__btn"
            v-bind="getTransformedLink(story.Screen_2[0].button[0].link)"
          >{{
              story.Screen_2[0].button[0].text_button
          }}</TextButton>
        </div>
      </div>
      <ParallaxImg
        class="bim-2__bg"
        :src="story.Screen_2[0].big_image.filename"
        :width="1920"
        :height="2160"
        :with-border-radius="false"
      />
    </section>
    <section class="section bim-3">
      <div class="container bim-3__wrapper">
        <h2 class="grid bim-3__title">
          <span class="bim-3__span-title">Dextall</span>
          <span class="bim-3__span-title"> Studio</span>
          <span class="bim-3__span-title"> Benefits</span>
        </h2>
        <ul class="bim-3__list">
          <li
            v-for="(item,idx) in story.Screen_3[0].benefits_list"
            :key="item._uid"
            class="bim-3__li"
          >
            <div class="bim-3__line"></div>
            <p class="bim-3__text">
              {{ item.text }}
            </p>
            <div
              v-if="idx === story.Screen_3[0].benefits_list.length - 1"
              class="bim-3__line"
            ></div>
          </li>
        </ul>
      </div>
      <div
        data-slider
        dragable="false"
        class="bim-3__slider-wrapper"
      >
        <ul
          class="bim-3__img-list"
          data-slider-inner
        >
          <li
            v-for="(img,idx) in story.Screen_3[0].gallery"
            :key="img._uid"
            class="bim-3__li"
            data-slide
          >
            <div class="bim-3__img-wrapper">
              <img
                class="bim-3__img"
                :src="getTransformedImage(img.image.filename,577)"
                alt="Building"
              />
            </div>
            <p class="bim-3__number">0{{ idx + 1 }}</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="section bim-4">
      <div class="container bim-4__wrapper">
        <h2 class="bim-4__title">
          {{ story.Screen_3[0].results_list_benefits[0].H1_title }}
        </h2>
        <ul class="bim-4__list">
          <li class="bim-4__li">
            <div class="bim-4__line"></div>
            <div class="grid bim-4__content-wrapper">
              <div class="bim-4__text-wrapper">
                <h3 class="bim-4__content-title">
                  {{ story.Screen_3[0].results_list_benefits[0].point_title }}
                </h3>
                <p class="bim-4__content-desc">
                  {{
                      story.Screen_3[0].results_list_benefits[0].description_title
                  }}
                </p>
              </div>
              <ul class="bim-4__content-list">
                <li class="bim-4__content-li">
                  <div class="bim-4__mob-line"></div>
                  <p class="bim-4__content-text bim-4__content-text--nm">
                    {{
                        story.Screen_3[0].results_list_benefits[0].text_point[0]
                          .text
                    }}
                  </p>
                  <div class="bim-4__line"></div>
                </li>
                <li class="bim-4__content-li">
                  <p class="bim-4__content-text">
                    {{
                        story.Screen_3[0].results_list_benefits[0].text_point[1]
                          .text
                    }}
                  </p>
                  <div class="bim-4__line"></div>
                </li>
                <li class="bim-4__content-li">
                  <p class="bim-4__content-text">
                    {{
                        story.Screen_3[0].results_list_benefits[0].text_point[2]
                          .text
                    }}
                  </p>
                  <div class="bim-4__line"></div>
                </li>
              </ul>
            </div>
          </li>
          <li class="bim-4__li">
            <div class="bim-4__line"></div>
            <div class="grid bim-4__content-wrapper">
              <div class="bim-4__text-wrapper">
                <h3 class="bim-4__content-title">
                  {{ story.Screen_3[0].results_list_benefits[1].point_title }}
                </h3>
                <p class="bim-4__content-desc">
                  {{
                      story.Screen_3[0].results_list_benefits[1].description_title
                  }}
                </p>
              </div>
              <ul class="bim-4__content-list">
                <li class="bim-4__content-li">
                  <div class="bim-4__mob-line"></div>
                  <p class="bim-4__content-text bim-4__content-text--nm">
                    {{
                        story.Screen_3[0].results_list_benefits[1].text_point[0]
                          .text
                    }}
                  </p>
                  <div class="bim-4__line"></div>
                </li>
                <li class="bim-4__content-li">
                  <p class="bim-4__content-text">
                    {{
                        story.Screen_3[0].results_list_benefits[1].text_point[1]
                          .text
                    }}
                  </p>
                  <div class="bim-4__line"></div>
                </li>
                <li class="bim-4__content-li">
                  <p class="bim-4__content-text">
                    {{
                        story.Screen_3[0].results_list_benefits[1].text_point[2]
                          .text
                    }}
                  </p>
                  <div class="bim-4__line"></div>
                  <p class="bim-4__about-text">
                    {{
                        story.Screen_3[0].marked_list_benefits[0].uppercase_text
                    }}
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="section bim-5">
      <ParallaxImg
        class="bim-5__bg"
        :src='story.Screen_4[0].big_image.filename'
        :with-border-radius="false"
        :width="1920"
        :height="1080"
      />
      <div class="container bim-5__wrapper">
        <h2 class="bim-5__title">
          <span class="bim-5__span-title">try</span>
          <span class="bim-5__span-title"> Dextall Studio</span>
        </h2>
        <p class="bim-5__desc">
          {{ story.Screen_4[0].description }}
        </p>
        <CircleButton
          class="bim-5__btn"
          :is-white="true"
          @click="openPopup()"
        >{{
            story.Screen_4[0].button[0].text_button
        }}</CircleButton>
      </div>
    </section>
    <FormPopup
      title="Get access"
      form-title="Bim request access"
    />
  </main>
</template>
