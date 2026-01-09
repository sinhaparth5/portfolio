import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: 'footer',
    start: 'top 90%',
    end: 'bottom bottom',
    toggleActions: 'play none none reverse'
  },
  defaults: { ease: 'power3.out' }
});

footerTl
  .fromTo('.footer-content > div',
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.15 }
  )
  .fromTo('.footer-social a',
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.3, stagger: 0.08, ease: 'back.out(1.7)' },
    '-=0.3'
  )
  .fromTo('.footer-bottom',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4 },
    '-=0.2'
  );

gsap.to('.footer-blur-text', {
  scale: 1.05,
  scrollTrigger: {
    trigger: 'footer',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 2
  }
});
