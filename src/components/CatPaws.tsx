'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PawConfig {
  id: number;
  top: string;
  left: string;
  size: number;
  rotation: number;
  delay: number;
}

export default function CatPaws() {
  // Random positioned paws with static fade-in and shadow change on scroll
  const pawConfigs: PawConfig[] = [
    { id: 1, top: '15%', left: '8%', size: 28, rotation: 45, delay: 200 },
    { id: 2, top: '35%', left: '92%', size: 24, rotation: -30, delay: 400 },
    { id: 3, top: '55%', left: '18%', size: 32, rotation: 60, delay: 600 },
    { id: 4, top: '25%', left: '70%', size: 26, rotation: -45, delay: 300 },
    { id: 5, top: '75%', left: '12%', size: 30, rotation: 20, delay: 800 },
    { id: 6, top: '45%', left: '85%', size: 22, rotation: -60, delay: 500 },
    { id: 7, top: '10%', left: '55%', size: 26, rotation: 35, delay: 700 },
    { id: 8, top: '85%', left: '40%', size: 24, rotation: -25, delay: 900 },
    { id: 9, top: '30%', left: '25%', size: 27, rotation: 50, delay: 1000 },
    { id: 10, top: '65%', left: '75%', size: 25, rotation: -40, delay: 600 },
    { id: 11, top: '20%', left: '40%', size: 29, rotation: 15, delay: 400 },
    { id: 12, top: '80%', left: '65%', size: 23, rotation: -55, delay: 800 },
    { id: 13, top: '50%', left: '5%', size: 31, rotation: 40, delay: 300 },
    { id: 14, top: '95%', left: '80%', size: 26, rotation: -20, delay: 1100 },
    { id: 15, top: '5%', left: '80%', size: 24, rotation: 65, delay: 500 },
    { id: 16, top: '70%', left: '50%', size: 28, rotation: -35, delay: 700 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0" style={{ top: '100vh', height: 'calc(200vh)' }}>
      {pawConfigs.map((paw) => (
        <CatPaw key={paw.id} config={paw} />
      ))}
    </div>
  );
}

interface CatPawProps {
  config: PawConfig;
}

function CatPaw({ config }: CatPawProps) {
  const pawAnimation = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: false,
  });

  const delayClass = `delay-${config.delay}`;

  return (
    <div
      ref={pawAnimation.ref}
      className={`absolute pointer-events-none animate-paw-static ${delayClass} ${
        pawAnimation.isVisible ? 'visible' : ''
      }`}
      style={{
        top: config.top,
        left: config.left,
        transform: `rotate(${config.rotation}deg)`,
        width: `${config.size}px`,
        height: `${config.size}px`,
        zIndex: -1,
      }}
    >
      <img
        src="/assets/cat_paw.svg"
        alt="Cat Paw"
        className="w-full h-full object-contain pointer-events-none"
        draggable={false}
      />
    </div>
  );
}