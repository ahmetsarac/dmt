'use client';

interface ParallaxBackgroundProps {
  scrollY: number;
  backgroundImage: string;
}

export default function ParallaxBackground({ scrollY, backgroundImage }: ParallaxBackgroundProps) {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        transform: `translateY(${scrollY * 0.5}px)`,
        scale: '1',
      }}
    />
  );
}