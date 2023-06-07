<script lang="ts" setup>
interface iProps {
  title?: string
  number?: number
  description?: string
  image?: string
  slug?: string
}

const infoList = [
  {
    text: 'SIZE, SF:',
    quantity: '282828',
  },
  {
    text: 'SIZE, SF:',
    quantity: '282828',
  },
  {
    text: 'SIZE, SF:',
    quantity: '282828',
  },
]

defineProps<iProps>()
</script>

<template>
  <li class="image-list__li">
    <NuxtLink :to="slug" class="image-list__link">
      <div class="image-list__top-wrapper">
        <div class="image-list__img-wrapper">
          <ParallaxImg
            :src="image"
            :width="457"
            :height="365"
            :scale="1.2"
            class="image-list__img"
          />
        </div>
        <h4 class="image-list__title">{{ title }}</h4>
        <p class="image-list__desc">
          {{ description }}
        </p>
      </div>
      <div class="image-list__bottom-wrapper">
        <ul class="image-list__info">
          <li
            v-for="(el, idx) in infoList"
            :key="idx"
            class="image-list__info-wrapper"
          >
            <div class="image-list__line" />
            <div class="image-list__info-content">
              <p class="image-list__text">{{ el.text }}</p>
              <p class="image-list__quantity">{{ el.quantity }}</p>
            </div>
            <div v-if="idx === infoList.length - 1" class="image-list__line" />
          </li>
        </ul>
      </div>
    </NuxtLink>
  </li>
</template>
