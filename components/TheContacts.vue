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
          <form
            class="grid contacts__form"
            novalidate
            @submit.prevent="updatedSubmit"
          >
            <TheInput
              v-for="input in formData.inputs"
              :id="input.id"
              :key="input.id"
              ref="$inputs"
              class="contacts__input"
              :type="input.type"
              :placeholder="input.label"
              :required="input.required"
              :validation-text="input.validationText && input.validationText"
              :validation="input.validationText && input.validation"
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

const { story } = await useContactsStory()
const breakLine = useBreakLine()
const getTransformedLink = useTransformLink()



const { isOpen,close } = useContacts()


const $inputs = ref([])
const formData = reactive({
  hasErrors: true,
  inputs: [
    {
      required: false,
      id: 'name',
      name: 'Name',
      label: 'Your Name',
      type: 'text',
      error: false,
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
      required: false,
      id: 'message',
      name: 'Message',
      label: 'Your Message',
      type: 'text',
      error: false,
      value: '',
    },
  ],
})

const { onInputValue,onSubmit } = useForm(formData,$inputs,'Dextall footer')

const updatedSubmit = async () => {
  await onSubmit()
  close()
}
</script>
