import React from 'react';
import TopNav from '../components/TopNav';
import HeroSection from '../components/HeroSection';
import VerticalSlider from '../components/VerticalSlider';





const HomeLayout = () => {
    return (
        <div>
            {/* header */}
            <header className=''>
                <nav className='max-w-[90%] mx-auto'>
                    <TopNav></TopNav>
                </nav>
                <section className='h-screen bg-gradient-to-b from-indigo-950 from-35% to-green-900 to-98%'>
                    <VerticalSlider></VerticalSlider>
                    <HeroSection></HeroSection>
                </section>

            </header>
            <main>

            </main>
            <footer>

            </footer>
        </div>
    );
};

export default HomeLayout;