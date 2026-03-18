import React from 'react';
import TopNav from '../components/TopNav';
import Banner from '../components/Banner';
import DiscoverSection from '../components/DiscoverSection';
import Company from '../components/Company';
import Services from '../components/Services';

const Home = () => {
    return (

        <div>
            <main>
                <DiscoverSection></DiscoverSection>
                <Company></Company>
                <Services></Services>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default Home;