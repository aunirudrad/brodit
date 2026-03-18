import React from 'react';
import TopNav from '../components/TopNav';
import Banner from '../components/Banner';
import DiscoverSection from '../components/DiscoverSection';
import Company from '../components/Company';
import Home from '../pages/Home';
import { Outlet } from 'react-router';






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
        </div>
    );
};

export default HomeLayout;