import { raf } from '~/scripts/utils/ea'
import { ImgLoader } from '~/scripts/utils/ImgLoader'
import { Canvas } from '~/scripts/utils/Canvas'
import Scrolling from './utils/Scrolling'

export class ScrollSequence {
  constructor(opts) {
    this.opts = {
      imagesRoot: '',
      cover: false,
      ...opts,
    }
    this.container = document.querySelector(opts.container)

    this.scrollWith = document.querySelector(opts.container)

    const sequenceImages = []

    for (let i = 0; i <= 150; i++) {
      sequenceImages.push(`${i + 1}.webp`)
    }

    this.images = Array(sequenceImages.length)
    this.imagesToLoad = sequenceImages
    this.priorityFrames = opts.priorityFrames

    this.loader = new ImgLoader({
      imgsRef: this.images,
      images: this.imagesToLoad,
      imagesRoot: this.opts.imagesRoot,
      priorityFrames: this.priorityFrames,
    })

    this.canvas = new Canvas({
      container: this.container,
      images: this.images,
      cover: this.opts.cover,
    })

    this.scroller = new Scrolling(this.container, this.container.parentElement)

    this.init()

    this.changeOnWindowScroll = this.changeOnWindowScroll.bind(this)
  }

  init() {
    this.canvas.setup()
    this.loader.once('FIRST_IMAGE_LOADED', () => {
      this.canvas.renderIndex(0)
    })

    this.loader.once('PRIORITY_IMAGES_LOADED', () => {
      raf.on(this.changeOnWindowScroll)
    })

    this.loader.once('IMAGES_LOADED', () => {
      console.log('Sequence Loaded')
    })
  }

  changeOnWindowScroll() {
    const step = 100 / (this.images.length - 1)
    const mapToIndex = Math.floor(this.percentScrolled / step)

    this.canvas.renderIndex(mapToIndex)
  }

  get percentScrolled() {
    return this.scroller.percentScrolled * 100
  }

  destroy() {
    raf.off(this.changeOnWindowScroll)
  }
}

// export class ScrollSequence {
//   constructor($el) {
//     this.$el = document.querySelector($el)
//     this.scroller = new Scrolling(this.$el, this.$el.parentElement)
//     this.changeOnWindowScroll = this.changeOnWindowScroll.bind(this)
//     this.init = this.init.bind(this)

//     this.$el.pause()
//     this.$el.load()

//     this.$el.addEventListener('loadeddata', this.init)
//   }

//   init() {
//     // this.$el.play()
//     raf.on(this.changeOnWindowScroll)
//   }

//   changeOnWindowScroll() {
//     if (this.$el.buffered.length === 0) return

//     const bufferedSeconds =
//       this.$el.buffered.end(0) - this.$el.buffered.start(0)

//     console.log(bufferedSeconds)
//     const current = (this.$el.duration * this.percentScrolled) / 100
//     this.$el.currentTime = current
//     console.log(current)
//     // this.$el.duration
//     // const step = 100 / (this.images.length - 1)
//     // const mapToIndex = Math.floor(this.percentScrolled / step)

//     // this.canvas.renderIndex(mapToIndex)
//   }

//   get percentScrolled() {
//     return this.scroller.percentScrolled * 100
//   }

//   destroy() {
//     raf.off(this.changeOnWindowScroll)
//   }

//   destroy() {
//     raf.off(this.changeOnWindowScroll)
//   }
// }
