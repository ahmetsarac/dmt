'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ScrollAnimatedText from '@/components/ScrollAnimatedText';

const teamMembers = [
  { name: 'Güven Sarı', title: 'Founder', url: '#' },
  { name: 'Sinem Tamur', title: 'Lead 2D Artist', url: '#' },
  { name: 'Batuhan Karakoç', title: 'Game Designer', url: '#' },
  { name: 'Saadet Özdemir', title: '2D Artist', url: '#' },
  { name: 'Sinem Güven', title: 'Senior 2D Artist', url: '#' },
  { name: 'Zeynep Koroğlu', title: '2D Animator', url: '#' },
  { name: 'İclal Baydur', title: '2D Artist', url: '#' },
  { name: 'Eda ', title: '2D Animator', url: '#' },
  { name: 'Yaren Tangaç', title: 'Intern Game Developer', url: '#' },
  { name: 'Şevval Necla Er', title: 'Intern Game Developer', url: '#' },
  { name: 'Fehmi Kartal', title: 'Intern 3D Artist', url: '#' },
  { name: 'Gizem Çayır', title: 'Intern 2D Artist', url: '#' },
  { name: 'Seda Nur Sayar', title: 'Intern 2D Artist', url: '#' },
  { name: 'Sude Yıldırım', title: 'Digital Marketing & Social Media Specialist', url: '#' },
  { name: 'Nisa Aybala Saraçoğlu', title: 'Digital Marketing & Social Media Specialist', url: '#' },
  { name: 'Maria Bedro', title: 'Digital Marketing & Social Media Specialist', url: '#' },
  { name: 'Mehmet Efe Coşkuner', title: 'Digital Marketing & Social Media Specialist', url: '#' },
  { name: 'Şefik Zelluh', title: 'Community Manager', url: '#' },
];

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const { ref: collageRef, isVisible: collageVisible } = useScrollAnimation<HTMLDivElement>();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start px-4 py-12 overflow-x-hidden relative">
      {/* === Kolaj Alanı === */}
      <div
        ref={collageRef}
        className={`relative w-full max-w-7xl min-h-[1050px] pb-40 transition-all duration-1000 ease-out ${
          collageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <Image
          src="/assets/b.jpg"
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
        <Image
          src="/assets/a.jpg"
          alt="Small collage 1"
          width={350}
          height={260}
          className="absolute z-40 rounded-xl shadow-lg border-4 border-white transition-transform duration-700 hover:scale-110"
          style={{
            top: '600px',
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
            top: '440px',
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
            top: '540px',
            right: '40px',
            transform: `rotate(6deg) translateY(${scrollY * 0.12}px)`,
          }}
        />
      </div>

      {/* === About Us === */}
      <div className="max-w-4xl text-center px-1 mt-10">
        <ScrollAnimatedText delay={200}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6 transition-all duration-700 hover:text-blue-600">
            About Us
          </h2>
        </ScrollAnimatedText>
        <ScrollAnimatedText delay={400}>
          <p className="text-lg text-gray-700 leading-relaxed transition-all duration-700">
            At DMT Games, we transform bold ideas into captivating experiences, guided by our motto &ldquo;Dare Mighty Things.&rdquo;
            Driven by creativity and innovation, we strive to leave a lasting legacy in the gaming industry.
          </p>
        </ScrollAnimatedText>
      </div>

      {/* === YouTube Video Embed === */}
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

      {/* === Team Section === */}
      <div className="mt-20 max-w-6xl w-full">
        <ScrollAnimatedText delay={200}>
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">TEAM</h3>
        </ScrollAnimatedText>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center">
          {teamMembers.map((member, i) => (
            <ScrollAnimatedText key={i} delay={300 + (i * 50)}>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/assets/avatar.png"
                  alt={member.name}
                  title={member.name}
                  width={120}
                  height={120}
                  className="rounded-full shadow-md"
                />
                <p className="mt-3 font-semibold text-gray-800">{member.name}</p>
                <p className="text-sm text-gray-500">{member.title}</p>
                {member.url && (
                  <a
                    href={member.url}
                    className="text-xs text-blue-500 mt-1 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${member.name}'s site`}
                  >
                  </a>
                )}
              </div>
            </ScrollAnimatedText>
          ))}
        </div>
      </div>
    </div>
  );
}
