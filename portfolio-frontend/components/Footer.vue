<template>
  <div class="relative">
    <img class="absolute top-0 left-0 w-full h-full object-cover object-top" src="https://raw.githubusercontent.com/uiaextend/exgrid/main/light/footer-bg.png" alt="">
    <div class="relative max-w-[1440px] mx-auto px-4 pt-[60px] pb-[40px]">
      <div class="flex justify-between">
        <div class="flex text-[#949494]">
          <div class="me-[5px]">&copy;{{ currentYear }} All Rights Reserved</div>
          <NuxtLink to="/" class="font-semibold">Parth Sinha</NuxtLink>
        </div>
        <div class="hidden md:flex gap-[24px] text-[24px] leading-[24px]">
          <a href="https://x.com/sinhaparth555" class="text-transparent bg-clip-text bg-gradient-to-b from-[#1da1f2] from-[0%] to-[#00fafa] to-[100%]">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.instagram.com/sinhaparth5/" class="text-transparent bg-clip-text bg-gradient-to-b from-[#ffa800] from-[0%] to-[#ae01ff] to-[100%]">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/parth-sinha18/" class="text-transparent bg-clip-text bg-gradient-to-bl from-[#ff676a] from-[0%] via-[#c543d3] via-[42%] to-[#0074fd] to-[100%]">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/sinhaparth5" class="text-transparent bg-clip-text bg-gradient-to-bl from-[#ff004d] from-[0%] to-[#cf1178] to-[100%]">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCurrentYear } from "../composables/useCurrentYear";
import {watchEffect} from "vue";

const { currentYear, updateYear } = useCurrentYear();
watchEffect(() => {
  updateYear()
})
</script>