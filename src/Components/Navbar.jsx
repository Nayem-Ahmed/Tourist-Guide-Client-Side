import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import useAuth from '../API/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="navbar bg-base-100 relative z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li>
                            <a>Pages</a>
                            <ul className="p-2">
                                <li><Link to='/contactus'>Contact Us</Link></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to='/'>
                    <div className='flex gap-1 items-center'>
                        <img className='w-11' src={logo} alt="" />
                        <span className='md:text-xl font-medium'>Tourist <span className='text-[#fee133]'>Guide</span></span>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contactus'>Contact Us</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/aboutus'>About Us</Link></li>
                    <li>
                        <details>
                            <summary>Pages</summary>
                            <ul className="p-2">
                            <li><Link to='/contactus'>Contact Us</Link></li>
                                <li><a>Submenu</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end md:mr-7">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user?.email ?
                                <div className='flex items-center gap-2'>
                                    <img className='rounded-full w-8' src={user?.photoURL} alt="" />
                                </div>
                                :
                                <div className='flex items-center gap-2'>
                                    <img className='rounded-full w-8 ' src='https://i.ibb.co/CQLSNTH/istockphoto-1337144146-612x612.jpg' alt="" />
                                </div>
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52">

                        {user?.email ? <li className='mb-3 font-semibold'>{user?.displayName}</li> : null}

                        <Link className='mb-3' to='/dashboard'><li className='font-semibold'>Dashboard</li></Link>

                    </ul>
                </div>

                {user?.email ?
                    <button onClick={logOut} className='bg-[#fee133] px-5 py-3 rounded-sm hover:bg-black hover:text-[#fee133] font-medium shadow'>Sign Out</button>
                    :
                    <Link to='/signin'>
                        <button className='bg-[#fee133] px-5 py-3 rounded-sm hover:bg-black hover:text-[#fee133] font-medium shadow-md'>SIGN IN</button>
                    </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;