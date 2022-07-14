<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useProductsStory } from '~/composables/stories/products.story'

useTransition()
useObserver('.section')

const { story } = await useProductsStory()


const goToProducts = () => {
  const $products = document.querySelector('#products') as HTMLElement

  if (!$products) {
    return
  }

  const goToAnchor = useAnchorScroll()

  goToAnchor($products)

}
const breakLine = useBreakLine()

const firstScreenImageSizes = [
  {
    width: 217,
    height: 305
  },
  {
    width: 340,
    height: 400
  },
  {
    width: 338,
    height: 305
  },
  {
    width: 340,
    height: 274
  }
]
const firstScreenImages = story.value.screen_1[0].images.map((item,idx) => ({ ...item,...firstScreenImageSizes[idx] }))


const getTransformedImage = useTransformedImage()
const getTransformedLink = useTransformLink()
const splitText = useSplitText()


</script>

<template>
  <main>
    <PageMeta
      :title="story.meta[0].title"
      :description="story.meta[0].description"
    />
    <section class="section section--nm products-1">
      <div class="container products-1__wrapper">
        <div
          data-a-t
          class="grid container products-1__image-block"
        >
          <ParallaxImg
            v-for="(item,idx) in firstScreenImages"
            :key="idx"
            :src="item.image.filename"
            :width="item.width"
            :height="item.height"
            class="products-1__img-wrapper"
            :data-parallax="(4 - idx) * 0.08"
            :data-parallax-dir="-1"
            :scale="1.2"
          />
        </div>
        <div class="products-1__text-block">
          <h1 class="products-1__title">
            <span
              data-a-h
              class="products-1__span-title"
              v-html="splitText('D Wall')"
            />
            <span
              data-a-h
              class="products-1__span-title"
              v-html="splitText('non-load')"
            />
            <span
              data-a-h
              class="products-1__span-title"
              v-html="splitText('Bearing System')"
            />
          </h1>
          <p
            data-a-t
            class="products-1__desc"
          >
            {{ story.screen_1[0].description }}
          </p>
        </div>
        <CircleButton
          data-a-t
          class="products-1__btn"
          @click="goToProducts"
        > Show products </CircleButton>
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
          v-for="(item,idx) in story.screen_2[0].cards"
          :key="item._uid"
          :parallax="story.screen_2[0].cards.length - idx"
          class="home-4__floating-cards"
        >
          <div class="products-2__text-wrapper">
            <h3 class="products-2__title-cards">
              {{ item.H1 }}
            </h3>
            <p class="products-2__medium-text">
              {{ item.H2 }}
            </p>
            <p class="products-2__small-text">
              {{ item.H3 }}
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
            <li
              v-for="(item,idx) in story.screen_3[0].panel_compound"
              :key="item._uid"
              class="products-3__li"
            >
              <div class="products-3__line"></div>
              <div class="products-3__text-wrapper">
                <p class="products-3__number">
                  {{ item.number }}
                </p>
                <p class="products-3__text">
                  {{ item.description }}
                </p>
              </div>
              <div
                v-if="idx === story.screen_3[0].panel_compound.length - 1"
                class="products-3__line"
              ></div>
            </li>
          </ul>
          <div class="products-3__image-wrapper">
            <video
              autoplay
              playsinline
              loop
              muted
              class="products-3__img"
              :src="story.screen_3[0].panel_images[0].image.filename"
            >
            </video>
          </div>
        </div>
      </div>
    </section>
    <section class="section products-4">
      <div class="container products-4__bg-wrapper">
        <ParallaxImg
          class="products-4__bg"
          :src="story.screen_4[0].image.filename"
          :width="1920"
          :height="1080"
          :with-border-radius="false"
        />
        <h2 class="products-4__big-text">
          <span class="products-4__span-text">Our</span>
          <span class="products-4__span-text"> products</span>
        </h2>
      </div>
      <div
        id="products"
        class="container products-4__wrapper"
      >
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
                    :src="getTransformedImage(story.screen_4[0].product_1[0].image_video.filename,696,410)"
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
                <h4 class="products-4__content-title products-4__content-title--1">
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
                    :src="getTransformedImage(story.screen_4[0].product_2[0].image_video.filename,696,410)"
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
                <CircleButton
                  v-bind="getTransformedLink(story.screen_4[0].button[0].link)"
                  class="products-4__btn"
                >{{ story.screen_4[0].button[0].text_button }}</CircleButton>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="section products-5">
      <ParallaxImg
        class="products-5__bg-wrapper"
        :src="story.screen_5[0].big_image.filename"
        :with-border-radius="false"
      />
    </section>
    <section class="section products-6">
      <div class="container products-6__wrapper">
        <div class="products-6__line"></div>
        <div class="products-6__main-block">
          <h3 class="products-6__title">
            {{ story.screen_5[0].news_section[0].title }}
          </h3>
          <p
            class="products-6__desc"
            v-html="breakLine(story.screen_5[0].news_section[0].main_text)"
          />

          <CircleButton
            v-bind="getTransformedLink(story.screen_5[0].news_section[0].button[0].link)"
            class="products-6__btn"
          >
            {{ story.screen_5[0].news_section[0].button[0].text_button }}
          </CircleButton>
        </div>
        <div class="products-6__line"></div>
      </div>
    </section>
  </main>
</template>
