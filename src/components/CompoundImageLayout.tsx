'use client';

import Image from 'next/image';

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
      <div
        className="
          absolute
          top-20 left-4  
          sm:top-6 sm:left-8
          md:top-8 md:left-12
          lg:top-12 lg:left-16
          w-full h-full
          sm:w-28 sm:h-28
          md:w-40 md:h-40
          lg:w-4/6 lg:h-4/6
        "
      >
        <Image
          src={logoImage}
          alt="Game Logo"
          width={1000}
          height={1000}
          className="object-contain drop-shadow-lg"
          priority
        />
      </div>

      {/* Main Image - Responsive position and size */}
      <div className="absolute w-[90%] bottom-[0%] right-[7%] sm:right-[0%] sm:bottom-0 md:right-[0%] md:bottom-[0%] lg:right-[0%] lg:bottom-0 xl:right-[-5%] xl:bottom-[-11%]  ">
        <Image
          src={mainImage}
          alt="Main Image"
          width={1286}
          height={896}
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>

     
      

      {/* Decorative elements - hidden or reduced on small screens */}
      <div className="hidden lg:block absolute top-1/4 right-12 w-32 h-32 bg-white/10 rounded-full blur-xl z-5"></div>
      <div className="hidden md:block absolute bottom-1/4 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg z-5"></div>
      <div className="hidden xl:block absolute top-1/2 right-1/4 w-16 h-16 bg-white/15 rounded-full blur-md z-5"></div>
    </div>
  );
}