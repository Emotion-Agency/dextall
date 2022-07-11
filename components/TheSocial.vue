<script lang='ts' setup>
import { useSocialStory } from '~/composables/stories/social.story'
const { story } = await useSocialStory()

const icons = {
  ['Instagram']: 'In',
  ['Facebook']: 'Fb',
  ['YouTube']: 'You',
  ['Twitter']: 'Tw',
  ['LinkedIn']: 'Lin',
}
</script>

<template>
  <ul class="social">
    <li
      v-for="link in story.social_links"
      :key="link._uid"
      class="social__li"
    >
      <a
        class="social__link"
        :href="link.link"
        target="'_blank'"
        rel="'noreferer noopener'"
      > {{ icons[link.type] }} </a>
    </li>
  </ul>
</template>
