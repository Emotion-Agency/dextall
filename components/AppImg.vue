<template>
  <div
    class="img-parallax-wrapper"
    :data-parallax="isParallax && 0.06"
  >
    <div
      class="img parallax-img"
      :class="imgClass"
      :data-parallax="isParallax && 0.06"
      :data-scale="isParallax && 1.07"
      data-pli
      :style="{ backgroundImage: `url(${url})` }"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface iProps {
  url: string,
  imgClass?: string,
  isParallax?: boolean
}

defineProps<iProps>()
</script>