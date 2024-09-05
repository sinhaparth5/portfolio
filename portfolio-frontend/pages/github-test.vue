<script setup>
import { onMounted } from "vue";
import GitHubCalendar from "github-calendar";
import { useHead } from 'nuxt/app';

useHead({
  link: [
    {
      rel: "stylesheet",
      href: 'https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css',
    },
  ],
});

onMounted(() => {
  GitHubCalendar("#calendar", "sinhaparth5", {
    responsive: true,
  });
});
</script>

<template>
<div>
  <div class="container mx-auto">
    <div id="calendar"></div>
  </div>
</div>
</template>

<style scoped>
#calendar {
  width: 100%;
}
</style>