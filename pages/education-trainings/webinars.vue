<template>
  <main>
    <PageMeta :meta="meta" />
    <section class="section section--nm webinars-1">
      <div class="container webinars-1__wrapper">
        <div class="webinars-1__top">
          <h2
            data-a-h
            class="webinars-1__title"
            v-html="splitText(story.title)"
          />
          <p
            data-a-t
            class="webinars-1__desc"
          >
            {{story.text}}
          </p>
        </div>
        <form
          data-a-o
          class="grid webinars-1__form"
          novalidate
          @submit.prevent="updatedSubmit"
        >
          <TheInput
            v-for="input in formData.inputs"
            :id="input.id"
            :key="input.id"
            ref="$inputs"
            class="webinars-1__input"
            :type="input.type"
            :placeholder="input.label"
            :required="input.required"
            :validation-text="input.validationText && input.validationText"
            :validation="input.validationText && input.validation"
            :options="input.options && input.options"
            @input-value="onInputValue"
          />
          <CircleButton class="webinars-1__btn">Send</CircleButton>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useWebinarsStory } from '~/composables/stories/webinars.story'

const { story } = await useWebinarsStory()

const $inputs = ref([])
const formData = reactive({
  hasErrors: true,
  inputs: [
    {
      required: true,
      id: 'webinar',
      validation: 'required',
      validationText: 'this field is required',
      name: 'Webinar',
      label: 'Select webinar',
      type: 'select',
      error: true,
      options: story.value?.webinars?.map(el => `${el.webinar_name}: ${el.webinar_date}`),
      value: '',
    },
    {
      required: true,
      id: 'webinars-1-email',
      name: 'Email',
      label: 'Your Email',
      type: 'email',
      validation: 'email',
      validationText: 'incorrect email',
      error: true,
      options: [],
      value: '',
    },
    {
      required: true,
      validation: 'required',
      validationText: 'this field is required',
      id: 'firstname',
      name: 'First name',
      label: 'First name',
      type: 'text',
      error: true,
      options: [],
      value: '',
    },
    {
      required: true,
      validation: 'required',
      validationText: 'this field is required',
      id: 'lastname',
      name: 'Last name',
      label: 'Last name',
      type: 'text',
      error: true,
      options: [],
      value: '',
    },
    {
      required: true,
      validation: 'required',
      validationText: 'this field is required',
      id: 'company',
      name: 'Company',
      label: 'Company',
      type: 'text',
      error: true,
      options: [],
      value: '',
    },
  ],
})

const SHEET_URL = 'https://sheetdb.io/api/v1/0188ljhbx52ho'
const { onInputValue, onSubmit } = useForm(formData, $inputs, 'Webinars page', [SHEET_URL])


const updatedSubmit = async () => {
  await onSubmit()
}

useTransition()
useObserver('.section')
const splitText = useSplitText()


const meta = {
  title: 'Webinar registration',
  description: 'Webinar registration'
}


</script>
