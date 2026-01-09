import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Smooth scroll configuration
gsap.config({ force3D: true });

// Typing effect with cursor
const typingText = document.getElementById('typing-text');
const phrases = [
  'Full Stack Developer',
  'Creative Problem Solver',
  'UI/UX Enthusiast',
  'Open Source Contributor'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  if (!typingText) return;

  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 30 : 80;

  if (!isDeleting && charIndex === currentPhrase.length) {
    typeSpeed = 2000; // Pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 500;
  }

  setTimeout(typeWriter, typeSpeed);
}

setTimeout(typeWriter, 1500);

// Main hero timeline with staggered reveals
const heroTl = gsap.timeline({
  defaults: { ease: 'power4.out' }
});

// Complex entrance animations
heroTl
  // Title with split effect simulation
  .fromTo('.hero-title',
    {
      y: 120,
      opacity: 0,
      rotationX: -40,
      transformOrigin: 'center bottom'
    },
    {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 1.2,
      ease: 'power4.out'
    }
  )
  // Animated line with glow effect
  .fromTo('.hero-line',
    {
      width: 0,
      opacity: 0
    },
    {
      width: '6rem',
      opacity: 1,
      duration: 0.8,
      ease: 'power2.inOut'
    },
    '-=0.6'
  )
  // Subtitle with fade up
  .fromTo('.hero-subtitle',
    {
      y: 60,
      opacity: 0,
      filter: 'blur(10px)'
    },
    {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.8
    },
    '-=0.4'
  )
  // Buttons with elastic bounce
  .fromTo('.hero-buttons a',
    {
      y: 40,
      opacity: 0,
      scale: 0.8
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    },
    '-=0.3'
  )
  // Stats counter animation
  .fromTo('.hero-stats > div',
    {
      y: 30,
      opacity: 0,
      scale: 0.9
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.4)'
    },
    '-=0.4'
  )
  // Image with 3D entrance
  .fromTo('.hero-image',
    {
      x: 150,
      opacity: 0,
      rotationY: -15,
      scale: 0.9
    },
    {
      x: 0,
      opacity: 1,
      rotationY: 0,
      scale: 1,
      duration: 1.2,
      ease: 'power3.out'
    },
    0.3
  );

// Parallax background text - starts when section is in view
gsap.to('.hero-blur-text', {
  x: -300,
  ease: 'none',
  scrollTrigger: {
    trigger: '#home',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.5
  }
});

gsap.to('.hero-blur-text-2', {
  x: 300,
  ease: 'none',
  scrollTrigger: {
    trigger: '#home',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.5
  }
});

// Floating decorative elements
gsap.to('.badge-float', {
  y: -30,
  rotation: 10,
  duration: 3,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1
});

gsap.to('.badge-float-delay', {
  y: -25,
  rotation: -8,
  duration: 3.5,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1,
  delay: 0.5
});

// Scroll indicator pulse
gsap.to('.scroll-line', {
  scaleY: 1.5,
  opacity: 0.5,
  yoyo: true,
  repeat: -1,
  duration: 1.2,
  ease: 'power1.inOut'
});

// Scroll indicator hide on scroll
gsap.to('.scroll-indicator', {
  opacity: 0,
  y: 20,
  scrollTrigger: {
    trigger: '#home',
    start: 'top top',
    end: '+=200',
    scrub: true
  }
});

// Image parallax on scroll
gsap.to('.hero-image', {
  y: 100,
  ease: 'none',
  scrollTrigger: {
    trigger: '#home',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.3
  }
});

// Magnetic button effect
document.querySelectorAll('.hero-buttons a').forEach(btn => {
  btn.addEventListener('mousemove', (e: Event) => {
    const mouseEvent = e as MouseEvent;
    const rect = (btn as HTMLElement).getBoundingClientRect();
    const x = mouseEvent.clientX - rect.left - rect.width / 2;
    const y = mouseEvent.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    });
  });
});
