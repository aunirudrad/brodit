import React from 'react';
import { NavLink } from 'react-router';
import { BsQuote } from 'react-icons/bs';
import { BiUpArrow } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-slate-700">
                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row gap-8 items-center text-sm">
                        <a href="tel:800-123-45-67" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.265 1.215 2.807 2.15 3.741.933.933 2.475 1.73 3.741 2.15l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                            </svg>
                            <span>800-123-45-67</span>
                        </a>
                        <a href="mailto:nexagradai@example.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                            </svg>
                            <span>NEXAGRADAI@EXAMPLE.COM</span>
                        </a>
                    </div>

                    {/* Logo */}
                    <div className="text-center">
                        <div className="border-2 border-white px-4 py-2 inline-block">
                            <span className="font-bold text-xl tracking-widest">NEXAGRAD AI</span>
                        </div>
                    </div>

                    {/* Right Links */}
                    <div className="flex flex-col sm:flex-row gap-6 items-center text-sm">
                        <a href="#login" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                            </svg>
                            <span>LOG IN / SIGN UP</span>
                        </a>
                        <a href="#quote" className="flex justify-center items-start gap-1 hover:text-cyan-400 transition-colors">
                            <BsQuote></BsQuote>
                            <span>REQUEST A QUOTE</span>
                        </a>
                    </div>
                </div>

                {/* Middle Section - Navigation */}
                <div className="py-12 text-center">
                    <nav className="flex flex-wrap justify-center gap-8 text-sm">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => `uppercase tracking-widest transition-colors ${isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
                        >
                            HOME
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => `uppercase tracking-widest transition-colors ${isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
                        >
                            ABOUT
                        </NavLink>
                        <NavLink 
                            to="/internet" 
                            className={({ isActive }) => `uppercase tracking-widest transition-colors ${isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
                        >
                            INTERNET
                        </NavLink>
                        <NavLink 
                            to="/iptv" 
                            className={({ isActive }) => `uppercase tracking-widest transition-colors ${isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
                        >
                            IPTV
                        </NavLink>
                        <NavLink 
                            to="/voip" 
                            className={({ isActive }) => `uppercase tracking-widest transition-colors ${isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
                        >
                            VOIP
                        </NavLink>
                        <NavLink 
                            to="/blog" 
                            className={({ isActive }) => `uppercase tracking-widest transition-colors ${isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
                        >
                            BLOG
                        </NavLink>
                        <NavLink 
                            to="/contacts" 
                            className={({ isActive }) => `uppercase tracking-widest transition-colors ${isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
                        >
                            CONTACTS
                        </NavLink>
                    </nav>
                </div>

                {/* Bottom Section - Copyright */}
                <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
                    <p>© COPYRIGHT NEXAGRAD AI</p>
                </div>
            </div>

            {/* Scroll to top button */}
            <button onClick={() => window.scrollTo(0, 0)} className="fixed bottom-8 right-8 w-12 h-12 bg-cyan-600 hover:bg-cyan-700 text-white rounded transition-all duration-300 transform hover:scale-110 flex items-center justify-center shadow-lg">
                <BiUpArrow></BiUpArrow>
            </button>
        </footer>
    );
};

export default Footer;