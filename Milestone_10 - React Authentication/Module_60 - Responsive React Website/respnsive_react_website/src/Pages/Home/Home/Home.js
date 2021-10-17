import React from 'react';
import Exparts from '../Exparts/Exparts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h2 >Welcome to Car Repair</h2>
            <Services></Services>
            <Exparts/>
        </div>
    );
};

export default Home;