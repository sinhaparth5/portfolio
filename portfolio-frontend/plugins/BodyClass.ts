import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin(() => {
    if (process.client) {
        const classes = ['relative', 'bg-[#0f0f0f]', 'text-white', 'text-[16px]', 'leading-[26px]', "font-['Space_Grotesk']"]
        document.body.classList.add(...classes);
    }
});