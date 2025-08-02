'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
    const teamMembers = [
        {
            name: 'Alex Chen',
            role: 'Creative Director',
            bio: 'Visionary leader with 15+ years in game development',
            emoji: '🎨',
        },
        {
            name: 'Sarah Johnson',
            role: 'Lead Developer',
            bio: 'Technical wizard who brings ideas to life',
            emoji: '💻',
        },
        {
            name: 'Mike Rodriguez',
            role: 'Art Director',
            bio: 'Master of visual storytelling and design',
            emoji: '🖌️',
        },
        {
            name: 'Emma Wilson',
            role: 'Game Designer',
            bio: 'Creates engaging gameplay experiences',
            emoji: '🎮',
        },
    ];

    const values = [
        {
            title: 'Innovation',
            description: 'We push boundaries and explore new possibilities in gaming',
            icon: '🚀',
        },
        {
            title: 'Quality',
            description: 'Every game we create meets the highest standards of excellence',
            icon: '⭐',
        },
        {
            title: 'Community',
            description: 'We build games that bring people together',
            icon: '🤝',
        },
        {
            title: 'Passion',
            description: 'We love what we do and it shows in our work',
            icon: '❤️',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100" data-oid="0m0-.jn">
            {/* Hero Section */}
            <section
                className="pt-24 pb-16 bg-gradient-to-br from-green-400 via-blue-300 to-purple-300"
                data-oid="nwunsse"
            >
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid="wu4xfnc">
                    <h1
                        className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl mb-6"
                        data-oid="2yjt198"
                    >
                        ABOUT US
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto" data-oid="tn2acc0">
                        We are passionate game developers creating extraordinary experiences
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-white" data-oid="fo8wga_">
                <div className="max-w-7xl mx-auto px-6" data-oid="1m---:8">
                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="on_hb00">
                        <div data-oid="dx9n0.a">
                            <h2 className="text-4xl font-bold mb-6" data-oid="9o6yy37">
                                Our Story
                            </h2>
                            <p className="text-gray-700 mb-4" data-oid="4oz:g-2">
                                Founded in 2018, Game Studio began as a small team of passionate
                                developers with a big dream: to create games that would inspire and
                                entertain players around the world.
                            </p>
                            <p className="text-gray-700 mb-4" data-oid="x3et43q">
                                What started in a small garage has grown into a thriving studio that
                                has released multiple award-winning titles. We believe in the power
                                of games to tell stories, build communities, and create lasting
                                memories.
                            </p>
                            <p className="text-gray-700" data-oid="p8ar85t">
                                Today, we continue to push the boundaries of what's possible in
                                gaming, always staying true to our core values of innovation,
                                quality, and community.
                            </p>
                        </div>
                        <div className="relative" data-oid="m4tui.i">
                            <div
                                className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg p-8 text-center"
                                data-oid="y9jj2tn"
                            >
                                <div className="text-6xl mb-4" data-oid="rw2m-72">
                                    🏢
                                </div>
                                <h3
                                    className="text-2xl font-bold text-white mb-2"
                                    data-oid="hgiwsf9"
                                >
                                    Our Studio
                                </h3>
                                <p className="text-white/90" data-oid="_x2gjwe">
                                    A creative space where magic happens
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-gray-50" data-oid="d57mqc5">
                <div className="max-w-7xl mx-auto px-6" data-oid="3e:esqt">
                    <h2 className="text-4xl font-bold text-center mb-12" data-oid="r6yz.z1">
                        Our Values
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-oid="f3-ri9r">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
                                data-oid="4khxl86"
                            >
                                <div className="text-4xl mb-4" data-oid="476-q8h">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3" data-oid="3w56rer">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600" data-oid="tivt:z4">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white" data-oid="thi9ynh">
                <div className="max-w-7xl mx-auto px-6" data-oid="b._p80a">
                    <h2 className="text-4xl font-bold text-center mb-12" data-oid="ec56-2g">
                        Meet Our Team
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-oid="_1:pnhz">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center" data-oid="zu0-pcr">
                                <div
                                    className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-4"
                                    data-oid="yz4x0ob"
                                >
                                    {member.emoji}
                                </div>
                                <h3 className="text-xl font-bold mb-2" data-oid="p-a.wp3">
                                    {member.name}
                                </h3>
                                <p className="text-purple-600 font-medium mb-2" data-oid="km.a95l">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 text-sm" data-oid="0_61:9_">
                                    {member.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-black text-white" data-oid="8:y_q11">
                <div className="max-w-7xl mx-auto px-6" data-oid="s1gq6t3">
                    <div className="grid md:grid-cols-4 gap-8 text-center" data-oid="najrqhl">
                        <div data-oid="33hyapt">
                            <div className="text-4xl font-bold mb-2" data-oid="2o8tdwl">
                                50M+
                            </div>
                            <p className="text-gray-400" data-oid=".39tucs">
                                Players Worldwide
                            </p>
                        </div>
                        <div data-oid="dur5k_7">
                            <div className="text-4xl font-bold mb-2" data-oid="0o16dun">
                                15+
                            </div>
                            <p className="text-gray-400" data-oid="sr6lx.3">
                                Games Released
                            </p>
                        </div>
                        <div data-oid="grn:5hr">
                            <div className="text-4xl font-bold mb-2" data-oid="c7:hknu">
                                25+
                            </div>
                            <p className="text-gray-400" data-oid="wqvqfkz">
                                Awards Won
                            </p>
                        </div>
                        <div data-oid="vgbjr3w">
                            <div className="text-4xl font-bold mb-2" data-oid="cqzd5pq">
                                6
                            </div>
                            <p className="text-gray-400" data-oid="mjh7bx-">
                                Years of Excellence
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section
                className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                data-oid=":pbsyxw"
            >
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid="94g:.n0">
                    <h2 className="text-4xl font-bold mb-6" data-oid="48kx:j3">
                        Join Our Journey
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto" data-oid="w.m9d:y">
                        Be part of our story and help us create the next generation of amazing games
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="q-ervmq"
                    >
                        <Link
                            href="/jobs"
                            className="px-8 py-3 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
                            data-oid=".v1spw9"
                        >
                            VIEW CAREERS
                        </Link>
                        <Link
                            href="/games"
                            className="px-8 py-3 border border-white text-white font-bold rounded-full hover:bg-white hover:text-purple-600 transition-colors"
                            data-oid="jfvaw28"
                        >
                            PLAY OUR GAMES
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
