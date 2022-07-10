<script lang='ts' setup>
import { useFormattedDate } from '~/composables/computeDate'

interface iProps {
  name: string
  date: string
  img: string
  description: string
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
      <ParallaxImg
        class="news-images__img"
        :src="img"
        :scale="1.2"
      />
      <h2 class="news-images__name">{{ name }}</h2>
    </NuxtLink>
  </li>

</template>
