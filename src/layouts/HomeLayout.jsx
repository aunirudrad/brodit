import React from 'react';
import TopNav from '../components/TopNav';
import Banner from '../components/Banner';
import DiscoverSection from '../components/DiscoverSection';
import Company from '../components/Company';
import Home from '../pages/Home';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';






const HomeLayout = () => {
    return (
        <div>
            <header className=''>
                <nav className='max-w-[90%] mx-auto'>
                    <TopNav></TopNav>
                </nav>
                <Banner></Banner>
            </header>
            <Outlet></Outlet>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;