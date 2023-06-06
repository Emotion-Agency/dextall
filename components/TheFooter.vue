<template>
  <footer class="section section--nm footer">
    <div class="container grid footer__top-wrapper">
      <TheSocial />
      <ul class="grid footer__nav-list">
        <li class="footer__nav-li">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/products/">Products</NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/bim/">Bim Solution</NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/projects/">Projects</NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/news/">News</NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/about/">About us</NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/careers/">Careers</NuxtLink>
        </li>
        <li class="footer__nav-li">
          <NuxtLink to="/education-trainings/">Trainings</NuxtLink>
        </li>
        <li class="footer__nav-li">
          <button @click="openContacts">Contact us</button>
        </li>
      </ul>
      <form class="footer__form" novalidate @submit.prevent="onSubmit">
        <legend class="footer__form-title">{{ story.form_title }}</legend>
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
        <NuxtLink to="/terms-privacy/terms-conditions/" class="footer__rules"
          >Terms and conditions</NuxtLink
        >
        <NuxtLink to="/terms-privacy/privacy-policy/" class="footer__rules"
          >Privacy Policy</NuxtLink
        >
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
import { useFooterStory } from '~/composables/stories/footer.story'

const { open: openContacts } = useContacts()

const { story } = await useFooterStory()

const $inputs = ref([])
const formData = reactive({
  hasErrors: true,
  inputs: [
    {
      required: true,
      id: 'footer-email',
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

const { onInputValue, onSubmit } = useForm(formData, $inputs, 'Dextall footer')
</script>
