export const useContacts = () => {
  const isOpen = useState('contacts', () => false)
  const $contacts = ref(null)
  const $content = ref(null)
  const $grabBtn = ref(null)
  let onMouseDown: () => void
  let onMouseMove: (e) => void
  let onMouseUp: () => void

  const close = () => {
    window.ss.isFixed = false
    isOpen.value = false
    setTimeout(() => {
      $content.value.style.height = null
    }, 1000)
  }

  const open = () => {
    window.ss.isFixed = true
    isOpen.value = true
  }

  onMounted(() => {
    $contacts.value = document.querySelector('.contacts')
    $content.value = document.querySelector('.contacts__content')
    $grabBtn.value = document.querySelector('.contacts__line-wrapper')

    onMouseMove = e => {
      let y
      if (e.changedTouches) {
        y = e.changedTouches[0]?.clientY
      } else {
        y = e.clientY
      }

      const height = window.innerHeight - y
      $content.value.style.height = height + 'px'
      if ((height / window.innerHeight) * 100 < 50) {
        close()
      }
    }

    onMouseDown = () => {
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('touchmove', onMouseMove)
    }

    onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('touchmove', onMouseMove)
    }

    $grabBtn.value.addEventListener('mousedown', onMouseDown)
    document.body.addEventListener('mouseup', onMouseUp)
    $grabBtn.value.addEventListener('touchstart', onMouseDown)
    document.body.addEventListener('touchend', onMouseUp)
  })

  onBeforeUnmount(() => {
    $grabBtn.value.removeEventListener('mousedown', onMouseDown)
    document.body.removeEventListener('mouseup', onMouseUp)
    $grabBtn.value.removeEventListener('touchstart', onMouseDown)
    document.body.removeEventListener('touchend', onMouseUp)
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('touchmove', onMouseMove)
  })

  return { isOpen, close, open }
}
