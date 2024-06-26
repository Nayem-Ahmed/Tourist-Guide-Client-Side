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
import Loader from "../../Components/Loader";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const TourType = () => {
    const [tourtype, setTourtype] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axiosPublic.get('/addpackage')
            .then(response => {
                setTourtype(response.data)
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching packages:', error)
                setLoading(false);
            });
    }, []);

    // Object to keep track of unique tour types
    const uniqueTourTypes = {};

    // Filter out duplicate tour types
    tourtype.forEach(tour => {
        uniqueTourTypes[tour.tourType] = tour;
    });

    if (loading) return <Loader></Loader>;
    return (
        <div className="bg-cover bg-center min-h-screen p-10 mb-8" style={{ backgroundImage: `url(${bggg})` }}>
            <div className="text-center  mb-4">
                <span className="text-[#ff7550] text-lg font-medium">Take a Look at Our</span>
                <h1 className="text-3xl text-white font-medium mt-2 ">MOST POPULAR TOURS</h1>
            </div>

            <div className='p-5'>
            </div>
            <Swiper
                initialSlide={2}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 40 },
                    1280: { slidesPerView: 4, spaceBetween: 50 },
                }}
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
                        <Link to={`/tourtypedetails/${tour._id}`} className="w-full h-full flex items-center justify-center mb-10 hover:scale-110 transition">
                            <div className="w-full max-w-xs  overflow-hidden shadow-lg bg-white">
                                <img className="w-full h-60 object-cover  " src={tour.TouristImage} alt={tour.tourType} />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold mb-2">{tour.tourType}</h2>
                                    <p className="text-sm text-gray-600">{tour.tripTitle}</p>
                                    <div className="mt-4">
                                        <span className="text-lg text-[#ff7550] font-bold">${tour.price}</span>
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

