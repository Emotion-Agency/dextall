<template>
  <main>
    <section class="section section--nm webinars-1">
      <div class="container webinars-1__wrapper">
        <div class="webinars-1__top">
          <h2 class="webinars-1__title">Become a Building Performance Pro</h2>
          <p class="webinars-1__desc">
            Our client services team would love to hear from you
          </p>
        </div>
        <form
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
      required: false,
      id: 'webinar',
      name: 'Webinar',
      label: 'Choose the webinar',
      type: 'text',
      error: false,
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
      value: '',
    },
    {
      required: false,
      id: 'firstname',
      name: 'Firstname',
      label: 'Your Firstname',
      type: 'text',
      error: false,
      value: '',
    },
    {
      required: false,
      id: 'lastname',
      name: 'Lastname',
      label: 'Your Lastname',
      type: 'text',
      error: false,
      value: '',
    },
  ],
})

const { onInputValue, onSubmit } = useForm(formData, $inputs)

const updatedSubmit = async () => {
  await onSubmit()
  close()
}
</script>
