<template>
  <li
    class="floating-cards__li"
    :data-parallax="parallax"
    :data-parallax-dir="parallaxDir"
  >
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
interface iProps {
  parallax?: number
  parallaxDir?: 1 | -1
}


const props = defineProps<iProps>()

const parallax = props.parallax * 0.06 || 0.1
const parallaxDir = props.parallaxDir || -1
</script>