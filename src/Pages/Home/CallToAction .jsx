import React, { useState } from 'react';
import call from '../../assets/callto.png'
import { toast } from 'react-toastify';


const CallToAction = () => {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement your logic to handle the subscription
        console.log('Subscribed with email:', email);
        // Clear the input field after submission
        setEmail('');
        toast.success('Subscribed successfully!')
        
    };

    return (
        <section
            style={{
                backgroundImage: `url(${call})`,
                backgroundSize: 'cover', // Ensures the image covers the entire container
                backgroundRepeat: 'no-repeat', // Prevents the image from repeating
            }} className=" py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Subscribe to Our Newsletter
                </h2>
                <p className="mt-3 text-lg text-gray-200">
                    Receive the latest updates and promotions directly to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="mt-8 sm:flex justify-center">
                    <div className="flex-1 min-w-0">
                        <label htmlFor="email" className="sr-only">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            required
                            value={email}
                            onChange={handleInputChange}
                            className="block w-full px-4 py-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                        />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#ff7550] hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CallToAction;
