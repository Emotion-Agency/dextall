<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useCareersStory } from '~/composables/stories/careers.story'

useTransition()
useObserver('.section')


const { story } = await useCareersStory()

const vacansies = ref(story.value.Screen_4[0].vacancies_list)
vacansies.value = vacansies.value.map(v => ({ ...v,department: v.type[0] }))


const { filters,onFilter,filteredVacancies } = useVacancies(vacansies.value)

const breakLine = useBreakLine()

const { open: openPopup } = useFormPopup()
const formText = ref('')



const onSubmit = (title: string) => {
  formText.value = title
  openPopup()
}

const splitText = useSplitText()

</script>

<template>
  <main>
    <section class="section section--nm careers-1">
      <div class="container careers-1__wrapper">
        <div class="careers-1__text-block">
          <h1
            class="careers-1__title"
            data-a-h
            v-html="splitText(story.Screen_1[0].title)"
          />
        </div>
        <p
          data-a-t
          class="careers-1__desc"
        >
          {{ story.Screen_1[0].description }}
        </p>
      </div>
    </section>
    <section class="section careers-2">
      <ParallaxImg
        v-if="story.Screen_1[0].big_image.filename"
        class="careers-2__bg"
        :src="story.Screen_1[0].big_image.filename"
        :with-border-radius="false"
        :width="1920"
        :height="1080"
      />
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

        <ParallaxImg
          :src="story.Screen_2[0].image_1.filename"
          img-class="careers-3__img"
          :width="815"
          :height="899"
          class="careers-3__image-top"
        />

        <ParallaxImg
          :src="story.Screen_2[0].image_2.filename"
          img-class="careers-3__img"
          class="careers-3__image-bottom"
          data-parallax="0.1"
          data-parallax-dir="-1"
          :width="1173"
          :height="899"
        />
      </div>
    </section>
    <section class="section careers-4">
      <div class="container careers-4__wrapper">
        <div class="careers-4__line"></div>
        <div class="careers-4__text-wrapper">
          <h3 class="careers-4__title">{{ story.Screen_3[0].title }}</h3>
          <p
            class="careers-4__text"
            v-html="breakLine(story.Screen_3[0].main_text)"
          >
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
          <CareerItem
            v-for="(vacancy,idx) in filteredVacancies"
            :key="vacancy.title"
            :title="vacancy.title"
            :text="vacancy.description"
            :idx="idx"
            :is-last="idx === filteredVacancies.length - 1"
            @on-submit="onSubmit"
          />
        </ul>
      </div>
    </section>
    <teleport to='body'>
      <FormPopup
        title="Submit application"
        :text="formText"
        :form-title="`Careers application: ${formText}`"
      />
    </teleport>
  </main>
</template>
