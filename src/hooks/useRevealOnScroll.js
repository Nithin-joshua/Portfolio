// This file reveals elements when they enter the viewport for a softer scroll rhythm.
import { useEffect, useRef, useState } from 'react';

function useRevealOnScroll(options = {}) {
  const {
    once = true,
    rootMargin = '0px 0px -10% 0px',
    threshold = 0.2,
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

          // When the element only needs to animate once, we can stop observing after it shows up.
          if (once) {
            observer.unobserve(entry.target);
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
