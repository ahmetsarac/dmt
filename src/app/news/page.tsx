'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NewsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const newsArticles = [
        {
            id: 1,
            title: 'PEAK Reaches 10 Million Players Worldwide',
            category: 'Game Updates',
            date: '2024-01-15',
            excerpt:
                'Our flagship adventure game PEAK has officially reached 10 million players across all platforms. Thank you to our amazing community!',
            content:
                'We are thrilled to announce that PEAK has reached this incredible milestone. The journey to the summit continues with new content updates coming soon.',
            image: '🏔️',
            featured: true,
        },
        {
            id: 2,
            title: 'New DLC "Ancient Mysteries" Coming This Spring',
            category: 'Game Updates',
            date: '2024-01-10',
            excerpt:
                'Discover new secrets and challenges in the upcoming PEAK expansion. Pre-orders start next month.',
            content:
                'The Ancient Mysteries DLC will introduce new areas to explore, challenging puzzles, and mysterious artifacts to discover.',
            image: '🗿',
            featured: false,
        },
        {
            id: 3,
            title: 'Game Studio Wins "Best Indie Developer" Award',
            category: 'Company News',
            date: '2024-01-05',
            excerpt:
                'We are honored to receive this recognition at the International Gaming Awards ceremony.',
            content:
                'This award recognizes our commitment to creating innovative and engaging gaming experiences.',
            image: '🏆',
            featured: true,
        },
        {
            id: 4,
            title: 'Behind the Scenes: Creating the World of PEAK',
            category: 'Development',
            date: '2023-12-20',
            excerpt:
                'Take a look at our development process and the inspiration behind our mountain adventure game.',
            content:
                "Our art team shares insights into the creative process behind PEAK's stunning environments.",
            image: '🎨',
            featured: false,
        },
        {
            id: 5,
            title: 'Community Spotlight: Amazing Fan Art',
            category: 'Community',
            date: '2023-12-15',
            excerpt: 'Showcasing incredible artwork created by our talented community members.',
            content:
                'Our community never ceases to amaze us with their creativity and passion for our games.',
            image: '🖼️',
            featured: false,
        },
        {
            id: 6,
            title: "Another Crab's Treasure Beta Testing Begins",
            category: 'Game Updates',
            date: '2023-12-10',
            excerpt:
                'Selected players can now access the beta version of our upcoming underwater adventure.',
            content:
                'Beta testers will help us refine the gameplay mechanics and discover any hidden treasures... or bugs!',
            image: '🦀',
            featured: false,
        },
        {
            id: 7,
            title: 'Game Studio Expands Team with New Hires',
            category: 'Company News',
            date: '2023-12-01',
            excerpt: 'We welcome five new talented developers to our growing team.',
            content:
                'Our expansion allows us to work on multiple exciting projects simultaneously.',
            image: '👥',
            featured: false,
        },
        {
            id: 8,
            title: 'Going Under Celebrates 2 Years Anniversary',
            category: 'Game Updates',
            date: '2023-11-25',
            excerpt:
                'Two years since launch, Going Under continues to find new players in the corporate dungeon.',
            content:
                'Thank you to all players who have supported Going Under throughout its journey.',
            image: '💼',
            featured: false,
        },
    ];

    const categories = ['all', 'Game Updates', 'Company News', 'Development', 'Community'];

    const filteredArticles =
        selectedCategory === 'all'
            ? newsArticles
            : newsArticles.filter((article) => article.category === selectedCategory);

    const featuredArticles = newsArticles.filter((article) => article.featured);
    const regularArticles = filteredArticles.filter((article) => !article.featured);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-orange-400 via-red-300 to-pink-300">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl mb-6">
                        NEWS
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Stay updated with the latest news, updates, and announcements from Game
                        Studio
                    </p>
                </div>
            </section>

            {/* Featured Articles */}
            {selectedCategory === 'all' && featuredArticles.length > 0 && (
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-bold mb-12">Featured News</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredArticles.map((article) => (
                                <div
                                    key={article.id}
                                    className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-8 text-white"
                                >
                                    <div className="flex items-center mb-4">
                                        <span className="text-4xl mr-4">{article.image}</span>
                                        <div>
                                            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-2">
                                                {article.category}
                                            </span>
                                            <p className="text-white/80 text-sm">
                                                {new Date(article.date).toLocaleDateString(
                                                    'en-US',
                                                    {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    },
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{article.title}</h3>
                                    <p className="text-white/90 mb-6">{article.excerpt}</p>
                                    <button className="px-6 py-2 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-colors">
                                        Read More
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* News Filter */}
            <section className="py-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                                    selectedCategory === category
                                        ? 'bg-black text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {category === 'all' ? 'All News' : category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* News Articles */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(selectedCategory === 'all' ? regularArticles : filteredArticles).map(
                            (article) => (
                                <div
                                    key={article.id}
                                    className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    <div className="p-6">
                                        <div className="flex items-center mb-4">
                                            <span className="text-3xl mr-3">{article.image}</span>
                                            <div>
                                                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-1">
                                                    {article.category}
                                                </span>
                                                <p className="text-gray-500 text-sm">
                                                    {new Date(article.date).toLocaleDateString(
                                                        'en-US',
                                                        {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric',
                                                        },
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                                        <button className="text-black font-medium hover:underline">
                                            Read More →
                                        </button>
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20 bg-black text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Stay in the Loop</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter to get the latest news and updates delivered
                        directly to your inbox
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-full text-black"
                        />

                        <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
