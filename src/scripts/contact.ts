import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Main contact timeline
const contactTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#contact',
    start: 'top 70%',
    end: 'top 20%',
    toggleActions: 'play none none reverse'
  },
  defaults: { ease: 'power3.out' }
});

contactTl
  // Header reveal
  .fromTo('.contact-header',
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
  .fromTo('.contact-line',
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
  // Info section slides in from left
  .fromTo('.contact-info',
    {
      x: -100,
      opacity: 0,
      filter: 'blur(10px)'
    },
    {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.8,
      ease: 'power3.out'
    },
    '-=0.3'
  )
  // Contact links stagger
  .fromTo('.contact-links a',
    {
      x: -60,
      opacity: 0,
      rotationY: -20
    },
    {
      x: 0,
      opacity: 1,
      rotationY: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'back.out(1.4)'
    },
    '-=0.4'
  )
  // Form slides in from right with 3D effect
  .fromTo('.contact-form',
    {
      x: 100,
      opacity: 0,
      rotationY: 15,
      scale: 0.95
    },
    {
      x: 0,
      opacity: 1,
      rotationY: 0,
      scale: 1,
      duration: 1,
      ease: 'power3.out'
    },
    '-=0.8'
  );

// Form inputs animation on focus
document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(input => {
  const inputElement = input as HTMLInputElement | HTMLTextAreaElement;
  const parent = inputElement.parentElement;

  inputElement.addEventListener('focus', () => {
    gsap.to(inputElement, {
      scale: 1.02,
      borderColor: 'var(--foreground)',
      duration: 0.3,
      ease: 'power2.out'
    });

    if (parent) {
      gsap.to(parent, {
        y: -5,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  });

  inputElement.addEventListener('blur', () => {
    gsap.to(inputElement, {
      scale: 1,
      borderColor: 'var(--border)',
      duration: 0.3,
      ease: 'power2.out'
    });

    if (parent) {
      gsap.to(parent, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  });
});

// Submit button hover effect
const submitBtn = document.querySelector('.contact-form button[type="submit"]');
if (submitBtn) {
  submitBtn.addEventListener('mouseenter', () => {
    gsap.to(submitBtn, {
      scale: 1.05,
      y: -3,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  submitBtn.addEventListener('mouseleave', () => {
    gsap.to(submitBtn, {
      scale: 1,
      y: 0,
      duration: 0.4,
      ease: 'elastic.out(1, 0.5)'
    });
  });
}

// Contact link hover effects
document.querySelectorAll('.contact-links a').forEach(link => {
  const icon = link.querySelector('div');

  link.addEventListener('mouseenter', () => {
    gsap.to(link, {
      x: 10,
      duration: 0.3,
      ease: 'power2.out'
    });

    if (icon) {
      gsap.to(icon, {
        rotation: 10,
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  });

  link.addEventListener('mouseleave', () => {
    gsap.to(link, {
      x: 0,
      duration: 0.4,
      ease: 'elastic.out(1, 0.5)'
    });

    if (icon) {
      gsap.to(icon, {
        rotation: 0,
        scale: 1,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)'
      });
    }
  });
});

// Parallax background text
gsap.fromTo('.contact-blur-text',
  { x: -250 },
  {
    x: 300,
    ease: 'none',
    scrollTrigger: {
      trigger: '#contact',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5
    }
  }
);

gsap.fromTo('.contact-blur-text-2',
  { x: 250 },
  {
    x: -300,
    ease: 'none',
    scrollTrigger: {
      trigger: '#contact',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5
    }
  }
);

// Floating decorative elements
gsap.to('#contact .badge-float', {
  y: -35,
  rotation: 20,
  duration: 4.5,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1
});

gsap.to('#contact .shape-rotate', {
  rotation: '+=360',
  duration: 35,
  ease: 'none',
  repeat: -1
});

gsap.to('#contact .badge-pulse', {
  scale: 1.2,
  opacity: 0.1,
  duration: 2,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1
});
