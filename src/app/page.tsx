'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeroSection from '../components/HeroSection';

export default function Home() {
    const [currentGame, setCurrentGame] = useState(0);

    const game = {
        title: 'PEAK',
        subtitle: 'Epic Mountain Adventure',
        description: 'Climb the highest peaks and discover ancient mysteries',
        color: 'from-blue-400 to-purple-600',
    };

    return (
        <div className="min-h-screen bg-gray-100" data-oid="e6f-q31">
            {/* Hero Section with Parallax */}
            <HeroSection
                backgroundImage="/assets/bg.JPG"
                logoImage="/assets/game_logo.png"
                mainImage="/assets/main.PNG"
                gradientColor={game.color}
            />

            {/* Featured Games */}
            <section className="py-20 bg-white" data-oid="bete6no">
                <div className="max-w-7xl mx-auto px-6" data-oid="otd9zko">
                    <h2 className="text-4xl font-bold text-center mb-16" data-oid="js_4sg_">
                        OUR GAMES
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8" data-oid=":3lrp0o">
                        {
                            <div key={'A'} className="group cursor-pointer" data-oid="vyrqwot">
                                <div
                                    className={`h-64 bg-gradient-to-br ${game.color} rounded-lg mb-4 flex items-center justify-center transform group-hover:scale-105 transition-transform`}
                                    data-oid="sauv7.."
                                >
                                    <span className="text-6xl" data-oid="cteeh2l">
                                        {'🏔️'}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2" data-oid="8.zdwy_">
                                    {game.title}
                                </h3>
                                <p className="text-gray-600" data-oid="lfuro7d">
                                    {game.description}
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-gray-50" data-oid="26s7cso">
                <div className="max-w-7xl mx-auto px-6" data-oid="5bi0lw_">
                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="1a.98:p">
                        <div data-oid="e1xtq0o">
                            <h2 className="text-4xl font-bold mb-6" data-oid="ddfv99a">
                                WE CREATE WORLDS
                            </h2>
                            <p className="text-lg text-gray-700 mb-6" data-oid="lnskzqm">
                                At Game Studio, we believe in the power of interactive storytelling.
                                Our team of passionate developers, artists, and designers work
                                together to create immersive experiences that transport players to
                                new worlds.
                            </p>
                            <p className="text-lg text-gray-700 mb-8" data-oid="2c:mydu">
                                From epic adventures to quirky indie games, we're committed to
                                pushing the boundaries of what's possible in gaming.
                            </p>
                            <Link
                                href="/about"
                                className="inline-block px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
                                data-oid="kd23sc5"
                            >
                                LEARN MORE
                            </Link>
                        </div>
                        <div className="relative" data-oid="pmcvee.">
                            <div
                                className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg p-8 text-center"
                                data-oid="mnk4.ki"
                            >
                                <div className="text-6xl mb-4" data-oid="plkh0id">
                                    🎨
                                </div>
                                <h3
                                    className="text-2xl font-bold text-white mb-2"
                                    data-oid="3f-kcl4"
                                >
                                    Creative Excellence
                                </h3>
                                <p className="text-white/90" data-oid="::u468t">
                                    Award-winning games loved by millions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}