<script setup lang="ts">
import { transformImage } from '~/scripts/utils/storyblokImage'

interface iProps {
  src: string
  alt?: string
  imgClass?: string
  transform?: boolean
  withBorderRadius?: boolean
  scale: number
}


const props = withDefaults(defineProps<iProps>(),{
  transform: true,
  withBorderRadius: true,
  scale: 1.07
})


const src = props.transform ? transformImage(props.src) : props.src
</script>

<template>
  <div
    class="p-img-wrapper"
    :class="[withBorderRadius && 'p-img-wrapper--br']"
  >
    <div
      class="p-img-container"
      data-parallax="0.06"
    >
      <img
        class="parallax-img"
        :class="imgClass"
        :src="src"
        :alt="alt"
        data-parallax="0.06"
        :data-scale="scale"
      />
    </div>
  </div>
</template>