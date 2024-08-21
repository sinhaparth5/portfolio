<template>
    <div class="articles-container">
      <!-- Check if articles exist -->
      <div v-if="articles && articles.length">
        <MediumArticle
          v-for="(article, index) in articles"
          :key="index"
          :article="article"
        />
      </div>
      <div v-else>
        <p>No articles found</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import MediumArticle from '@/components/MediumArticle.vue';
  
  const articles = ref([]);
  
  // Fetch articles using asyncData or mounted lifecycle
  onMounted(async () => {
    try {
      const mediumUsername = 'parth-sinha';
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`
      );
      const data = await response.json();
  
      // Transform and assign the articles
      articles.value = data.items
        .map((item) => ({
          title: item.title,
          description: item.description.replace(/<[^>]*>/g, '').slice(0, 150),
          img: item.thumbnail,
          link: item.link,
          pubDate: new Date(item.pubDate)
        }))
        .sort((a, b) => b.pubDate - a.pubDate); // Sort by date descending
    } catch (error) {
      console.error('Failed to fetch Medium data', error);
    }
  });
  </script>
  