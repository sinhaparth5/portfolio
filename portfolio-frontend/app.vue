<template>
  <NuxtLayout>
    <SpeedInsights />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.tippy-box[data-theme~=exgrid]{ background: transparent; }
.tippy-box[data-theme~=exgrid]>.tippy-arrow { opacity: 0; }
</style>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";

useSeoMeta({
  title: 'P4rth',
  ogTitle: 'P4rth Sinh@',
  description: 'This is my Portfolio website',
  ogDescription: 'This is my Portfolio website',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
