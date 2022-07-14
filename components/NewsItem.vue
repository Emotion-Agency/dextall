<script lang='ts' setup>
import { useFormattedDate } from '~/composables/computeDate'

interface iProps {
  name: string
  date: string
  img: string
  description?: string
  link: string
}

const props = defineProps<iProps>()

const formattedDate = useFormattedDate(props.date)

</script>

<template>
  <li class="news-images__li">
    <NuxtLink
      :to="link"
      class="news-images__link"
    >
      <time class="news-images__date">{{ formattedDate }}</time>
      <div class="news-images-img-wrap">

        <ParallaxImg
          class="news-images__img"
          :src="img"
          :width="500"
          :height="500"
          :scale="1.2"
        />
      </div>
      <h2 class="news-images__name">{{ name }}</h2>
    </NuxtLink>
  </li>

</template>
