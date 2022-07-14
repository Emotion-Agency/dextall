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
    this.container = opts.container

    this.scrollWith = opts.container

    const imgs = this.opts.images.map(img => img.filename)

    const sequenceImages = [...imgs]

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

    this.loader.once('IMAGES_LOADED', () => {
      raf.on(this.changeOnWindowScroll)
    })

    this.loader.on('PROGRESS', percent => {
      this.container.setAttribute('data-loaded', percent)
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
