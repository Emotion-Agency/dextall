<script setup lang="ts">
interface iProps {
  tag?: string
  href?: string
}

const props = defineProps<iProps>()

const tag = props.tag ?? 'button'
const to = props.tag === 'nuxt-link' ? props.href : undefined

const href = props.tag === 'a' ? props.href : undefined

</script>

<template>
  <component
    :is="tag"
    class="circle-button"
    :to="to"
    :href="href"
    :target="props.tag === 'a' && '_blank'"
    :rel="props.tag === 'a' && 'noreferer noopener'"
  >
    <span class="circle-button__content">
      <slot></slot>
    </span>
    <span class="circle-button__bg"></span>
  </component>
</template>
