import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Main about section timeline - triggers when section is 75% visible
const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#about',
    start: 'top 75%',
    end: 'top 25%',
    toggleActions: 'play none none reverse'
  },
  defaults: { ease: 'power3.out' }
});

aboutTl
  // Header with clip-path reveal
  .fromTo('.about-header',
    {
      y: 80,
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
  // Line grows with glow
  .fromTo('.about-line',
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
  // Text paragraphs stagger with blur
  .fromTo('.about-text p',
    {
      y: 50,
      opacity: 0,
      filter: 'blur(8px)'
    },
    {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.7,
      stagger: 0.15
    },
    '-=0.3'
  )
  // Stats with 3D flip
  .fromTo('.about-stats > div',
    {
      y: 60,
      opacity: 0,
      rotationX: -45,
      transformOrigin: 'center top'
    },
    {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.4)'
    },
    '-=0.4'
  )
  // Skills section slides in
  .fromTo('.about-skills',
    {
      x: 100,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8
    },
    '-=0.6'
  )
  // Skill tags with wave effect
  .fromTo('.skill-tag',
    {
      scale: 0,
      opacity: 0,
      rotation: -10
    },
    {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 0.4,
      stagger: {
        each: 0.05,
        from: 'start',
        ease: 'power2.out'
      },
      ease: 'elastic.out(1, 0.5)'
    },
    '-=0.3'
  )
  // Quote with slide reveal
  .fromTo('.about-quote',
    {
      x: -50,
      opacity: 0,
      scale: 0.95
    },
    {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: 'power2.out'
    },
    '-=0.2'
  )
  // GitHub streak section
  .fromTo('.github-streak',
    {
      y: 40,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6
    },
    '-=0.3'
  );

// GitHub heatmap with its own trigger - appears when scrolled to
gsap.fromTo('.github-heatmap',
  {
    y: 60,
    opacity: 0,
    scale: 0.9
  },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.github-heatmap',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  }
);

// Parallax background text - only moves when section is visible
gsap.fromTo('.about-blur-text',
  { x: -100 },
  {
    x: 200,
    ease: 'none',
    scrollTrigger: {
      trigger: '#about',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5
    }
  }
);

gsap.fromTo('.about-blur-text-2',
  { x: 100 },
  {
    x: -200,
    ease: 'none',
    scrollTrigger: {
      trigger: '#about',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5
    }
  }
);

// Hover effects for skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    gsap.to(tag, {
      scale: 1.1,
      y: -5,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  tag.addEventListener('mouseleave', () => {
    gsap.to(tag, {
      scale: 1,
      y: 0,
      duration: 0.4,
      ease: 'elastic.out(1, 0.4)'
    });
  });
});

// Stats number counter animation
document.querySelectorAll('.about-stats p[aria-label]').forEach(stat => {
  const text = stat.textContent || '';
  const number = parseInt(text.replace(/\D/g, ''));
  if (isNaN(number)) return;

  const suffix = text.replace(/[0-9]/g, '');

  ScrollTrigger.create({
    trigger: stat,
    start: 'top 80%',
    onEnter: () => {
      gsap.fromTo(stat,
        { textContent: '0' + suffix },
        {
          textContent: number + suffix,
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 1 },
          onUpdate: function () {
            const current = Math.round(gsap.getProperty(stat, 'textContent') as number);
            stat.textContent = current + suffix;
          }
        }
      );
    },
    once: true
  });
});
