import gsap from 'gsap'

import { TransitionProps } from 'nuxt/dist/app/compat/capi'
import { useAppStore } from '~/store/app'
import { resetScroll } from '~~/scripts/utils/resetScroll'

export const useTransition = () => {
  const appStore = useAppStore()

  const pageLoaded = computed(() => {
    return appStore.loaded
  })

  watch(pageLoaded, async () => {
    if (pageLoaded.value) {
      const { appAnimation } = await import('~/scripts/utils/appAnimation')
      setTimeout(() => {
        appAnimation()
      }, 150)
    }
  })

  onMounted(async () => {
    setTimeout(() => {
      resetScroll()
    }, 500)

    if (pageLoaded.value) {
      const { appAnimation } = await import('~/scripts/utils/appAnimation')
      setTimeout(() => {
        appAnimation()
      }, 800)
    }
  })

  const route = useRoute()
  const pageTransition: TransitionProps = {
    mode: 'in-out',
    css: false,
    appear: true,
    onEnter(_, done) {
      done()

      setTimeout(() => {
        resetScroll()
      }, 300)
    },
    onLeave(el, done) {
      setTimeout(() => {
        window.ss.isFixed = true
      }, 500)

      gsap.fromTo(
        el,
        { opacity: 1 },
        { duration: 0.5, opacity: 0, y: -100, onComplete: done }
      )
    },
  }

  route.meta.pageTransition = { ...pageTransition }
}
