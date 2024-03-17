import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import TourTypeData from './TourTypeData';

const TourtypesDetails = () => {
    const tourdetils = useLoaderData();
    return (
        <div className='flex flex-col gap-5 p-5'>
            <div className=' '>
                <div className="card  bg-white shadow-lg rounded-sm overflow-hidden">
                    <figure>
                        <img className='h-96 w-full  object-cover object-center' src={tourdetils.TouristImage} alt="Tourist Destination" />
                    </figure>
                    <div className="card-body p-6">
                        <h2 className="text-2xl font-semibold mb-2">{tourdetils.tourType}</h2>
                        <p className="text-gray-600 mb-4">{tourdetils.tripTitle}</p>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <img className='rounded-full h-12 w-12 object-cover mr-4 border-2 border-[#ff7550]' src={tourdetils.guideimage} alt="Tour Guide" />
                                <div>
                                    <p className="text-gray-800 font-semibold">{tourdetils.tourGuideName}</p>
                                    <p className="text-gray-600">{tourdetils.tourDate}</p>
                                </div>
                            </div>
                            <p className="text-2xl text-[#ff7550] font-semibold">${tourdetils.price}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>

                <TourTypeData></TourTypeData>
            </div>

        </div>
    );
};

export default TourtypesDetails;