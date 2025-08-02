'use client';

import Image from 'next/image';

interface GameLogoProps {
  logoSrc: string;
  alt?: string;
  className?: string;
  size?: 'normal' | 'large' | 'xlarge' | 'xxlarge';
}

export default function GameLogo({ 
  logoSrc, 
  alt = "Game Logo", 
  className = "",
  size = 'large'
}: GameLogoProps) {
  const sizeClasses = {
    normal: { width: 120, height: 60 },
    large: { width: 200, height: 100 },
    xlarge: { width: 280, height: 140 },
    // Add more sizes as needed
    xxlarge: { width: 900, height: 440 }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`absolute z-20 ${className}`}>
      <Image
        src={logoSrc}
        alt={alt}
        width={currentSize.width}
        height={currentSize.height}
        className="object-contain drop-shadow-lg"
        priority
      />
    </div>
  );
}