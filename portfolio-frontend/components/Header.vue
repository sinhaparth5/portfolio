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
  <div id="offcanvas" class="group text-[#181818]">
        <div class="fixed z-50 top-0 right-0 bottom-0 left-0 bg-[#414141] bg-opacity-[.67] origin-top scale-y-0 group-[[data-t='active']]:scale-y-100 transition-all ease-in-out duration-[.6s] delay-[.6s] group-[[data-t='active']]:delay-0"></div>
        <div class="fixed z-50 top-0 right-0 bottom-0 left-0 max-w-[400px] bg-[#181818] origin-bottom scale-y-0 group-[[data-t='active']]:scale-y-100 transition-all ease-in-out duration-[.6s] delay-[.3s]">
          <div class="absolute top-0 right-0 bottom-0 left-0 bg-white origin-bottom scale-y-0 group-[[data-t='active']]:scale-y-100 transition-all ease-in-out duration-[.6s] delay-0 group-[[data-t='active']]:delay-[.6s]"></div>
          <div class="relative font-medium">
            <div class="ps-[40px] flex justify-between items-center py-[60px] translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.2s]">
              <a href="index.html">
                <img class="" src="https://raw.githubusercontent.com/uiaextend/exgrid/main/light/logo-light.png" alt="">
              </a>
              <a href="#offcanvas" data-c-toggle="active" class="text-[30px] w-[60px] text-center">
                <i class="fa-solid fa-xmark"></i>
              </a>
            </div>
            <div id="offcanvas-menu" class="group/menu relative">
              <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.2s]">
                <a href="index.html">Home</a>
                <a href="#offcanvas-menu" data-c-toggle="mh" class="border-l-[1px] border-l-[#cecece] border-opacity-[.48] w-[60px] h-[60px] flex items-center justify-center">
                  <i class="fa-solid fa-plus"></i>
                </a>
              </div>
              <div class="hidden group-[[data-t='mh']]/menu:block absolute z-50 top-0 right-0 bottom-0 left-0 bg-white">
                <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.3s]">
                  <a href="index.html">Home</a>
                  <a href="#offcanvas-menu" data-c-toggle="" class="border-l-[1px] border-l-[#cecece] border-opacity-[.48] w-[60px] h-[60px] flex items-center justify-center">
                    <i class="fa-solid fa-minus"></i>
                  </a>
                </div>
                <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
                  <a href="index2.html">Creative Designer</a>
                </div>
                <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
                  <a href="index.html">Web Developer</a>
                </div>
                <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
                  <a href="index3.html">Freelancer</a>
                </div>
                <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
                  <a href="index4.html">Digital Marketter</a>
                </div>
                <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
                  <a href="index5.html">Psychiatrist</a>
                </div>
              </div>
              <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.25s]">
                <a href="about.html">About Me</a>
              </div>
              <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.3s]">
                <a href="services.html">Services</a>
                <a href="#offcanvas-menu" data-c-toggle="ms" class="border-l-[1px] border-l-[#cecece] border-opacity-[.48] w-[60px] h-[60px] flex items-center justify-center">
                  <i class="fa-solid fa-plus"></i>
                </a>
              </div>
              <div class="hidden group-[[data-t='ms']]/menu:block absolute z-50 top-0 right-0 bottom-0 left-0 bg-white">
                <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.3s]">
                  <a href="services.html">Services</a>
                  <a href="#offcanvas-menu" data-c-toggle="" class="border-l-[1px] border-l-[#cecece] border-opacity-[.48] w-[60px] h-[60px] flex items-center justify-center">
                    <i class="fa-solid fa-minus"></i>
                  </a>
                </div>
                <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
                  <a href="services.html">Our Services</a>
                </div>
                <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
                  <a href="service-details.html">Service Details</a>
                </div>
              </div>
              <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.35s]">
                <a href="case.html">Case Study</a>
                <a href="#offcanvas-menu" data-c-toggle="mc" class="border-l-[1px] border-l-[#cecece] border-opacity-[.48] w-[60px] h-[60px] flex items-center justify-center">
                  <i class="fa-solid fa-plus"></i>
                </a>
              </div>
              <div class="hidden group-[[data-t='mc']]/menu:block absolute z-50 top-0 right-0 bottom-0 left-0 bg-white">
                <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.3s]">
                  <a href="case.html">Case Study</a>
                  <a href="#offcanvas-menu" data-c-toggle="" class="border-l-[1px] border-l-[#cecece] border-opacity-[.48] w-[60px] h-[60px] flex items-center justify-center">
                    <i class="fa-solid fa-minus"></i>
                  </a>
                </div>
                <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
                  <a href="case.html">Our Cases</a>
                </div>
                <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
                  <a href="case-details.html">Case Details</a>
                </div>
              </div>
              <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.4s]">
                <a href="blog.html">Blog</a>
                <a href="#offcanvas-menu" data-c-toggle="mb" class="border-l-[1px] border-l-[#cecece] border-opacity-[.48] w-[60px] h-[60px] flex items-center justify-center">
                  <i class="fa-solid fa-plus"></i>
                </a>
              </div>
              <div class="hidden group-[[data-t='mb']]/menu:block absolute z-50 top-0 right-0 bottom-0 left-0 bg-white">
                <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.3s]">
                  <a href="blog.html">Blog</a>
                  <a href="#offcanvas-menu" data-c-toggle="" class="border-l-[1px] border-l-[#cecece] border-opacity-[.48] w-[60px] h-[60px] flex items-center justify-center">
                    <i class="fa-solid fa-minus"></i>
                  </a>
                </div>
                <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
                  <a href="blog.html">Our Story</a>
                </div>
                <div class="ps-[40px] h-[60px] flex items-center border-t-[1px] border-t-[#cecece] border-opacity-[.48]">
                  <a href="blog-details.html">Blog Details</a>
                </div>
              </div>
              <div class="ps-[40px] h-[60px] border-t-[1px] border-t-[#cecece] border-b-[1px] border-b-[#cecece] border-opacity-[.48] flex justify-between items-center translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.45s]">
                <a href="contact.html">Contact</a>
              </div>
            </div>
            <div class="mt-[60px] flex justify-center gap-[24px] text-[24px] leading-[24px] translate-y-[30px] opacity-0 group-[[data-t='active']]:opacity-100 group-[[data-t='active']]:translate-y-0 transition-all ease-in-out duration-[.6s] group-[[data-t='active']]:delay-[1.5s]">
              <a href="#" class="relative w-[46px] h-[46px] flex items-center justify-center">
                <div class="absolute top-0 right-0 bottom-0 left-0 rounded-[46px] bg-white bg-opacity-[.01] backdrop-blur-[15px] shadow-[10px_10px_5px_0px_rgba(255,255,255,.1)_inset,_0px_-5px_25px_0px_rgba(29,161,242,.35)_inset]"></div>
                <div class="relative text-transparent bg-clip-text bg-gradient-to-b from-[#1da1f2] from-[0%] to-[#00fafa] to-[100%]">
                  <i class="fa-brands fa-twitter"></i>
                </div>
              </a>
              <a href="#" class="relative w-[46px] h-[46px] flex items-center justify-center">
                <div class="absolute top-0 right-0 bottom-0 left-0 rounded-[46px] bg-white bg-opacity-[.01] backdrop-blur-[15px] shadow-[10px_10px_5px_0px_rgba(255,255,255,.1)_inset,_0px_-5px_25px_0px_rgba(174,1,255,.35)_inset]"></div>
                <div class="relative text-transparent bg-clip-text bg-gradient-to-b from-[#ffa800] from-[0%] to-[#ae01ff] to-[100%]">
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </a>
              <a href="#" class="relative w-[46px] h-[46px] flex items-center justify-center">
                <div class="absolute top-0 right-0 bottom-0 left-0 rounded-[46px] bg-white bg-opacity-[.01] backdrop-blur-[15px] shadow-[10px_10px_5px_0px_rgba(255,255,255,.1)_inset,_0px_-5px_25px_0px_rgba(73,99,237,.45)_inset]"></div>
                <div class="relative text-transparent bg-clip-text bg-gradient-to-bl from-[#ff676a] from-[0%] via-[#c543d3] via-[42%] to-[#0074fd] to-[100%]">
                  <i class="fa-brands fa-facebook-messenger"></i>
                </div>
              </a>
              <a href="#" class="relative w-[46px] h-[46px] flex items-center justify-center">
                <div class="absolute top-0 right-0 bottom-0 left-0 rounded-[46px] bg-white bg-opacity-[.01] backdrop-blur-[15px] shadow-[10px_10px_5px_0px_rgba(255,255,255,.1)_inset,_0px_-5px_25px_0px_rgba(255,0,77,.35)_inset]"></div>
                <div class="relative text-transparent bg-clip-text bg-gradient-to-bl from-[#ff004d] from-[0%] to-[#cf1178] to-[100%]">
                  <i class="fa-brands fa-youtube"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  mounted() {
    // Function to attach event listener
    const s = (el) => {
      el.addEventListener('click', function (e) {
        e.preventDefault();

        const t = document.querySelector(this.hash);
        const n = this.getAttribute('data-c-toggle');

        t.setAttribute(
            'data-t',
            t.getAttribute('data-t') === n && !t.getAttribute('data-twice') ? '' : n
        );

        return false;
      });
    };

    // Select all elements with the `data-c-toggle` attribute and attach the event listener
    document.querySelectorAll('[data-c-toggle]').forEach(s);
  }
};
</script>