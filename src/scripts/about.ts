import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#about',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  },
  defaults: { ease: 'power3.out' }
});

aboutTl
  .fromTo('.about-header',
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 }
  )
  .fromTo('.about-line',
    { width: 0 },
    { width: '4rem', duration: 0.4 },
    '-=0.3'
  )
  .fromTo('.about-text p',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
    '-=0.2'
  )
  .fromTo('.about-stats > div',
    { y: 30, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.1 },
    '-=0.2'
  )
  .fromTo('.about-skills',
    { x: 60, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6 },
    0.2
  )
  .fromTo('.skill-tag',
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.3, stagger: 0.03, ease: 'back.out(1.7)' },
    '-=0.3'
  )
  .fromTo('.about-quote',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4 },
    '-=0.2'
  )
  .fromTo('.github-streak',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5 },
    '-=0.2'
  );

gsap.fromTo('.github-heatmap',
  { y: 40, opacity: 0, scale: 0.95 },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.github-heatmap',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  }
);

gsap.to('.about-blur-text', {
  x: 150,
  scrollTrigger: {
    trigger: '#about',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
});

gsap.to('.about-blur-text-2', {
  x: -150,
  scrollTrigger: {
    trigger: '#about',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
});
