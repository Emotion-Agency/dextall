<template>
  <div
    class="navigation"
    :class="[props.isOpen && 'navigation--open']"
  >
    <div
      ref="$navLeft"
      class="navigation__left-block"
    >
      <div
        ref="$navImgWrapper"
        class="navigation__img-wrapper"
      >
        <div
          ref="$navImg"
          class="navigation__img"
          style="background-image: url('/images/1.jpg')"
        ></div>
      </div>

    </div>
    <div
      ref="$navRight"
      class="container navigation__right-block"
    >
      <button
        class="navigation__close-btn"
        @click="close()"
      >
        <span class="navigation__btn-line"></span>
        <span class="navigation__btn-line"></span>
      </button>
      <ul class="navigation__list">
        <li
          v-for="link in links"
          :key="link.text"
          class="navigation__li"
          data-nav
          @click="close()"
        >
          <div class="navigation__line"></div>
          <NuxtLink
            :to="link.to"
            class="navigation__link"
          > {{ link.text }} </NuxtLink>
        </li>
      </ul>
      <div class="grid navigation__info-block">
        <TheSocial class="navigation__social" />
        <ul
          class="navigation__info-list"
          @click="close()"
        >
          <li
            v-for="link in smallLinks"
            :key="link.text"
            class="navigation__info-li"
          >
            <div class="navigation__line"></div>
            <NuxtLink
              :to="link.to"
              data-nav
              class="navigation__info-link"
            > {{ link.text }} </NuxtLink>
          </li>
          <li
            class="navigation__info-li"
            data-nav
          >
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
import gsap from 'gsap'
const links = [
  {
    text: 'Home',
    to: '/'
  },
  {
    text: 'Products',
    to: '/products'
  },
  {
    text: 'BIM solution',
    to: '/bim'
  },
  {
    text: 'Projects',
    to: '/projects/'
  },
  {
    text: 'News',
    to: '/news/'
  }
]

const smallLinks = [
  {
    text: 'Careers',
    to: '/careers'
  },
  {
    text: 'Education and Training',
    to: '/library'
  },
  {
    text: 'About us',
    to: '/about'
  }
]



interface iProps {
  isOpen: boolean
}

const props = defineProps<iProps>()
const emit = defineEmits(['close'])

const $navLeft = ref(null)
const $navRight = ref(null)
const $navImg = ref(null)
const $navImgWrapper = ref(null)
const $navLine = ref(null)
const $navItems = ref(null)
const $social = ref(null)

onMounted(() => {
  $social.value = document.querySelectorAll('.navigation__social')
  $navLine.value = document.querySelectorAll('.navigation__line')
  $navItems.value = document.querySelectorAll('[data-nav]')
})

const isAnimating = ref(false)

const isOpen = computed(() => {
  return props.isOpen
})

watch(isOpen,() => {
  if (isOpen.value === true) {
    isAnimating.value = true
    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.value = false
      }
    })
    const ease = 'power3.inOut'

    tl.fromTo($navLeft.value,{ y: '100%' },{ duration: 1,y: '0%',ease },0)
    tl.fromTo($navRight.value,{ y: '-100%' },{ duration: 1,y: '0%',ease },0.2)
    tl.fromTo($navImg.value,{ x: '100%' },{ duration: 1,x: '0%',ease },0.6)
    tl.fromTo($navImgWrapper.value,{ x: '-100%' },{ duration: 1,x: '0%',ease },0.6)
    tl.fromTo($navLine.value,{ width: '0%' },{ duration: 1,width: '100%',ease,stagger: 0.1 },0.6)
    tl.fromTo($navItems.value,{ opacity: 0 },{ duration: 1,opacity: 1,ease,stagger: 0.1 },0.6)
    tl.fromTo($social.value,{ opacity: 0 },{ duration: 1,opacity: 1,ease },0.6)
  }
})

const close = () => {
  emit('close')
}

const { open: openContacts } = useContacts()


</script>