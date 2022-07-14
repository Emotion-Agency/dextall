<script setup lang="ts">
import { useAppStore } from '~/store/app'
import { useFonts } from '~/composables/fonts'

useFonts()

const appStore = useAppStore()

const parallaxInit = async () => {
  const { Parallax } = await import('@emotionagency/parallax')
  window.parallax = new Parallax({ mobile: false })
}

onMounted(async () => {
  const { default: supportsWebP } = await import('supports-webp')

  if (await supportsWebP) {
    appStore.setIsWebp(true)
  } else {
    appStore.setIsWebp(false)
  }
  const { hello } = await import('~/scripts/utils/hello')
  hello()

  const { winSizes } = await import('~/scripts/utils/winSizes')
  const { resize } = await import('@/scripts/utils/ea')
  resize.on(winSizes)

  await parallaxInit()
})

onBeforeUnmount(() => {
  window.parallax && window.parallax.destroy()
})

</script>


<template>
  <div id="app">

    <Head>
      <Title>Dextall</Title>
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      >
      </Meta>
      <Meta
        name="twitter:card"
        content="summary_large_image"
      >
      </Meta>
      <Meta
        name="twitter:image"
        content="/twitter.png"
      >
      </Meta>

      <Meta
        property="og:site_name"
        content="Dextall"
      >
      </Meta>
      <Meta
        property="og:image"
        content="/icon.png"
      >
      </Meta>

      <Link
        rel="icon"
        type="image/x-icon"
        href="/favicon.ico"
      >
      </Link>
    </Head>
    <AppLoader />
    <AppGrid />
    <UiLoader />
    <SmoothScroll>
      <TheHeader />
      <slot />
      <TheContacts />
      <TheFooter />
    </SmoothScroll>
    <AppToast />
  </div>
</template>
