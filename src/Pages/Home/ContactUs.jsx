import React from 'react';
import contact from '../../assets/contact.jpg';
import { Link } from 'react-router-dom';
import m from '../../assets/m.png'
import loca from '../../assets/loca.png'
import care from '../../assets/care.png'

const ContactUs = () => {
    const handleScroll = () => {
        const parallax = document.getElementById('parallax');
        const offset = window.pageYOffset;
        parallax.style.backgroundPositionY = `${offset * 0.7}px`; // Adjust the speed by changing the multiplier
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='mt-6'>
        <div className="relative h-screen">
            {/* Background Image with Parallax Effect */}
            <div
                id="parallax"
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${contact})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex justify-center items-center z-20 text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p style={{ fontFamily: 'Caveat' }} className="text-xl font-serif mb-3 mt-4">Donec Id Elit Non Mi Porta Gravida At Eget Metus</p>
                    <Link to="/" className="text-lg mt-4">Home / <span className="text-gray-400 ">contact us</span></Link>
                </div>
            </div>
        </div>
        <div className=' flex flex-col md:flex-row gap-8 justify-center p-5'>
            <div className='p-5 text-center  border-r-2'>
                <img className='mb-1 m-auto' src={m} alt="" />
                <h1 className='text-xl font-bold mb-3'>Get In Touch</h1>
                <span className='text-gray-500'>Telephone: +51 900 321 4564</span><br></br>
                <span className='text-gray-500 '>Mobile: +501 860 3210</span>
                <p className='mt-2 font-medium text-[#ff7550]'>hello@Travleu.com</p>
            </div>
            <div className='p-5  text-center border-r-2'>
                <img className='mb-1 m-auto' src={loca} alt="" />
                <h1 className='text-xl font-bold mb-3'>Visit Our Location</h1>
                <span className='text-gray-500'>Manhatta Hall Veerpolder 7 2361<br></br> Empor Ltd 1258, Melbourne, Australia</span>
                <p className='mt-2 font-medium text-[#ff7550]'>hello@Travleu.com</p>
            </div>
            <div className='p-5 text-center border-r-2'>
                <img className='mb-1 m-auto' src={care} alt="" />
                <h1 className='text-xl font-bold mb-3'>Looking For A Career?</h1>
                <span className='text-gray-500'>perspiciatis unde omnis iste natus<br></br> error sit voluptatem accusantium.</span>
                <p className='mt-2 font-medium text-[#ff7550]'>careers@travleu.com</p>
            </div>
        </div>
         
        </div>
    );
};

export default ContactUs;
