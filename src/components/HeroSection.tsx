'use client';

import { useState, useEffect } from 'react';
import ParallaxBackground from './ParallaxBackground';
import CompoundImageLayout from './CompoundImageLayout';

interface HeroSectionProps {
  backgroundImage?: string;
  logoImage?: string;
  mainImage?: string;
  gradientColor?: string;
}

export default function HeroSection({
  backgroundImage = '/assets/bg.JPG',
  logoImage = '/assets/game_logo.png',
  mainImage = '/assets/main.PNG',
  gradientColor = 'from-blue-400 to-purple-600'
}: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <ParallaxBackground scrollY={scrollY} backgroundImage={backgroundImage} />

      {/* Gradient Overlay - Reduced opacity to show images better */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-40 transition-all duration-1000`} />

      {/* Compound Image Layout - All images working together */}
      <div className="absolute inset-0 z-10">
        <CompoundImageLayout 
          logoImage={logoImage}
          mainImage={mainImage}
        />
      </div>
    </section>
  );
}