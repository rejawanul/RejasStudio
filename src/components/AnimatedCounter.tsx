"use client";

import { useEffect, useState, useRef } from "react";

export default function AnimatedCounter({ value, duration = 1000 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let observer: IntersectionObserver;
    let animationFrameId: number;

    const startAnimation = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutExpo for smooth deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(startAnimation);
      } else {
        setCount(value);
      }
    };

    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animationFrameId = requestAnimationFrame(startAnimation);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration]);

  return <span ref={elementRef}>{count}</span>;
}
