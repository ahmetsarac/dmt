'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const { ref: collageRef, isVisible: collageVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start px-4 py-12 overflow-x-hidden relative">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-50 to-gray-100 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* === Kolaj Alanı === */}
      <div
        ref={collageRef}
        className={`relative w-full max-w-7xl min-h-[1300px] pb-40 transition-all duration-1000 ease-out ${
          collageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Üstte büyük ve sağa yatık resim */}
        <Image
          src="/assets/a.jpg"
          alt="Big collage image"
          width={1000}
          height={700}
          className="absolute z-30 rounded-xl shadow-2xl border-4 border-white transition-transform duration-700 hover:scale-105"
          style={{
            top: 0,
            left: '50%',
            transform: `translateX(-50%) rotate(8deg) translateY(${scrollY * 0.1}px)`,
          }}
        />

        {/* Alttaki 3 büyükçe resim */}
        <Image
          src="/assets/b.jpg"
          alt="Small collage 1"
          width={350}
          height={260}
          className="absolute z-40 rounded-xl shadow-lg border-4 border-white transition-transform duration-700 hover:scale-110"
          style={{
            top: '700px',
            left: '40px',
            transform: `rotate(-6deg) translateY(${scrollY * 0.15}px)`,
          }}
        />
        <Image
          src="/assets/c.jpeg"
          alt="Small collage 2"
          width={350}
          height={260}
          className="absolute z-50 rounded-xl shadow-lg border-4 border-white transition-transform duration-700 hover:scale-110"
          style={{
            top: '740px',
            left: '50%',
            transform: `translateX(-50%) rotate(2deg) translateY(${scrollY * 0.2}px)`,
          }}
        />
        <Image
          src="/assets/a.jpg"
          alt="Small collage 3"
          width={350}
          height={260}
          className="absolute z-60 rounded-xl shadow-lg border-4 border-white transition-transform duration-700 hover:scale-110"
          style={{
            top: '700px',
            right: '40px',
            transform: `rotate(6deg) translateY(${scrollY * 0.12}px)`,
          }}
        />
      </div>

      {/* === About Us Yazısı === */}
      <div
        ref={textRef}
        className={`max-w-4xl text-center px-1 mt-20 transition-all duration-1000 ease-out ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <h2
          className="text-4xl font-bold text-gray-800 mb-6 transition-all duration-700 hover:text-blue-600"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          About Us
        </h2>
        <p
          className="text-lg text-gray-700 leading-relaxed transition-all duration-700"
          style={{
            transform: `translateY(${scrollY * 0.03}px)`,
          }}
        >
          At DMT Games, we are guided by our motto, <strong>&ldquo;Dare Mighty Things.&rdquo;</strong> Established with a deep passion for pushing creative boundaries, our game development studio is dedicated to transforming bold concepts into exceptional experiences. Our team harnesses imagination to craft games that captivate, inspire, and connect with players across the globe. We pursue excellence in every project while remaining firmly rooted in the original dreams that launched our journey. Fueled by creativity and guided by innovation, we aim to leave a lasting legacy in the gaming industry through each ambitious endeavor.
        </p>
      </div>
      <div className="mt-16 w-full max-w-3xl aspect-video shadow-xl rounded-xl overflow-hidden">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/8iOu-z5L7Ac"
    title="PEAK Trailer: OUT NOW!"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>



    </div>
  );
}
