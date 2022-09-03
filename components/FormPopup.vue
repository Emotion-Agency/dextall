<template>
  <div
    class="form-popup"
    :class="[isOpen && 'form-popup--open']"
  >
    <div
      class="form-popup__backdrop"
      @click="close"
    ></div>
    <div class="form-popup__content">
      <div class="form-popup__line-wrapper">

        <div class="form-popup__line"></div>
      </div>
      <div class="container form-popup__window">
        <button
          class="form-popup__close-btn"
          @click="close"
        >
          <span class="form-popup__btn-line"></span>
          <span class="form-popup__btn-line"></span>
        </button>
        <div class="form-popup__top">
          <h2 class="form-popup__title">{{ title }}</h2>
          <p
            v-if="text"
            class="form-popup__desc"
          >
            {{ text }}
          </p>
          <form
            class="grid form-popup__form"
            novalidate
            @submit.prevent="updatedSubmit"
          >
            <TheInput
              v-for="input in formData.inputs"
              :id="input.id"
              :key="input.id"
              ref="$inputs"
              class="form-popup__input"
              :type="input.type"
              :placeholder="input.label"
              :required="input.required"
              :validation-text="input.validationText && input.validationText"
              :validation="input.validationText && input.validation"
              @input-value="onInputValue"
            />
            <CircleButton class="form-popup__btn">Send</CircleButton>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
interface iProps {
  title: string
  text?: string
  formTitle?: string
}

const props = defineProps<iProps>()

const { isOpen,close } = useFormPopup()

onBeforeUnmount(() => {
  close()
})


const $inputs = ref([])
const formData = reactive({
  hasErrors: true,
  inputs: [
    {
      required: true,
      validation: 'required',
      validationText: 'this field is required',
      id: 'name',
      name: 'Name',
      label: 'Your Name',
      type: 'text',
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
      validation: 'required',
      validationText: 'this field is required',
      id: 'message',
      name: 'Message',
      label: 'Your Message',
      type: 'text',
      error: true,
      value: '',
    },
  ],
})

const { onInputValue,onSubmit } = useForm(formData,$inputs,props.formTitle)

const updatedSubmit = async () => {
  await onSubmit()
  close()
}
</script>