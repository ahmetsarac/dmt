'use client';

import Link from 'next/link';

export default function PressPage() {
    const pressReleases = [
        {
            id: 1,
            title: 'Game Studio Announces New Partnership with Major Publisher',
            date: '2024-01-20',
            excerpt:
                'Strategic partnership will bring our games to new platforms and audiences worldwide.',
            downloadLink: '#',
        },
        {
            id: 2,
            title: 'PEAK Surpasses 10 Million Players Milestone',
            date: '2024-01-15',
            excerpt:
                'Our flagship adventure game reaches unprecedented success across all platforms.',
            downloadLink: '#',
        },
        {
            id: 3,
            title: 'Game Studio Wins Multiple Awards at International Gaming Conference',
            date: '2024-01-05',
            excerpt:
                'Recognition for innovation in game design and outstanding contribution to the industry.',
            downloadLink: '#',
        },
    ];

    const mediaAssets = [
        {
            category: 'Logos',
            items: [
                { name: 'Game Studio Logo (PNG)', size: '2.1 MB', format: 'PNG' },
                { name: 'Game Studio Logo (SVG)', size: '156 KB', format: 'SVG' },
                { name: 'Game Studio Logo (White)', size: '1.8 MB', format: 'PNG' },
            ],
        },
        {
            category: 'PEAK Assets',
            items: [
                { name: 'PEAK Key Art', size: '8.4 MB', format: 'PNG' },
                { name: 'PEAK Screenshots Pack', size: '45.2 MB', format: 'ZIP' },
                { name: 'PEAK Character Renders', size: '12.7 MB', format: 'ZIP' },
            ],
        },
        {
            category: 'Team Photos',
            items: [
                { name: 'Team Photo 2024', size: '5.3 MB', format: 'JPG' },
                { name: 'Studio Interior', size: '3.8 MB', format: 'JPG' },
                { name: 'Development Process', size: '7.1 MB', format: 'ZIP' },
            ],
        },
    ];

    const awards = [
        {
            year: '2024',
            award: 'Best Indie Developer',
            organization: 'International Gaming Awards',
            game: 'Overall Studio Recognition',
        },
        {
            year: '2023',
            award: 'Excellence in Game Design',
            organization: 'Game Developers Choice Awards',
            game: 'PEAK',
        },
        {
            year: '2023',
            award: 'Best Adventure Game',
            organization: 'Indie Game Festival',
            game: 'PEAK',
        },
        {
            year: '2022',
            award: 'Innovation Award',
            organization: 'Gaming Innovation Summit',
            game: 'Going Under',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-300">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl mb-6">
                        PRESS KIT
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Media resources, press releases, and assets for journalists and content
                        creators
                    </p>
                </div>
            </section>

            {/* Quick Facts */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">Quick Facts</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">2018</div>
                            <p className="text-gray-600">Founded</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">50M+</div>
                            <p className="text-gray-600">Players Worldwide</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                            <p className="text-gray-600">Games Released</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                            <p className="text-gray-600">Industry Awards</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Company Overview</h2>
                            <p className="text-gray-700 mb-4">
                                Game Studio is an independent game development company founded in
                                2018 with a mission to create innovative and engaging gaming
                                experiences that bring people together.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Based in San Francisco with a distributed team worldwide, we
                                specialize in adventure games, indie titles, and experimental gaming
                                experiences that push creative boundaries.
                            </p>
                            <p className="text-gray-700">
                                Our portfolio includes award-winning titles such as PEAK, Another
                                Crab's Treasure, and Going Under, which have collectively reached
                                over 50 million players globally.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-8 text-white text-center">
                            <div className="text-6xl mb-4">🎮</div>
                            <h3 className="text-2xl font-bold mb-2">Game Studio</h3>
                            <p className="text-white/90">
                                Creating Amazing Gaming Experiences Since 2018
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Press Releases */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">Recent Press Releases</h2>
                    <div className="space-y-6">
                        {pressReleases.map((release) => (
                            <div
                                key={release.id}
                                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2">{release.title}</h3>
                                        <p className="text-gray-600 mb-2">{release.excerpt}</p>
                                        <p className="text-sm text-gray-500">
                                            {new Date(release.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </p>
                                    </div>
                                    <div className="mt-4 md:mt-0 md:ml-6">
                                        <a
                                            href={release.downloadLink}
                                            className="inline-block px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                                        >
                                            Download PDF
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Assets */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">Media Assets</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {mediaAssets.map((category, index) => (
                            <div key={index} className="bg-white rounded-lg p-6">
                                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                                <div className="space-y-3">
                                    {category.items.map((item, itemIndex) => (
                                        <div
                                            key={itemIndex}
                                            className="flex items-center justify-between p-3 bg-gray-50 rounded"
                                        >
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-sm text-gray-500">
                                                    {item.size} • {item.format}
                                                </p>
                                            </div>
                                            <button className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors">
                                                Download
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button className="px-8 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-colors">
                            Download Complete Press Kit
                        </button>
                    </div>
                </div>
            </section>

            {/* Awards & Recognition */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">Awards & Recognition</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {awards.map((award, index) => (
                            <div
                                key={index}
                                className="flex items-center p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg"
                            >
                                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-2xl mr-6">
                                    🏆
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{award.award}</h3>
                                    <p className="text-gray-600">
                                        {award.organization} • {award.year}
                                    </p>
                                    <p className="text-sm text-gray-500">{award.game}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 bg-black text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">Press Contact</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Media Inquiries</h3>
                            <div className="space-y-3">
                                <p>
                                    <span className="text-gray-400">Email:</span>
                                    <br />
                                    press@gamestudio.com
                                </p>
                                <p>
                                    <span className="text-gray-400">Phone:</span>
                                    <br />
                                    +1 (555) 123-4567
                                </p>
                                <p>
                                    <span className="text-gray-400">Response Time:</span>
                                    <br />
                                    Within 24 hours
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Business Development</h3>
                            <div className="space-y-3">
                                <p>
                                    <span className="text-gray-400">Email:</span>
                                    <br />
                                    business@gamestudio.com
                                </p>
                                <p>
                                    <span className="text-gray-400">Partnerships:</span>
                                    <br />
                                    partnerships@gamestudio.com
                                </p>
                                <p>
                                    <span className="text-gray-400">Location:</span>
                                    <br />
                                    San Francisco, CA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
