<template>
  <footer class="section section--nm footer">
    <TheTicker class="footer__ticker"></TheTicker>
    <div class="container grid footer__top-wrapper">
      <ul class="footer__social-list">
        <li class="footer__social-li">
          <a class="footer__social-link" href="#"> In </a>
        </li>
        <li class="footer__social-li">
          <a class="footer__social-link" href="#"> Fb </a>
        </li>
        <li class="footer__social-li">
          <a class="footer__social-link" href="#"> You </a>
        </li>
        <li class="footer__social-li">
          <a class="footer__social-link" href="#"> Tw </a>
        </li>
        <li class="footer__social-li">
          <a class="footer__social-link" href="#"> Lin </a>
        </li>
      </ul>
      <ul class="grid footer__nav-list">
        <li class="footer__nav-li">
          <NuxtLink to="/"> Home </NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/"> Products </NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/"> Bim Solution </NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/"> Projects </NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/"> News </NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/"> About us </NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/"> Careers </NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/"> Education and Training </NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/"> Contact us </NuxtLink>
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
        />
      </form>
      <div class="grid footer__bottom-wrapper">
        <p class="footer__date">©2022 DEXTALL</p>
        <NuxtLink to="/" class="footer__rules">Terms and conditions</NuxtLink>
        <NuxtLink to="/" class="footer__rules">Privacy Policy</NuxtLink>
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
