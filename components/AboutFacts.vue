<script lang='ts' setup>
interface iItem {
  _uid: string
  title: string
  description: string
  number: string
}

interface iProps {
  items: iItem[]
}

defineProps<iProps>()

const separateTextAndNumber = (string: string) => {
  let newStr = string.trim().split(/(\d+)/).filter(Boolean)

  newStr = newStr.map(str => {
    if (str.match(/\d/gm)) {

      return `<span data-type='number'>${str}</span>`
    }
    return str
  })
  return newStr.join('')
}

const $progress = ref(null)
const $el = ref(null)

let fa

onMounted(async () => {
  const { default: ProgressBar } = await import('progressbar.js')

  const circle = new ProgressBar.Circle($progress.value,{
    color: '#304e49',
    duration: 500,
    easing: 'easeOut',
  })

  const { FactsAnimation } = await import('~/scripts/FactsAnimation')

  fa = new FactsAnimation($el.value,circle)

})

onBeforeUnmount(() => {
  fa && fa.destroy()
})
</script>

<template>
  <section
    ref="$el"
    class="section about-6"
  >
    <div class="about-6__wrapper">
      <div
        class="container about-6__left-block"
        data-fa-scrolling
      >
        <div
          v-for="fact in items"
          :key="fact._uid"
          class="about-6__left-block-content"
        >
          <h2 class="about-6__title">{{ fact.title }}</h2>
          <p class="about-6__desc">
            {{ fact.description }}
          </p>
        </div>
      </div>
      <div class="container about-6__right-block">
        <div
          ref="$progress"
          data-fa-progress
          class="about-6__ellipse"
        ></div>
        <div
          v-for="fact in items"
          :key="fact._uid"
          data-fa-number
          class="about-6__number"
          v-html="separateTextAndNumber(fact.number)"
        >
        </div>
      </div>
    </div>
  </section>
</template>