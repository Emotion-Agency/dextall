<template>
  <div
    class="contacts"
    :class="[isOpen && 'contacts--open']"
  >
    <div class="contacts__backdrop"></div>
    <div class="contacts__line"></div>
    <div class="container contacts__window">
      <button
        class="contacts__close-btn"
        @click="close"
      >
        <span class="contacts__btn-line"></span>
        <span class="contacts__btn-line"></span>
      </button>
      <h2 class="contacts__title">Contact us</h2>
      <p class="contacts__desc">
        Our client services team would love to hear from you
      </p>
      <form class="grid contacts__form">
        <TheInput
          v-for="input in formData.inputs"
          :id="input.id"
          :key="input.id"
          ref="$inputs"
          class="contacts__input"
          :type="input.type"
          :placeholder="input.label"
          :required="input.required"
          :validation-text="input.validationText"
          :validation="input.validation"
          @input-value="onInputValue"
        />
        <CircleButton class="contacts__btn">Send</CircleButton>
      </form>
      <div class="grid contacts__bottom-block">
        <TheSocial class="contacts__social" />
        <div class="contacts__text-wrapper">
          <p class="contacts__text">
            Dextall Inc.<br />
            202-701-3208
          </p>
          <p class="contacts__text">
            Marketing And PR:<br />
            703-576-8588
          </p>
        </div>
        <TextButton class="contacts__text-btn">Download DEXTALL MEDIA KIT</TextButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { iInputData } from '~~/composables/input'

const { isOpen,close } = useContacts()


const $inputs = ref([])
const formData = reactive({
  hasErrors: true,
  inputs: [
    {
      required: true,
      id: 'name',
      name: 'Name',
      label: 'Your Name',
      type: 'text',
      validation: 'name',
      validationText: 'incorrect name',
      error: true,
      value: '',
    },
    {
      required: true,
      id: 'email',
      name: 'Email',
      label: 'Your Email',
      type: 'email',
      validation: 'email',
      validationText: 'incorrect email',
      error: true,
      value: '',
    },
    {
      required: true,
      id: 'message',
      name: 'Message',
      label: 'Your Message',
      type: 'text',
      validation: 'message',
      validationText: 'incorrect message',
      error: true,
      value: '',
    },
  ],
})

// const emmitError = () => {
//   $inputs.value.forEach(input => input.throwError())
// }

// const resetForm = () => {
//   formData.inputs?.forEach(inp => {
//     inp.error = true
//     inp.value = ''
//   })

//   $inputs.value.forEach(input => input.reset())
//   formData.hasErrors = false
// }

const onInputValue = (data: iInputData) => {
  const idx = formData.inputs.findIndex(el => el.id === data.id)
  formData.inputs[idx].value = data.value
  formData.inputs[idx].error = data.error
}

// const onSubmit = () => {
//   const inputs = formData.inputs
//   const isError = inputs.find(el => el.error)

//   if (isError) {
//     emmitError()
//     return
//   }

//   const formSendData = new FormData()
//   inputs.forEach(el => {
//     formSendData.append(el.name, el.value)
//   })

//   try {
//     console.log(inputs)
//     resetForm()
//   } catch (error) {
//     console.log(error.message)
//     formData.hasErrors = true
//   } finally {
//     // setTimeout(() => {
//     //   this.$store.commit('app/setLoading', false)
//     // }, 400)
//   }
// }


</script>
