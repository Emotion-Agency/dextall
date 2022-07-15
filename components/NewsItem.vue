<script lang='ts' setup>
import { useFormattedDate } from '~/composables/computeDate'

interface iProps {
  name: string
  date: string
  idx: number
  img: string
  description?: string
  link: string
}

const props = defineProps<iProps>()

const idx = props.idx + 1

const row = computed(() => {
  // if (idx % 6 === 1) {
  //   return Math.round(idx / 6 * 3)
  // }
  // if (idx % 6 === 2) {
  //   return Math.round(idx / 6 * 3)
  // }
  // if (idx % 6 === 3) {
  //   return Math.round(idx / 6 * 3)
  // }
  // if (idx % 6 === 4) {
  //   return Math.round(idx / 6 * 3)
  // }
  //   if (idx % 6 === 0) {
  //   return Math.round(idx / 6 * 3)
  // }
  if (idx % 6 === 5) {
    return Math.round(idx / 6 * 3) - 1
  } else {
    return Math.round(idx / 6 * 3)

  }

})

console.log(row.value)


const formattedDate = useFormattedDate(props.date)

</script>

<template>
  <li
    class="news-images__li"
    :style="`--row: ${row}`"
  >
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
