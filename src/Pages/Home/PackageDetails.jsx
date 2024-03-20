// import React from 'react';
// import { FaRegHeart } from 'react-icons/fa6';
// import { Link, useLoaderData } from 'react-router-dom';
// import details from '../../assets/tab1.jpg';
// import AboutTourSection from './AboutTourSection';

// const packagedetails = () => {
//     const packagedetails = useLoaderData();
//     console.log(packagedetails);
//     // Render the package details
//     return (
//         <div>
//             <div style={{ backgroundImage: `url(${details})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '50vh', padding: '30px', backgroundAttachment: "fixed" }} >
//                 <h1 className="text-lg flex  justify-end mr-0 text-white "><span className='bg-[#ff7550] px-10 py-3'>Price: ${packagedetails.price}</span> </h1>
//                 <div className="flex flex-col justify-center items-center  text-white">
//                     <h1 className="text-4xl font-bold">Package Details</h1>
//                     <Link to="/" className="text-lg mt-4"><span className='text-[#fee133]'>Home </span> |  {packagedetails.tourType}</Link>
//                 </div>

//             </div>
//             <AboutTourSection></AboutTourSection>

//             <div>
//                 <div className='flex flex-col-reverse md:flex-row justify-between my-2 gap-2 md:w-10/12 m-auto rounded-md bg-white  '>
//                     <div className='  md:p-10 p-5 text-center md:text-left'>
//                         <h2 className="text-2xl font-medium mb-3 ">{packagedetails.tripTitle}</h2>
//                         <p className="text-lg mb-2 text-gray-500">Tour Type : {packagedetails.tourType}</p>
//                         <p className="text-lg mb-2 text-gray-500">Tour Date : {packagedetails.tourDate}</p>
//                         <p className="text-lg mb-2 text-gray-500">Price: <span className='text-[#ff7550] font-medium'>${packagedetails.price}</span></p>
//                         <div className='flex gap-2  mt-5 justify-center md:justify-start'>
//                             <img src={packagedetails.guideimage} alt="Tour Guide" className="w-14 h-14 rounded-full mb-4" />
//                             <p className="text-md text-gray-500 relative mt-4"> {packagedetails.tourGuideName}</p>
//                         </div>

//                         <button type='button' className='bg-[#ff7550] py-2 mt-5 text-white  px-3 rounded-sm hover:bg-black'>
//                              BOOK NOW !
//                         </button>
//                     </div>
//                     <div className=''>
//                         <img className='w-full md:h-96 rounded-sm shadow-md' src={packagedetails.TouristImage} alt=" " />
//                     </div>
//                 </div>
//             </div>
//         </div>



//     );
// };

// export default packagedetails;

import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import details from '../../assets/tab1.jpg';
import AboutTourSection from './AboutTourSection';
import { useForm } from 'react-hook-form';
import useAuth from '../../API/useAuth';
import { AddBookingPost } from '../../API/package';
import { imgUpload } from '../../API/imgbb';
import { toast } from 'react-toastify';

