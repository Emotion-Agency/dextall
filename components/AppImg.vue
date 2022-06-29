<template>
  <div
    class="img-parallax-wrapper"
    data-parallax="0.06"
  >
    <div
      class="img parallax-img"
      :class="imgClass"
      data-parallax="0.06"
      data-scale="1.07"
      data-pli
      :style="{ backgroundImage: `url(${url})` }"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface iProps {
  url: string,
  imgClass?: string
}

defineProps<iProps>()
</script>