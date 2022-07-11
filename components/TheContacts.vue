<template>
  <div
    class="contacts"
    :class="[isOpen && 'contacts--open']"
  >
    <div
      class="contacts__backdrop"
      @click="close"
    ></div>
    <div class="contacts__content">
      <div class="contacts__line-wrapper">

        <div class="contacts__line"></div>
      </div>
      <div class="container contacts__window">
        <button
          class="contacts__close-btn"
          @click="close"
        >
          <span class="contacts__btn-line"></span>
          <span class="contacts__btn-line"></span>
        </button>
        <div class="contacts__top">
          <h2 class="contacts__title">Contact us</h2>
          <p class="contacts__desc">
            {{ story.main_text }}
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
        </div>
        <div class="grid contacts__bottom-block">
          <TheSocial class="contacts__social" />
          <div class="contacts__text-wrapper">
            <p
              class="contacts__text"
              v-html="breakLine(story.contact_1)"
            />
            <p
              class="contacts__text"
              v-html="breakLine(story.contact_2)"
            />
          </div>
          <TextButton
            class="contacts__text-btn"
            v-bind="getTransformedLink(story.media_button[0].link)"
          >{{ story.media_button[0].text_button }}</TextButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useContactsStory } from '~/composables/stories/contacts.story'
import { iInputData } from '~/composables/input'


const { story } = await useContactsStory()
const breakLine = useBreakLine()
const getTransformedLink = useTransformLink()



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
