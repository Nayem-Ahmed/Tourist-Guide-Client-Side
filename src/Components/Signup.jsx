import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../assets/signup.avif';
import signupbg from '../assets/signupbg.avif';
import useAuth from '../API/useAuth';
import { imgUpload } from '../API/imgbb';
import { toast } from 'react-toastify';
import { saveUser } from '../API/auth';

const Signup = () => {
    const { createUser, updateUserProfile, signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {

            console.log(data);
            // Create User
            const { user } = await createUser(data?.email, data?.password);
            // Assuming imgUpload is a function that handles image upload
            const imageData = await imgUpload(data.photo[0]);
            console.log(imageData);
            // Update user profile with additional data (name, photo, etc.
            await updateUserProfile(data?.firstName, imageData?.data?.url);
            // save user data in Database
            const sendUserData = await saveUser(user)
            toast.success('Sign Up successful');
            navigate('/')

        } catch (error) {
            toast.error(error.message);
        }

    };
    const handleGoogleSignIn = async () => {
        try {
            const { user } = await signInWithGoogle();
            // save user data in Database
            const sendUserData = await saveUser(user)
            toast.success('Sign Up successful');
            navigate('/')

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div style={{ backgroundImage: `url(${signupbg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', padding: '30px', backgroundAttachment: "fixed" }}>

            <div className='flex flex-col md:flex-row md:w-10/12 mx-auto rounded-md border '>
                <div className='md:w-1/2 hidden md:block'>
                    <img className='w-full h-[600px] rounded-md' src={signup} alt="Signup" />
                </div>

                <div className=" p-8  md:w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2 w-full">
                            Name
                        </label>
                        <input
                            id="firstName"
                            className="border border-gray-300 p-2 mb-4 w-full"
                            type="text"
                            placeholder="Enter your name"
                            {...register('firstName', { required: true })}
                        />
                        {errors.firstName && <span className="text-red-500">Name is required</span>}

                        <label htmlFor="email" className="block text-sm font-medium text-white  mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            className="border border-gray-300 p-2 mb-4 w-full"
                            type="email"
                            placeholder="Enter your email"
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        />
                        {errors.email && <span className="text-red-500">Valid Email is required</span>}

                        <label htmlFor="password" className="block text-sm font-medium text-white  mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            className="border border-gray-300 p-2 mb-4 w-full"
                            type="password"
                            placeholder="Enter your password"
                            {...register('password', { required: true, minLength: 6 })}
                        />
                        {errors.password && <span className="text-red-500">Password must be at least 6 characters</span>}

                        <label htmlFor="photo" className="block text-sm font-medium text-white mb-2">
                            Photo
                        </label>
                        <input id="photo" className="border border-gray-300 p-2 mb-4 w-full" type="file" accept="image/*" {...register('photo')} />

                        <button type="submit" className="bg-[#fee133] font-semibold p-2 w-full rounded">
                            Sign Up
                        </button>
                        <i className="divider">OR</i>
                        <button onClick={() => handleGoogleSignIn()} className="btn btn-block btn-outline text-white ">
                            <FcGoogle className="text-2xl " /> Continue With Google
                        </button>

                        <p className="my-3 text-white ">
                            Already have an account? <Link to='/signin' className="underline text-yellow-600 font-semibold" >Login</Link>
                        </p>
                    </form>
                </div>

            </div>
        </div>

    );
};

export default Signup;