const Packagedetails = () => {
    const { user } = useAuth();
    const packagedetails = useLoaderData();
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

    const handleBookNowClick = () => {
        setShowForm(true);
    };
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        try {
            // Your form submission logic goes here
            console.log(data);
            // Assuming imgUpload is a function that handles image upload
            const imageData = await imgUpload(data.TouristImage[0]);
            console.log(imageData);
            const updatedData = {
                ...data,
                TouristImage: imageData?.data?.url,
                status: "review",
            };
            await AddBookingPost(updatedData)
            toast('Add Booking Successfull')
            navigate('/dashboard/mybookings')
            reset();

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div>
            <div style={{ backgroundImage: `url(${details})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '50vh', padding: '30px', backgroundAttachment: "fixed" }}>
                <h1 className="text-lg flex justify-end mr-0 text-white "><span className='bg-[#ff7550] md:px-10 md:py-3 p-1'>Price: ${packagedetails.price}</span> </h1>
                <div className="flex flex-col justify-center items-center  text-white">
                    <h1 className="md:text-4xl text-2xl font-bold">Package Details</h1>
                    <Link to="/" className="text-lg mt-4"><span className='text-[#fee133]'>Home </span> |  {packagedetails.tourType}</Link>
                </div>
            </div>
            <AboutTourSection />
            <div>
                <div className='flex flex-col-reverse md:flex-row justify-between my-2 gap-2 md:w-10/12 m-auto rounded-md bg-white p-2'>
                    <div className=' md:p-10 p-5 text-center md:text-left md:shadow-2xl'>
                        <h2 className="text-2xl font-medium mb-3 ">{packagedetails.tripTitle}</h2>
                        <p className="text-lg mb-2 text-gray-500">Tour Type : {packagedetails.tourType}</p>
                        <p className="text-lg mb-2 text-gray-500">Tour Date : {packagedetails.tourDate}</p>
                        <p className="text-lg text-gray-500">Price: <span className='text-[#ff7550] font-medium'>${packagedetails.price}</span></p>
                        <div className="divider">Tour Guide</div>
                        <div className='flex gap-2 mt-2 justify-center md:justify-start'>
                            <img src={packagedetails.guideimage} alt="Tour Guide" className="w-14 h-14 rounded-full mb-4" />
                            <p className="text-md text-gray-500 relative mt-4"> {packagedetails.tourGuideName}</p>
                        </div>
                        <button type='button' onClick={handleBookNowClick} className='bg-[#ff7550] py-2 text-white px-3 rounded-sm hover:bg-black shadow-2xl w-full'>
                            BOOK NOW !
                        </button>
                    </div>
                    <div className=''>
                        <img className='w-full md:h-96 rounded-md shadow-md' src={packagedetails.TouristImage} alt="" />
                    </div>
                </div>
                {/* BOOK      From  */}
                {showForm && (
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white mx-auto shadow-md rounded px-8 pt-4 pb-8  ">
                        <div className="md:grid md:grid-cols-2 gap-4 mb-4">
                            {/* Tourist Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-gray- 600 text-sm font-medium mb-2">
                                    Tourist Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    defaultValue={user.displayName}
                                    {...register('name', { required: 'Tourist Name is required' })}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray- 600 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                                />
                                {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-gray- 600 text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    defaultValue={user.email}
                                    {...register('email', { required: 'Email is required' })}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray- 600 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                                />
                                {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                            </div>

                        </div>

                        {/* Tourist Image Input */}
                        <div className="mb-4">
                            <label htmlFor="TouristImage" className="block text-gray- 600 text-sm font-medium mb-2">
                                {/* <IoMdAttach className="inline mr-2" /> */}
                                Tourist Image
                            </label>
                            <input
                                type="file"
                                id="TouristImage"
                                {...register("TouristImage")}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray- 600 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="md:grid md:grid-cols-2 gap-4 mb-4">

                        {/*  tour type*/}
                        <div className="mb-4">
                            <label htmlFor="tourType" className="block text-gray- 600 text-sm font-medium mb-2">
                                {/* <IoMdAttach className="inline mr-2" /> */}
                                Tour Type
                            </label>
                            <input
                                type="text"
                                id="tourType"
                                value={packagedetails.tourType}
                                {...register("tourType")}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray- 600 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        {/* Price Input */}
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray- 600 text-sm font-medium mb-2">
                                Price
                            </label>
                            <div className="flex items-center">
                                <span className="mr-2">$</span> {/* Display the dollar sign */}
                                <input
                                    type="number"
                                    id="price"
                                    value={packagedetails.price}
                                    {...register('price', { required: 'Price is required' })}
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline ${errors.price ? 'border-red-500' : ''}`}
                                />
                            </div>

                            {errors.price && <p className="text-red-500 text-xs italic">{errors.price.message}</p>}
                        </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 gap-4 mb-4">

                        {/* Tour Guide Name Input */}
                        <div className="mb-4">
                            <label htmlFor="tourGuideName" className="block text-gray- 600 text-sm font-medium mb-2">
                                Tour Guide Name
                            </label>
                            <div className="relative">
                                <select
                                    id="tourGuideName"
                                    {...register('tourGuideName', { required: 'Tour Guide Name is required' })}
                                    className={`appearance-none border rounded w-full py-2 px-3 text-gray- 600 leading-tight focus:outline-none focus:shadow-outline ${errors.tourGuideName ? 'border-red-500' : ''}`}
                                >
                                    <option value="">Select Tour Guide</option>
                                    <option value="Mary Johnson">Mary Johnson</option>
                                    <option value="Juan Perez">Alice Smith</option>
                                    <option value="Juan Perez">David Brown</option>
                                    <option value="Juan Perez">Emily White</option>
                                    <option value="Juan Perez">John Doe</option>
                                    {/* Add more options here */}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray- 600">
                                    {/* <IoIosArrowDown /> */}
                                </div>
                            </div>
                            {errors.tourGuideName && <p className="text-red-500 text-xs italic">{errors.tourGuideName.message}</p>}
                        </div>

                        {/* Tour Date Input */}
                        <div className="mb-4">
                            <label htmlFor="tourDate" className="block text-gray- 600 text-sm font-medium mb-2">
                                Tour Date
                            </label>
                            <input
                                type="date"
                                id="tourDate"
                                {...register('tourDate', { required: 'Tour Date is required' })}
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray- 600 leading-tight focus:outline-none focus:shadow-outline ${errors.tourDate ? 'border-red-500' : ''}`}
                            />
                            {errors.tourDate && <p className="text-red-500 text-xs italic">{errors.tourDate.message}</p>}
                        </div>
                        </div>



                        {/* Submit Button */}
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="bg-[#ff7550] hover:bg-amber- 600 w-full text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                BOOK NOW !
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Packagedetails;
