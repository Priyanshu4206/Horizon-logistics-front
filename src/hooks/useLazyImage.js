import { useState, useEffect, useRef } from 'react';

const useLazyImage = (src, placeholder = '', options = {}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const observerRef = useRef(null);

  // Set up the Intersection Observer
  useEffect(() => {
    if (!src || !imageRef) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start loading the image
          const img = new Image();
          img.src = src;
          img.onload = () => {
            if (imageRef) {
              setImageSrc(src);
              setIsLoaded(true);
            }
          };
          
          // Unobserve once we've started loading
          observer.unobserve(entry.target);
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(
      handleIntersect,
      {
        root: null,
        rootMargin: options.rootMargin || '50px',
        threshold: options.threshold || 0.1
      }
    );

    observer.observe(imageRef);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, imageRef, options.rootMargin, options.threshold]);

  return { imageSrc, isLoaded, setImageRef };
};

export default useLazyImage; 