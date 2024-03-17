import React from 'react';
import { useLoaderData } from 'react-router-dom';
import details from '../../assets/tab1.jpg';
// style={{ backgroundImage: `url(${details})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', padding: '30px', backgroundAttachment: "fixed" }}

const TourTypeDataDetails = () => {
    const tourTypesDataDetails = useLoaderData();
    console.log(tourTypesDataDetails);
    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row justify-between  gap-2 md:w-10/12 m-auto rounded-md bg-white shadow-md'>
                <div className='flex-1 md:p-10 p-5 text-center md:text-left'>
                    <h2 className="text-2xl font-medium mb-3 ">{tourTypesDataDetails.tripTitle}</h2>
                    <p className="text-lg mb-2 text-gray-500">Tour Type : {tourTypesDataDetails.tourType}</p>
                    <p className="text-lg mb-2 text-gray-500">Tour Date : {tourTypesDataDetails.tourDate}</p>
                    <p className="text-lg mb-2 text-gray-500">Price: <span className='text-[#ff7550] font-medium'>${tourTypesDataDetails.price}</span></p>
                    <div className='flex gap-2  mt-5 justify-center md:justify-start'>
                        <img src={tourTypesDataDetails.guideimage} alt="Tour Guide" className="w-14 h-14 rounded-full mb-4" />
                        <p className="text-md text-gray-500 relative mt-4"> {tourTypesDataDetails.tourGuideName}</p>
                    </div>

                    <button type='button' className='bg-[#ff7550] py-2 mt-5 text-white  px-3 rounded-sm hover:bg-black'>
                        Add to Wishlist
                    </button>
                </div>
                <div className='flex-1 '>
                    <img className='w-full md:h-96 rounded-sm shadow-md' src={tourTypesDataDetails.TouristImage} alt=" " />
                </div>
            </div>

        </div>

    );
};

export default TourTypeDataDetails;