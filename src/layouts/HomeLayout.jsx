import React from 'react';
import TopNav from '../components/TopNav';
import Banner from '../components/Banner';
import DiscoverSection from '../components/DiscoverSection';
import Company from '../components/Company';
import Home from '../pages/Home';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer';






const HomeLayout = () => {
    const location = useLocation();
    const currentLocation = location.pathname;
    return (
        <div>
            <header className=''>
                <nav className='max-w-[90%] mx-auto'>
                    <TopNav></TopNav>
                </nav>
                {
                    currentLocation == '/' ? <div>
                        <Banner></Banner>
                    </div>
                        : <div className='relative max-h-100 overflow-hidden'>
                            <Banner></Banner>
                        </div>
                }

            </header>
            <Outlet></Outlet>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;