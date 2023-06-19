<script lang="ts" setup>
interface Params {
  specification: string
  specification_name: string
}

interface iProps {
  title?: string
  number?: number
  description?: string
  image?: string
  slug?: string
  date?: string
  params?: Params[]
}

const props = defineProps<iProps>()

const formattedDate = useFormattedDate(props.date)
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
        <div v-if="date" class="image-list__date-content">
          <div class="image-list__line" />
          <time class="image-list__date">{{ formattedDate }}</time>
          <div class="image-list__line" />
        </div>
        <ul v-else class="image-list__info">
          <li
            v-for="(el, idx) in params"
            :key="idx"
            class="image-list__info-wrapper"
          >
            <div class="image-list__line" />
            <div class="image-list__info-content">
              <p class="image-list__text">{{ el.specification_name }}</p>
              <p class="image-list__quantity">{{ el.specification }}</p>
            </div>
            <div v-if="idx === params.length - 1" class="image-list__line" />
          </li>
        </ul>
      </div>
    </NuxtLink>
  </li>
</template>
