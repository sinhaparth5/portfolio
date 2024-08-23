<script setup lang="ts">
  const route = useRoute()

  import { useNuxtApp } from 'nuxt/app';
  import { onMounted } from 'vue';
  const { $gsap } = useNuxtApp();

  onMounted(() => {
    $gsap.to('.box', { x : 200, duration: 2});
    $gsap.to('.title', { rotation: 3, x: 100, duration: 1 });
  });
</script>

<template>
  <p>Current route: {{ route.path }}</p>
  <div class="box" style="width: 100px; height: 100px; background-color: red;"></div>
  
</template>