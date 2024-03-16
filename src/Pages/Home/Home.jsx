import React from 'react';
import Banner from './Banner/Banner';
import TravelGuide from './TravelGuideSection/TravelGuide';
import ContactUs from './ContactUs';
import TourType from './TourType';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TravelGuide></TravelGuide>
            <TourType></TourType>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;