import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown, IoMdAttach } from 'react-icons/io';
import { imgUpload } from '../../API/imgbb';
import { toast } from 'react-toastify';
import { AddPackagePost } from '../../API/package';


const AddPackage = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        try {
            // Your form submission logic goes here
            console.log(data);

            // Assuming imgUpload is a function that handles image upload
            const imageData = await imgUpload(data.TouristImage[0]);
            const guideimageData = await imgUpload(data.TouristGuideImage[0]);

            const updatedData = {
                ...data,
                TouristImage: imageData?.data?.url,
                guideimage: guideimageData?.data?.url,
                // email: user?.email,
            };
            // save products data in Database
            const sendProducts = await AddPackagePost(updatedData)
            console.log(sendProducts)


            toast('Add Package Successfull')
            //navigate('/dashboard/manage')
            reset();

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div>
            <h2 className="md:text-2xl font-medium mb-4 text-center font-mono ">Add Package</h2>
            <div className="flex justify-center items-center mt-2">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-4 pb-8 md:w-4/6">
                    <div className="md:grid md:grid-cols-2 gap-4 mb-4">
                        <div className="mb-4">
                            <label htmlFor="tourType" className="block text-gray-600 text-sm font-medium mb-2">
                                Tour Type
                            </label>
                            <div className="relative">
                                <select
                                    id="tourType"
                                    {...register('tourType', { required: 'Tour Type is required' })}
                                    className={`appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline ${errors.tourType ? 'border-red-500' : ''}`}
                                >
                                    <option value="">Select Tour Type</option>
                                    <option value="Adventure">Adventure</option>
                                    <option value="Sightseeing">Sightseeing</option>
                                    <option value="Cultural">Cultural</option>
                                    {/* Add more options here */}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                                    <IoIosArrowDown />
                                </div>
                            </div>
                            {errors.tourType && <p className="text-red-500 text-xs italic">{errors.tourType.message}</p>}
                        </div>
                        {/* TripTitle Input */}
                        <div className="mb-4">
                            <label htmlFor="tripTitle" className="block text-gray- 600 text-sm font-medium mb-2">
                                Trip Title
                            </label>
                            <input
                                type="text"
                                id="tripTitle"
                                {...register('tripTitle', { required: 'Trip Title is required' })}
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray- 600 leading-tight focus:outline-none focus:shadow-outline ${errors.tripTitle ? 'border-red-500' : ''}`}
                            />
                            {errors.tripTitle && <p className="text-red-500 text-xs italic">{errors.tripTitle.message}</p>}
                        </div>
                    </div>

                    {/* Tourist Image Input */}
                    <div className="mb-4">
                        <label htmlFor="TouristImage" className="block text-gray- 600 text-sm font-medium mb-2">
                            <IoMdAttach className="inline mr-2" />
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
                                <option value="Juan Perez">Juan Perez</option>
                                {/* Add more options here */}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray- 600">
                                <IoIosArrowDown />
                            </div>
                        </div>
                        {errors.tourGuideName && <p className="text-red-500 text-xs italic">{errors.tourGuideName.message}</p>}
                    </div>


                    {/* Price Input */}
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray- 600 text-sm font-medium mb-2">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            {...register('price', { required: 'Price is required' })}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray- 600 leading-tight focus:outline-none focus:shadow-outline ${errors.price ? 'border-red-500' : ''}`}
                        />
                        {errors.price && <p className="text-red-500 text-xs italic">{errors.price.message}</p>}
                    </div>
                    {/* Tourist Image Input */}
                    <div className="mb-4">
                        <label htmlFor="TouristGuideImage" className="block text-gray- 600 text-sm font-medium mb-2">
                            <IoMdAttach className="inline mr-2" />
                            Tourist Image
                        </label>
                        <input
                            type="file"
                            id="TouristGuideImage"
                            {...register("TouristGuideImage")}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray- 600 leading-tight focus:outline-none focus:shadow-outline"
                        />
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

                    {/* Submit Button */}
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="bg-[#ff7550] hover:bg-amber- 600 w-full text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Add Package
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPackage;