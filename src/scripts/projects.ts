import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectsTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#projects',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  },
  defaults: { ease: 'power3.out' }
});

projectsTl
  .fromTo('.projects-header',
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 }
  )
  .fromTo('.projects-line',
    { width: 0 },
    { width: '4rem', duration: 0.4 },
    '-=0.3'
  )
  .fromTo('.project-card',
    { y: 60, opacity: 0, scale: 0.9 },
    { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.2)' },
    '-=0.2'
  )
  .fromTo('.projects-button',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4 },
    '-=0.2'
  );

gsap.to('.projects-blur-text', {
  x: -180,
  scrollTrigger: {
    trigger: '#projects',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
});

gsap.to('.projects-blur-text-2', {
  x: 180,
  scrollTrigger: {
    trigger: '#projects',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
});
