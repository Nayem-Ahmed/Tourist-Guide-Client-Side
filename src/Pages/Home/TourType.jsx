// import { useEffect, useState } from "react";
// import axiosPublic from "../../API/axiosPublic";
// import { Link } from "react-router-dom";


// const TourType = () => {
//     const [tourtype, setTourtype] = useState([]);

//     useEffect(() => {
//         axiosPublic.get('/addpackage')
//             .then(response => setTourtype(response.data))
//             .catch(error => console.error('Error fetching packages:', error));
//         console.log(tourtype);
//     }, []);
//     return (
//         <div className='grid gap-6 md:grid-cols-4 p-5'>
//             {tourtype.map((tour) => (
//                 <Link to={`/tourtypedetails/${tour._id}`} key={tour._id}>
//                     <img className=' md:h-48 md:w-48 mb-4' src={tour?.TouristImage} alt="" />
//                     <p className="text-lg text-white relative -mt-14 ml-5 font-medium">{tour?.tourType}</p>
//                 </Link>
//             ))}
//         </div>
//     );
// };

// export default TourType;

import { useEffect, useState } from "react";
import axiosPublic from "../../API/axiosPublic";
import { Link } from "react-router-dom";
import bggg from '../../assets/bggg.avif'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const TourType = () => {
    const [tourtype, setTourtype] = useState([]);

    useEffect(() => {
        axiosPublic.get('/addpackage')
            .then(response => setTourtype(response.data))
            .catch(error => console.error('Error fetching packages:', error));
    }, []);

    // Object to keep track of unique tour types
    const uniqueTourTypes = {};

    // Filter out duplicate tour types
    tourtype.forEach(tour => {
        uniqueTourTypes[tour.tourType] = tour;
    });
    // 

    return (
        <div className="bg-cover bg-center min-h-screen p-10" style={{ backgroundImage: `url(${bggg})` }}>
            <div className="text-center  mb-6">
                <span className="">Take a Look at Our</span>
                <h1 className="text-3xl font-medium mt-2">MOST POPULAR TOURS</h1>
            </div>

            <div className='  p-5'>
            </div>
            <Swiper
                initialSlide={2}
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper "
            >
                {Object.values(uniqueTourTypes).map((tour) => (
                    <SwiperSlide key={tour._id}>
                        <Link to={`/tourtypedetails/${tour._id}`} className="w-full h-full flex items-center justify-center mb-10">
                            <div className="w-full max-w-xs  overflow-hidden shadow-lg bg-white">
                                <img className="w-full h-60 object-cover object-center" src={tour.TouristImage} alt={tour.tourType} />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold mb-2">{tour.tourType}</h2>
                                    <p className="text-sm text-gray-600">{tour.tripTitle}</p>
                                    <div className="mt-4">
                                        <span className="text-lg font-bold">${tour.price}</span>
                                        <span className="ml-2 text-sm text-gray-500">per person</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TourType;

