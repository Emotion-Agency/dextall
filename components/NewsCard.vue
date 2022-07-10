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

const getTransformedImage = useTransformedImage()

</script>

<template>
  <li class="grid cards__li">
    <div class="cards__text-block">
      <h3 class="cards__title">{{ title }}</h3>
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
      :style="`background-image: url('${getTransformedImage(img.filename,800)}')`"
    ></div>
  </li>
</template>
