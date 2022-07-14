import gsap from 'gsap'

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const textAnimate = () => {
  let $toAnimate

  const prepare = $el => {
    if ($el.classList.contains('splitted')) {
      return
    }

    $toAnimate = [...$el.querySelectorAll('.char-inner')]
    $toAnimate = shuffle($toAnimate)
    $el.classList.add('splitted')
  }

  return {
    in: $el => {
      prepare($el)
      $el.style.opacity = 1

      gsap.to($toAnimate, {
        duration: 1.5,
        y: '0%',
        opacity: 1,
        ease: 'expo.out',
        stagger: 0.02,
        overwrite: true,
      })
    },
    out: ($el, to = '110%') => {
      prepare($el)

      gsap.to($toAnimate, {
        duration: 1,
        y: to,
        opacity: 0,
        ease: 'expo.out',
        stagger: 0.02,
        overwrite: true,
      })
    },
  }
}

export default textAnimate()
