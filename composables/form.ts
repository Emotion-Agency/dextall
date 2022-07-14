import { iInputData } from '~~/composables/input'
import { useAppStore } from '~/store/app'
import { delayPromise } from '~~/scripts/utils/ea'

export const useForm = (formData, $inputs, from = 'Dextall Website') => {
  const appStore = useAppStore()

  const emmitError = () => {
    $inputs.value.forEach(input => input.throwError())
  }

  const resetForm = () => {
    formData.inputs?.forEach(inp => {
      inp.error = true
      inp.value = ''
    })

    $inputs.value.forEach(input => input.reset())
    formData.hasErrors = false
  }

  const onInputValue = (data: iInputData) => {
    const idx = formData.inputs.findIndex(el => el.id === data.id)
    formData.inputs[idx].value = data.value
    formData.inputs[idx].error = data.error
  }

  const onSubmit = async () => {
    const inputs = formData.inputs
    const isError = inputs.find(el => el.error)

    if (isError) {
      emmitError()
      return
    }

    const formSendData = new FormData()
    formSendData.append('From:', from)
    inputs.forEach(el => {
      formSendData.append(el.name, el.value)
    })

    try {
      appStore.setLoading(true)
      await delayPromise(2000)
      console.log(inputs)
      resetForm()
    } catch (error) {
      console.log(error.message)
      formData.hasErrors = true
    } finally {
      setTimeout(() => {
        appStore.setLoading(false)
      }, 400)
    }
  }

  return { onInputValue, onSubmit }
}
