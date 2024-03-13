import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown, IoMdAttach, IoMdPerson } from 'react-icons/io';
import { imgUpload } from '../../API/imgbb';
import { toast } from 'react-toastify';
import { AddPackagePost } from '../../API/package';


const AddPackage = () => {
    const navigate = useNavigate()
    const { register, handleSubmit,reset, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        try {
            // Your form submission logic goes here
            console.log(data);

            // Assuming imgUpload is a function that handles image upload
            const imageData = await imgUpload(data.TouristImage[0]);

            const updatedData = {
                ...data,
                TouristImage: imageData?.data?.url,
                // email: user?.email,
            };
            // save products data in Database
            const sendProducts = await AddPackagePost(updatedData)
            console.log(sendProducts)


            toast('Add Package Successfull')
            //  navigate('/dashboard/manage')
            reset();



        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center mt-2">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-4 pb-8 md:w-4/6">
                <h2 className="md:text-2xl font-bold mb-4 text-center font-mono">Add Package</h2>

                <div className="md:grid md:grid-cols-2 gap-4 mb-4">
                    {/* Tourist Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Tourist Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register('name', { required: 'Tourist Name is required' })}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            {...register('email', { required: 'Email is required' })}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                    </div>
                </div>

                {/* Tourist Image Input */}
                <div className="mb-4">
                    <label htmlFor="TouristImage" className="block text-gray-700 text-sm font-bold mb-2">
                        <IoMdAttach className="inline mr-2" />
                        Tourist Image
                    </label>
                    <input
                        type="file"
                        id="TouristImage"
                        {...register("TouristImage")}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                {/* Tour Guide Name Input */}
                <div className="mb-4">
                    <label htmlFor="tourGuideName" className="block text-gray-700 text-sm font-bold mb-2">
                        Tour Guide Name
                    </label>
                    <div className="relative">
                        <select
                            id="tourGuideName"
                            {...register('tourGuideName', { required: 'Tour Guide Name is required' })}
                            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.tourGuideName ? 'border-red-500' : ''}`}
                        >
                            <option value="">Select Tour Guide</option>
                            <option value="Mary Johnson">Mary Johnson</option>
                            <option value="Juan Perez">Juan Perez</option>
                            {/* Add more options here */}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <IoIosArrowDown />
                        </div>
                    </div>
                    {errors.tourGuideName && <p className="text-red-500 text-xs italic">{errors.tourGuideName.message}</p>}
                </div>

                {/* Price Input */}
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        {...register('price', { required: 'Price is required' })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.price ? 'border-red-500' : ''}`}
                    />
                    {errors.price && <p className="text-red-500 text-xs italic">{errors.price.message}</p>}
                </div>

                {/* Tour Date Input */}
                <div className="mb-4">
                    <label htmlFor="tourDate" className="block text-gray-700 text-sm font-bold mb-2">
                        Tour Date
                    </label>
                    <input
                        type="date"
                        id="tourDate"
                        {...register('tourDate', { required: 'Tour Date is required' })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.tourDate ? 'border-red-500' : ''}`}
                    />
                    {errors.tourDate && <p className="text-red-500 text-xs italic">{errors.tourDate.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="mb-6">
                    <button
                        type="submit"
                        className="bg-[#ff7550] hover:bg-amber-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Package
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPackage;