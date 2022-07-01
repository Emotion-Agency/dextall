export class AccordeonHandler {
  constructor(elem, child) {
    this.elem = document.querySelectorAll(elem)
    this.child = child

    this.render = this.render.bind(this)

    this.elem.forEach(el => {
      el.addEventListener('click', this.render)
    })
  }

  render(e) {
    const elem = e.currentTarget

    if (elem.classList.contains('opened')) elem.classList.remove('opened')
    else {
      this.resizeCb = () => {
        this.setSizes(elem)
      }

      window.addEventListener('resize', this.resizeCb)
      this.resizeCb()
      elem.classList.add('opened')
    }
  }

  setSizes(elem) {
    const h = elem.querySelector(this.child).scrollHeight * 0.01
    elem.style.setProperty('--h', `${h}px`)
  }

  destroy() {
    window.removeEventListener('resize', this.resizeCb)

    this.elem.forEach(el => {
      el.removeEventListener('click', this.render)
    })
  }
}
