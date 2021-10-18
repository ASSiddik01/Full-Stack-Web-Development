import React from 'react';
import Banner from '../Banner/Banner';
import Exparts from '../Exparts/Exparts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner/>
            <Services></Services>
            <Exparts/>
        </div>
    );
};

export default Home;