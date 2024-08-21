<template>
  <Card style="width: 25rem; overflow: hidden" @click="goToMediumArticle">
      <template #header>
          <img :src="article.img" alt="Article Image" style="width: 100%; height: auto;" />
      </template>
      <template #title>{{ article.title }}</template>
      <template #subtitle>{{ article.description }}</template>
      <template #content>
          <!-- Optional content can go here, if needed -->
      </template>
      <template #footer>
          <!-- Optional footer content, if needed -->
      </template>
  </Card>
</template>

<script setup>
import Card from 'primevue/card'; // Ensure PrimeVue Card component is imported

const props = defineProps({
article: {
  type: Object,
  required: true
}
});

const goToMediumArticle = () => {
window.open(props.article.link, '_blank');
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
