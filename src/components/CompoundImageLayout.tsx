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
          top-32 left-2 
          sm:top-36 sm:left-24
          md:top-20 md:left-12
          lg:top-20 lg:left-12
          xl:top-12 xl:left-4
          2xl:top-10 2xl:left-4
          w-full h-full
          sm:w-3/4 sm:h-3/4
          md:w-4/6 md:h-4/6
          lg:w-4/6 lg:h-4/6
          xl:w-4/6 xl:h-4/6
          2xl:w-4/6  2xl:h-4/6
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
      <div className="
        absolute 
        w-full 
        bottom-[0%] 
        right-0
        sm:right-[0%] sm:bottom-0 sm:w-[80%]
        md:right-[0%] md:bottom-[0%] md:w-[100%]
        lg:right-[0%] lg:bottom-0 lg:w-[80%]
        xl:right-0 xl:bottom-[-11%] xl:w-[80%]
        2xl:right-0 2xl:bottom-[-13%] 2xl:w-[80%]

        ">
        <Image
          src={mainImage}
          alt="Main Image"
          width={1286}
          height={896}
          className="object-contain drop-shadow-2xl w-full"
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