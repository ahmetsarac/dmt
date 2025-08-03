'use client';

import { useEffect, useState, useRef } from 'react';

interface ScrollAnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export default function ScrollAnimatedText({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 1000
}: ScrollAnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getTransformValue = () => {
    switch (direction) {
      case 'up':
        return 'translateY(30px)';
      case 'down':
        return 'translateY(-30px)';
      case 'left':
        return 'translateX(30px)';
      case 'right':
        return 'translateX(-30px)';
      default:
        return 'translateY(30px)';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-${duration} ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) translateX(0)' : getTransformValue(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
} 