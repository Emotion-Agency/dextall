import { clamp, raf, lerp, resize, matrixTransform } from '~/scripts/utils/ea'

export class Carousel {
  startX = 0
  endX = 0

  currentX = 0
  lastX = 0

  min = 0
  max = 0

  offsetValue = 0

  ease = 0
  speed = 0
  offset = 0
  velocity = 0

  constructor(opts = {}) {
    this.opts = {
      el: opts.el ?? document.querySelector('[data-slider]'),
      ease: opts.ease ?? 0.08,
      speed: opts.speed ?? 1.2,
      offset: opts.offset ?? 220,
      velocity: opts.velocity ?? 20,
      breakpoint: opts.breakpoint ?? 1024,
      mobile: {
        ease: opts?.mobile?.ease ?? 0.1,
        speed: opts?.mobile?.speed ?? 1.5,
        offset: opts?.mobile?.offset ?? 80,
        velocity: opts?.mobile?.velocity ?? 12,
      },
    }

    this.slider = this.opts.el
    if (!this.slider) return
    this.sliderInner = this.slider.querySelector('[data-slider-inner]')
    this.slides = [...this.slider.querySelectorAll('[data-slide]')]
  }

  bounds() {
    const methods = [
      'onMousemove',
      'onMousedown',
      'onMouseup',
      'animate',
      'resize',
    ]

    methods.forEach(fn => {
      this[fn] = this[fn].bind(this)
    })
  }

  init() {
    if (!this.slider) return
    this.bounds()

    this.slider.addEventListener('mousedown', this.onMousedown, {
      passive: true,
    })

    this.slider.addEventListener('touchstart', this.onMousedown, {
      passive: true,
    })

    document.documentElement.addEventListener('mouseup', this.onMouseup)
    document.documentElement.addEventListener('touchend', this.onMouseup)

    this.setSizes()

    raf.on(this.animate)
    resize.on(this.resize)
  }

  get sizes() {
    return this.slider.getBoundingClientRect()
  }

  setSizes() {
    const sliderWidth = this.slider.scrollWidth + this.sizes.left
    this.min = 0
    this.max = -(sliderWidth - window.innerWidth)
  }

  onMousemove(e) {
    const left = e.clientX ?? e.targetTouches[0].clientX

    this.currentX = this.endX + (left - this.startX) * this.speed
    this.currentX = clamp(
      this.currentX,
      this.min + this.offsetValue,
      this.max - this.offsetValue
    )
  }

  onMousedown(e) {
    document.documentElement.addEventListener('mousemove', this.onMousemove)
    document.documentElement.addEventListener('touchmove', this.onMousemove)

    this.startX = e.clientX ?? e.targetTouches[0].clientX

    this.slider.classList.add('is-grabbing')

    const margin =
      this.slides[1].getBoundingClientRect().x -
      this.slides[0].getBoundingClientRect().x -
      this.slides[0].getBoundingClientRect().width

    this.slides.forEach((slide, idx) => {
      slide.style.transform = matrixTransform({
        move: { x: (-margin / 2) * idx },
      })
    })

    this.offsetValue += this.offset
    this.currentX = clamp(this.currentX, this.min, this.max)
  }

  onMouseup() {
    this.offsetValue = 0
    this.currentX = clamp(this.currentX, this.min, this.max)

    document.documentElement.removeEventListener('mousemove', this.onMousemove)
    document.documentElement.removeEventListener('touchmove', this.onMousemove)

    this.slides.forEach(slide => {
      slide.style.transform = matrixTransform({ move: { x: 0 } })
    })

    this.endX = this.currentX
    this.slider.classList.remove('is-grabbing')
  }

  resize() {
    const params = ['ease', 'speed', 'offset', 'velocity']

    params.forEach(p => {
      this[p] =
        screen.width > this.opts.breakpoint ? this.opts[p] : this.opts.mobile[p]
    })

    this.setSizes()
  }

  animate() {
    this.lastX = lerp(this.lastX, this.currentX, this.ease)
    this.lastX = Math.floor(this.lastX * 100) / 100

    const sd = this.currentX - this.lastX
    const acc = sd / window.innerWidth
    const velo = +acc

    this.sliderInner.style.transform = `${matrixTransform({
      move: { x: this.lastX },
    })} skewX(${velo * this.velocity}deg)`
  }

  destroy() {
    this.slider.removeEventListener('mousedown', this.onMousedown)
    this.slider.removeEventListener('touchstart', this.onMousedown)
    document.documentElement.removeEventListener('mousemove', this.onMousemove)
    document.documentElement.removeEventListener('touchmove', this.onMousemove)
    document.documentElement.removeEventListener('mouseup', this.onMouseup)
    document.documentElement.removeEventListener('touchend', this.onMouseup)

    raf.off(this.animate)
    resize.off(this.resize)
  }
}
