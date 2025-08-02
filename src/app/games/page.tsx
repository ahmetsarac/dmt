'use client';

export default function Games() {
    const game = {
        id: 1,
        title: 'Meowstery Wisp',
        subtitle: 'Epic Mountain Adventure',
        description:
            'Climb the highest peaks and discover ancient mysteries hidden in the clouds. Experience breathtaking views and challenging gameplay that will test your limits.',
        longDescription:
            "Embark on an epic journey through treacherous mountain terrain, solving ancient puzzles and uncovering the secrets of lost civilizations. With stunning visuals, immersive gameplay, and a captivating storyline, PEAK offers an unforgettable adventure that pushes the boundaries of what's possible in gaming.",
        features: [
            'Stunning 4K visuals with ray-traced lighting',
            'Dynamic weather system affecting gameplay',
            'Ancient puzzle mechanics with modern twists',
            'Epic boss battles against mythical creatures',
            'Expansive open world with 50+ hours of content',
            'Multiplayer co-op for up to 4 players',
        ],
        color: 'from-blue-400 via-purple-500 to-indigo-600',
        status: 'released',
        platforms: ['PC'],
        releaseDate: '2024',
        rating: '4.9/5',
        reviews: '50,000+',
        players: '2M+',
        awards: ['Game of the Year 2024', 'Best Adventure Game', 'Excellence in Visual Art'],
        emoji: '🏔️',
        price: '$59.99',
        discount: '20% OFF',
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <section className="pt-24 pb-12 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Games</h1>
                    <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
                        Discover our latest gaming experiences
                    </p>
                </div>
            </section>

            {/* Game Card Section */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Game Images Grid */}
                        <div className="grid md:grid-cols-3 gap-4 p-6 md:col-span-2">
                            {/* Main Image */}
                            <div className="md:col-span-4">
                                <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <span className="text-6xl mb-4 block">{game.emoji}</span>
                                        <div className="text-sm opacity-75">Main Screenshot</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Game Info */}
                        <div className="px-6 pb-6">
                            <div className="flex items-start justify-center mb-4">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                        {game.title}
                                    </h2>
                                </div>
                            </div>

                            <p className="text-gray-700 mb-6 leading-relaxed">{game.description}</p>

                            {/* Platforms */}
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                    Available on:
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {game.platforms.map((platform, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                        >
                                            {platform}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                    Add to Wishlist
                                </button>
                                <button className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                                    Watch Trailer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
