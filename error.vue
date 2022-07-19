<script setup>
defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout name="default">
    <main>
      <section class="error-page">
        <TheTicker
          text="404 — Page not found"
          class="error-page__ticker"
        />
        <CircleButton
          class="error-page__btn"
          tag="button"
          @click="handleError"
        >
          Back to home
        </CircleButton>
      </section>
    </main>
  </NuxtLayout>
</template>