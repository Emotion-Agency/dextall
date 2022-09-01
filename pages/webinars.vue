<template>
  <main>
    <PageMeta :meta="meta" />
    <section class="section section--nm webinars-1">
      <div class="container webinars-1__wrapper">
        <div class="webinars-1__top">
          <h2
            data-a-h
            class="webinars-1__title"
            v-html="splitText('Become a Building Performance Pro')"
          />
          <p
            data-a-t
            class="webinars-1__desc"
          >
            Our client services team would love to hear from you
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
      options: [
        'Webinar 1',
        'Test'
      ],
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
      name: 'Firstname',
      label: 'Firstname',
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
      name: 'Lastname',
      label: 'Lastname',
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

const { onInputValue, onSubmit } = useForm(formData, $inputs)

const updatedSubmit = async () => {
  await onSubmit()
  close()
}

useTransition()
useObserver('.section')
const splitText = useSplitText()


const meta = {
  title: 'Webinar registration',
  description: 'Webinar registration'
}
</script>
