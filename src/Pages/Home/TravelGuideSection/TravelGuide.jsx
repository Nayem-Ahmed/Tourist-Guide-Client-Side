import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axiosPublic from '../../../API/axiosPublic';
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const TravelGuide = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        axiosPublic.get('/addpackage')
            .then(response => setPackages(response.data))
            .catch(error => console.error('Error fetching packages:', error));
        console.log(packages);
    }, []);
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
                        <div className='flex flex-col md:flex-row gap-5  mb-5'>
                            <div className='text-left basis-2/3'>
                                <p className='mb-4 text-xl font-semibold'>Welcome to our Travel Agency!</p>
                                <h2 className='mb-4  text-lg text-gray-500'>Here you can find exciting travel packages and meet our amazing tour guides.Discover the world with us and create unforgettable memories!  Whether you're looking for adventurous activities, cultural experiences, or relaxing getaways, we have something for everyone</h2>
                                <h3 className='text-lg text-gray-500'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden inthe middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,making this the first true generator on the Internet.</h3>
                            </div>
                            <div className='basis-1/2'>
                                <iframe
                                    width="560"
                                    height="315"
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
                        {packages.map((packages, index) => (
                            <div key={index} className="card card-compact  bg-base-100 shadow-md rounded-md group">
                                <figure><img className='relative w-full md:h-56 group-hover:scale-110  transition duration-300 ease-in-out' src={packages.TouristImage} alt={packages.tourType} /></figure>
                                <button type='button' style={{ background: 'rgba(255, 255, 255, 0.30)', padding: '0.5rem', position: 'absolute', right: '5px', top: '3px', borderRadius: '2px', zIndex: '1' }} className='hover:text-[#ff7550]'>
                                    <FaRegHeart className='text-2xl' />
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
                    <h2 className="text-2xl font-bold mb-4">Meet Our Tour Guides</h2>
                    {/* Tour guide list */}
                    <div>
                        {/* Tour guide card components */}
                        {/* Each card displays tour guide information */}
                        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                            <p className="text-lg font-bold">Tour Guide Name</p>
                            <p className="text-sm">Location: City, Country</p>
                            <p className="text-sm">Experience: 10 years</p>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700"> </button>
                        </div>
                        {/* Additional tour guide cards */}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TravelGuide;
