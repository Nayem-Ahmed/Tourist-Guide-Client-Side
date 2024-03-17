import React from 'react';
import Banner from './Banner/Banner';
import TravelGuide from './TravelGuideSection/TravelGuide';
import ContactUs from './ContactUs';
import TourType from './TourType';
import AboutUs from './AboutUs';
import Blog from './Blog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TravelGuide></TravelGuide>
            <TourType></TourType>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
            <Blog></Blog>
        </div>
    );
};

export default Home;