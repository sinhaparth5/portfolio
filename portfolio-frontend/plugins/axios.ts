import axios from "axios";
import { defineNuxtPlugin } from "nuxt/app";

const instance = axios.create({
    baseURL: "http://localhost:8080/articles",
})

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('axios', instance);
})