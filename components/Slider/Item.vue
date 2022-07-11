<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    current: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      currentSlide: this.current,
    }
  },

  watch: {
    current() {
      this.currentSlide = this.current
    },
  },

  methods: {
    prev() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      } else {
        this.currentSlide = this.items.length - 1
      }
    },
    next() {
      if (this.currentSlide < this.items.length - 1) {
        this.currentSlide++
      } else {
        this.currentSlide = 0
      }
    },
  },
}
</script>

<template>
  <div class="b-slider">
    <ul class="b-slider__slides">
      <li
        v-for="(item, idx) in items"
        :key="item._id"
        class="b-slider__slide b-slide"
        :class="[currentSlide === idx && 'b-slide--active']"
      >
        <img
          :src="item.img"
          alt=""
          class="b-slide__img"
        />
      </li>
    </ul>
    <nav class="b-slider__nav">
      <button
        class="b-slider__nav-item b-slider__nav-item--left"
        @click="prev"
      >
        <SliderIcon />
      </button>
      <button
        class="b-slider__nav-item b-slider__nav-item--right"
        @click="next"
      >
        <SliderIcon />
      </button>
    </nav>
  </div>
</template>

