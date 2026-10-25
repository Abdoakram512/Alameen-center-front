/**
 * Al-Ameen Interactive Landing Hero Slider
 * Features:
 * - Fluid CSS fade & micro-scale transitions
 * - Sync with 'رحلتك مع الأمين' footer journey steps
 * - Prev / Next chevron buttons
 * - Pill dot indicators with animated width expansion
 * - Auto-play with pause-on-hover
 * - Bi-directional touch swipe (RTL & LTR aware)
 * - Keyboard navigation (Arrow keys)
 */

class HeroSlider {
  constructor() {
    this.container = document.getElementById('hero-slider');
    if (!this.container) return;

    this.slides = Array.from(this.container.querySelectorAll('.hero-slide'));
    this.dots = Array.from(document.querySelectorAll('.slider-dot'));
    this.stepTabs = Array.from(document.querySelectorAll('[data-step-target]'));
    this.prevBtn = document.getElementById('slider-prev');
    this.nextBtn = document.getElementById('slider-next');
    
    this.currentIndex = 0;
    this.totalSlides = this.slides.length;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 6000;
    this.touchStartX = 0;
    this.touchEndX = 0;

    this.init();
  }

  init() {
    if (this.totalSlides <= 1) return;

    this.goToSlide(0);
    this.bindEvents();
    this.startAutoPlay();
  }

  goToSlide(index) {
    this.currentIndex = (index + this.totalSlides) % this.totalSlides;

    // 1. Update Slides visibility & transition
    this.slides.forEach((slide, i) => {
      const isActive = i === this.currentIndex;
      if (isActive) {
        slide.classList.remove('opacity-0', 'pointer-events-none', 'scale-[0.98]', 'absolute', 'inset-0');
        slide.classList.add('opacity-100', 'pointer-events-auto', 'scale-100', 'relative', 'z-10');
      } else {
        slide.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100', 'relative', 'z-10');
        slide.classList.add('opacity-0', 'pointer-events-none', 'scale-[0.98]', 'absolute', 'inset-0');
      }
    });

    // 2. Update Dots
    this.dots.forEach((dot, i) => {
      const isActive = i === this.currentIndex;
      if (isActive) {
        dot.classList.remove('w-2.5', 'bg-[#CBD5E1]', 'hover:bg-[#94A3B8]');
        dot.classList.add('w-8', 'bg-[#012383]');
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.classList.remove('w-8', 'bg-[#012383]');
        dot.classList.add('w-2.5', 'bg-[#CBD5E1]', 'hover:bg-[#94A3B8]');
        dot.removeAttribute('aria-current');
      }
    });

    // 3. Update Footer Journey Steps ('رحلتك مع الأمين')
    this.stepTabs.forEach((tab) => {
      const targetIndex = parseInt(tab.getAttribute('data-step-target'), 10);
      const isActive = targetIndex === this.currentIndex;
      const dotEl = tab.querySelector('.step-dot');
      const textEl = tab.querySelector('.step-text');

      if (isActive) {
        tab.classList.add('bg-[#EAF1FB]', 'border-[#DEE8F7]', 'shadow-xs');
        tab.classList.remove('hover:bg-slate-100/60');
        if (dotEl) {
          dotEl.classList.remove('bg-slate-400');
          dotEl.classList.add('bg-[#0B2A8F]', 'scale-125');
        }
        if (textEl) {
          textEl.classList.remove('text-[#475569]', 'font-semibold');
          textEl.classList.add('text-[#0B2A8F]', 'font-black');
        }
      } else {
        tab.classList.remove('bg-[#EAF1FB]', 'border-[#DEE8F7]', 'shadow-xs');
        tab.classList.add('hover:bg-slate-100/60');
        if (dotEl) {
          dotEl.classList.remove('bg-[#0B2A8F]', 'scale-125');
          dotEl.classList.add('bg-slate-400');
        }
        if (textEl) {
          textEl.classList.remove('text-[#0B2A8F]', 'font-black');
          textEl.classList.add('text-[#475569]', 'font-semibold');
        }
      }
    });
  }

  next() {
    this.goToSlide(this.currentIndex + 1);
  }

  prev() {
    this.goToSlide(this.currentIndex - 1);
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, this.autoPlayDelay);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  bindEvents() {
    // Prev / Next button clicks
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        isRtl ? this.next() : this.prev();
        this.startAutoPlay();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        isRtl ? this.prev() : this.next();
        this.startAutoPlay();
      });
    }

    // Dot indicators click
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.goToSlide(index);
        this.startAutoPlay();
      });
    });

    // Step Tabs click
    this.stepTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = parseInt(tab.getAttribute('data-step-target'), 10);
        if (!isNaN(target)) {
          this.goToSlide(target);
          this.startAutoPlay();
        }
      });
    });

    // Pause on hover
    const landingFrame = document.getElementById('landing-frame') || this.container;
    landingFrame.addEventListener('mouseenter', () => this.stopAutoPlay());
    landingFrame.addEventListener('mouseleave', () => this.startAutoPlay());

    // Touch Swipe Support
    this.container.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.container.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, { passive: true });

    // Keyboard Arrow navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        isRtl ? this.prev() : this.next();
        this.startAutoPlay();
      } else if (e.key === 'ArrowLeft') {
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        isRtl ? this.next() : this.prev();
        this.startAutoPlay();
      }
    });
  }

  handleSwipe() {
    const swipeDistance = this.touchEndX - this.touchStartX;
    const threshold = 40;
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';

    if (Math.abs(swipeDistance) > threshold) {
      if (swipeDistance > 0) {
        // Swiped Right
        isRtl ? this.next() : this.prev();
      } else {
        // Swiped Left
        isRtl ? this.prev() : this.next();
      }
      this.startAutoPlay();
    }
  }
}

// Auto instantiate on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.heroSlider = new HeroSlider();
});

export default HeroSlider;
