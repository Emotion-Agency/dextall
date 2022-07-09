import { raf } from '~/scripts/utils/ea'
import { ImgLoader } from '~/scripts/utils/ImgLoader'
import { Canvas } from '~/scripts/utils/Canvas'

const appleSequenceImages = []

for (let i = 0; i <= 280; i++) {
  appleSequenceImages.push(`${i + 1}.webp`)
}

class ScrollSequence {
  constructor(opts) {
    this.opts = {
      imagesRoot: '',
      cover: false,
      ...opts,
    }
    this.container = document.querySelector(opts.container)

    this.scrollWith = document.querySelector(opts.scrollWith)

    this.images = Array(opts.images.length)
    this.imagesToLoad = opts.images
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

    this.init()

    this.changeOnWindowScroll = this.changeOnWindowScroll.bind(this)
  }

  init() {
    this.canvas.setup()
    this.loader.once('FIRST_IMAGE_LOADED', () => {
      this.canvas.renderIndex(0)
    })

    this.loader.once('IMAGES_LOADED', () => {
      raf.on(this.changeOnWindowScroll)
      console.log('Sequence Loaded')
    })
  }

  changeOnWindowScroll() {
    const step = 100 / (this.images.length - 1)
    const mapToIndex = Math.floor(this.percentScrolled / step)

    this.canvas.renderIndex(mapToIndex)
  }

  get percentScrolled() {
    return 50
  }
}

export const renderSequence = () => {
  new ScrollSequence({
    container: '.scroll-sequence',
    scrollWith: '.scroll-sequence',
    images: appleSequenceImages,
    imagesRoot: '/images/storytelling/',
    priorityFrames: [0, 20, 40, 60, 90],
    cover: true,
    playUntil: 'scroll-out',
    starts: 'in',
  })
}
