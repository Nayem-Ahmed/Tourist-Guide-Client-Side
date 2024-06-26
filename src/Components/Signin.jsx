import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login2 from '../assets/loginn.webp';
import signupbg from '../assets/signupbg.avif';
import useAuth from '../API/useAuth';
import { toast } from 'react-toastify';
import { saveUser } from '../API/auth';


const Signin = () => {
    const { signIn, signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {

            console.log(data);
            // Create User
            await signIn(data.email, data.password);
            toast.success("Sign in Successful")
            navigate(location?.state ? location.state : '/');

        } catch (error) {
            toast.error(error.message);
        }
    };
    const handleGoogleSignIn = async () => {
        try {
            const {user} = await signInWithGoogle();
            // save user data in Database
            const sendUserData = await saveUser(user)
            console.log(sendUserData)
            toast.success("Sign in Successful")
            navigate(location?.state ? location.state : '/');

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className='md:my-5'>
            <div style={{ backgroundImage: `url(${signupbg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', backgroundAttachment: "fixed" }} className='flex flex-col md:flex-row items-center justify-center md:w-10/12 mx-auto shadow-md md:rounded-md'>
                {/* Left section (for large screens) */}
                <div className='hidden md:block md:w-1/2'>
                    <img className='w-full h-screen rounded-md' src={login2} alt="Login" />
                </div>

                {/* Right section */}
                <div className='w-full md:w-1/2 p-4'>
                    <div className=" p-8  md:w-full text-left" >
                        <h1 className="text-2xl font-bold mb-6 text-white">Login Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="email" className="block text-sm font-medium text-white mb-2 w-full">
                                Email
                            </label>
                            <input
                                id="email"
                                className="border border-gray-300 p-2 mb-4 w-full"
                                type="text"
                                placeholder="Enter your email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500">Email is required</span>}

                            <label htmlFor="password" className="block text-sm font-medium text-white mb-2 w-full">
                                Password
                            </label>
                            <input
                                id="password"
                                className="border border-gray-300 p-2 mb-4 w-full"
                                type="password"
                                placeholder="Enter your password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500">Password is required</span>}

                            <button
                                type="submit"
                                className=" p-2 w-full font-semibold rounded bg-[#fee133]"
                            >
                                Submit
                            </button>
                            <i className="divider">OR</i>
                            <button onClick={handleGoogleSignIn} className="btn  btn-block btn-outline text-white">
                                <FcGoogle className="text-2xl" /> <span className=''>Continue With Google</span>
                            </button>
                            <p className='my-3 text-white'>Not a Member? <Link to='/signup' className='underline text-yellow-600 font-semibold'>Signup</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
