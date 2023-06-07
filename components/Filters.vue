<script lang="ts" setup>
interface iProps {
  filters: string[]
}

const props = withDefaults(defineProps<iProps>(), {
  filters: () => [],
})

const emit = defineEmits(['filter'])

const filtersData = ref([
  { text: 'All', isActive: true },
  ...props.filters?.map(el => ({ text: el, isActive: false })),
])

const onClick = (idx: number) => {
  filtersData.value.forEach(el => {
    el.isActive = false
  })

  filtersData.value[idx].isActive = true

  emit('filter', filtersData.value[idx].text)
}
</script>

<template>
  <ul v-if="filtersData?.length" class="filters">
    <li
      v-for="(el, idx) in filtersData"
      :key="idx"
      class="filters__item"
      :class="[el.isActive && 'filters__item--active']"
      @click="onClick(idx)"
    >
      <p class="filters__text">{{ el.text }}</p>
    </li>
  </ul>
</template>
