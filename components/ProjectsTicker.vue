<script setup lang="ts">
interface iProps {
  text: string
}

defineProps<iProps>()
</script>

<template>
  <TheTicker
    :text="text"
    class="project-ticker"
    :duration="30"
    :multiplier="32"
  />
</template>
