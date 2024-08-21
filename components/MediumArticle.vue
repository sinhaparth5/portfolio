<template>
    <div @click="goToMediumArticle" class="article-card">
      <img :src="article.img" alt="Article Image" class="article-image" />
      <div class="article-content">
        <h3 class="article-title">{{ article.title }}</h3>
        <p class="article-description">{{ article.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      article: {
        type: Object,
        required: true
      }
    },
    methods: {
      goToMediumArticle() {
        window.open(this.article.link, '_blank');
      }
    }
  };
  </script>
  
  <style scoped>
  .article-card {
    cursor: pointer;
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: box-shadow 0.3s;
  }
  
  .article-card:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  .article-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 12px;
  }
  
  .article-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 8px 0;
  }
  
  .article-description {
    font-size: 1rem;
    color: #666;
  }
  </style>
  