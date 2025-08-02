'use client';

import Image from 'next/image';

interface MainImageProps {
  imageSrc: string;
  alt?: string;
  className?: string;
  size?: 'normal' | 'large' | 'xlarge' | 'xxlarge'  ;
}

export default function MainImage({ 
  imageSrc, 
  alt = "Main Image", 
  className = "",
  size = 'xlarge'
}: MainImageProps) {
  const sizeClasses = {
    normal: { width: 400, height: 400, containerClass: 'w-96 h-96' },
    large: { width: 600, height: 600, containerClass: 'w-[600px] h-[600px]' },
    xlarge: { width: 800, height: 800, containerClass: 'w-[800px] h-[800px]' },
    // Add more sizes as needed
    xxlarge: { width: 1232, height: 896, containerClass: 'w-[1232px] h-[896px]' }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`relative z-15 ${currentSize.containerClass} ${className}`}>
      <Image
        src={imageSrc}
        alt={alt}
        width={currentSize.width}
        height={currentSize.height}
        className="object-contain drop-shadow-2xl w-full h-full"
        priority
      />
    </div>
  );
}