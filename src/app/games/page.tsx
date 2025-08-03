'use client';

export default function Games() {
    const game = {
        id: 1,
        title: 'Meowstery Wisp',
        subtitle: 'Epic Mountain Adventure',
        description: 'Meowstery Wisp is a 2D multiplayer social deduction game set in a whimsical Victorian-era manor where cats interact, explore, and deduce to solve a mysterious rite',
        longDescription:
            "Embark on an epic journey through treacherous mountain terrain, solving ancient puzzles and uncovering the secrets of lost civilizations. With stunning visuals, immersive gameplay, and a captivating storyline, PEAK offers an unforgettable adventure that pushes the boundaries of what's possible in gaming.",
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
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#000' }}>Our Games</h1>
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
                                    <img
                                        src="/assets/meowstery_wisp_logo.png"
                                        alt="Meowstery Wisp Logo"
                                        className="max-w-full max-h-full object-contain"
                                    />
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
