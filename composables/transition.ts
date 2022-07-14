import gsap from 'gsap'

import { TransitionProps } from 'nuxt/dist/app/compat/capi'
import { useAppStore } from '~/store/app'

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
      window.ss.reset()
      window.ss.isFixed = false
      window.parallax && window.parallax.update()
    }, 0)

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
        window.ss.reset()
        window.ss.isFixed = false
      }, 500)
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
