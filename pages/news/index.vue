<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
</script>

<template>
  <main>
    <section class="section section--nm news-1">
      <div class="container news-1__wrapper">
        <h1 class="news-1__title">Latest news</h1>
      </div>
    </section>
    <section class="section news-2">
      <div class="container news-2__wrapper">
        <NewsImages />
      </div>
    </section>
  </main>
</template>
