import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const typingText = document.getElementById('typing-text');
const text = 'Full Stack Developer crafting digital experiences with creativity and precision';
let index = 0;

function type() {
  if (typingText && index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}

if (typingText) {
  setTimeout(type, 1000);
}

const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

tl.fromTo('.hero-title',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8 }
)
.fromTo('.hero-line',
  { width: 0 },
  { width: '6rem', duration: 0.5 },
  '-=0.4'
)
.fromTo('.hero-subtitle',
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5 },
  '-=0.3'
)
.fromTo('.hero-buttons',
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.4 },
  '-=0.2'
)
.fromTo('.hero-stats > div',
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.3, stagger: 0.08 },
  '-=0.2'
)
.fromTo('.hero-image',
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 0.7 },
  0.2
);

gsap.to('.hero-blur-text', {
  x: -200,
  scrollTrigger: {
    trigger: '#home',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  }
});

gsap.to('.hero-blur-text-2', {
  x: 200,
  scrollTrigger: {
    trigger: '#home',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  }
});

gsap.to('.scroll-line', {
  scaleY: 1.5,
  yoyo: true,
  repeat: -1,
  duration: 1.5,
  ease: 'power1.inOut'
});
