<template>
  <div class="relative z-30 bg-[#0f0f0f] mt-[-1px] py-[50px]"></div>
  <!--section-->
  <div class="max-w-[1440px] mx-auto px-4">
    <div class="flex">
      <div class="md:hidden xl:block w-full md:w-[275px]">
        <div class="sticky top-[220px]">
          <div class="grid grid-cols-1 gap-[24px]">
            <div class="text-[#686868] font-bold p-[20px] rounded-[30px] border-[1px] border-[#414141] bg-gradient-to-b from-[#262626] to-[rgba(38,38,38,0.1)] grid grid-cols-1 gap-[20px]">
              <NuxtImg class="w-full rounded-[30px]" src="/img/parth-profile.webp" alt="Portfolio profile picture" />
              <NuxtLink href="/" class="text-white text-[20px] leading-[30px]" target="_blank">Parth Sinha</NuxtLink>
              <div class="flex text-[15px] leading-[24px]">
                <div class="me-[12px]"><i class="fa-solid fa-briefcase"></i></div>
                <div class="">Developer</div>
              </div>
              <div class="flex text-[15px] leading-[24px]">
                <div class="me-[12px]"><i class="fa-solid fa-location-dot"></i></div>
                <div class="">Lives in Oxford, UK</div>
              </div>
              <div class="my-[10px] border-t-[1px] border-t-[#414141]"></div>
              <div class="flex gap-[12px] text-[24px] leading-[24px]">
                <a href="https://x.com/sinhaparth555" class="relative w-[46px] h-[46px] flex items-center justify-center">
                  <div class="absolute top-0 right-0 bottom-0 left-0 rounded-[46px] bg-white bg-opacity-[.01] backdrop-blur-[15px] shadow-[10px_10px_5px_0px_rgba(255,255,255,.1)_inset,_0px_-5px_25px_0px_rgba(29,161,242,.35)_inset]"></div>
                  <div class="relative text-transparent bg-clip-text bg-gradient-to-b from-[#1da1f2] from-[0%] to-[#00fafa] to-[100%]">
                    <i class="fa-brands fa-x-twitter"></i>
                  </div>
                </a>
                <a href="https://www.instagram.com/sinhaparth5/" class="relative w-[46px] h-[46px] flex items-center justify-center">
                  <div class="absolute top-0 right-0 bottom-0 left-0 rounded-[46px] bg-white bg-opacity-[.01] backdrop-blur-[15px] shadow-[10px_10px_5px_0px_rgba(255,255,255,.1)_inset,_0px_-5px_25px_0px_rgba(174,1,255,.35)_inset]"></div>
                  <div class="relative text-transparent bg-clip-text bg-gradient-to-b from-[#ffa800] from-[0%] to-[#ae01ff] to-[100%]">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/parth-sinha18/" class="relative w-[46px] h-[46px] flex items-center justify-center">
                  <div class="absolute top-0 right-0 bottom-0 left-0 rounded-[46px] bg-white bg-opacity-[.01] backdrop-blur-[15px] shadow-[10px_10px_5px_0px_rgba(255,255,255,.1)_inset,_0px_-5px_25px_0px_rgba(73,99,237,.45)_inset]"></div>
                  <div class="relative text-transparent bg-clip-text bg-gradient-to-bl from-[#ff676a] from-[0%] via-[#c543d3] via-[42%] to-[#0074fd] to-[100%]">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                </a>
                <a href="https://github.com/sinhaparth5" class="relative w-[46px] h-[46px] flex items-center justify-center">
                  <div class="absolute top-0 right-0 bottom-0 left-0 rounded-[46px] bg-white bg-opacity-[.01] backdrop-blur-[15px] shadow-[10px_10px_5px_0px_rgba(255,255,255,.1)_inset,_0px_-5px_25px_0px_rgba(255,0,77,.35)_inset]"></div>
                  <div class="relative text-transparent bg-clip-text bg-gradient-to-bl from-[#ff004d] from-[0%] to-[#cf1178] to-[100%]">
                    <i class="fa-brands fa-github"></i>
                  </div>
                </a>
              </div>
            </div>
            <a href="mailto:contact@parthsinha.com" class="group relative p-[20px] rounded-[20px] border-[1px] border-[#414141] hover:border-white flex items-center justify-between transition-all duration-[.5s]">
              <div class="font-bold">Hire Me</div>
              <div class="text-[20px] text-[#a0a0a0] group-hover:text-white transition-all duration-[.5s]">
                <i class="fa-solid fa-circle-arrow-right"></i>
              </div>
            </a>
            <a href="#" class="group relative p-[20px] rounded-[20px] border-[1px] border-[#414141] hover:border-white flex items-center justify-between transition-all duration-[.5s]">
              <div class="font-bold">Download Resume</div>
              <div class="text-[20px] text-[#a0a0a0] group-hover:text-white transition-all duration-[.5s]">
                <i class="fa-solid fa-cloud-arrow-down"></i>
              </div>
            </a>
            <div class="flex text-[#949494]">
              <div class="me-[5px]">&copy; All Rights Reserved</div>
              <a href="#" class="font-semibold">Parth Sinha</a>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden xl:block w-[100px]"></div>
      <div class="hidden md:block flex-1">
        <div class="p-[40px] rounded-[30px] border-[#414141] bg-gradient-to-b from-[#262626] to-[rgba(38,38,38,0.1)] border-[1px]">
          <div data-scroll="[data-scroll-item]" class="text-[55px] leading-[65px] font-semibold mb-[30px]">
            <div data-scroll-item class="group" :class="{ 'c-active': isActive }">
              <!-- First Line -->
              <div class="flex">
        <span v-for="(char, index) in firstLine" :key="index" :style="getStyle(index)" class="opacity-0 translate-x-[70px] transition-all duration-[.8s]">
          <template v-if="char === ' '">&nbsp;</template>
          <template v-else>{{ char }}</template>
        </span>
              </div>

              <!-- Second Line -->
              <div class="flex">
                <div>
                  <div class="flex">
            <span v-for="(char, index) in secondLinePart1" :key="index" :style="getStyle(index)" class="opacity-0 translate-x-[70px] transition-all duration-[.8s]">
              {{ char }}
            </span>
                  </div>
                  <NuxtImg class="mx-auto" src="https://raw.githubusercontent.com/uiaextend/exgrid/main/light/banner/shape.png" alt="Lines" />
                </div>
                <div class="ms-[10px] flex">
          <span v-for="(char, index) in secondLinePart2" :key="index" :style="getStyle(index + secondLinePart1.length)" class="opacity-0 translate-x-[70px] transition-all duration-[.8s]">
            {{ char }}
          </span>
                </div>
              </div>
            </div>
          </div>
          <div class="">My expertise lies in creating compelling user experiences for early-stage</div>
          <div class="">startups, achieved by establishing a strong link between the unique.</div>
          <div class="border-t-[1px] border-t-[#414141] mt-[40px] mb-[30px]"></div>
          <div class="flex justify-between xl:justify-start gap-[16px]">
            <div class="">
              <div class="flex mb-[6px]">
                <div class="text-[#f70354] me-[12px]"><i class="fa-solid fa-check"></i></div>
                <div class="">7+</div>
              </div>
              <div class="text-[15px] leading-[24px] text-[#686868]">YEARS EXPERIENCE</div>
            </div>
            <div class="">
              <div class="flex mb-[6px]">
                <div class="text-[#f70354] me-[12px]"><i class="fa-solid fa-check"></i></div>
                <div class="">125+</div>
              </div>
              <div class="text-[15px] leading-[24px] text-[#686868]">CLIENTS WORLDWIDE</div>
            </div>
            <div class="">
              <div class="flex mb-[6px]">
                <div class="text-[#f70354] me-[12px]"><i class="fa-solid fa-check"></i></div>
                <div class="">750+</div>
              </div>
              <div class="text-[15px] leading-[24px] text-[#686868]">TOTAL PROJECTS</div>
            </div>
            <div class="xl:flex-1">
              <a href="mailto:contact@parthsinha.com" class="group inline-flex gap-[20px] xl:gap-0 xl:flex justify-between px-[15px] py-[10px] border-[#414141] border-[1px] rounded-[12px]">
                <div class="relative font-bold overflow-hidden">
                  <div class="absolute top-0 right-0 bottom-0 left-0 flex">
                    <div class="relative top-[-100%] group-hover:top-0 transition-all duration-[.25s] ease-[cubic-bezier(0.5,-1,0.5,2)] delay-[.35s] group-hover:delay-[.05s]">H</div>
                    <div class="relative top-[-100%] group-hover:top-0 transition-all duration-[.25s] ease-[cubic-bezier(0.5,-1,0.5,2)] delay-[.3s] group-hover:delay-[.15s]">I</div>
                    <div class="relative top-[-100%] group-hover:top-0 transition-all duration-[.25s] ease-[cubic-bezier(0.5,-1,0.5,2)] delay-[.25s] group-hover:delay-[.2s]">R</div>
                    <div class="relative top-[-100%] group-hover:top-0 transition-all duration-[.25s] ease-[cubic-bezier(0.5,-1,0.5,2)] delay-[.2s] group-hover:delay-[.25s]">E</div>
                    <div class="relative top-[-100%] group-hover:top-0 transition-all duration-[.25s] ease-[cubic-bezier(0.5,-1,0.5,2)] delay-[.15s] group-hover:delay-[.3s]">&nbsp;</div>
                    <div class="relative top-[-100%] group-hover:top-0 transition-all duration-[.25s] ease-[cubic-bezier(0.5,-1,0.5,2)] delay-[.05s] group-hover:delay-[.35s]">M</div>
                    <div class="relative top-[-100%] group-hover:top-0 transition-all duration-[.25s] ease-[cubic-bezier(0.5,-1,0.5,2)] delay-0 group-hover:delay-[.4s]">E</div>
                  </div>
                  <div class="relative top-0 group-hover:top-[100%] transition-all duration-[.7s] ease-in-out delay-[.35s] group-hover:delay-0">HIRE ME</div>
                </div>
                <div class="text-[20px] text-[#a0a0a0] group-hover:text-white transition-all duration-[.5s]">
                  <i class="fa-solid fa-circle-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div data-scroll="[data-scroll-item]" class="text-[45px] leading-[55px] font-semibold mt-[60px] mb-[30px]">
          <div v-if="false" data-scroll-cog>
            {
            "scrollTrigger": {
            "trigger": "[data-scroll-item]"
            }
            }
          </div>
          <div data-scroll-item class="group flex justify-center gap-[10px]" :class="{ 'c-active': isActive }">
            <!-- First Word -->
            <div class="overflow-hidden">
              <div
                  class="translate-x-[100%] opacity-0 transition-all ease-out duration-[3.2s]"
                  :class="getClassForFirstWord"
              >
                Medium
              </div>
            </div>

            <!-- Second Word -->
            <div class="overflow-hidden text-[#f70354]">
              <div
                  class="translate-x-[-100%] opacity-0 transition-all ease-out duration-[3.2s]"
                  :class="getClassForSecondWord"
              >
                Articles
              </div>
            </div>
          </div>
        </div>
        <div v-if="items && items.length">
          <div v-for="item in items.slice(0, 4)" :key="item">
            <div data-scroll="[data-scroll-item]">
              <div v-if="false" data-scroll-cog>
                {
                "scrollTrigger": {
                "trigger": "[data-scroll-item]"
                }
                }
              </div>
              <div data-scroll-item class="group overflow-hidden" :class="{ 'c-active': isActive }">
                <div class="opacity-0 translate-y-[100px] group-[.c-active]:opacity-100 group-[.c-active]:translate-y-0 transition-all duration-[1s] delay-[.05s]">
                  <div class="border-t-[#414141] border-t-[1px]"></div>
                  <div class="py-[60px] text-[#686868]">
                    <div class="flex gap-[10px] mb-[18px]">
                      <a :href="item.link" class="py-[4px] px-[16px] border-[1px] border-[#414141] hover:border-[#f70354] hover:text-[#f70354] rounded-[40px] flex items-center">
                        <div>Read Full Article</div>
                        <div class="ms-[10px]"><i class="fa-solid fa-square-caret-right"></i></div>
                      </a>
                    </div>
                    <div class="flex justify-between items-center">
                      <a href="#" class="text-[30px] leading-[40px] font-bold hover:text-[#f70354]">{{ item.title }}</a>
                      <a href="#" class="text-[15px] leading-[24px]">{{ formatDate(item.pubDate) }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t-[#414141] border-t-[1px]"></div>
        <div data-scroll="[data-scroll-item]" class="text-[45px] leading-[55px] font-semibold mt-[60px] mb-[30px]">
          <div class="hidden" data-scroll-cog="">
            {
              scrollTrigger: {
                trigger: "[data-scroll-item]"
              }
            }
          </div>
          <div ref="scrollItem" :class="{ 'c-active': isActive }" data-scroll-item="" class="group flex justify-center gap-[10px]">
            <div class="overflow-hidden">
              <div class="opacity-0 translate-x-[100px] group-[.c-active]:opacity-100 group-[.c-active]:translate-x-0 transition-all ease-out duration-[3.2s]">About</div>
            </div>
            <div class="overflow-hidden text-[#f70354]">
              <div class="opacity-0 translate-x-[-100px] group-[.c-active]:opacity-100 group-[.c-active]:translate-x-0 transition-all ease-out duration-[3.2s]">Me</div>
            </div>
          </div>
        </div>
        <div class="p-[40px] rounded-[30px] border-[#414141] bg-gradient-to-b from-[#262626] to-[rgba(38,38,38,0.1)] border-[1px]">
          <div class="text-[55px] leading-[65px] mb-[40px]">
            <div ref="scrollItem" :class="{ 'c-active': isActive }" class="group">
              <div class="flex uppercase overflow-hidden">
                <div v-for="(item, index) in formattedText('Hi I\'m Parth,')"
                     :key="index"
                     :class="['opacity-0 translate-x-[70px] transition-all duration-[.8s]', {'group-[.c-active]:opacity-100 group-[.c-active]:translate-x-0': true, [`group-[.c-active]:delay-[${index * 0.03}s]`]: true }]">
                  {{ item }}
                </div>
              </div>
              <div class="flex">
                <div class="font-bold flex overflow-hidden">
                  <div v-for="(item, index) in formattedText('Developer')"
                       :key="index"
                       :class="['opacity-0 translate-x-[70px] transition-all duration-[.8s]', {'group-[.c-active]:opacity-100 group-[.c-active]:translate-x-0': true, [`group-[.c-active]:delay-[${index * 0.03}s]`]: true }]">
                    {{ item }}
                  </div>
                </div>
                <div class="ms-[10px] flex overflow-hidden">
                  <div v-for="(item, index) in formattedText('AND')"
                       :key="index"
                       :class="['opacity-0 translate-x-[70px] transition-all duration-[.8s]', {'group-[.c-active]:opacity-100 group-[.c-active]:translate-x-0': true, [`group-[.c-active]:delay-[${index * 0.03}s]`]: true }]">
                    {{ item }}
                  </div>
                </div>
              </div>
              <div class="px-[10px] bg-white text-[#f70354] font-bold inline-flex overflow-hidden">
                <div v-for="(item, index) in formattedText('Computer Science')"
                     :key="index"
                     :class="['opacity-0 translate-x-[70px] transition-all duration-[.8s]', {'group-[.c-active]:opacity-100 group-[.c-active]:translate-x-0': true, [`group-[.c-active]:delay-[${index * 0.03}s]`]: true }]">
                  {{ item }}
                </div>
              </div>
              <div class="flex overflow-hidden">
                <div v-for="(item, index) in formattedText('Student at Oxford')"
                     :key="index"
                     :class="['opacity-0 translate-x-[70px] transition-all duration-[.8s]', {'group-[.c-active]:opacity-100 group-[.c-active]:translate-x-0': true, [`group-[.c-active]:delay-[${index * 0.03}s]`]: true }]">
                  {{ item }}
                </div>
              </div>
              <div class="font-bold flex">
                <div v-for="(item, index) in formattedText('Brookes University')"
                     :key="index"
                     :class="['opacity-0 translate-x-[70px] transition-all duration-[.8s]', {'group-[.c-active]:opacity-100 group-[.c-active]:translate-x-0': true, [`group-[.c-active]:delay-[${index * 0.03}s]`]: true }]">
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
          <div class="relative mb-[40px]">
            <NuxtImg class="w-full rounded-[30px]" src="https://raw.githubusercontent.com/uiaextend/exgrid/main/light/banner/bn-blog.png" alt="" />
            <div class="absolute right-[30px] bottom-[30px]">
              <a href="#" class="relative w-[48px] h-[48px] flex items-center justify-center">
                <div class="absolute top-0 right-0 bottom-0 left-0 rounded-[46px] bg-white bg-opacity-[.01] backdrop-blur-[15px] shadow-[10px_10px_5px_0px_rgba(255,255,255,.1)_inset,_0px_-5px_25px_0px_rgba(255,0,77,.35)_inset]"></div>
                <div class="relative text-transparent bg-clip-text bg-gradient-to-bl from-[#ff004d] from-[0%] to-[#cf1178] to-[100%]">
                  <i class="fa-brands fa-youtube"></i>
                </div>
              </a>
            </div>
          </div>
          <div data-scroll="[data-scroll-item]" class="">
            <div class="hidden" data-scroll-cog="">
              {
              "scrollTrigger": {
              "trigger": "[data-scroll-item]"

              }
              }
            </div>
            <div data-scroll-item="" class="group overflow-hidden">
              <div class="grid grid-cols-2 items-center opacity-0 translate-y-[100px] group-[.c-active]:opacity-100 group-[.c-active]:translate-y-0 transition-all duration-[1s]">
                <div class="text-[30px] leading-[40px] font-bold">Awwwards.</div>
                <div class="grid grid-cols-1 gap-[20px]">
                  <div class="flex items-center text-[#686868]">
                    <div class="w-[6px] h-[6px] bg-[#686868] rounded-[6px]"></div>
                    <div class="flex-1 ps-[20px]">Site Of The Day Portfolio (2020)</div>
                  </div>
                  <div class="flex items-center text-[#686868]">
                    <div class="w-[6px] h-[6px] bg-[#686868] rounded-[6px]"></div>
                    <div class="flex-1 ps-[20px]">Best Website Content (2021)</div>
                  </div>
                  <div class="flex items-center text-[#686868]">
                    <div class="w-[6px] h-[6px] bg-[#686868] rounded-[6px]"></div>
                    <div class="flex-1 ps-[20px]">Up Labs Contest Winning (2022)</div>
                  </div>
                  <div class="flex items-center text-[#686868]">
                    <div class="w-[6px] h-[6px] bg-[#686868] rounded-[6px]"></div>
                    <div class="flex-1 ps-[20px]">Site Of The Day Portfolio (2020)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-[45px] leading-[55px] font-semibold mt-[60px] mb-[40px]">History</div>
        <div data-scroll="[data-scroll-item]" class="">
          <div class="hidden" data-scroll-cog="">
            {
            "scrollTrigger": {
            "trigger": "[data-scroll-item]"

            }
            }
          </div>
          <div data-scroll-item="" class="group overflow-hidden">
            <div class="relative opacity-0 translate-y-[100px] group-[.c-active]:opacity-100 group-[.c-active]:translate-y-0 transition-all duration-[1s] delay-[.05s]">
              <div class="absolute top-0 right-0 bottom-0 left-0 bg-[#f70354] scale-y-0 group-hover:scale-y-100 transition-all duration-[.7s] ease-[cubic-bezier(0.4,0.885,0.32,1.275)]"></div>
              <div class="relative py-[40px] px-[20px] flex gap-[80px] border-t-[1px] border-t-[#414141] border-b-[1px] border-b-[#414141] text-[#686868] group-hover:text-white">
                <div class="text-white text-[30px] leading-[40px] font-bold">Now</div>
                <div class="">
                  <div class="text-white text-[30px] leading-[40px] font-bold">Design Lead</div>
                  <div class="mt-[20px]">Fantasy Interactive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-scroll="[data-scroll-item]" class="">
          <div class="hidden" data-scroll-cog="">
            {
            "scrollTrigger": {
            "trigger": "[data-scroll-item]"

            }
            }
          </div>
          <div data-scroll-item="" class="group overflow-hidden">
            <div class="relative opacity-0 translate-y-[100px] group-[.c-active]:opacity-100 group-[.c-active]:translate-y-0 transition-all duration-[1s] delay-[.05s]">
              <div class="absolute top-0 right-0 bottom-0 left-0 bg-[#f70354] scale-y-0 group-hover:scale-y-100 transition-all duration-[.7s] ease-[cubic-bezier(0.4,0.885,0.32,1.275)]"></div>
              <div class="relative py-[40px] px-[20px] flex gap-[80px] border-b-[1px] border-b-[#414141] text-[#686868] group-hover:text-white">
                <div class="text-white text-[30px] leading-[40px] font-bold">2021</div>
                <div class="">
                  <div class="text-white text-[30px] leading-[40px] font-bold">Marketing Expert</div>
                  <div class="mt-[20px]">Fantasy Interactive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-scroll="[data-scroll-item]" class="">
          <div class="hidden" data-scroll-cog="">
            {
            "scrollTrigger": {
            "trigger": "[data-scroll-item]"

            }
            }
          </div>
          <div data-scroll-item="" class="group overflow-hidden">
            <div class="relative opacity-0 translate-y-[100px] group-[.c-active]:opacity-100 group-[.c-active]:translate-y-0 transition-all duration-[1s] delay-[.05s]">
              <div class="absolute top-0 right-0 bottom-0 left-0 bg-[#f70354] scale-y-0 group-hover:scale-y-100 transition-all duration-[.7s] ease-[cubic-bezier(0.4,0.885,0.32,1.275)]"></div>
              <div class="relative py-[40px] px-[20px] flex gap-[80px] border-b-[1px] border-b-[#414141] text-[#686868] group-hover:text-white">
                <div class="text-white text-[30px] leading-[40px] font-bold">2020</div>
                <div class="">
                  <div class="text-white text-[30px] leading-[40px] font-bold">Senior Developer</div>
                  <div class="mt-[20px]">Fantasy Interactive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-scroll="[data-scroll-item]" class="">
          <div class="hidden" data-scroll-cog="">
            {
            "scrollTrigger": {
            "trigger": "[data-scroll-item]"

            }
            }
          </div>
          <div data-scroll-item="" class="group overflow-hidden">
            <div class="relative opacity-0 translate-y-[100px] group-[.c-active]:opacity-100 group-[.c-active]:translate-y-0 transition-all duration-[1s] delay-[.05s]">
              <div class="absolute top-0 right-0 bottom-0 left-0 bg-[#f70354] scale-y-0 group-hover:scale-y-100 transition-all duration-[.7s] ease-[cubic-bezier(0.4,0.885,0.32,1.275)]"></div>
              <div class="relative py-[40px] px-[20px] flex gap-[80px] border-b-[1px] border-b-[#414141] text-[#686868] group-hover:text-white">
                <div class="text-white text-[30px] leading-[40px] font-bold">2017</div>
                <div class="">
                  <div class="text-white text-[30px] leading-[40px] font-bold">Lead Architecture</div>
                  <div class="mt-[20px]">Fantasy Interactive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden xl:block w-[100px]"></div>
      <div class="hidden xl:block w-[275px]">
        <div class="sticky top-[220px]">
          <div class="p-[20px] mb-[24px] rounded-[30px] border-[1px] border-[#414141] bg-gradient-to-b from-[#262626] to-[rgba(38,38,38,0.1)]">
            <div class="mb-[24px] text-[20px] leading-[30px] font-bold">My Specializations</div>
            <div class="border-t-[#414141] border-t-[1px]"></div>
            <a href="#" class="flex py-[20px] text-[#686868] hover:text-[#f70354]">
              <div class="w-[6px] h-[6px] bg-[#686868] rounded-[6px] mt-[10px]"></div>
              <div class="flex-1 ps-[10px]">
                <div class="font-semibold mb-[8px]">Website Design</div>
                <div class="text-[15px] leading-[24px]">24 Projects</div>
              </div>
              <div class="">
                <i class="fa-solid fa-circle-arrow-right"></i>
              </div>
            </a>
            <div class="border-t-[#414141] border-t-[1px]"></div>
            <a href="#" class="flex py-[20px] text-[#686868] hover:text-[#f70354]">
              <div class="w-[6px] h-[6px] bg-[#686868] rounded-[6px] mt-[10px]"></div>
              <div class="flex-1 ps-[10px]">
                <div class="font-semibold mb-[8px]">Website Development</div>
                <div class="text-[15px] leading-[24px]">16 Projects</div>
              </div>
              <div class="">
                <i class="fa-solid fa-circle-arrow-right"></i>
              </div>
            </a>
            <div class="border-t-[#414141] border-t-[1px]"></div>
            <a href="#" class="flex py-[20px] text-[#686868] hover:text-[#f70354]">
              <div class="w-[6px] h-[6px] bg-[#686868] rounded-[6px] mt-[10px]"></div>
              <div class="flex-1 ps-[10px]">
                <div class="font-semibold mb-[8px]">UX/UI Design</div>
                <div class="text-[15px] leading-[24px]">45 Projects</div>
              </div>
              <div class="">
                <i class="fa-solid fa-circle-arrow-right"></i>
              </div>
            </a>
            <div class="border-t-[#414141] border-t-[1px]"></div>
            <a href="#" class="flex py-[20px] text-[#686868] hover:text-[#f70354]">
              <div class="w-[6px] h-[6px] bg-[#686868] rounded-[6px] mt-[10px]"></div>
              <div class="flex-1 ps-[10px]">
                <div class="font-semibold mb-[8px]">Digital Marketing</div>
                <div class="text-[15px] leading-[24px]">12 Projects</div>
              </div>
              <div class="">
                <i class="fa-solid fa-circle-arrow-right"></i>
              </div>
            </a>
          </div>
          <div class="p-[20px] rounded-[30px] border-[1px] border-[#414141] bg-gradient-to-b from-[#262626] to-[rgba(38,38,38,0.1)]">
            <div class="mb-[24px] text-[20px] leading-[30px] font-bold">Education & Experience</div>
            <div class="border-t-[#414141] border-t-[1px] mb-[8px]"></div>
            <div class="py-[20px] text-[#686868] hover:text-[#f70354]">
              <div class="inline-flex py-[4px] px-[16px] border-[1px] border-[#414141] rounded-[40px] mb-[16px]">2020 - present</div>
              <div class="flex">
                <div class="w-[6px] h-[6px] bg-[#686868] rounded-[6px] mt-[10px]"></div>
                <div class="flex-1 ps-[10px]">
                  <div class="font-semibold mb-[8px]">Desinger & Developer</div>
                  <div class="text-[15px] leading-[24px]">Brunodee Agency</div>
                </div>
              </div>
            </div>
            <div class="border-t-[#414141] border-t-[1px] mb-[8px]"></div>
            <div class="py-[20px] text-[#686868] hover:text-[#f70354]">
              <div class="inline-flex py-[4px] px-[16px] border-[1px] border-[#414141] rounded-[40px] mb-[16px]">2020 - present</div>
              <div class="flex">
                <div class="w-[6px] h-[6px] bg-[#686868] rounded-[6px] mt-[10px]"></div>
                <div class="flex-1 ps-[10px]">
                  <div class="font-semibold mb-[8px]">Webflow Developer</div>
                  <div class="text-[15px] leading-[24px]">Brain Craft Inc</div>
                </div>
              </div>
            </div>
            <div class="border-t-[#414141] border-t-[1px] mb-[8px]"></div>
            <div class="py-[20px] text-[#686868] hover:text-[#f70354]">
              <div class="inline-flex py-[4px] px-[16px] border-[1px] border-[#414141] rounded-[40px] mb-[16px]">2020 - present</div>
              <div class="flex">
                <div class="w-[6px] h-[6px] bg-[#686868] rounded-[6px] mt-[10px]"></div>
                <div class="flex-1 ps-[10px]">
                  <div class="font-semibold mb-[8px]">Desinger & Developer</div>
                  <div class="text-[15px] leading-[24px]">Slicly Agency</div>
                </div>
              </div>
            </div>
            <div class="border-t-[#414141] border-t-[1px] mb-[8px]"></div>
            <div class="py-[20px] text-[#686868] hover:text-[#f70354]">
              <div class="inline-flex py-[4px] px-[16px] border-[1px] border-[#414141] rounded-[40px] mb-[16px]">2020 - present</div>
              <div class="flex">
                <div class="w-[6px] h-[6px] bg-[#686868] rounded-[6px] mt-[10px]"></div>
                <div class="flex-1 ps-[10px]">
                  <div class="font-semibold mb-[8px]">Leader Team Of Marketing</div>
                  <div class="text-[15px] leading-[24px]">Brunodee Agency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import tippy from "tippy.js";
import 'tippy.js/dist/tippy.css'
import { useArticle } from "../composables/useArticle.ts";
import {formatDate} from "compatx";
import { useAnimation } from "../composables/useAnimation.ts";

const { items, pending, error } = useArticle();

const { element: animatedElement } = useAnimation('animated__fadeInLeft', '1s');

// Data for the text lines
const firstLine = ['H', 'i', ' ', 'I', "'", 'm', ' ', 'P', 'a', 'r', 't', 'h', ',']
const secondLinePart1 = ['W', 'e', 'b', 's', 'i', 't', 'e']
const secondLinePart2 = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

const getClassForFirstWord = () =>
    isActive.value
        ? 'group-[.c-active]:opacity-100 group-[.c-active]:translate-x-0'
        : ''
const getClassForSecondWord = () =>
    isActive.value
        ? 'group-[.c-active]:opacity-100 group-[.c-active]:translate-x-0'
        : ''
// State to track activation
const isActive = ref(false)

const initTippy = () => {
  tippy('[data-tippy]', {
    content: document.querySelector('#tippy1').innerHTML,
    allowHTML: true,
    arrow: true,
    placement: 'right',
  })
}

// Function to calculate styles with delays
const getStyle = (index) => {
  const delay = index * 0.03
  return `transition-delay: ${delay}s`
}

// Activating the animation on mount
onMounted(() => {
  setTimeout(() => {
    isActive.value = true
  }, 500)
})

const formattedText = (text) => {
  // Split text into letters and spaces
  return text.split('').map(char => char === ' ' ? '\u00A0' : char)
}
</script>

<style scoped>
.group.c-active span {
  opacity: 1;
  transform: translateX(0);
}
.group.c-active div {
  opacity: 1;
  transform: translateX(0);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>