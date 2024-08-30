<template>
  <Header />
  <slot />
  <Footer/>
  <Hamburger />
</template>
<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Hamburger from "../components/ui/Humburger.vue"
</script>