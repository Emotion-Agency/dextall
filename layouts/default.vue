<script setup lang="ts">
import { useFonts } from '~/composables/fonts'
import emitter from 'tiny-emitter/instance.js'

const GOOGLE_TM_ID = 'GTM-PGTGL5W'

useFonts()

const parallaxInit = async () => {
  const { Parallax } = await import('@emotionagency/parallax')
  window.parallax = new Parallax({ mobile: false })
}

onMounted(async () => {
  const { hello } = await import('~/scripts/utils/hello')
  hello()

  setTimeout(() => {
    const sbBridge = new window.StoryblokBridge()
    sbBridge.on(['input', 'published', 'change'], event => {
      emitter.emit('storyChange', event.story)
    })

    // sbBridge.pingEditor(() => {
    //   if (sbBridge.isInEditor()) {
    //     isInEditor.value = true
    //   }
    // })
  }, 200)

  const { winSizes } = await import('~/scripts/utils/winSizes')
  const { resize } = await import('@/scripts/utils/ea')
  resize.on(winSizes)

  await parallaxInit()
})

onBeforeUnmount(() => {
  window.parallax && window.parallax.destroy()
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  script: [
    {
      hid: 'gtm',
      children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GOOGLE_TM_ID}');`,
      type: 'text/javascript',
    },
  ],
})
</script>

<template>
  <div id="app">
    <Head>
      <Title>Dextall</Title>
      <Meta name="viewport" content="width=device-width, initial-scale=1">
      </Meta>
      <Meta name="robots" content="noindex" />
      <Meta name="twitter:card" content="summary_large_image"> </Meta>
      <Meta name="twitter:image" content="/twitter.png"> </Meta>

      <Meta property="og:site_name" content="Dextall"> </Meta>
      <Meta property="og:image" content="/twitter.png"> </Meta>

      <Link rel="icon" type="image/x-icon" href="/favicon.ico"> </Link>
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
