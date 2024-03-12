import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-[#000] p-8'>
            <div className='flex flex-col md:flex-row gap-5 justify-center md:justify-between  text-white border-b-2 py-6'>
                <div className='md:w-3/12'>
                    <h1 className='text-xl font-medium   mb-5 '>About Tourist Guide</h1>
                    <p className='font-light text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quisquam quaerat eaque? Sapiente cupiditate explicabo possimus fugiat, sunt iure vero?</p>
                </div>
                <div>
                    <h1 className='text-xl font-medium  '>Explore</h1>
                    <ul className='mt-5 text-gray-500'>
                        <li className='hover:text-yellow-500 mb-1'><Link>Gallery</Link></li>
                        <li className='hover:text-yellow-500 mb-1'><Link>News & Articles</Link></li>
                        <li className='hover:text-yellow-500 mb-1'><Link>FAQ</Link></li>
                        <li className='hover:text-yellow-500 mb-1'><Link>Sign in</Link></li>
                        <li className='hover:text-yellow-500'><Link>Coming Soon</Link></li>

                    </ul>
                </div>
                <div>
                    <h1 className='text-xl font-medium '>Links</h1>
                    <ul className='mt-5 text-gray-500'>
                        <li className='hover:text-yellow-500 mb-1'><Link to="/">HOME</Link></li>
                        <li className='hover:text-yellow-500 mb-1'><Link to="/community">Community</Link></li>
                        <li className='hover:text-yellow-500 mb-1'><Link to="/blogs">Blogs</Link></li>
                        <li className='hover:text-yellow-500 mb-1'><Link to="/aboutus">About Us</Link></li>
                        <li className='hover:text-yellow-500'><Link to='/'>Pages</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl font-medium '>Contacts</h1>
                    <div className='flex'>
                        <ul className='mt-5 text-gray-500'>
                            <li className='hover:text-yellow-500 mb-2'>+92 (0088) 6823</li>
                            <li className='hover:text-yellow-500 mb-2'>needhelp@company.com</li>
                            <li className='hover:text-yellow-500'>80 Broklyn Golden Street. New York. USA</li>
                            <form className="flex items-center justify-center mt-6">
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder='Email Address'
                                        className="py-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                                    />
                                    <button className="bg-[#ff7550] text-white py-2 px-4 rounded-r-lg hover:bg-yellow-500 focus:outline-none">
                                        <FaLongArrowAltRight />
                                    </button>
                                </div>
                            </form>
                        </ul>
                    </div>
                </div>
            </div>
            <p className=' text-center mt-4 text-gray-500'> 2024 - All right reserved by <span className='font-medium text-yellow-500 hover:underline'> Nayem Ahmed</span></p>

        </div>
    );
};

export default Footer;