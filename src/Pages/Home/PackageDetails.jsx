import React from 'react';
import { FaRegHeart } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import details from '../../assets/tab1.jpg';
import AboutTourSection from './AboutTourSection';

const packagedetails = () => {
    const packagedetails = useLoaderData();
    console.log(packagedetails);
    // Render the package details
    return (
        <div>
            <div style={{ backgroundImage: `url(${details})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '50vh', padding: '30px', backgroundAttachment: "fixed" }} >
                <h1 className="text-lg flex  justify-end mr-0 text-white "><span className='bg-[#ff7550] px-10 py-3'>Price: ${packagedetails.price}</span> </h1>
                <div className="flex flex-col justify-center items-center  text-white">
                    <h1 className="text-4xl font-bold">Package Details</h1>
                    <Link to="/" className="text-lg mt-4"><span className='text-[#fee133]'>Home </span> |  {packagedetails.tourType}</Link>
                </div>

            </div>
            <AboutTourSection></AboutTourSection>

            <div>
                <div className='flex flex-col-reverse md:flex-row justify-between my-2 gap-2 md:w-10/12 m-auto rounded-md bg-white  '>
                    <div className='  md:p-10 p-5 text-center md:text-left'>
                        <h2 className="text-2xl font-medium mb-3 ">{packagedetails.tripTitle}</h2>
                        <p className="text-lg mb-2 text-gray-500">Tour Type : {packagedetails.tourType}</p>
                        <p className="text-lg mb-2 text-gray-500">Tour Date : {packagedetails.tourDate}</p>
                        <p className="text-lg mb-2 text-gray-500">Price: <span className='text-[#ff7550] font-medium'>${packagedetails.price}</span></p>
                        <div className='flex gap-2  mt-5 justify-center md:justify-start'>
                            <img src={packagedetails.guideimage} alt="Tour Guide" className="w-14 h-14 rounded-full mb-4" />
                            <p className="text-md text-gray-500 relative mt-4"> {packagedetails.tourGuideName}</p>
                        </div>

                        {/* <button type='button' className='bg-[#ff7550] py-2 mt-5 text-white  px-3 rounded-sm hover:bg-black'>
                            Add to Wishlist
                        </button> */}
                    </div>
                    <div className=''>
                        <img className='w-full md:h-96 rounded-sm shadow-md' src={packagedetails.TouristImage} alt=" " />
                    </div>
                </div>
            </div>
        </div>



    );
};

export default packagedetails;
