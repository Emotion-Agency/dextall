<template>
  <div class="grid home-1__top-block">
    <div
      data-a-t
      class="home-1__elements-left"
    >
      <div
        v-for="(img,idx) in slides"
        ref="$slides1"
        :key="img._uid"
        class=" home-1__img-wrapper"
        :class="activeIdx === idx && 'active'"
      >
        <div
          class="big-img"
          :style="`background-image: url('${getTransformedImage(img.image_1.filename,815)}')`"
        ></div>
      </div>
    </div>
    <div
      data-a-t
      class="home-1__elements-right"
    >
      <div class="home-1__right-image">
        <div
          v-for="(img,idx) in slides"
          :key="img._uid"
          ref="$slides2"
          class=" home-1__img-wrapper"
          :class="activeIdx === idx && 'active'"
        >
          <div
            class="big-img"
            :style="`background-image: url('${getTransformedImage(img.image_2.filename,937)}')`"
          ></div>
        </div>
      </div>
      <ul
        data-a-o
        class="grid home-1__small-buildings"
      >
        <li
          v-for="(img,idx) in slides"
          :key="img._uid"
          class="home-1__li"
          :class="idx === activeIdx && 'home-1__li--active'"
          @click="onSliderNavigationClick(idx)"
        >
          <p class="home-1__number">00{{ idx + 1 }}</p>
          <div
            class="small-img home-1__small-img"
            :style="`background-image: url('${getTransformedImage(img.image_1.filename,208)}')`"
          ></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts' setup>
interface iSlide {
  _uid: string
  image_1: {
    filename: string
  }
  image_2: {
    filename: string
  }
}

interface iProps {
  slides: iSlide[]

}

defineProps<iProps>()

const $slides1 = ref(null)
const $slides2 = ref(null)


const { onSliderNavigationClick,activeIdx } = useSlider($slides1,$slides2)

const getTransformedImage = useTransformedImage()

</script>