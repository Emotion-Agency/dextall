<script lang='ts' setup>
interface iProps {
  title: string
  description?: string
}

defineProps<iProps>()
</script>

<template>

  <Head>
    <Title>{{ title }}</Title>
    <Meta
      name="description"
      :content="description.trim()"
    />

    <Meta
      name="og:title"
      :content="title.trim()"
    />
    <Meta
      name="og:description"
      :content="description.trim()"
    />

    <Meta
      name="twitter:title"
      :content="title.trim()"
    />
    <Meta
      name="twitter:description"
      :content="description.trim()"
    />
  </Head>
</template>