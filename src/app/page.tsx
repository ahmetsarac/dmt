'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import CatPaws from '../components/CatPaws';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Home() {
    const [currentGame, setCurrentGame] = useState(0);

    // Scroll animation hooks for different elements
    const titleAnimation = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
    const descriptionAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
    const gamesHeadingAnimation = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
    const gameCardAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

    const game = {
        title: 'PEAK',
        subtitle: 'Epic Mountain Adventure',
        description: 'Climb the highest peaks and discover ancient mysteries',
        color: 'from-blue-400 to-purple-600',
    };

    return (
        <div className="relative min-h-screen bg-gray-100" data-oid="e6f-q31">
            {/* Hero Section with Parallax */}
            <HeroSection
                backgroundImage="/assets/bg.JPG"
                logoImage="/assets/game_logo.png"
                mainImage="/assets/main.PNG"
                gradientColor={game.color}
            />

            {/* Company Description */}
            <section className="py-8 sm:py-12 md:py-16 bg-gray-50" data-oid="company-desc">
                <div className="max-w-7xl mx-auto px-4 sm:px-6" data-oid="desc-container">
                    <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-center" data-oid="company-grid">
                        <div className="flex-1 text-center" data-oid="company-title-section">
                            <h2 
                                ref={titleAnimation.ref}
                                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent animate-fade-in-left ${titleAnimation.isVisible ? 'visible' : ''}`} 
                                data-oid="company-title"
                            >
                                A game studio <br /> that dares to <br /> incredible things.
                            </h2>
                        </div>
                        <div className="text-center md:text-right" data-oid="company-text">
                            <div 
                                ref={descriptionAnimation.ref}
                                className={`text-lg sm:text-xl md:text-2xl leading-tight text-gray-800 animate-fade-in-right delay-300 ${descriptionAnimation.isVisible ? 'visible' : ''}`} 
                                data-oid="company-desc-lines"
                            >
                                <div className="mb-2">We put our soul into fun, dream-chasing games.</div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* Cat Paws - Random positioned and animated after company description */}
            <CatPaws />

            {/* Our Games */}
            <section className="py-16 bg-gray-100" data-oid="games">
                 <div className="max-w-7xl mx-auto px-6" data-oid="games-container">
                     <h2 
                         ref={gamesHeadingAnimation.ref}
                         className={`text-4xl font-bold text-center mb-16 text-gray-800 animate-fade-in-up ${gamesHeadingAnimation.isVisible ? 'visible' : ''}`} 
                         data-oid="games-title"
                     >
                         Check out our games ↓
                     </h2>
                     <div className="flex justify-center">
              {/* Game Card */}
<div 
  ref={gameCardAnimation.ref}
  className={`bg-white rounded-lg shadow-lg overflow-hidden w-full animate-scale-in delay-200 ${
    gameCardAnimation.isVisible ? 'visible' : ''
  }`}
>
  <div className="grid grid-cols-1 md:grid-cols-2">
    {/* Video Section */}
    <div className="relative w-full h-64 md:h-auto bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-white flex justify-center items-center w-full h-full p-6">
        <img
          src="/assets/meowstery_wisp_logo.png"
          alt="Meowstery Wisp"
          className="w-full h-full object-contain max-w-xs md:max-w-md"
        />
      </div>
    </div>

    {/* Game Info Section */}
    <div className="p-6 sm:p-8 flex flex-col justify-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900">
        Meowstery Wisp
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
        Meowstery Wisp is a 2D multiplayer social deduction game set in a whimsical
        Victorian-era manor where cats interact, explore, and deduce to solve a mysterious rite.
      </p>
      <div className="flex justify-center md:justify-end">
        <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  </div>
</div>

                     </div>
                 </div>
            </section>
        </div>
    );
}