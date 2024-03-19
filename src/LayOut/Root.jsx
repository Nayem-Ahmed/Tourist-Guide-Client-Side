import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';

const Root = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, []);
    if (loading) {
        return <Loader></Loader>;
    }
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-60px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;