'use client';

import GameLogo from './GameLogo';
import MainImage from './MainImage';

interface CompoundImageLayoutProps {
  logoImage: string;
  mainImage: string;
  className?: string;
}

export default function CompoundImageLayout({ 
  logoImage, 
  mainImage, 
  className = "" 
}: CompoundImageLayoutProps) {
  return (
    <div
      className={`relative w-full h-full ${className} flex flex-col items-center justify-center lg:block`}
    >
      {/* Game Logo - Responsive position and size */}
      <GameLogo
        logoSrc={logoImage}
        size="large" // mobile default
        className="relative mt-4 mb-2 z-20 mx-auto lg:absolute lg:top-8 lg:left-12 lg:mt-0 lg:mb-0 lg:mx-0 lg:size-xxlarge"
      />

      {/* Main Image - Responsive position and size */}
      <div
        className="relative flex items-center justify-center w-full lg:absolute lg:inset-0 lg:bottom-[-10%] lg:right-0"
      >
        <MainImage
          imageSrc={mainImage}
          size="large" // mobile default
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[800px] xl:max-w-[1232px] transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Decorative elements - hidden or reduced on small screens */}
      <div className="hidden lg:block absolute top-1/4 right-12 w-32 h-32 bg-white/10 rounded-full blur-xl z-5"></div>
      <div className="hidden md:block absolute bottom-1/4 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg z-5"></div>
      <div className="hidden xl:block absolute top-1/2 right-1/4 w-16 h-16 bg-white/15 rounded-full blur-md z-5"></div>
    </div>
  );
}