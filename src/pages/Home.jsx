import React from 'react';
import TopNav from '../components/TopNav';
import Banner from '../components/Banner';
import DiscoverSection from '../components/DiscoverSection';
import Company from '../components/Company';

const Home = () => {
    return (

        <div>
            <main>
                <DiscoverSection></DiscoverSection>
                <Company></Company>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default Home;