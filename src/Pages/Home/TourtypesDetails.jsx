import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TourTypeData from './TourTypeData';

const TourtypesDetails = () => {
    const tourdetils = useLoaderData();
    return (
        <div className='p-5'>

        <div className="card w-96 bg-base-100 shadow-xl rounded-sm">
            <figure><img className='h-64 w-full' src={tourdetils.TouristImage} alt=" " /></figure>
            <div className="card-body">
                <h2 className="card-title">{tourdetils.tourType}</h2>
                <p>{tourdetils.tripTitle}</p>
                <p>{tourdetils.tourGuideName}</p>
                <p>{tourdetils.tourDate}</p>
                <p>{tourdetils.price}</p>
                <div className=" ">
                    <p>{tourdetils.tourGuideName}</p>
                    <img className='rounded-full h-20 w-20' src={tourdetils.guideimage} alt="" />
                </div>
            </div>
        </div>
        <TourTypeData></TourTypeData>
        </div>
    );
};

export default TourtypesDetails;