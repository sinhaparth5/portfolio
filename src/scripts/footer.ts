import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Main footer timeline
const footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: 'footer',
    start: 'top 85%',
    end: 'top 50%',
    toggleActions: 'play none none reverse'
  },
  defaults: { ease: 'power3.out' }
});

footerTl
  // Footer content sections stagger in
  .fromTo('.footer-content > div',
    {
      y: 60,
      opacity: 0,
      filter: 'blur(5px)'
    },
    {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    }
  )
  // Social icons with elastic bounce
  .fromTo('.footer-social a',
    {
      scale: 0,
      opacity: 0,
      rotation: -180
    },
    {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'elastic.out(1, 0.5)'
    },
    '-=0.4'
  )
  // Footer bottom slides up
  .fromTo('.footer-bottom',
    {
      y: 30,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out'
    },
    '-=0.3'
  );

// Social icon hover effects
document.querySelectorAll('.footer-social a').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    gsap.to(icon, {
      scale: 1.2,
      rotation: 10,
      y: -5,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  icon.addEventListener('mouseleave', () => {
    gsap.to(icon, {
      scale: 1,
      rotation: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)'
    });
  });
});

// Quick links hover effect
document.querySelectorAll('footer nav ul li a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    gsap.to(link, {
      x: 8,
      color: 'var(--secondary-foreground)',
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  link.addEventListener('mouseleave', () => {
    gsap.to(link, {
      x: 0,
      color: 'var(--muted)',
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

// Parallax background text
gsap.fromTo('.footer-blur-text',
  { scale: 0.9 },
  {
    scale: 1.1,
    ease: 'none',
    scrollTrigger: {
      trigger: 'footer',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 2
    }
  }
);

// Floating decorative elements
gsap.to('footer .badge-float', {
  y: -25,
  rotation: 15,
  duration: 5,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1
});

gsap.to('footer .shape-rotate', {
  rotation: '+=360',
  duration: 30,
  ease: 'none',
  repeat: -1
});
