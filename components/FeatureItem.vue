<script lang='ts' setup>


interface iProps {
  text?: string
  title?: string
  idx?: number
  link?: string
  isLast?: boolean
}

const props = defineProps<iProps>()

const idx = computed(() => {
  return props.idx < 9 ? `0${props.idx + 1}` : `${props.idx + 1}`
})
</script>

<template>

  <li class="feature-item">
    <NuxtLink
      v-if="link"
      class="feature-item__link"
      :to="link"
    >
      <div class="feature-item__line"></div>
      <div class="grid feature-item__content">
        <small
          v-if="idx"
          class="feature-item__idx"
        >{{ idx }}</small>
        <p
          v-if="text"
          class="feature-item__text"
        >{{ text }}</p>
        <h3
          v-if="title"
          class="feature-item__h"
        >{{ title }}</h3>
      </div>
      <div
        v-if="isLast"
        class="feature-item__line"
      ></div>

    </NuxtLink>
  </li>

</template>