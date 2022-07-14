<template>
  <component
    :is="tag"
    class="floating-cards__li"
    :data-parallax="parallax"
    :data-parallax-dir="parallaxDir"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
interface iProps {
  parallax?: number
  parallaxDir?: 1 | -1
  tag?: string
}


const props = withDefaults(defineProps<iProps>(),{
  tag: 'li'
})



const parallax = props.parallax * 0.06 || 0.1
const parallaxDir = props.parallaxDir || -1
</script>