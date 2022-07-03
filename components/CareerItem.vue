<script setup lang="ts">
import { resize } from '~/scripts/utils/ea/resize/resize'
interface iProps {
  title: string
  idx: number
  isLast?: boolean
  text: string
}

defineProps<iProps>()

const $el = ref(null)
const $child = ref(null)
const isOpen = ref(false)
const height = ref(0)

const onResize = () => {
  height.value = $child.value.scrollHeight * 0.01
  $el.value.style.setProperty('--h',`${height.value}px`)
}

const onClick = () => {
  resize.on(onResize)
  isOpen.value = !isOpen.value
}

onBeforeUnmount(() => {
  resize.off(onResize)
})
</script>

<template>
  <li
    ref="$el"
    class="careers-5__content-li"
    :class="[isOpen && 'opened']"
    @click="onClick"
  >
    <div class="careers-5__content-bg"></div>
    <div class="careers-5__btn">
      <div class="careers-5__line"></div>
      <div class="grid careers-5__content">
        <p class="careers-5__number">0{{ idx + 1 }}</p>
        <div class="careers-5__text-wrapper">
          <h3 class="careers-5__content-title">{{ title }}</h3>
          <div
            ref="$child"
            class="careers-5__text-block"
          >
            <p
              class="careers-5__text"
              v-html="text"
            />
          </div>
        </div>
        <IconsArrowUp class="careers-5__arrow" />
      </div>
      <div
        v-if="isLast"
        class="careers-5__line"
      ></div>
    </div>
  </li>
</template>


