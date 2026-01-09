import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const blogsTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#blogs',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  },
  defaults: { ease: 'power3.out' }
});

blogsTl
  .fromTo('.blogs-header',
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 }
  )
  .fromTo('.blogs-line',
    { width: 0 },
    { width: '4rem', duration: 0.4 },
    '-=0.3'
  )
  .fromTo('.blog-card',
    { y: 60, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.2)' },
    '-=0.2'
  )
  .fromTo('.blogs-button',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4 },
    '-=0.2'
  );

gsap.to('.blogs-blur-text', {
  x: -200,
  scrollTrigger: {
    trigger: '#blogs',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
});

gsap.to('.blogs-blur-text-2', {
  x: 200,
  scrollTrigger: {
    trigger: '#blogs',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
});
