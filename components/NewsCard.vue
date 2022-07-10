<script lang='ts' setup>
import { useFormattedDate } from '~/composables/computeDate'

interface iProps {
  title: string
  description: string
  date: string
  slug: string
  img: { filename: string }
}

const props = defineProps<iProps>()

const formattedDate = useFormattedDate(props.date)

console.log(props)
</script>

<template>
  <li class="grid cards__li">
    <div class="cards__text-block">
      <h3 class="cards__title">{{ title }}</h3>
      <p class="cards__desc">
        {{ description }}
      </p>
      <CircleButton
        class="cards__btn"
        tag="nuxt-link"
        :href="`/news/${slug}`"
        :is-white="true"
      > Read more </CircleButton>
    </div>
    <div class="cards__line-block">
      <p class="cards__date">{{ formattedDate }}</p>
      <div class="cards__line"></div>
    </div>
    <div
      class="cards__image-block"
      :style="`background-image: url('${img.filename}')`"
    ></div>
  </li>
</template>
