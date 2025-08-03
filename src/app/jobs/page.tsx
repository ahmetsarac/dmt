'use client';

import Image from 'next/image';

export default function JobsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-up duration-700">
        {/* Left Image */}
        <div className="rounded-xl overflow-hidden shadow-xl group transition-transform duration-500 hover:scale-[1.02]">
          <Image
            src="/assets/join_team.jpg"
            alt="Join Our Team"
            width={1000}
            height={600}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="animate-slide-in-right duration-700 delay-100">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Team</h1>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            At DMT Games, we’re crafting the future of gaming. Join our passionate team to create bold, impactful
            experiences that resonate worldwide. Explore our opportunities and shape what’s next.
          </p>
          <a
            href="mailto:careers@dmtgamestudio.com"
            className="inline-block bg-blue-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            careers@dmtgamestudio.com
          </a>
        </div>
      </div>
    </div>
  );
}
