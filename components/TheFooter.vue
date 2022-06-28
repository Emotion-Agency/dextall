<template>
  <footer class="section footer">
    <TheTicker
      text="Get in touch"
      class="footer__ticker"
    ></TheTicker>
    <div class="container grid footer__top-wrapper">
      <TheSocial />
      <ul class="grid footer__nav-list">
        <li class="footer__nav-li">
          <NuxtLink to="/"> Home </NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/products"> Products </NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/bim"> Bim Solution </NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/projects/"> Projects </NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/news"> News </NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/about"> About us </NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/careers"> Careers </NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/library"> Education and Training </NuxtLink>
        </li>
        <li class="footer__nav-li">
          <button @click="openContacts"> Contact us </button>
        </li>
      </ul>
      <form class="footer__form">
        <legend class="footer__form-title">Follow us</legend>
        <TheInput
          v-for="input in formData.inputs"
          :id="input.id"
          :key="input.id"
          ref="$inputs"
          class="footer__input"
          :type="input.type"
          :placeholder="input.label"
          :required="input.required"
          :validation-text="input.validationText"
          :validation="input.validation"
          @input-value="onInputValue"
        >
          <button class="input-btn">Send</button>
        </TheInput>
      </form>
      <div class="grid footer__bottom-wrapper">
        <p class="footer__date">©2022 DEXTALL</p>
        <NuxtLink
          to="/"
          class="footer__rules"
        >Terms and conditions</NuxtLink>
        <NuxtLink
          to="/"
          class="footer__rules"
        >Privacy Policy</NuxtLink>
        <a
          href="https://www.emotion-agency.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer__emotion"
        >
          by emotion
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { iInputData } from '~~/composables/input'

const { open: openContacts } = useContacts()

const $inputs = ref([])
const formData = reactive({
  hasErrors: true,
  inputs: [
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
