'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ScrollAnimatedText from '@/components/ScrollAnimatedText';

const teamMembers = [
  { name: 'Güven Sarı', title: 'Founder', url: '#', image: '/assets/Güven.png' },
  { name: 'Sinem Tamur', title: 'Lead 2D Artist', url: '#', image: '/assets/Sinem.jpeg' },
  { name: 'Batuhan Karakoç', title: 'Game Designer', url: '#', image: '/assets/Batuhan.jpeg' },
  { name: 'Saadet Özdemir', title: '2D Artist', url: '#', image: '/assets/Saadet.jpeg' },
  { name: 'Sinem Güven', title: 'Senior 2D Artist', url: '#', image: '/assets/Sinem_Guven.jpeg' },
  { name: 'Zeynep Koroğlu', title: '2D Animator', url: '#', image: '/assets/Zeynep.jpeg' },
  { name: 'İclal Baydur', title: '2D Artist', url: '#', image: '/assets/İclal.jpeg' },
  { name: 'Eda', title: '2D Animator', url: '#', image: '/assets/avatar.png' },
  { name: 'Yaren Tangaç', title: 'Intern Game Developer', url: '#', image: '/assets/Yaren.jpeg' },
  { name: 'Şevval Necla Er', title: 'Intern Game Developer', url: '#', image: '/assets/Şevval.jpeg' },
  { name: 'Fehmi Kartal', title: 'Intern 3D Artist', url: '#', image: '/assets/Fehmi.jpeg' },
  { name: 'Gizem Çayır', title: 'Intern 2D Artist', url: '#', image: '/assets/Gizem.jpeg' },
  { name: 'Seda Nur Sayar', title: 'Intern 2D Artist', url: '#', image: '/assets/Seda.jpg' },
  { name: 'Sude Yıldırım', title: 'Digital Marketing & Social Media Specialist', url: '#', image: '/assets/Sude.jpeg' },
  { name: 'Nisa Aybala Saraçoğlu', title: 'Digital Marketing & Social Media Specialist', url: '#', image: '/assets/Nisa.jpeg' },
  { name: 'Maria Bedro', title: 'Digital Marketing & Social Media Specialist', url: '#', image: '/assets/Maria.jpeg' },
  { name: 'Mehmet Efe Coşkuner', title: 'Digital Marketing & Social Media Specialist', url: '#', image: '/assets/Efe.jpeg' },
  { name: 'Şefik Zelluh', title: 'Community Manager', url: '#', image: '/assets/Şefik.jpeg' },
];

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { ref: collageRef, isVisible: collageVisible } = useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const checkMobile = () => setIsMobile(window.innerWidth < 640);

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start px-4 py-12 overflow-x-hidden relative">
      {/* === Kolaj Alanı === */}
      <div
  ref={collageRef}
  className={`relative w-full max-w-7xl min-h-[700px] sm:min-h-[1000px] pb-16 sm:pb-32 transition-all duration-1000 ease-out ${
    collageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
  }`}
>
        {/* Büyük Görsel */}
        <div
          className="absolute z-30 rounded-xl shadow-2xl border-4 border-white transition-transform duration-700 hover:scale-105 w-[90%] max-w-3xl left-1/2"
          style={{
            top: 0,
            transform: `translateX(-50%) rotate(8deg) translateY(${scrollY * 0.1}px)`,
          }}
        >
          <Image
            src="/assets/b.jpg"
            alt="Big collage image"
            layout="responsive"
            width={1000}
            height={800}
            className="rounded-xl"
          />
        </div>

        {/* Küçük Görsel 1 */}
        <div
          className="absolute z-40 rounded-xl shadow-lg border-4 border-white transition-transform duration-700 hover:scale-110 w-[40%] max-w-sm left-4"
          style={{
            top: isMobile ? '360px' : '600px',
            transform: `rotate(-6deg) translateY(${scrollY * 0.15}px)`,
          }}
        >
          <Image
            src="/assets/a.jpg"
            alt="Small collage 1"
            layout="responsive"
            width={350}
            height={260}
            className="rounded-xl"
          />
        </div>

        {/* Küçük Görsel 2 */}
        <div
          className="absolute z-50 rounded-xl shadow-lg border-4 border-white transition-transform duration-700 hover:scale-110 w-[40%] max-w-sm left-1/2"
          style={{
            top: isMobile ? '280px' : '440px',
            transform: `translateX(-50%) rotate(2deg) translateY(${scrollY * 0.2}px)`,
          }}
        >
          <Image
            src="/assets/c.jpeg"
            alt="Small collage 2"
            layout="responsive"
            width={350}
            height={260}
            className="rounded-xl"
          />
        </div>

        {/* Küçük Görsel 3 */}
        <div
          className="absolute z-60 rounded-xl shadow-lg border-4 border-white transition-transform duration-700 hover:scale-110 w-[40%] max-w-sm right-4"
          style={{
            top: isMobile ? '340px' : '540px',
            transform: `rotate(6deg) translateY(${scrollY * 0.12}px)`,
          }}
        >
          <Image
            src="/assets/guven.jpeg"
            alt="Small collage 3"
            layout="responsive"
            width={350}
            height={260}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* === About Us === */}
      <div className="max-w-4xl text-center px-2 mt-6 sm:mt-10">
        <ScrollAnimatedText delay={200}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6 transition-all duration-700 hover:text-blue-600">
            About Us
          </h2>
        </ScrollAnimatedText>
        <ScrollAnimatedText delay={400}>
          <p className="text-lg text-gray-700 leading-relaxed transition-all duration-700">
            At DMT Games, we transform bold ideas into captivating experiences, guided by our motto
            &ldquo;Dare Mighty Things.&rdquo; Driven by creativity and innovation, we strive to leave a lasting legacy
            in the gaming industry.
          </p>
        </ScrollAnimatedText>
      </div>

      {/* === YouTube Video === */}
      <div className="mt-16 w-full max-w-3xl aspect-video shadow-xl rounded-xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/p6DpxN3bW1k"
          title="PEAK Trailer: OUT NOW!"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* === Team Section === */}
      <div className="mt-20 max-w-6xl w-full">
        <ScrollAnimatedText delay={200}>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">TEAM</h3>
        </ScrollAnimatedText>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 justify-items-center">
          {teamMembers.map((member, i) => (
            <ScrollAnimatedText key={i} delay={300 + i * 50}>
              <div className="flex flex-col items-center text-center w-full max-w-[120px] sm:max-w-[140px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  title={member.name}
                  width={120}
                  height={120}
                  className="w-full aspect-square rounded-full object-cover shadow-md"
                />
                <p className="mt-2 sm:mt-3 text-sm sm:text-base font-semibold text-gray-800">{member.name}</p>
                <p className="text-xs sm:text-sm text-gray-500">{member.title}</p>
              </div>
            </ScrollAnimatedText>
          ))}
        </div>
      </div>
    </div>
  );
}
