 <template>
  <div
    class="app-grid container grid"
    :class="{ 'app-grid--visible': isVisible }"
  >
    <div
      v-for="n in 15"
      :key="n"
      class="app-grid__col"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    }
  },
  mounted() {
    document.addEventListener('keypress', this.toggleView)
  },
  beforeUnmount() {
    document.removeEventListener('keypress', this.toggleView)
  },
  methods: {
    toggleView(e) {
      if (process.env.NODE_ENV === 'production') {
        return
      }
      if (e.keyCode === 103 || e.keyCode === 1087) {
        this.isVisible = !this.isVisible
      }
    },
  },
}
</script>