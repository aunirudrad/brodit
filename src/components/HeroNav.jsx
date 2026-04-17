import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FiLock } from 'react-icons/fi';
import { NavLink } from 'react-router';

const HeroNav = () => {
    return (
        <nav className='absolute top-0 left-0 right-0 z-50 flex justify-between items-center py-6 px-22'>
            {/* Logo */}
            <div className='flex items-center'>
                <div className='border-2 border-white px-8 py-2'>
                    <h1 className='text-white text-2xl font-bold tracking-wider'>
                        N E X A G R A D<span className='font-light'> AI</span>
                    </h1>
                </div>
            </div>

            {/* Navigation Menu */}
            <div className='hidden lg:flex items-center gap-10'>
                <NavLink to='/' className='text-white text-sm tracking-widest hover:text-gray-300 transition-colors'>
                    HOME
                </NavLink>
                <NavLink to='/services' className='text-white text-sm tracking-widest hover:text-gray-300 transition-colors'>
                    SERVICES
                </NavLink>
                <NavLink to='/about-us' className='text-white text-sm tracking-widest hover:text-gray-300 transition-colors'>
                    ABOUT US
                </NavLink>
                <div className='flex items-center gap-2 text-white text-sm tracking-widest opacity-60 cursor-not-allowed' title='Coming Soon'>
                    <span className='cursor-not-allowed pointer-events-none'>
                        COMPLETED PROJECTS
                    </span>
                    <FiLock className='w-4 h-4' />
                </div>
                <div className='flex items-center gap-2 text-white text-sm tracking-widest opacity-60 cursor-not-allowed' title='Coming Soon'>
                    <span className='cursor-not-allowed pointer-events-none'>
                        CAREER
                    </span>
                    <FiLock className='w-4 h-4' />
                </div>
                <div className='flex items-center gap-2 text-white text-sm tracking-widest opacity-60 cursor-not-allowed' title='Coming Soon'>
                    <span className='cursor-not-allowed pointer-events-none'>
                        REQUEST A QUOTE
                    </span>
                    <FiLock className='w-4 h-4' />
                </div>
            </div>

            {/* Right Side - Search & Menu */}
            <div className='flex items-center gap-6'>
                <button className='text-white hover:text-gray-300 transition-colors'>
                    <BiSearch className='w-6 h-6' />
                </button>
                <button className='text-white hover:text-gray-300 transition-colors'>
                    <HiMenuAlt3 className='w-7 h-7' />
                </button>
            </div>
        </nav>
    );
};

export default HeroNav;
