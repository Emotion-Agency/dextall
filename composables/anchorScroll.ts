import gsap from 'gsap'

export const useAnchorScroll = () => {
  return (target: HTMLElement, cb = () => {}) => {
    const startLocation = window.pageYOffset
    const endLocation = target.offsetTop

    const distance = endLocation - startLocation

    if (window.innerWidth >= 1024) {
      gsap.to(window.ss.state, {
        duration: 1,
        target: distance,
        onComplete: cb,
      })
    } else {
      const $sc = document.querySelector('#scroll-container')

      gsap.to($sc, {
        duration: 1,
        scrollTop: distance,
        onComplete: cb,
      })
    }
  }
}
