<template>
  <component :is="tag" class="floating-cards__li">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
interface iProps {
  tag?: string
}

withDefaults(defineProps<iProps>(), {
  tag: 'li',
})
</script>
