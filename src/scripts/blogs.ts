import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Main blogs timeline
const blogsTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#blogs',
    start: 'top 70%',
    end: 'top 20%',
    toggleActions: 'play none none reverse'
  },
  defaults: { ease: 'power3.out' }
});

blogsTl
  // Header with reveal animation
  .fromTo('.blogs-header',
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
  .fromTo('.blogs-line',
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
  // Blog cards with staggered 3D effect
  .fromTo('.blog-card',
    {
      y: 120,
      opacity: 0,
      rotationX: 15,
      scale: 0.85,
      transformOrigin: 'center top'
    },
    {
      y: 0,
      opacity: 1,
      rotationX: 0,
      scale: 1,
      duration: 1,
      stagger: {
        each: 0.12,
        from: 'center'
      },
      ease: 'power3.out'
    },
    '-=0.3'
  )
  // Button with bounce
  .fromTo('.blogs-button',
    {
      y: 50,
      opacity: 0,
      scale: 0.8
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: 'back.out(1.7)'
    },
    '-=0.5'
  );

// Parallax background text
gsap.fromTo('.blogs-blur-text',
  { x: -200 },
  {
    x: 250,
    ease: 'none',
    scrollTrigger: {
      trigger: '#blogs',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5
    }
  }
);

gsap.fromTo('.blogs-blur-text-2',
  { x: 200 },
  {
    x: -250,
    ease: 'none',
    scrollTrigger: {
      trigger: '#blogs',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5
    }
  }
);

// Blog card hover effects with 3D tilt
document.querySelectorAll('.blog-card').forEach(card => {
  const cardElement = card as HTMLElement;

  cardElement.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = cardElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    gsap.to(cardElement, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      duration: 0.4,
      ease: 'power2.out'
    });
  });

  cardElement.addEventListener('mouseleave', () => {
    gsap.to(cardElement, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.4)'
    });
  });

  // Image parallax on hover
  const image = cardElement.querySelector('img');
  if (image) {
    cardElement.addEventListener('mouseenter', () => {
      gsap.to(image, {
        scale: 1.15,
        duration: 0.6,
        ease: 'power2.out'
      });
    });

    cardElement.addEventListener('mouseleave', () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.6,
        ease: 'power2.out'
      });
    });
  }

  // Read more arrow animation
  const arrow = cardElement.querySelector('svg');
  if (arrow) {
    cardElement.addEventListener('mouseenter', () => {
      gsap.to(arrow, {
        x: 8,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    cardElement.addEventListener('mouseleave', () => {
      gsap.to(arrow, {
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  }
});

// Floating decorative elements
gsap.to('#blogs .badge-float', {
  y: -40,
  rotation: -12,
  duration: 5,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1
});

gsap.to('#blogs .shape-rotate', {
  rotation: '+=360',
  duration: 30,
  ease: 'none',
  repeat: -1
});
