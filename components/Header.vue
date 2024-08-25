<template>
  <div class="fixed top-0 right-0 left-0 z-30 bg-[#0f0f0f] h-[120px] border-b-[1px] border-b-[#414141] border-opacity-[.48] shadow-[0_0_12px_rgba(255,255,255,0.3)]"></div>
  <div class="absolute top-0 right-0 left-0 z-30 h-[120px]">
    <img class="w-full h-full object-cover object-center" src="https://raw.githubusercontent.com/uiaextend/exgrid/main/dark/header-bg.png" alt="">
  </div>
  <div class="sticky top-0 z-50 max-w-[1440px] mx-auto px-4 h-[120px] flex items-center justify-between xl:justify-start">
    <NuxtLink to="/" target="_blank">
      <NuxtImg class="h-14" src="/img/parth-logo.png" alt="Portfolio Logo" />
    </NuxtLink>
    <div class="flex-1 hidden xl:flex justify-center font-semibold">
      <div class="group relative mx-[20px]">
        <NuxtLink to="/" class="flex items-center h-[120px] text-[#f70354]">
          <div class="me-[5px]">Home</div>
          <div class="group-hover:rotate-[180deg] transition-all ease-in-out duration-[.3s]"><i class="fa-solid fa-angle-down"></i></div>
        </NuxtLink>
        <div class="invisible opacity-0 group-hover:opacity-100 group-hover:visible absolute right-0 w-[260px] transition-all duration-[.5s]">
          <div class="absolute z-[2] top-[30px] group-hover:top-0 right-[25px] w-[15px] h-[15px] bg-white rotate-45 transition-all duration-[.5s]"></div>
          <div class="relative top-[30px] group-hover:top-0 bg-white text-[#181818] mt-[5px] py-[10px] rounded-[5px] shadow-[0_0_12px_rgba(0,_0,_0,_0.1)] transition-all duration-[.5s]">
            <a href="index.html" class="group/c1 p-[20px] flex gap-[10px] items-center text-[#f70354]">
              <div class="px-[5px] border-t-[#f70354] border-t-[2px] transition-all duration-[.5s]"></div>
              <div class="transition-all duration-[.5s]">Creative Designer</div>
            </a>
            <div class="border-t-[1px] border-t-[#cecece] opacity-[.48]"></div>
            <a href="index2.html" class="group/c1 p-[20px] flex gap-[10px] items-center hover:text-[#f70354]">
              <div class="origin-left scale-x-0 group-hover/c1:scale-x-100 px-[5px] border-t-[#f70354] border-t-[2px] transition-all duration-[.5s]"></div>
              <div class="transition-all duration-[.5s]">Web Developer</div>
            </a>
            <div class="border-t-[1px] border-t-[#cecece] opacity-[.48]"></div>
            <a href="index3.html" class="group/c1 p-[20px] flex gap-[10px] items-center hover:text-[#f70354]">
              <div class="origin-left scale-x-0 group-hover/c1:scale-x-100 px-[5px] border-t-[#f70354] border-t-[2px] transition-all duration-[.5s]"></div>
              <div class="transition-all duration-[.5s]">Freelancer</div>
            </a>
            <div class="border-t-[1px] border-t-[#cecece] opacity-[.48]"></div>
            <a href="index4.html" class="group/c1 p-[20px] flex gap-[10px] items-center hover:text-[#f70354]">
              <div class="origin-left scale-x-0 group-hover/c1:scale-x-100 px-[5px] border-t-[#f70354] border-t-[2px] transition-all duration-[.5s]"></div>
              <div class="transition-all duration-[.5s]">Digital Marketter</div>
            </a>
            <div class="border-t-[1px] border-t-[#cecece] opacity-[.48]"></div>
            <a href="index5.html" class="group/c1 p-[20px] flex gap-[10px] items-center hover:text-[#f70354]">
              <div class="origin-left scale-x-0 group-hover/c1:scale-x-100 px-[5px] border-t-[#f70354] border-t-[2px] transition-all duration-[.5s]"></div>
              <div class="transition-all duration-[.5s]">Psychiatrist</div>
            </a>
          </div>
        </div>
      </div>
      <div class="group relative mx-[20px]">
        <NuxtLink to="/about" class="flex items-center h-[120px] hover:text-[#f70354]">
          <div class="">About Me</div>
        </NuxtLink>
      </div>
      <div class="group relative mx-[20px]">
        <a href="services.html" class="flex items-center h-[120px] hover:text-[#f70354]">
          <div class="me-[5px]">Services</div>
          <div class="group-hover:rotate-[180deg] transition-all ease-in-out duration-[.3s]"><i class="fa-solid fa-angle-down"></i></div>
        </a>
        <div class="invisible opacity-0 group-hover:opacity-100 group-hover:visible absolute right-0 w-[260px] transition-all duration-[.5s]">
          <div class="absolute z-[2] top-[30px] group-hover:top-0 right-[25px] w-[15px] h-[15px] bg-white rotate-45 transition-all duration-[.5s]"></div>
          <div class="relative top-[30px] group-hover:top-0 bg-white text-[#181818] mt-[5px] py-[10px] rounded-[5px] shadow-[0_0_12px_rgba(0,_0,_0,_0.1)] transition-all duration-[.5s]">
            <a href="services.html" class="group/c1 p-[20px] flex gap-[10px] items-center hover:text-[#f70354]">
              <div class="origin-left scale-x-0 group-hover/c1:scale-x-100 px-[5px] border-t-[#f70354] border-t-[2px] transition-all duration-[.5s]"></div>
              <div class="transition-all duration-[.5s]">Our Services</div>
            </a>
            <div class="border-t-[1px] border-t-[#cecece] opacity-[.48]"></div>
            <a href="service-details.html" class="group/c1 p-[20px] flex gap-[10px] items-center hover:text-[#f70354]">
              <div class="origin-left scale-x-0 group-hover/c1:scale-x-100 px-[5px] border-t-[#f70354] border-t-[2px] transition-all duration-[.5s]"></div>
              <div class="transition-all duration-[.5s]">Service Details</div>
            </a>
          </div>
        </div>
      </div>
      <div class="group relative mx-[20px]">
        <a href="case.html" class="flex items-center h-[120px] hover:text-[#f70354]">
          <div class="me-[5px]">Case Study</div>
          <div class="group-hover:rotate-[180deg] transition-all ease-in-out duration-[.3s]"><i class="fa-solid fa-angle-down"></i></div>
        </a>
        <div class="invisible opacity-0 group-hover:opacity-100 group-hover:visible absolute right-0 w-[260px] transition-all duration-[.5s]">
          <div class="absolute z-[2] top-[30px] group-hover:top-0 right-[25px] w-[15px] h-[15px] bg-white rotate-45 transition-all duration-[.5s]"></div>
          <div class="relative top-[30px] group-hover:top-0 bg-white text-[#181818] mt-[5px] py-[10px] rounded-[5px] shadow-[0_0_12px_rgba(0,_0,_0,_0.1)] transition-all duration-[.5s]">
            <a href="case.html" class="group/c1 p-[20px] flex gap-[10px] items-center hover:text-[#f70354]">
              <div class="origin-left scale-x-0 group-hover/c1:scale-x-100 px-[5px] border-t-[#f70354] border-t-[2px] transition-all duration-[.5s]"></div>
              <div class="transition-all duration-[.5s]">Case Study</div>
            </a>
            <div class="border-t-[1px] border-t-[#cecece] opacity-[.48]"></div>
            <a href="case-details.html" class="group/c1 p-[20px] flex gap-[10px] items-center hover:text-[#f70354]">
              <div class="origin-left scale-x-0 group-hover/c1:scale-x-100 px-[5px] border-t-[#f70354] border-t-[2px] transition-all duration-[.5s]"></div>
              <div class="transition-all duration-[.5s]">Case Details</div>
            </a>
          </div>
        </div>
      </div>
      <div class="group relative mx-[20px]">
        <a href="blog.html" class="flex items-center h-[120px] hover:text-[#f70354]">
          <div class="me-[5px]">Blog</div>
          <div class="group-hover:rotate-[180deg] transition-all ease-in-out duration-[.3s]"><i class="fa-solid fa-angle-down"></i></div>
        </a>
        <div class="invisible opacity-0 group-hover:opacity-100 group-hover:visible absolute right-0 w-[260px] transition-all duration-[.5s]">
          <div class="absolute z-[2] top-[30px] group-hover:top-0 right-[25px] w-[15px] h-[15px] bg-white rotate-45 transition-all duration-[.5s]"></div>
          <div class="relative top-[30px] group-hover:top-0 bg-white text-[#181818] mt-[5px] py-[10px] rounded-[5px] shadow-[0_0_12px_rgba(0,_0,_0,_0.1)] transition-all duration-[.5s]">
            <a href="blog.html" class="group/c1 p-[20px] flex gap-[10px] items-center hover:text-[#f70354]">
              <div class="origin-left scale-x-0 group-hover/c1:scale-x-100 px-[5px] border-t-[#f70354] border-t-[2px] transition-all duration-[.5s]"></div>
              <div class="transition-all duration-[.5s]">Our Story</div>
            </a>
            <div class="border-t-[1px] border-t-[#cecece] opacity-[.48]"></div>
            <a href="blog-details.html" class="group/c1 p-[20px] flex gap-[10px] items-center hover:text-[#f70354]">
              <div class="origin-left scale-x-0 group-hover/c1:scale-x-100 px-[5px] border-t-[#f70354] border-t-[2px] transition-all duration-[.5s]"></div>
              <div class="transition-all duration-[.5s]">Story Details</div>
            </a>
          </div>
        </div>
      </div>
      <div class="group relative mx-[20px]">
        <a href="contact.html" class="flex items-center h-[120px] hover:text-[#f70354]">
          <div class="">Contact</div>
        </a>
      </div>
    </div>
    <div class="flex">
      <a href="#offcanvas" data-c-toggle="active" class="h-[50px] w-[50px] flex justify-center items-center bg-[#f70354] rounded-[50px]">
        <div class="w-[20px] h-[10px] border-t-[2px] border-t-white border-b-[2px] border-b-white"></div>
      </a>
    </div>
  </div>
</template>

<script setup>
</script>