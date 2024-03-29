import React from 'react';
import blog from '../../assets/blog.jpg';
import { Link } from 'react-router-dom';
import BlogNavbar from './BlogNavbar';

const Blog = () => {
    return (
        <div className=''>
            <div className='text-center md:w-2/5 mx-auto mb-8 mt-10'>
                <h1 className='md:text-5xl text-2xl font-medium mb-4'>BLOG POST</h1>
                <p className='text-gray-500'>Making Memories and Bonding Through Travel, Embarking on Shared Experiences, Strengthening Family Ties, and Creating Lasting Connections Across Generations</p>
            </div>
            <BlogNavbar></BlogNavbar>
            <div className="relative ">
                <img
                    className='h-80 w-full object-cover '
                    src={blog}
                    alt="Tourist Destination"
                />
                <div className="absolute inset-0 flex items-center justify-start p-6 bg-black bg-opacity-50">
                    <div className="text-white">
                        <h2 className="text-3xl font-semibold mb-4">Discover Your Next Adventure</h2>
                        <p className="text-lg mb-6">Explore the beauty of nature and immerse yourself in breathtaking landscapes.</p>
                        <Link to={`/blogs`}>
                            <button type='button' className='bg-[#ff7550] py-3 px-8 rounded-sm text-white hover:bg-black'>
                                Read Story!
                            </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
