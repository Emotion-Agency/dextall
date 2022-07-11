<template>
  <NuxtLayout name="empty">
    <main>
      <section class="error-page">
        <TheTicker
          text="404 — Page not found"
          class="error-page__ticker"
        />
        <CircleButton
          class="error-page__btn"
          tag="nuxt-link"
          to="/"
        >
          Back to home
        </CircleButton>
      </section>
    </main>
  </NuxtLayout>
</template>