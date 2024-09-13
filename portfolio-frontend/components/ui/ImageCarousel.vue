<template>
  <div class="py-[60px] md:py-[120px]">
    <!-- First Auto-scrolling Section -->
    <div class="overflow-hidden mb-[60px]">
      <div class="splide" ref="splide1">
        <div class="splide__track">
          <ul class="splide__list flex flex-nowrap gap-[60px]">
            <li class="splide__slide min-w-[690px]" v-for="(image, index) in images" :key="index">
              <img class="w-full h-full object-cover object-center" :src="image" :alt="'Image ' + (index + 1)" />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Second Auto-scrolling Section (Reverse) -->
    <div class="overflow-hidden">
      <div class="splide" ref="splide2">
        <div class="splide__track">
          <ul class="splide__list flex flex-row-reverse flex-nowrap gap-[60px]">
            <li class="splide__slide min-w-[690px]" v-for="(image, index) in images" :key="index">
              <img class="w-full h-full object-cover object-center" :src="image" :alt="'Image ' + (index + 1)" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

// Image sources
const images = [
  'https://raw.githubusercontent.com/uiaextend/exgrid/main/light/img-view/one.png',
  'https://raw.githubusercontent.com/uiaextend/exgrid/main/light/img-view/two.png',
  'https://raw.githubusercontent.com/uiaextend/exgrid/main/light/img-view/three.png',
  'https://raw.githubusercontent.com/uiaextend/exgrid/main/light/img-view/four.png',
  'https://raw.githubusercontent.com/uiaextend/exgrid/main/light/img-view/five.png',
  'https://raw.githubusercontent.com/uiaextend/exgrid/main/light/img-view/six.png',
  'https://raw.githubusercontent.com/uiaextend/exgrid/main/light/img-view/seven.png',
];

const splide1 = ref(null);
const splide2 = ref(null);

onMounted(() => {
  // First auto-scroll (left to right)
  splide1.value = new Splide(splide1.value, {
    type: 'loop',
    autoScroll: {
      speed: 2, // Adjust auto-scroll speed
    },
    perPage: 1,
    arrows: false,
    pagination: false,
  });
  splide1.value.mount({ AutoScroll });

  // Second auto-scroll (right to left)
  splide2.value = new Splide(splide2.value, {
    type: 'loop',
    direction: 'rtl', // Scroll from right to left
    autoScroll: {
      speed: 2, // Adjust auto-scroll speed
    },
    perPage: 1,
    arrows: false,
    pagination: false,
  });
  splide2.value.mount({ AutoScroll });
});
</script>

<style scoped>
.splide__slide img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
