'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Hero section'ın yüksekliği yaklaşık viewport height kadar
            // Scroll pozisyonu viewport height'ın %80'ini geçince rengi değiştir
            const heroHeight = window.innerHeight * 0.8;
            setIsScrolledPastHero(window.scrollY > heroHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hero section üzerindeyken beyaz, geçince default (gri) renk
    const textColorClass = isScrolledPastHero ? 'text-gray-700' : 'text-white';
    const hoverColorClass = isScrolledPastHero ? 'hover:text-black' : 'hover:text-gray-200';
    const logoTextClass = isScrolledPastHero ? '' : 'text-white';
    const mobileButtonClass = isScrolledPastHero ? 'bg-gray-700' : 'bg-white';

    return (
        <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md transition-all duration-300" data-oid="ej8ixqr">
            <div
                className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
                data-oid="mgc5of3"
            >
                <Link href="/" className="flex items-center space-x-2" data-oid="s9d32e_">
                    <div
                        className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"
                        data-oid="85oakn4"
                    >
                        <span className="text-white font-bold text-sm" data-oid="0if2rva">
                            🎮
                        </span>
                    </div>
                    <span className={`font-bold text-lg transition-colors duration-300 ${logoTextClass}`} data-oid=".b3syr5">
                        DMT GAMES
                    </span>
                </Link>
                {/* Desktop Menu and Social Links - Right Aligned */}
                <div className="hidden md:flex items-center space-x-8" data-oid="1lsofo5">
                    <Link
                        href="/games"
                        className={`${textColorClass} ${hoverColorClass} font-medium transition-colors duration-300`}
                        data-oid="nsoxuhz"
                    >
                        GAMES
                    </Link>
                    <Link
                        href="/about"
                        className={`${textColorClass} ${hoverColorClass} font-medium transition-colors duration-300`}
                        data-oid="z1f7:i8"
                    >
                        ABOUT
                    </Link>
                    <Link
                        href="/jobs"
                        className={`${textColorClass} ${hoverColorClass} font-medium transition-colors duration-300`}
                        data-oid="zs9yr4t"
                    >
                        JOBS
                    </Link>
                    <Link
                        href="/news"
                        className={`${textColorClass} ${hoverColorClass} font-medium transition-colors duration-300`}
                        data-oid="oks-6c:"
                    >
                        NEWS
                    </Link>
                    <Link
                        href="/press"
                        className={`${textColorClass} ${hoverColorClass} font-medium transition-colors duration-300`}
                        data-oid="-bjzdhi"
                    >
                        PRESS
                    </Link>

                    {/* Divider */}
                    <div className={`w-px h-6 transition-colors duration-300 ${isScrolledPastHero ? 'bg-gray-300' : 'bg-white/30'}`}></div>

                    {/* Social Media Icons */}
                    <div className="flex items-center space-x-3" data-oid="_h0lnhc">
                        {/* Instagram */}
                        <a
                            href="#"
                            className={`${isScrolledPastHero ? 'text-black hover:text-pink-600' : 'text-white hover:text-pink-400'} transition-colors duration-300`}
                            aria-label="Instagram"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>

                        {/* Twitter/X */}
                        <a
                            href="#"
                            className={`${isScrolledPastHero ? 'text-black hover:text-gray-900' : 'text-white hover:text-gray-300'} transition-colors duration-300`}
                            aria-label="Twitter"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>

                        {/* Discord */}
                        <a
                            href="#"
                            className={`${isScrolledPastHero ? 'text-black hover:text-indigo-600' : 'text-white hover:text-indigo-400'} transition-colors duration-300`}
                            aria-label="Discord"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                            </svg>
                        </a>

                        {/* Reddit */}
                        <a
                            href="#"
                            className={`${isScrolledPastHero ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-400'} transition-colors duration-300`}
                            aria-label="Reddit"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                            </svg>
                        </a>

                        {/* TikTok */}
                        <a
                            href="#"
                            className={`${isScrolledPastHero ? 'text-black hover:text-black' : 'text-white hover:text-gray-300'} transition-colors duration-300`}
                            aria-label="TikTok"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col space-y-1 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                    data-oid="8gt_w48"
                >
                    <span
                        className={`w-6 h-0.5 ${mobileButtonClass} transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                        data-oid="gczr.9u"
                    ></span>
                    <span
                        className={`w-6 h-0.5 ${mobileButtonClass} transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
                        data-oid="gjjqpx7"
                    ></span>
                    <span
                        className={`w-6 h-0.5 ${mobileButtonClass} transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                        data-oid="_znnfdu"
                    ></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white/95 backdrop-blur-sm`}
                data-oid="jcchydn"
            >
                <div className="px-6 py-4 space-y-4" data-oid="t2q40.k">
                    <Link
                        href="/games"
                        className="block text-gray-700 hover:text-black font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-oid="wy9b47q"
                    >
                        GAMES
                    </Link>
                    <Link
                        href="/about"
                        className="block text-gray-700 hover:text-black font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-oid="kbjorc4"
                    >
                        ABOUT
                    </Link>
                    <Link
                        href="/jobs"
                        className="block text-gray-700 hover:text-black font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-oid="qhs-4bf"
                    >
                        JOBS
                    </Link>
                    <Link
                        href="/news"
                        className="block text-gray-700 hover:text-black font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-oid="ivuj7:o"
                    >
                        NEWS
                    </Link>
                    <Link
                        href="/press"
                        className="block text-gray-700 hover:text-black font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-oid="4dwr4su"
                    >
                        PRESS
                    </Link>
                    <div
                        className="flex space-x-6 pt-4 border-t border-gray-200"
                        data-oid="d0808mw"
                    >
                        {/* LinkedIn */}
                        <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                            aria-label="LinkedIn"
                            data-oid="mobile-linkedin"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="#"
                            className="text-gray-600 hover:text-pink-600 transition-colors"
                            aria-label="Instagram"
                            data-oid="mobile-instagram"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>

                        {/* Twitter/X */}
                        <a
                            href="#"
                            className="text-gray-600 hover:text-black transition-colors"
                            aria-label="Twitter"
                            data-oid="mobile-twitter"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>

                        {/* Reddit */}
                        <a
                            href="#"
                            className="text-gray-600 hover:text-orange-600 transition-colors"
                            aria-label="Reddit"
                            data-oid="mobile-reddit"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                            </svg>
                        </a>

                        {/* Discord */}
                        <a
                            href="#"
                            className="text-gray-600 hover:text-indigo-600 transition-colors"
                            aria-label="Discord"
                            data-oid="mobile-discord"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
