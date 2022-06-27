export const useContacts = () => {
  const isOpen = useState('contacts', () => false)

  const close = () => {
    window.ss.isFixed = false
    isOpen.value = false
  }

  const open = () => {
    window.ss.isFixed = true
    isOpen.value = true
  }

  return { isOpen, close, open }
}
