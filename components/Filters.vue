<script lang="ts" setup>
const filters = [
  {
    filterText: 'All',
  },
  {
    filterText: 'Complete',
  },
  {
    filterText: 'In fabrication',
  },
  {
    filterText: 'In progress',
  },
]
</script>

<template>
  <ul class="filters">
    <li v-for="(el, idx) in filters" :key="idx" class="filters__item">
      <p class="filters__text">{{ el.filterText }}</p>
    </li>
  </ul>
</template>
