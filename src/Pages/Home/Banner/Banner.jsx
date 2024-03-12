import React from 'react';
import mp4 from '../../../assets/vedio.mp4'; // Import the MP4 video file
import mp42 from '../../../assets/vedi.mp4'; // Import the MP4 video file

const Banner = () => {
    return (
        <div className="hero relative min-h-screen overflow-hidden">
            {/* Video Background */}
            <video autoPlay loop muted className="absolute top-0 left-0 min-w-full min-h-full object-cover">
                <source src={mp42} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35"></div>

            {/* Content */}
            <div className="hero-content text-center text-white z-10 relative">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-medium">Welcome to Bangladesh Tourist Guide</h1>
                    <p className="mb-5 font-serif">Explore the beauty of Bangladesh's popular destinations and plan your next adventure.</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;
