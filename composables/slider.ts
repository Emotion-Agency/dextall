import gsap from 'gsap'

export const useSlider = ($slides1, $slides2) => {
  const isAnimating = ref(false)
  const activeIdx = ref(0)
  const timer = ref(0)
  let interval

  onMounted(() => {
    interval = setInterval(() => {
      if (isAnimating.value) {
        timer.value = 0
        return
      }
      timer.value++
      if (timer.value > 5) {
        const to =
          activeIdx.value + 1 >= $slides1?.value?.length
            ? 0
            : activeIdx.value + 1

        onSliderNavigationClick(to)
        timer.value = 0
      }
    }, 1000)
  })

  const onSliderNavigationClick = (idx: number) => {
    if (isAnimating.value) {
      return
    }

    const dif = idx - activeIdx.value
    const isNext = idx > activeIdx.value ? 1 : -1

    const $curSlide1 = $slides1.value[idx]
    const $curSlideImg1 = $curSlide1.querySelector('.big-img')

    const $curSlide2 = $slides2.value[idx]
    const $curSlideImg2 = $curSlide2.querySelector('.big-img')

    const $prevSlide1 = $slides1.value[idx + -dif]
    const $prevSlideImg1 = $prevSlide1.querySelector('.big-img')

    const $prevSlide2 = $slides2.value[idx + -dif]
    const $prevSlideImg2 = $prevSlide2.querySelector('.big-img')

    isAnimating.value = true

    const tl = gsap.timeline({
      onComplete: () => {
        $prevSlide1.style.display = 'none'
        $prevSlide2.style.display = 'none'
        activeIdx.value = idx
        isAnimating.value = false
      },
    })
    const ease = 'power2.inOut'

    const x = 100 * isNext

    $curSlide1.style.display = 'block'

    tl.to($prevSlide1, { duration: 2, x: -x + '%', ease }, 0)
    tl.to($prevSlideImg1, { duration: 2, x: x + '%', scale: 1.2, ease }, 0)
    tl.fromTo($curSlide1, { x: x + '%' }, { duration: 2, x: '0%', ease }, 0)
    tl.fromTo(
      $curSlideImg1,
      { x: -x + '%', scale: 1.2 },
      { duration: 2, x: '0%', scale: 1, ease },
      0
    )

    $curSlide2.style.display = 'block'
    tl.to($prevSlide2, { duration: 2, x: -x + '%', ease }, 0)
    tl.to($prevSlideImg2, { duration: 2, x: x + '%', scale: 1.2, ease }, 0)
    tl.fromTo($curSlide2, { x: x + '%' }, { duration: 2, x: '0%', ease }, 0)
    tl.fromTo(
      $curSlideImg2,
      { x: -x + '%', scale: 1.2 },
      { duration: 2, x: '0%', scale: 1, ease },
      0
    )
  }

  onBeforeUnmount(() => {
    clearInterval(interval)
  })

  return { onSliderNavigationClick, activeIdx, timer }
}
