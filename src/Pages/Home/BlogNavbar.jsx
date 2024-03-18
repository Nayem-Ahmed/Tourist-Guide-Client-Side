import React from 'react';
import blogg from '../../assets/tab2.jpg'

const BlogNavbar = () => {
    return (
        <div>
            {/* bg-[#15151599] */}
            <div className="hero object-cover h-96" style={{ backgroundImage: `url(${blogg})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
            </div>
            <div className="hero-content  text-center">
                <div className=" md:w-[800px] p-2 md:p-10 bg-[#fee133] -mt-36 text-white">
                    <h1 className="mb-5 md:text-4xl font-bold"> BLOG MASONRY </h1>
                    <p className="mb-5"> This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nib </p>

                </div>
            </div>



            <div className="content-container flex flex-col justify-center items-center h-full my-10">
                <div className="  px-4 text-center">
                    <h1 className="text-2xl md:text-4xl font-medium mb-4">Explore Our Latest Blog</h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-500">Discover exciting travel destinations, insider tips, and inspiring stories from fellow adventurers.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-md flex flex-col">
                            <img className="w-full h-48 object-cover rounded-t-lg" src="https://i.ibb.co/DKWcy4G/dominik-jirovsky-re2-LZOB2-Xv-Y-unsplash.jpg" alt="Blog Post 1" />
                            <div className="p-4 flex-grow">
                                <h2 className="blog-title text-xl font-semibold mb-2 hover:text-[#fee133] cursor-pointer">10 Must-Visit Destinations for Adventure Seekers</h2>
                                <p className="blog-meta text-sm text-gray-600">By John Doe | March 15, 2024</p>
                                <p className="blog-description mt-2 flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu urna eget quam eleifend hendrerit vel vitae ipsum.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md flex flex-col">
                            <img className="w-full h-48 object-cover rounded-t-lg" src="https://i.ibb.co/prv3W0V/mou.webp" alt="Blog Post 2" />
                            <div className="p-4 flex-grow">
                                <h2 className="blog-title text-xl font-semibold mb-2 hover:text-[#fee133] cursor-pointer">Exploring Hidden Gems: Off-the-Beaten-Path Destinations</h2>
                                <p className="blog-meta text-sm text-gray-600">By Jane Smith | March 10, 2024</p>
                                <p className="blog-description mt-2 flex-grow">Nullam nec odio eget libero lacinia pretium. Curabitur id eros sed nunc laoreet posuere.</p>
                            </div>
                        </div>
                        {/* Add more blog posts as needed */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BlogNavbar;