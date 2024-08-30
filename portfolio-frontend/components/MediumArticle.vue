<template>
  <div class="container mx-auto">
  <div v-if="items && items.length">
  <div v-for="item in items" :key="item.id" class="flex flex-col bg-white border w-96 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
    <img class="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image">
    <div class="p-4 md:p-5">
      <h3 class="text-lg font-bold text-gray-800 dark:text-white">
        {{ item.title }}
      </h3>
      <p class="mt-1 text-gray-500 dark:text-neutral-400">
        Test description: <br />
        Publish date: {{ formatDate(item.pubDate) }}
      </p>
      <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" :href="item.link" target="_blank">
        Read More
      </a>
    </div>
  </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import type {Item} from 'types/Item';

const items = ref<Item[] | null>(null);
const pending = ref(true);
const error = ref<string | null>(null);

const fetchItems = async () => {
  try {
    const response = await fetch('http://localhost:8001/articles');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    items.value = await response.json();
  } catch (err) {
    error.value = 'Error fetching Medium data';
    console.error(err);
  } finally {
    pending.value = false;
  }
};

onMounted(() => {
  fetchItems();
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US');
};
</script>
