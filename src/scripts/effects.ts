import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ============================================
// 1. LENIS SMOOTH SCROLL
// ============================================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
});

// Connect Lenis to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Handle anchor links with smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const href = anchor.getAttribute('href');
    if (href) {
      const target = document.querySelector(href);
      if (target) {
        lenis.scrollTo(target as HTMLElement, {
          offset: 0,
          duration: 1.5,
        });
      }
    }
  });
});

// ============================================
// 2. TEXT SPLIT ANIMATIONS
// ============================================
function splitText(element: HTMLElement): void {
  const text = element.textContent || '';
  element.innerHTML = '';

  text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    span.classList.add('split-char');
    span.style.setProperty('--char-index', i.toString());
    element.appendChild(span);
  });
}

// Apply text split to headings with data-split attribute
document.querySelectorAll('[data-split="chars"]').forEach(el => {
  splitText(el as HTMLElement);

  gsap.fromTo(el.querySelectorAll('.split-char'),
    {
      y: 100,
      opacity: 0,
      rotationX: -90,
    },
    {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 0.8,
      stagger: 0.02,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );
});

// ============================================
// 3. INFINITE MARQUEE
// ============================================
document.querySelectorAll('.marquee').forEach(marquee => {
  const content = marquee.querySelector('.marquee-content');
  if (!content) return;

  // Clone content for seamless loop
  const clone = content.cloneNode(true) as HTMLElement;
  marquee.appendChild(clone);

  const speed = parseFloat(marquee.getAttribute('data-speed') || '50');
  const direction = marquee.getAttribute('data-direction') === 'right' ? 1 : -1;

  gsap.to(marquee.querySelectorAll('.marquee-content'), {
    xPercent: -100 * direction,
    repeat: -1,
    duration: speed,
    ease: 'none',
    modifiers: {
      xPercent: gsap.utils.wrap(-100, 0)
    }
  });
});

// ============================================
// 4. GRAIN OVERLAY
// ============================================
function createGrainOverlay(): void {
  const grain = document.createElement('div');
  grain.classList.add('grain-overlay');
  grain.innerHTML = `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)"/>
    </svg>
  `;
  document.body.appendChild(grain);

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .grain-overlay {
      position: fixed;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      pointer-events: none;
      z-index: 9999;
      opacity: 0.04;
      mix-blend-mode: overlay;
    }
    .grain-overlay svg {
      width: 100%;
      height: 100%;
    }
    @keyframes grain-shift {
      0%, 100% { transform: translate(0, 0); }
      10% { transform: translate(-5%, -10%); }
      20% { transform: translate(-15%, 5%); }
      30% { transform: translate(7%, -25%); }
      40% { transform: translate(-5%, 25%); }
      50% { transform: translate(-15%, 10%); }
      60% { transform: translate(15%, 0%); }
      70% { transform: translate(0%, 15%); }
      80% { transform: translate(3%, 35%); }
      90% { transform: translate(-10%, 10%); }
    }
    .grain-overlay {
      animation: grain-shift 8s steps(10) infinite;
    }
  `;
  document.head.appendChild(style);
}

createGrainOverlay();

// ============================================
// 5. SCROLL VELOCITY EFFECTS
// ============================================
let scrollVelocity = 0;
let lastScrollY = 0;

lenis.on('scroll', ({ velocity }: { velocity: number }) => {
  scrollVelocity = velocity;
});

// Apply skew based on scroll velocity
const velocityElements = document.querySelectorAll('[data-velocity]');
if (velocityElements.length > 0) {
  gsap.ticker.add(() => {
    const skew = Math.min(Math.max(scrollVelocity * 0.3, -10), 10);

    velocityElements.forEach(el => {
      gsap.to(el, {
        skewY: skew,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
}

// Stretch images on fast scroll
document.querySelectorAll('[data-velocity-scale]').forEach(el => {
  gsap.ticker.add(() => {
    const scale = 1 + Math.abs(scrollVelocity) * 0.02;
    gsap.to(el, {
      scaleY: Math.min(scale, 1.15),
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

// ============================================
// 6. MAGNETIC NAVIGATION
// ============================================
document.querySelectorAll('[data-magnetic]').forEach(el => {
  const element = el as HTMLElement;
  const strength = parseFloat(element.getAttribute('data-magnetic') || '0.3');

  element.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    });
  });
});

// ============================================
// 7. PARALLAX LAYERS
// ============================================
document.querySelectorAll('[data-parallax]').forEach(el => {
  const speed = parseFloat((el as HTMLElement).getAttribute('data-parallax') || '0.5');
  const direction = (el as HTMLElement).getAttribute('data-parallax-direction') || 'y';

  gsap.to(el, {
    [direction]: () => speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: el.parentElement,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5
    }
  });
});

// Parallax for background elements
document.querySelectorAll('.parallax-bg').forEach(el => {
  gsap.to(el, {
    y: 150,
    ease: 'none',
    scrollTrigger: {
      trigger: el.parentElement,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  });
});

// ============================================
// 8. REVEAL ANIMATIONS ON SCROLL
// ============================================
// Fade up elements
document.querySelectorAll('[data-animate="fade-up"]').forEach(el => {
  gsap.fromTo(el,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );
});

// Scale in elements
document.querySelectorAll('[data-animate="scale-in"]').forEach(el => {
  gsap.fromTo(el,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );
});

// Slide in from left
document.querySelectorAll('[data-animate="slide-left"]').forEach(el => {
  gsap.fromTo(el,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );
});

// Slide in from right
document.querySelectorAll('[data-animate="slide-right"]').forEach(el => {
  gsap.fromTo(el,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );
});

// Export lenis for use in other scripts
export { lenis };
