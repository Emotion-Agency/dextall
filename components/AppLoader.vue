<template>
  <div
    v-if="!isCompleted"
    ref="$el"
    class="loader"
  >
    <div class="container loader__container">
      <div
        ref="$percent"
        class="loader__percent"
      >
        <span class="loader__percent-span">0%</span>
      </div>
      <div
        ref="$progress"
        class="loader__progress"
      ></div>
    </div>

  </div>
</template>

<script lang='ts' setup>
import gsap from 'gsap'
import { useAppStore } from '~/store/app'

const appStore = useAppStore()


const isCompleted = ref(false)



let loader
const $el = ref(null)
const $progress = ref(null)
const $percent = ref(null)

const emit = defineEmits(['loaded'])

const animation = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      isCompleted.value = true
    }
  })

  tl.to($progress.value,{
    duration: 1.8,
    y: '-100%',
    ease: 'power2.inOut',
  })
  tl.to($percent.value,{
    duration: 1.6,
    y: '-100%',
    opacity: 0,
    ease: 'power2.inOut',
  },0.2)
  tl.to($el.value,{
    duration: 0.2,
    opacity: 0,
    ease: 'power2.inOut',
  })

}

const afterLoad = () => {
  appStore.setLoaded(true)
  emit('loaded')
  animation()
  window.ss && (window.ss.isFixed = false)
}

onMounted(async () => {
  const { Loader } = await import('~/scripts/Loader')
  loader = new Loader(afterLoad)
  loader.init()
})

</script>