import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="text-center my-10">
            <h1 className="font-bold text-2xl mb-4">Oops!</h1>
            <i>Sorry, an unexpected error has occurred.</i><br></br>
            <img className="w-80 mx-auto mt-3" src="" alt="" />
            <Link to='/'><button className="btn bg-[#fee133] mt-5 text-white">Go Home</button></Link>

        </div>
    );
};

export default ErrorPage;