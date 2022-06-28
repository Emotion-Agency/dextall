<template>
  <div
    class="navigation"
    :class="[props.isOpen && 'navigation--open']"
  >
    <div class="navigation__left-block">
      <div
        class="navigation__img"
        style="background-image: url('/images/1.jpg')"
      ></div>
    </div>
    <div class="container navigation__right-block">
      <button
        class="navigation__close-btn"
        @click="close()"
      >
        <span class="navigation__btn-line"></span>
        <span class="navigation__btn-line"></span>
      </button>
      <ul class="navigation__list">
        <li
          class="navigation__li"
          @click="close()"
        >
          <div class="navigation__line"></div>
          <NuxtLink
            href="/"
            class="navigation__link"
          > Home </NuxtLink>
        </li>
        <li class="navigation__li">
          <div class="navigation__line"></div>
          <NuxtLink
            to="/products"
            class="navigation__link"
          > Products </NuxtLink>
        </li>
        <li class="navigation__li">
          <div class="navigation__line"></div>
          <NuxtLink
            to="/bim"
            class="navigation__link"
          > BIM Solution </NuxtLink>
        </li>
        <li class="navigation__li">
          <div class="navigation__line"></div>
          <NuxtLink
            to="/projects"
            class="navigation__link"
          > Projects </NuxtLink>
        </li>
        <li class="navigation__li">
          <div class="navigation__line"></div>
          <NuxtLink
            to="/news"
            class="navigation__link"
          > News </NuxtLink>
          <div class="navigation__line"></div>
        </li>
      </ul>
      <div class="grid navigation__info-block">
        <TheSocial class="navigation__social" />
        <ul
          class="navigation__info-list"
          @click="close()"
        >
          <li class="navigation__info-li">
            <div class="navigation__line"></div>
            <NuxtLink
              to="/careers"
              class="navigation__info-link"
            > Careers </NuxtLink>
          </li>
          <li class="navigation__info-li">
            <div class="navigation__line"></div>
            <NuxtLink
              to="/library"
              class="navigation__info-link"
            >
              Education and Training
            </NuxtLink>
          </li>
          <li class="navigation__info-li">
            <div class="navigation__line"></div>
            <NuxtLink
              to="/about"
              class="navigation__info-link"
            > About Us </NuxtLink>
          </li>
          <li class="navigation__info-li">
            <div class="navigation__line"></div>
            <button
              class="navigation__info-link"
              @click="openContacts"
            >
              Contact Us
            </button>
            <div class="navigation__line"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
interface iProps {
  isOpen: boolean
}

const props = defineProps<iProps>()
const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

const { open: openContacts } = useContacts()


</script>