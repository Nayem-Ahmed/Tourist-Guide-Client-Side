import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../assets/abouttt.jpg'
import why from '../../assets/why.webp'
import { MdOutlineHighQuality } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { TbPackages } from "react-icons/tb";
import CallToAction from './CallToAction ';




const AboutUs = () => {
    return (
        <div className=''>
            <div className="bg-cover bg-center h-96 "
                style={{
                    backgroundImage: `url(${about})`,
                    backgroundSize: 'cover', // Ensures the image covers the entire container
                    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                }}>
                <div className="flex flex-col justify-center items-center h-full text-white">
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <Link to="/" className="text-lg mt-4"><span className='text-[#fee133]'>Home </span> | <span  >About us</span></Link>
                </div>
            </div>
            <CallToAction></CallToAction>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-6 p-5'>
                <img className='rounded-md' src={why} alt="" />
                 <div className='basis-1/2'>
                    <h1 className='text-2xl font-medium mb-6'>Why <span className='text-[#fee133]'>Choose</span> Us</h1>
                    <p className='mb-5 text-gray-500'>Vestibulum in accumsan magna mauri tincidunt turpisligula semper namc orci magec dia commodo viverra eget et leo curabitur dia consequat condimentum nunc molestie feugiat elit proin id viverra diam massa aliquam velit.</p>

                    <p className='flex items-center gap-2 mb-4'><MdOutlineHighQuality className='text-2xl text-[#fee133]'></MdOutlineHighQuality>High Quality Service</p>
                    <p className='flex items-center gap-2 mb-4 '><GiSkills className='text-2xl text-[#fee133]'></GiSkills>Experienced Guides</p>
                    <p className='flex items-center gap-2'><TbPackages className='text-2xl text-[#fee133]'></TbPackages>Flexible Packages</p>
                 </div>
             </div>
        </div>
    );
};

export default AboutUs;