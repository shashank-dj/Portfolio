import { useEffect, useRef, useState } from 'react';

/** Scroll-reveal hook — adds 'visible' class when element enters viewport */
export function useReveal(threshold = 0.12) {
  const ref  = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/** Typewriter hook — cycles through an array of strings */
export function useTypewriter(strings, typingSpeed = 80, deletingSpeed = 50, pauseMs = 2200) {
  const [index, setIndex]       = useState(0);
  const [text, setText]         = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % strings.length);
    } else {
      const speed = deleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, strings, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}

/** Track scroll position */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);
  return scrollY;
}
