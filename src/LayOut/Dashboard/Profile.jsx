import { useState } from "react";
import useAuth from "../../API/useAuth"
import useRole from "../Hooks/useRole"
import { toast } from "react-toastify";
import { imgUpload } from "../../API/imgbb";
import { updateProfile } from "../../API/auth";
import { RxCross2 } from "react-icons/rx";

const Profile = () => {
    const { user, resetPassword, updateUserProfile } = useAuth()
    const [userInfo, isLoading, refetch] = useRole();
    const [openModal, setOpenModal] = useState(false);
    console.log(userInfo);


    // const handleResetPassword = () => {
    //     resetPassword(user.email)
    //         .then(() => {
    //             // Handle success (e.g., show a notification)
    //             alert('Password reset email sent successfully!');
    //         })
    //         .catch((error) => {
    //             // Handle error (e.g., show an error message)
    //             console.error('Error sending password reset email:', error);
    //             alert('Failed to send password reset email. Please try again.');
    //         });
    // };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.profileImage.files[0];
        console.log(name, email, photo);
        // You can send formData to your backend for updating the user profile
        try {

            const imageData = await imgUpload(photo);
            console.log(imageData);
            // Update user profile  in firebase
            await updateUserProfile(name, email, imageData?.data?.display_url);

            const updateInfo = {
                email: user?.email,
                name,
                photo: imageData?.data?.display_url
            };

            // Update profile using the updateProfile function
            const updatedProfile = await updateProfile(user?.email, updateInfo);
            console.log('Profile updated:', updatedProfile);
            refetch()
            setOpenModal(false);
            toast.success('Profile updated successfully')

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className='flex justify-center items-center'>

            <div className='bg-white shadow-lg rounded-2xl md:w-3/5'>
                <img
                    alt='profile'
                    src='http://wahabali.com/work/travelu/images/parallax/bgparallax-01.jpg'
                    className='w-full object-cover mb-4 rounded-t-lg md:h-48'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-20'>
                    <a href='#' className='relative block'>
                        <img
                            alt='profile'
                            src={userInfo?.photo}
                            className='mx-auto object-cover rounded-full md:h-32 md:w-32 border-2 border-white '
                        />
                    </a>

                    <p className='p-2 px-4 text-xs text-white bg-pink-500 rounded-full'>
                        {userInfo?.role && userInfo?.role.toUpperCase()}
                    </p>
                    <p className='mt-2 md:text-xl md:font-medium text-gray-800 '>
                        User Id: {user.uid}
                    </p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                            <p className='flex flex-col'>
                                Name
                                <span className='font-bold text-black '>
                                    {userInfo?.name}
                                </span>
                            </p>
                            <p className='flex flex-col'>
                                Email
                                <span className='font-bold text-black '>{userInfo?.email}</span>
                            </p>

                            <div>
                                <button onClick={() => setOpenModal(true)} className='bg-[#ff7550] md:px-6 py-2 px-2 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                                    Update Profile
                                </button>

                                {/* <button className=' bg-[#ff7550] md:px-5 py-1 px-2 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                                    Change Password
                                </button> */}
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openModal && (
                <div className="bg-gray-100 absolute  p-8 rounded-lg">
                    <div className="flex justify-between">

                        <h2 className="text-xl font-bold mb-4">Update Profile</h2>
                        <RxCross2
                            onClick={() => setOpenModal(false)}
                            className=" text-2xl border  border-emerald-950 rounded-md  hover:cursor-pointer hover:bg-black hover:text-white">
                        </RxCross2 >
                    </div>
                    <form onSubmit={handleUpdateProfile}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 p-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="p-2 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">
                                Profile Image
                            </label>
                            <input
                                type="file"
                                id="profileImage"
                                name="profileImage"
                                className="mt-1  border-indigo-900 block w-full shadow-sm sm:text-sm rounded-md"
                            />
                        </div>
                        <div className="text-right">

                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Update
                            </button>

                        </div>
                    </form>
                </div>

            )}
        </div>
    )
}

export default Profile
