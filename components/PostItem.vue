<script setup lang="ts">
import { iPostBlock } from '~/types/story'

interface iProps {
  date?: string
  title?: string
  image?: string
  blocks: iPostBlock[]
}

const props = defineProps<iProps>()


const formattedDate = useFormattedDate(props.date)

const getTransformedLink = useTransformLink()
</script>

<template>
  <article>
    <div class="section section--nm internal-news-1">
      <div class="container internal-news-1__wrapper">
        <h1 class="internal-news-1__title">
          {{ title }}
        </h1>
      </div>

      <ParallaxImg
        v-if="image"
        class="internal-news-1__bg"
        :with-border-radius="false"
        :src="image"
        :width="1920"
        :height="1080"
      />
    </div>
    <div class="section internal-news-2">
      <div class="container internal-news-2__wrapper">
        <div class="internal-news-2__line"></div>
        <div class="grid internal-news-2__content-wrapper">
          <time class="internal-news-2__date">
            {{ formattedDate }}
          </time>
          <div class="internal-news-2__content">

            <div
              v-for="block in blocks"
              :key="block._uid"
              class="internal-news-2__block"
            >
              <div class="internal-news-2__block-text">
                <RichText :text="block.text_formatting" />
              </div>
              <CircleButton
                v-if="block.button[0]"
                v-bind="getTransformedLink(block.button[0].link)"
                class="internal-news-2__btn"
              > {{ block.button[0].text_button }}
              </CircleButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
