<script setup>
import { onMounted } from "vue";
import GitHubCalendar from "github-calendar";

onMounted(() => {
  GitHubCalendar("#calendar", "sinhaparth5", {
    responsive: true,
  });
});
</script>

<template>
<div>
  <div id="calendar"></div>
</div>
</template>

<style scoped>
#calendar {
  width: 100%;
}
</style>