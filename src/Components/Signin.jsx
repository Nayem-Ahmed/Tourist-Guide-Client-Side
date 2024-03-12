import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import login2 from '../assets/loginn.webp';
import signupbg from '../assets/signupbg.avif';
import useAuth from '../API/useAuth';


const Signin = () => {
    const { signIn } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {

            console.log(data);
            // Create User
            signIn(data.email, data.password);


        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className='my-5'>
            <div style={{ backgroundImage: `url(${signupbg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', backgroundAttachment: "fixed" }} className='flex flex-col md:flex-row items-center justify-center w-10/12 mx-auto shadow-md rounded-md'>
                {/* Left section (for large screens) */}
                <div className='hidden md:block md:w-1/2'>
                    <img className='w-full h-screen rounded-md' src={login2} alt="Login" />
                </div>

                {/* Right section */}
                <div className='w-full md:w-1/2 p-4'>
                    <div className=" p-8  md:w-full text-left" >
                        <h1 className="text-2xl font-bold mb-6 text-white">Login Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
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

                            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
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
                            <button className="btn btn-block btn-outline text-white">
                                <FcGoogle className="text-2xl" /> Continue With Google
                            </button>
                            <p className='my-3 text-white'>Not a Member? <Link to='/signup' className='underline text-blue-500'>Signup</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
