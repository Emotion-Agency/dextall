<template>
  <header class="header navbar container">
    <div class="header__wrapper">
      <NuxtLink
        to="/"
        class="header__logo"
      >
        <IconsLogoDesktop class="header__logo-desk" />
        <IconsLogoMobile class="header__logo-mob" />
      </NuxtLink>
      <div class="header__right-elements">
        <ul class="header__navbar">
          <li class="header__li">
            <NuxtLink
              to="/products/"
              class="header__text"
            > Products </NuxtLink>
          </li>
          <li class="header__li">
            <NuxtLink
              to="/bim/"
              class="header__text"
            > Bim solution </NuxtLink>
          </li>
          <li class="header__li">
            <NuxtLink
              to="/projects/"
              class="header__text"
            > Projects </NuxtLink>
          </li>
          <li class="header__li">
            <NuxtLink
              to="/about/"
              class="header__text"
            > About us </NuxtLink>
          </li>
          <li class="header__li">
            <NuxtLink
              to="/news/"
              class="header__text"
            > News </NuxtLink>
          </li>
        </ul>
        <button
          class="header__burger"
          @click="open()"
        >
          <span class="header__line"></span>
          <span class="header__line"></span>
        </button>
      </div>
    </div>
    <button
      class="header__btn"
      @click="openContacts"
    >
      <span class="header__btn-text">Let’s talk</span>
      <span class="header__btn-img">
        <IconsTheTalk />
      </span>
    </button>
    <TheNavigation
      :is-open="isNavOpen"
      @close="close"
    />
  </header>
</template>


<script setup lang="ts">
const isNavOpen = ref(false)

const open = () => {
  window.ss.isFixed = true
  isNavOpen.value = true
}

const close = () => {
  window.ss.isFixed = false
  isNavOpen.value = false

}

const { open: openContacts } = useContacts()
let navbarPos

onMounted(async () => {
  const { default: NavbarPos } = await import('~/assets/scripts/utils/navbarPos')
  navbarPos = new NavbarPos()
  navbarPos.init()
})

onBeforeUnmount(() => {
  navbarPos && navbarPos.destroy()
})
</script>