import React from 'react';
import { useLocation } from 'react-router';

const BannerHeadline = () => {
    const location = useLocation();

    // Define headlines for different routes
    const headlineMap = {
        '/about': {
            title: 'About Us',
            description: 'Discover our story, mission, and the team behind our success'
        },
        '/services': {
            title: 'Our Services',
            description: 'Comprehensive solutions tailored to boost your digital presence'
        },
        '/completed-projects': {
            title: 'Completed Projects',
            description: 'Explore the success stories and transformations we\'ve achieved'
        },
        '/career': {
            title: 'Join Our Team',
            description: 'Build your career with us and be part of something amazing'
        },
        '/request-quote': {
            title: 'Request A Quote',
            description: 'Get started with us today and let\'s create something great'
        }
    };

    // Get headline data for current path, or return null if home page
    const headlineData = headlineMap[location.pathname];

    // Don't show on home page
    if (location.pathname === '/' || !headlineData) {
        return null;
    }

    return (
        <div className="px-6 relative z-10 text-white h-full flex flex-col justify-center items-start">
            {/* Left Side - Vertical Text */}
            {/* Main Content - Center */}
            <div className="flex flex-col justify-center items-start h-full px-20 max-w-4xl">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                    {headlineData.title}
                </h1>
                <p className="text-lg md:text-xl mb-10 max-w-2xl opacity-80 leading-relaxed">
                    {headlineData.description}
                </p>
            </div>


        </div>
    );
};

export default BannerHeadline;