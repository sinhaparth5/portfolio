import { defineNuxtPlugin } from "nuxt/app";
import gsap from 'gsap';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('gsap', gsap);
});