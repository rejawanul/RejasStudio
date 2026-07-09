/* =============================================
   REJA'S STUDIO — Main JavaScript
   ============================================= */

'use strict';

/* ---- Navbar Scroll Behavior ---- */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run on load
})();

/* ---- Mobile Hamburger Menu ---- */
(function initHamburger() {
  const btn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen.toString());

    // Animate hamburger lines
    const spans = btn.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  // Close menu when a link is clicked
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      const spans = btn.querySelectorAll('span');
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
})();

/* ---- Scroll Reveal Animations ---- */
(function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
})();

/* ---- Smooth Scroll for Anchor Links ---- */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
      const targetPos = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;

      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    });
  });
})();

/* ---- Portfolio Tab Filter ---- */
(function initPortfolioFilter() {
  const tabs = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.portfolio-card');
  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update tab active state
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.dataset.filter;

      cards.forEach((card, i) => {
        const cat = card.dataset.cat;
        const show = filter === 'all' || cat === filter;

        if (show) {
          card.style.display = '';
          // Stagger re-reveal animation
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, i * 60);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
})();

/* ---- Testimonials Slider ---- */
(function initTestimonialsSlider() {
  const track = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  if (!track) return;

  const cards = track.querySelectorAll('.testimonial-card');
  const totalCards = cards.length;
  let currentIndex = 0;
  let autoPlayTimer;

  function getVisibleCount() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function getCardWidth() {
    const visible = getVisibleCount();
    const gap = 24;
    return (track.parentElement.offsetWidth - gap * (visible - 1)) / visible + gap;
  }

  function slideTo(index) {
    const maxIndex = totalCards - getVisibleCount();
    currentIndex = Math.max(0, Math.min(index, maxIndex));

    track.style.transform = `translateX(-${currentIndex * getCardWidth()}px)`;

    // Update dots
    dots.forEach((dot, i) => {
      const isActive = i === currentIndex;
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-selected', isActive.toString());
    });
  }

  function nextSlide() {
    const maxIndex = totalCards - getVisibleCount();
    slideTo(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  }

  function prevSlide() {
    const maxIndex = totalCards - getVisibleCount();
    slideTo(currentIndex <= 0 ? maxIndex : currentIndex - 1);
  }

  // Buttons
  nextBtn?.addEventListener('click', () => { nextSlide(); resetAutoPlay(); });
  prevBtn?.addEventListener('click', () => { prevSlide(); resetAutoPlay(); });

  // Dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { slideTo(i); resetAutoPlay(); });
    dot.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); slideTo(i); }
    });
  });

  // Auto-play
  function startAutoPlay() {
    autoPlayTimer = setInterval(nextSlide, 5000);
  }

  function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    startAutoPlay();
  }

  // Touch / swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
      resetAutoPlay();
    }
  }, { passive: true });

  // Pause on hover
  track.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
  track.addEventListener('mouseleave', startAutoPlay);

  // Responsive resize
  window.addEventListener('resize', () => slideTo(currentIndex), { passive: true });

  // Init
  startAutoPlay();
  slideTo(0);
})();

/* ---- Animated Number Counter ---- */
(function initCounters() {
  const statNums = document.querySelectorAll('.stat-num');
  if (!statNums.length) return;

  const parseNum = (text) => {
    const match = text.match(/(\d+\.?\d*)/);
    return match ? parseFloat(match[1]) : 0;
  };

  const formatNum = (num, original) => {
    if (original.includes('+')) return Math.floor(num) + '+';
    if (original.includes('★')) return Math.floor(num) + '★';
    return Math.floor(num).toString();
  };

  const animateCounter = (el) => {
    const originalText = el.textContent;
    const target = parseNum(originalText);
    const duration = 1800;
    const start = performance.now();

    const step = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = formatNum(eased * target, originalText);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => observer.observe(el));
})();

/* ---- Active Nav Link Highlight on Scroll ---- */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.style.color = href === `#${id}` ? 'var(--text-primary)' : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(section => observer.observe(section));
})();

