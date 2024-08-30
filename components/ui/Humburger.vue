<template>
  <div id="offcanvas" :class="{ 'group': true, 'active': isActive }" class="text-[#181818]">
    <div  class="fixed z-50 top-0 right-0 bottom-0 left-0 bg-[#414141] bg-opacity-[.67] origin-top scale-y-0 transition-all ease-in-out duration-[.6s] delay-[.6s]"
          :class="{ 'scale-y-100 delay-0': isActive }"></div>
    <div class="fixed z-50 top-0 right-0 bottom-0 left-0 max-w-[400px] bg-[#181818] origin-bottom scale-y-0 group-[[data-t='active']]:scale-y-100 transition-all ease-in-out duration-[.6s] delay-[.3s]">
      <div class="absolute top-0 right-0 bottom-0 left-0 bg-white origin-bottom scale-y-0 group-[[data-t='active']]:scale-y-100 transition-all ease-in-out duration-[.6s] delay-0 group-[[data-t='active']]:delay-[.6s]"></div>
      <div class="relative font-medium">
        <div class="ps-[40px] flex justify-between items-center py-[60px] translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.2s]">
          <NuxtLink to="/" target="_blank">
            <img class="" src="https://raw.githubusercontent.com/uiaextend/exgrid/main/light/logo-light.png" alt="">
          </NuxtLink>
          <a href="#offcanvas" data-c-toggle="active" class="text-[30px] w-[60px] text-center">
            <i class="fa-solid fa-xmark"></i>
          </a>
        </div>
        <div id="offcanvas-menu" class="group/menu relative">
          <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.2s]">
            <NuxtLink to="/" target="_blank">Home</NuxtLink>
            <a href="#offcanvas-menu" data-c-toggle="mh" class="border-l-[1px] border-l-[#cecece] border-opacity-[.48] w-[60px] h-[60px] flex items-center justify-center">
              <i class="fa-solid fa-plus"></i>
            </a>
          </div>
          <div class="hidden group-[[data-t='mh']]/menu:block absolute z-50 top-0 right-0 bottom-0 left-0 bg-white">
            <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.3s]">
              <NuxtLink to="/" target="_blank">Home</NuxtLink>
              <a href="#offcanvas-menu" data-c-toggle="" class="border-l-[1px] border-l-[#cecece] border-opacity-[.48] w-[60px] h-[60px] flex items-center justify-center">
                <i class="fa-solid fa-minus"></i>
              </a>
            </div>
            <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
              <NuxtLink to="/" target="_blank">Creative Designer</NuxtLink>
            </div>
            <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
              <NuxtLink to="/" target="_blank">Web Developer</NuxtLink>
            </div>
            <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
              <NuxtLink to="index3.html">Freelancer</NuxtLink>
            </div>
            <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
              <NuxtLink to="index4.html">Digital Marketter</NuxtLink>
            </div>
            <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
              <NuxtLink to="index5.html">Psychiatrist</NuxtLink>
            </div>
          </div>
          <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.25s]">
            <NuxtLink to="about.html">About Me</NuxtLink>
          </div>
          <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.3s]">
            <NuxtLink to="services.html">Services</NuxtLink>
            <a href="#offcanvas-menu" data-c-toggle="ms" class="border-l-[1px] border-l-[#cecece] border-opacity-[.48] w-[60px] h-[60px] flex items-center justify-center">
              <i class="fa-solid fa-plus"></i>
            </a>
          </div>
          <div class="hidden group-[[data-t='ms']]/menu:block absolute z-50 top-0 right-0 bottom-0 left-0 bg-white">
            <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.3s]">
              <NuxtLink to="services.html">Services</NuxtLink>
              <a href="#offcanvas-menu" data-c-toggle="" class="border-l-[1px] border-l-[#cecece] border-opacity-[.48] w-[60px] h-[60px] flex items-center justify-center">
                <i class="fa-solid fa-minus"></i>
              </a>
            </div>
            <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
              <NuxtLink to="services.html">Our Services</NuxtLink>
            </div>
            <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
              <NuxtLink to="service-details.html">Service Details</NuxtLink>
            </div>
          </div>
          <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.35s]">
            <NuxtLink to="case.html">Case Study</NuxtLink>
            <a href="#offcanvas-menu" data-c-toggle="mc" class="border-l-[1px] border-l-[#cecece] border-opacity-[.48] w-[60px] h-[60px] flex items-center justify-center">
              <i class="fa-solid fa-plus"></i>
            </a>
          </div>
          <div class="hidden group-[[data-t='mc']]/menu:block absolute z-50 top-0 right-0 bottom-0 left-0 bg-white">
            <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.3s]">
              <NuxtLink to="case.html">Case Study</NuxtLink>
              <a href="#offcanvas-menu" data-c-toggle="" class="border-l-[1px] border-l-[#cecece] border-opacity-[.48] w-[60px] h-[60px] flex items-center justify-center">
                <i class="fa-solid fa-minus"></i>
              </a>
            </div>
            <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
              <NuxtLink to="case.html">Our Cases</NuxtLink>
            </div>
            <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
              <NuxtLink to="case-details.html">Case Details</NuxtLink>
            </div>
          </div>
          <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.4s]">
            <NuxtLink to="blog.html">Blog</NuxtLink>
            <a href="#offcanvas-menu" data-c-toggle="mb" class="border-l-[1px] border-l-[#cecece] border-opacity-[.48] w-[60px] h-[60px] flex items-center justify-center">
              <i class="fa-solid fa-plus"></i>
            </a>
          </div>
          <div class="hidden group-[[data-t='mb']]/menu:block absolute z-50 top-0 right-0 bottom-0 left-0 bg-white">
            <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.3s]">
              <NuxtLink to="blog.html">Blog</NuxtLink>
              <a href="#offcanvas-menu" data-c-toggle="" class="border-l-[1px] border-l-[#cecece] border-opacity-[.48] w-[60px] h-[60px] flex items-center justify-center">
                <i class="fa-solid fa-minus"></i>
              </a>
            </div>
            <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
              <NuxtLink to="blog.html">Our Story</NuxtLink>
            </div>
            <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
              <NuxtLink to="blog-details.html">Blog Details</NuxtLink>
            </div>
          </div>
          <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-b-[1px] border-b-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.45s]">
            <NuxtLink to="contact.html">Contact</NuxtLink>
          </div>
        </div>
        <div class="mt-[60px] flex justify-center gap-[24px] text-[24px] leading-[24px] translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.5s]">
          <NuxtLink to="#" class="relative w-[46px] h-[46px] flex items-center justify-center">
            <div class="absolute top-0 right-0 bottom-0 left-0 rounded-[46px] bg-white bg-opacity-[.01] backdrop-blur-[15px] shadow-[10px_10px_5px_0px_rgba(255,255,255,.1)_inset,_0px_-5px_25px_0px_rgba(29,161,242,.35)_inset]"></div>
            <div class="relative text-transparent bg-clip-text bg-gradient-to-b from-[#1da1f2] from-[0%] to-[#00fafa] to-[100%]">
              <i class="fa-brands fa-twitter"></i>
            </div>
          </NuxtLink>
          <NuxtLink to="#" class="relative w-[46px] h-[46px] flex items-center justify-center">
            <div class="absolute top-0 right-0 bottom-0 left-0 rounded-[46px] bg-white bg-opacity-[.01] backdrop-blur-[15px] shadow-[10px_10px_5px_0px_rgba(255,255,255,.1)_inset,_0px_-5px_25px_0px_rgba(174,1,255,.35)_inset]"></div>
            <div class="relative text-transparent bg-clip-text bg-gradient-to-b from-[#ffa800] from-[0%] to-[#ae01ff] to-[100%]">
              <i class="fa-brands fa-instagram"></i>
            </div>
          </NuxtLink>
          <NuxtLink to="#" class="relative w-[46px] h-[46px] flex items-center justify-center">
            <div class="absolute top-0 right-0 bottom-0 left-0 rounded-[46px] bg-white bg-opacity-[.01] backdrop-blur-[15px] shadow-[10px_10px_5px_0px_rgba(255,255,255,.1)_inset,_0px_-5px_25px_0px_rgba(73,99,237,.45)_inset]"></div>
            <div class="relative text-transparent bg-clip-text bg-gradient-to-bl from-[#ff676a] from-[0%] via-[#c543d3] via-[42%] to-[#0074fd] to-[100%]">
              <i class="fa-brands fa-facebook-messenger"></i>
            </div>
          </NuxtLink>
          <NuxtLink to="#" class="relative w-[46px] h-[46px] flex items-center justify-center">
            <div class="absolute top-0 right-0 bottom-0 left-0 rounded-[46px] bg-white bg-opacity-[.01] backdrop-blur-[15px] shadow-[10px_10px_5px_0px_rgba(255,255,255,.1)_inset,_0px_-5px_25px_0px_rgba(255,0,77,.35)_inset]"></div>
            <div class="relative text-transparent bg-clip-text bg-gradient-to-bl from-[#ff004d] from-[0%] to-[#cf1178] to-[100%]">
              <i class="fa-brands fa-youtube"></i>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref(false);
const togglecanvas = () => {
  isActive.value = !isActive.value;
  }
</script>