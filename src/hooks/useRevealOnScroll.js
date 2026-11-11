import { useEffect, useRef, useState } from 'react';

function useRevealOnScroll(options = {}) {
  const {
    once = true,
    rootMargin = '300px 0px 300px 0px',
    threshold = 0,
  } = options;
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;

    if (!currentElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        rootMargin,
        threshold,
      },
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [once, rootMargin, threshold]);

  return [elementRef, isVisible];
}

export default useRevealOnScroll;
