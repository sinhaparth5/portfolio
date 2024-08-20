<script setup lang="ts">
  const route = useRoute()
</script>

<template>
  <p>Current route: {{ route.path }}</p>
</template>