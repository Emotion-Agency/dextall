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

const formattedTitle = computed(() => {

  const words = props.name.split(' ')

  if (words.length <= 3) {
    return words.join(' ')
  }

  const slisedWords = words.splice(0,3)

  return slisedWords.join(' ') + '...'
})
</script>

<template>
  <li class="news-images__li">
    <NuxtLink
      :to="link"
      class="news-images__link"
    >
      <div class="news-images__text-wrapper">
        <p class="news-images__name">{{ formattedTitle }}</p>
        <p class="news-images__date">{{ formattedDate }}</p>
      </div>
      <ParallaxImg
        class="news-images__img"
        :src="img"
        :scale="1.2"
      />
      <p class="news-images__desc">
        {{ description }}
      </p>
    </NuxtLink>
  </li>

</template>
