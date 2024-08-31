import { inject } from "@vercel/analytics";
import type { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin(() => {
  if (process.client) {
    inject();
  }
})
