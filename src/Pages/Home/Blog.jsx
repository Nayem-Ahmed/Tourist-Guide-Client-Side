import React from 'react';
import blog from '../../assets/blog.jpg';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="relative">
            <img
                className='h-80 w-full object-cover'
                src={blog}
                alt="Tourist Destination"
            />
            <div className="absolute inset-0 flex items-center justify-start p-6 bg-black bg-opacity-50">
                <div className="  text-white">
                    <h2 className="text-3xl font-semibold mb-4">Discover Your Next Adventure</h2>
                    <p className="text-lg mb-6">Explore the beauty of nature and immerse yourself in breathtaking landscapes.</p>
                    <Link to={`/blogDetails`}>
                        <button type='button' className='bg-[#ff7550] py-3 px-8 rounded-sm text-white hover:bg-black'>
                            Read More
                        </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;
