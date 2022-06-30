<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
useObserver('.section')

</script>

<template>
  <main>
    <section class="section section--nm library-1">
      <div class="container library-1__wrapper">
        <h1 class="library-1__title">Dextall Studio Growing Features list</h1>
      </div>
    </section>
    <section class="section library-2">
      <div class="container library-2__wrapper">
        <NewsImages />
      </div>
    </section>
  </main>
</template>
