export const useContacts = () => {
  const isOpen = useState('contacts', () => false)
  const $contacts = ref(null)
  const $content = ref(null)
  const $grabBtn = ref(null)

  const close = () => {
    window.ss.isFixed = false
    isOpen.value = false
  }

  const open = () => {
    window.ss.isFixed = true
    isOpen.value = true
  }

  onMounted(() => {
    $contacts.value = document.querySelector('.contacts')
    $content.value = document.querySelector('.contacts__content')
    $grabBtn.value = document.querySelector('.contacts__line')

    const onMouseMove = e => {
      const y = e.clientY ?? e.changedTouches[0].clientY
      const height = window.innerHeight - y
      $content.value.style.height = height + 'px'
      if ((height / window.innerHeight) * 100 < 50) {
        close()
        setTimeout(() => {
          $content.value.style.height = null
        }, 1000)
      }
    }

    const onMouseDown = () => {
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('touchmove', onMouseMove)
    }

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('touchmove', onMouseMove)
    }

    $grabBtn.value.addEventListener('mousedown', onMouseDown)
    document.body.addEventListener('mouseup', onMouseUp)
    $grabBtn.value.addEventListener('touchstart', onMouseDown)
    document.body.addEventListener('touchend', onMouseUp)
  })

  return { isOpen, close, open }
}
