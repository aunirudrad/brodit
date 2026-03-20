import React from 'react';
import TopNav from '../components/TopNav';
import Banner from '../components/Banner';
import DiscoverSection from '../components/DiscoverSection';
import Company from '../components/Company';
import Services from '../components/Services';
import ExploreCard from '../components/ExploreCard';
import LatestProjects from '../components/LatestProjects';

const Home = () => {
    return (

        <div>
            <main>
                <DiscoverSection></DiscoverSection>
                <Company></Company>
                <section className='bg-[#f8f7fb]'>
                    <Services limit={3}></Services>
                    <ExploreCard />
                    <LatestProjects></LatestProjects>
                </section>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default Home;