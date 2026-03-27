import React from 'react';
import HeroNav from './HeroNav';
import { FaLine } from 'react-icons/fa';
import ParticlesComponent from './ParticlesComponent';
import { useLocation } from 'react-router';

const HeroSection = () => {
    const location = useLocation();
    const currentLocation = location.pathname;
    return (
        <div className="px-6 relative z-10 text-white h-full">
            {/* Hero Navigation */}
            {
                currentLocation !== "/" && <ParticlesComponent></ParticlesComponent>
            }

            <HeroNav />

            {
                currentLocation === "/" ? <div className='w-full h-full'>
                    {/* Left Side - Vertical DIGITAL Text */}
                    < div className="absolute left-20 top-1/3 -translate-y-1/2">
                        <span className="text-sm tracking-[0.3em] writing-mode-vertical-rl transform rotate-180 uppercase opacity-60">
                            Digital
                        </span>
                    </div>

                    {/* Main Content - Center */}
                    <div className="flex flex-col justify-center items-start h-full px-20 max-w-4xl">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                            Boosts your<br />
                            website traffic!
                        </h1>
                        <p className="text-lg md:text-xl mb-10 max-w-2xl opacity-80 leading-relaxed">
                            Share processes and data securely on a need to know<br />
                            basic need for reconciliation it combines
                        </p>

                        {/* Purchase button with animated horizontal line */}
                        <div className="relative inline-flex items-center group">
                            {/* animated line that smoothly grows when the group is hovered - transform handled in CSS to include translateY and scaleX */}
                            <span className="purchase-line absolute -left-5 top-1/2 h-0.5 bg-gray-400 w-53 pointer-events-none"></span>

                            <button className="border-2 border-white px-10 py-4 hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-wider uppercase font-medium">
                                Purchase
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Welcome & Navigation */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
                        <span className="text-sm tracking-[0.3em] writing-mode-vertical-rl transform rotate-180 uppercase mb-4">
                            Welcome
                        </span>

                    </div>

                    {/* Left Bottom - Social Icons */}
                    <div className="absolute left-8 bottom-12 flex flex-col gap-6">
                        <a href="#" className="text-white hover:text-gray-300 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9.197 21v-9.13H6.373V9.141h2.824V6.917c0-2.803 1.713-4.33 4.214-4.33 1.199 0 2.228.09 2.527.13v2.93h-1.733c-1.36 0-1.623.647-1.623 1.597v2.094h3.24l-.422 2.73h-2.818V21H9.197z" />
                            </svg>
                        </a>
                    </div>

                    {/* Right Bottom - Scroll Text */}
                    <div className="absolute right-8 bottom-12">
                        <span className="text-sm tracking-[0.3em] writing-mode-vertical-rl transform rotate-180 uppercase opacity-60">
                            Scroll
                        </span>
                    </div>
                </div> : <h2>Worked</h2>
            }

        </div >
    );
};

export default HeroSection;