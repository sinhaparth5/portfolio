import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Main projects timeline
const projectsTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#projects',
    start: 'top 70%',
    end: 'top 20%',
    toggleActions: 'play none none reverse'
  },
  defaults: { ease: 'power3.out' }
});

projectsTl
  // Header reveal with split effect
  .fromTo('.projects-header',
    {
      y: 100,
      opacity: 0,
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
    },
    {
      y: 0,
      opacity: 1,
      clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
      duration: 1,
      ease: 'power4.out'
    }
  )
  // Line animation
  .fromTo('.projects-line',
    {
      width: 0,
      opacity: 0
    },
    {
      width: '4rem',
      opacity: 1,
      duration: 0.6,
      ease: 'power2.inOut'
    },
    '-=0.5'
  )
  // Cards with 3D rotation and stagger
  .fromTo('.project-card',
    {
      y: 100,
      opacity: 0,
      rotationY: -15,
      rotationX: 10,
      scale: 0.85,
      transformOrigin: 'center center'
    },
    {
      y: 0,
      opacity: 1,
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      duration: 1,
      stagger: {
        each: 0.15,
        from: 'start'
      },
      ease: 'power3.out'
    },
    '-=0.3'
  )
  // Button fade in
  .fromTo('.projects-button',
    {
      y: 40,
      opacity: 0,
      scale: 0.9
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: 'back.out(1.5)'
    },
    '-=0.4'
  );

// Parallax background text
gsap.fromTo('.projects-blur-text',
  { x: -150 },
  {
    x: 200,
    ease: 'none',
    scrollTrigger: {
      trigger: '#projects',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5
    }
  }
);

gsap.fromTo('.projects-blur-text-2',
  { x: 150 },
  {
    x: -200,
    ease: 'none',
    scrollTrigger: {
      trigger: '#projects',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5
    }
  }
);

// Individual card hover effects with 3D tilt
document.querySelectorAll('.project-card').forEach(card => {
  const cardElement = card as HTMLElement;

  cardElement.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = cardElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    gsap.to(cardElement, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  cardElement.addEventListener('mouseleave', () => {
    gsap.to(cardElement, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  });

  // Image zoom on hover
  const image = cardElement.querySelector('img');
  if (image) {
    cardElement.addEventListener('mouseenter', () => {
      gsap.to(image, {
        scale: 1.1,
        duration: 0.5,
        ease: 'power2.out'
      });
    });

    cardElement.addEventListener('mouseleave', () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
    });
  }
});

// Floating decorative elements
gsap.to('#projects .badge-float', {
  y: -35,
  rotation: 15,
  duration: 4,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1
});

gsap.to('#projects .shape-rotate', {
  rotation: '+=360',
  duration: 25,
  ease: 'none',
  repeat: -1
});
