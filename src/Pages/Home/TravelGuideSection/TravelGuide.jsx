import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axiosPublic from '../../../API/axiosPublic';
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AddWishlistPost } from '../../../API/package';
import { toast } from 'react-toastify';
import useAuth from '../../../API/useAuth';


const TravelGuide = () => {
    const { user } = useAuth();
    const [packag, setPackages] = useState([]);

    useEffect(() => {
        axiosPublic.get('/addpackage')
            .then(response => setPackages(response.data))
            .catch(error => console.error('Error fetching packages:', error));
        console.log(packag);
    }, []);

    const handleWishlist = async (packagee) => {
        try {
            const { _id, ...dataWithoutId } = packagee;

            const information = {
                email: user?.email,
                ...dataWithoutId
            };
            const wish = await AddWishlistPost(information);
            toast('Added Wishlist Successfull')
            console.log(wish);

        } catch (error) {
            console.error('Error in handleWishlist:', error);
        }
    }
    return (
        <div>
            <Tabs className="mx-auto block text-center mt-5 mb-10">
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>

                <TabPanel>
                    <div className='p-5'>
                        <div className='flex flex-col md:flex-row gap-5'>
                            <div className='text-left md:basis-2/3'>
                                <p className='mb-4 text-xl font-semibold'>Welcome to our Travel Agency!</p>
                                <h2 className='mb-4  text-lg text-gray-500'>Here you can find exciting travel packages and meet our amazing tour guides.Discover the world with us and create unforgettable memories!  Whether you're looking for adventurous activities, cultural experiences, or relaxing getaways, we have something for everyone</h2>
                                <h3 className='text-lg text-gray-500'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden inthe middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,making this the first true generator on the Internet.</h3>
                            </div>
                            <div className='md:basis-1/2'>
                                <iframe className='md:w-[500px] md:h-80'
                                    src="https://www.youtube.com/embed/oYRw02g706M"
                                    title="Overview Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div >
                </TabPanel>

                <TabPanel>
                    {/* Package list */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 p-5 ">
                        {packag.map((packages, index) => (
                            <div key={index} className="card card-compact  bg-base-100 shadow-md rounded-md group">
                                <figure><img className='relative w-full md:h-56 group-hover:scale-110  transition duration-300 ease-in-out' src={packages.TouristImage} alt={packages.tourType} /></figure>
                                <button type='button' style={{ background: 'rgba(255, 255, 255, 0.30)', padding: '0.5rem', position: 'absolute', right: '5px', top: '3px', borderRadius: '2px', zIndex: '1' }} className='hover:text-[#ff7550]'>
                                    <button type='button' onClick={() => handleWishlist(packages)}> <FaRegHeart className='text-2xl' /></button>
                                </button>
                                <div className="card-body">
                                    <h2 className="card-title text-sm text-[#2c3e50]">Tour Type : {packages.tourType}</h2>
                                    <p className='font-light'>{packages.tripTitle}</p>
                                    <p className="text-sm">Price: ${packages.price}</p>
                                    <div className="card-actions m-auto">
                                        <Link to={`/packageDetails/${packages._id}`}><button type='button' className="bg-[#ff7550] py-2 px-4 hover:bg-black rounded-sm text-white font-medium">View Package</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button type='button' className='bg-[#ff7550] py-2 mt-8 mx-auto block  text-center text-white  px-5 rounded-sm hover:bg-black'>
                        All Packages
                    </button>
                </TabPanel>

                <TabPanel>
                    <div className='flex flex-col md:flex-row gap-5 p-5'>

                    {packag.map((guide, index) => (
                        <div key={index} className=" bg-base-100 shadow-md p-5">
                            <div className=" ">
                                <img className='w-40 h-28 m-auto rounded-sm mb-3' src={guide.guideimage} alt="" />
                                <h2 className='text-gray-500'>{guide.tourGuideName}</h2>
                                <div className="mt-3">
                                    <button className="bg-[#ff7550] px-4 py-1 rounded-md text-white">Details</button>
                                </div>
                            </div>
                        </div>

                    ))}
                    </div>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TravelGuide;
