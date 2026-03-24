import React from 'react';

const ContactBanner = () => {
    return (
        <section className="relative py-10 md:py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        {/* Tag */}
                        <div className="mb-6">
                            <span className="inline-block text-cyan-500 uppercase tracking-widest text-xm sm:text-xl">
                                LET'S GET STARTED
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Build your entire site in minutes and customize in real-time
                        </h2>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-8">
                            <div>
                                <p className="text-gray-700 font-semibold">
                                    Call Us On:{' '}
                                    <a href="tel:+8801712345678" className="text-cyan-600 hover:text-cyan-700 transition-colors">
                                        (023) 234 45 321
                                    </a>
                                    {' '}Or{' '}
                                    <a href="tel:+8801712345678" className="text-cyan-600 hover:text-cyan-700 transition-colors">
                                        (023) 234 45 321
                                    </a>
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-700 font-semibold">
                                    Email Us:{' '}
                                    <a href="mailto:brodit@example.com" className="text-cyan-600 hover:text-cyan-700 transition-colors">
                                        brodit@example.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-base mb-8 leading-relaxed">
                            Or fill out the following form to start the conversation.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-4 py-3 text-xs bg-cyan-600 hover:bg-cyan-700 text-white font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95">
                                START WITH A FREE ASSESSMENT
                            </button>
                            <button className="px-4 py-3 text-xs border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 font-bold uppercase tracking-wider transition-all duration-300">
                                FIND YOUR SOLUTIONS
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                        <div className="relative flex items-center justify-center min-h-150">
                            <img
                                src="/src/assets/man.png"
                                alt="Professional jumping with laptop"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBanner;