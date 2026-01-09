import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contactTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#contact',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse'
  },
  defaults: { ease: 'power3.out' }
});

contactTl
  .fromTo('.contact-header',
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6 }
  )
  .fromTo('.contact-line',
    { width: 0 },
    { width: '4rem', duration: 0.4 },
    '-=0.3'
  )
  .fromTo('.contact-info',
    { x: -60, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6 },
    '-=0.2'
  )
  .fromTo('.contact-links a',
    { x: -40, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.4, stagger: 0.1 },
    '-=0.3'
  )
  .fromTo('.contact-form',
    { x: 60, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6 },
    0.3
  );

gsap.to('.contact-blur-text', {
  x: 220,
  scrollTrigger: {
    trigger: '#contact',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
});

gsap.to('.contact-blur-text-2', {
  x: -220,
  scrollTrigger: {
    trigger: '#contact',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
});