/* ---- Newsletter Form ---- */
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('newsletter-email');
  const button = document.getElementById('newsletter-submit-btn');
  if (!input || !button) return;

  // Simulate submission
  button.textContent = '✓ Subscribed!';
  button.style.background = '#00e676';
  input.value = '';
  input.disabled = true;
  button.disabled = true;

  setTimeout(() => {
    button.textContent = 'Subscribe';
    button.style.background = '';
    input.disabled = false;
    button.disabled = false;
  }, 4000);
}

/* ---- Portfolio Cards — Subtle Parallax on Mousemove ---- */
(function initCardTilt() {
  const cards = document.querySelectorAll('.portfolio-card, .service-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `translateY(-8px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

/* ---- Cursor Glow Effect ---- */
(function initCursorGlow() {
  // Only on non-touch devices
  if ('ontouchstart' in window) return;

  const glow = document.createElement('div');
  glow.id = 'cursor-glow';
  Object.assign(glow.style, {
    position: 'fixed',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0,176,255,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: '9999',
    transform: 'translate(-50%, -50%)',
    transition: 'opacity 0.3s ease',
    opacity: '0',
  });
  document.body.appendChild(glow);

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    glow.style.opacity = '1';
  });

  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });

  (function animateGlow() {
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;
    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;
    requestAnimationFrame(animateGlow);
  })();
})();

/* ---- Scroll Progress Indicator ---- */
(function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  Object.assign(bar.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '3px',
    width: '0%',
    background: 'linear-gradient(90deg, #00b0ff, #00e5ff)',
    zIndex: '9998',
    transition: 'width 0.1s ease',
    pointerEvents: 'none',
  });
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${percentage}%`;
  }, { passive: true });
})();

/* ---- Lazy-load fallback for older browsers ---- */
(function initLazyImages() {
  if ('loading' in HTMLImageElement.prototype) return; // Native lazy load supported

  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => observer.observe(img));
})();

/* ---- Explainer Video Player ---- */
/**
 * Replace EXPLAINER_VIDEO_ID with your actual YouTube video ID.
 * e.g. if your video URL is https://www.youtube.com/watch?v=dQw4w9WgXcQ
 * then set EXPLAINER_VIDEO_ID = 'dQw4w9WgXcQ'
 */
const EXPLAINER_VIDEO_ID = 'dQw4w9WgXcQ'; // ← Replace with your YouTube video ID

function playExplainerVideo() {
  const thumb  = document.getElementById('explainer-thumb');
  const iframe = document.getElementById('explainer-iframe');
  if (!thumb || !iframe) return;

  // Load YouTube embed with autoplay
  iframe.src = `https://www.youtube.com/embed/${EXPLAINER_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;

  // Hide thumbnail & reveal iframe
  thumb.classList.add('hidden');
  iframe.classList.add('active');
}

/* ---- Portfolio Video Modal ---- */
(function initVideoModal() {
  const modal   = document.getElementById('video-modal');
  const iframe  = document.getElementById('video-modal-iframe');
  const closeBtn = document.getElementById('video-modal-close');
  const backdrop = document.getElementById('video-modal-backdrop');
  if (!modal || !iframe) return;

  /** Open modal with a YouTube video ID */
  window.openVideoModal = function(videoId) {
    if (!videoId) return;
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Small delay so the close animation plays before src is cleared
    setTimeout(() => { iframe.src = ''; }, 320);
  }

  // Close on X button
  closeBtn?.addEventListener('click', closeModal);

  // Close on backdrop click
  backdrop?.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

  // Portfolio card click delegation — any click on a card with data-youtube opens the modal
  document.getElementById('portfolio-grid')?.addEventListener('click', (e) => {
    const card = e.target.closest('[data-youtube]');
    if (!card) return;
    // Only trigger when clicking the overlay/play button area
    if (e.target.closest('.portfolio-card-overlay') || e.target.closest('.portfolio-play')) {
      openVideoModal(card.dataset.youtube);
    }
  });
})();
