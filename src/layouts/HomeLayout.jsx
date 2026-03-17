import React from 'react';
import TopNav from '../components/TopNav';
import Banner from '../components/Banner';
import DiscoverSection from '../components/DiscoverSection';






const HomeLayout = () => {
    return (
        <div>
            {/* header */}
            <header className=''>
                <nav className='max-w-[90%] mx-auto'>
                    <TopNav></TopNav>
                </nav>
                <section className=''>
                    <Banner></Banner>
                    <DiscoverSection></DiscoverSection>
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