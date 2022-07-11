<script lang='ts' setup>
import { iImage } from '~/types/story'

interface iProps {
  title?: string
  number?: number
  description?: string
  images?: iImage[]
  slug?: string
}

defineProps<iProps>()
</script>

<template>
  <li class="image-list__li">
    <NuxtLink
      :to="`/projects/${slug}/`"
      class="image-list__link"
    >
      <div class="image-list__text">
        <h4 class="image-list__title">{{ title }}</h4>
        <div class="image-list__desc-wrapper">
          <p class="image-list__number">(00{{ number }})</p>
          <p class="image-list__desc">
            {{ description }}
          </p>
        </div>
      </div>
      <div
        v-if="images.length >= 4"
        class="grid image-list__img-wrapper"
      >
        <ParallaxImg
          :key="images[0].image._uid"
          :src="images[0].image.filename"
          :width="457"
          :height="365"
          :scale="1.2"
          class="image-list__img"
        />
        <ParallaxImg
          :key="images[1].image._uid"
          :src="images[1].image.filename"
          :width="816"
          :height="737"
          :scale="1.2"
          class="image-list__img"
        />
        <ParallaxImg
          :key="images[2].image._uid"
          :src="images[2].image.filename"
          :width="449"
          :height="365"
          :scale="1.2"
          class="image-list__img"
        />
        <ParallaxImg
          :key="images[3].image._uid"
          :src="images[3].image.filename"
          :width="460"
          :height="400"
          :scale="1.2"
          class="image-list__img"
        />
      </div>
    </NuxtLink>
  </li>

</template>
