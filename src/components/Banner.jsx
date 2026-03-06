import React from 'react';
import VerticalSlider from './VerticalSlider';
import HeroSection from './HeroSection';


const Banner = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <VerticalSlider></VerticalSlider>
            
            <div className="absolute inset-0 bg-blue-500 opacity-20"></div>

            <HeroSection></HeroSection>

        </div>
    );
};

export default Banner;