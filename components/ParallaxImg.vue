<script setup lang="ts">
import { transformImage } from '~/scripts/utils/storyblokImage'

interface iProps {
  src: string
  alt?: string
  imgClass?: string
  transform?: boolean
  withBorderRadius?: boolean
  scale?: number
  width?: number
  height?: number
}


const props = withDefaults(defineProps<iProps>(),{
  transform: true,
  withBorderRadius: true,
  scale: 1.07
})

const width = props.width ?? 0
const height = props.height ?? 0
let transformedSrc: string

if (props.width || props.height) {

  transformedSrc = transformImage(props.src,{ size: `${width}x${height}` })
} else {
  transformedSrc = transformImage(props.src)
}

const getImageResolution = computed(() => {
  const resolution = height / width * 100
  return resolution.toFixed(2) + '%'
})

const resolution = ref(null)

if (width && height) {
  resolution.value = getImageResolution
}


const src = props.transform ? transformedSrc : props.src
</script>

<template>
  <div
    class="p-img-wrapper"
    :class="[withBorderRadius && 'p-img-wrapper--br']"
    :style="resolution && { paddingBottom: resolution.value,height: '0px' }"
  >
    <div
      class="p-img-container"
      :class="resolution && 'p-img-container--cover'"
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