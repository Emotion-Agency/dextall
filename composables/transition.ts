import gsap from 'gsap'
import { TransitionProps } from 'nuxt/dist/app/compat/capi'

export const useTransition = () => {
  onMounted(() => {
    setTimeout(() => {
      window.ss.reset()
      window.ss.isFixed = false
    }, 500)

    setTimeout(() => {
      window.parallax && window.parallax.update()
    }, 0)
  })
  const route = useRoute()
  const pageTransition: TransitionProps = {
    duration: 250,
    mode: 'out-in',
    css: false,
    appear: true,
    onEnter(el, done) {
      setTimeout(() => {
        window.ss.reset()
        window.ss.isFixed = false
      }, 500)

      setTimeout(() => {
        window.parallax && window.parallax.update()
      }, 0)

      gsap.fromTo(
        el,
        { opacity: 0 },
        { duration: 0.5, opacity: 1, onComplete: done }
      )
    },
    onLeave(el, done) {
      setTimeout(() => {
        window.ss.isFixed = true
      }, 500)

      gsap.fromTo(
        el,
        { opacity: 1 },
        { duration: 0.5, opacity: 0, onComplete: done }
      )
    },
  }

  route.meta.pageTransition = { ...pageTransition }
}
