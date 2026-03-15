import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '50px 0px 0px 0px' }
    );

    // Observe all targets after a microtask to ensure paint
    requestAnimationFrame(() => {
      const targets = el.querySelectorAll(selector);
      targets.forEach((target) => observer.observe(target));
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
