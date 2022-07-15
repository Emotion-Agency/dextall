<script setup lang="ts">
interface iProps {
  el?: string
  mobile?: boolean
  breakpoint?: number
  passive?: boolean
  isFixed?: boolean
  friction?: number
  stepSize?: number
  scrollbar?: boolean
  useKeyboard?: boolean
}

const props = defineProps<iProps>()

onMounted(async () => {
  const { SmoothScroll } = await import('@emotionagency/smoothscroll')
  const { raf } = await import('@/scripts/utils/ea')

  window.ss = new SmoothScroll({
    el: document.querySelector(props.el) ?? undefined,
    mobile: props.mobile || false,
    breakpoint: props.breakpoint ?? 960,
    passive: props.passive || false,
    isFixed: props.isFixed || true,
    friction: props.friction ?? 0.07,
    stepSize: props.stepSize ?? 0.9,
    scrollbar: props.scrollbar || true,
    useKeyboard: props.useKeyboard || false,
    raf,
  })
})

onBeforeUnmount(() => {
  window.ss && window.ss.destroy()
})
</script>

<template>
  <div id="scroll-container">
    <slot />
  </div>
</template>